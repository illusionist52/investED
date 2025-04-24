"use client";
import { Test } from '@/api/llama/test';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Page() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [capital, setCapital] = useState(0);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError(null);
      console.log("Form data:", data);
      
      // Call the API function
      const apiResponse = await Test(data);
      console.log("Raw API response:", apiResponse);
      
      // Parse the response - handle different response formats
      let parsedData;
      
      try {
        // First, try to handle if it's already a JavaScript object
        if (typeof apiResponse === 'object' && apiResponse !== null) {
          parsedData = apiResponse;
        } 
        // If it's a string, try to parse it
        else if (typeof apiResponse === 'string') {
          // Check if it's a JSON string
          apiResponse.replace(/`/g, '');
          console.log("afters",apiResponse)
          parsedData = JSON.parse(apiResponse);
        } else {
          throw new Error("Unexpected response format from API");
        }
        
        console.log("Successfully parsed data:", parsedData);
        setRecommendations(parsedData);
      } catch (parseError) {
        console.error("Error parsing API response:", parseError);
        console.log("Response that failed to parse:", apiResponse);
        setError("Failed to parse recommendation data. Please check the console for details.");
      }
    } catch (err) {
      console.error("Error fetching recommendations:", err);
      setError("Failed to get recommendations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    if (value === undefined || value === null) return "₹0";
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value) => {
    if (value === undefined || value === null) return "0%";
    return parseFloat(value).toFixed(2) + "%";
  };

  // Calculate the total initial investment
  const totalInvestment = recommendations?.["Investment Strategy"]?.reduce(
    (sum, item) => sum + (parseFloat(item["Capital Allocation"]) || 0), 
    0
  ) || 0;

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-8'>
        {/* Form Section */}
        <div className='bg-white w-full lg:w-1/3 rounded-3xl p-6 shadow-lg'>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h1 className='text-3xl font-bold text-gray-800'>Your Portfolio Details</h1>
              
              <div>
                <Label htmlFor="period" className="text-gray-700">Period of Investment (years)</Label>
                <Input
                  id="period"
                  type="number"
                  placeholder="3"
                  className="mt-1"
                  {...register('period', { 
                    required: "Period is required", 
                    min: { value: 1, message: "Minimum 1 year" },
                    valueAsNumber: true
                  })}
                />
                {errors.period && <p className="text-red-500 text-sm mt-1">{errors.period.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="capital" className="text-gray-700">Capital (₹)</Label>
                <Input
                  id="capital"
                  type="number"
                  placeholder="100000"
                  className="mt-1"
                
                  {...register('capital', { 
                    required: "Capital amount is required",
                    min: { value: 1000, message: "Minimum ₹1,000" },
                    valueAsNumber: true
                  })}
                />
                {errors.capital && <p className="text-red-500 text-sm mt-1">{errors.capital.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="goal_amount" className="text-gray-700">Goal Amount (₹)</Label>
                <Input
                  id="goal_amount"
                  type="number"
                  placeholder="150000"
                  className="mt-1"
                  {...register('goal_amount', { 
                    required: "Goal amount is required",
                    min: { value: 1000, message: "Minimum ₹1,000" },
                    valueAsNumber: true
                  })}
                />
                {errors.goal_amount && <p className="text-red-500 text-sm mt-1">{errors.goal_amount.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="risk_tolerance" className="text-gray-700">Risk Tolerance</Label>
                <select
                  id="risk_tolerance"
                  {...register('risk_tolerance', { required: "Risk tolerance is required" })}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  <option value="">Select risk level</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                {errors.risk_tolerance && <p className="text-red-500 text-sm mt-1">{errors.risk_tolerance.message}</p>}
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button 
                type="submit" 
                className="bg-purple-600 text-white hover:bg-purple-700 rounded-lg px-4 py-2 flex-1"
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Get Recommendations'}
              </Button>
              
              <Button 
                type="button" 
                className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-lg px-4 py-2"
                onClick={() => {
                  reset();
                  setRecommendations(null);
                  setError(null);
                }}
              >
                Reset
              </Button>
            </div>
          </form>
        </div>

        {/* Recommendations Section */}
        <div className='bg-white w-full lg:w-2/3 overflow-y-auto rounded-3xl p-6 shadow-lg max-h-[80vh]'>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Investment Recommendations</h2>
          
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700"></div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          
          {!loading && !error && !recommendations && (
            <div className="text-center h-64 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-xl text-gray-500">Please fill in the form to get your investment recommendations.</p>
              <p className="text-gray-400 mt-2">Your personalized strategy will appear here.</p>
            </div>
          )}
          
          {!loading && !error && recommendations && (
            <div className="space-y-8">
              <div className="overflow-x-auto">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Investment Strategy</h3>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
{/* 
      "Capital Allocation": "60%",
      "Investment Amount": "60000",
      "Investment Option": "Aditya Birla Sun Life India GenNext Fund - Direct Plan - Growth",
      "Predicted Return": "1.216%",
      "Maturity Amount": "67329.36",
      "Reason": "Medium risk tolerance and 4-year time period make this fund a suitable option" */}
                    <tr>
                      <th className="py-3 px-4 text-left text-gray-700 font-semibold">Capital Allocation</th>
                      <th className="py-3 px-4 text-right text-gray-700 font-semibold">Investment Amount</th>
                      <th className="py-3 px-4 text-right text-gray-700 font-semibold">Investment Option</th>
                      <th className="py-3 px-4 text-right text-gray-700 font-semibold">Predicted Return</th>
                      <th className="py-3 px-4 text-right text-gray-700 font-semibold">Maturity Amount</th>
                      <th className="py-3 px-4 text-right text-gray-700 font-semibold">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recommendations?.["Investment plan"]?.map((item, index) => {
                      // Determine investment name (handle both formats)
                      const investmentName = item["Mutual Fund"] || item[" Mutual Fund"] || item["Fixed Deposit"] || "Investment";
                      
                      return (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          
                          <td className="py-3 px-4 text-right font-medium">
                            {formatPercentage(item["Capital Allocation"])}
                          </td>
                          <td className="py-3 px-4 text-right font-medium">
                            {formatCurrency(item["Investment Amount"])}
                          </td>
                          <td className="py-3 px-4 text-right font-medium">
                            {(item["Investment Option"])}
                          </td>
                          <td className="py-3 px-4 text-right font-medium text-green-600">
                            {formatPercentage(item["Predicted Return"])}
                          </td>
                          <td className="py-3 px-4 text-right font-medium">
                            {formatCurrency(item["Maturity Amount"])}
                          </td>
                          <td className="py-3 px-4 text-right font-medium">
                            {(item["Reason"])}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  {/* <tfoot className="bg-purple-50">
                    <tr>
                      <td colSpan="2" className="py-3 px-4 font-semibold text-purple-800">Total</td>
                      
                      <td className="py-3 px-4 text-right font-semibold text-green-700">
                        {formatPercentage(recommendations?.["Total Predicted Return"])}
                      </td>
                      <td className="py-3 px-4 text-right font-semibold text-purple-800">
                        {formatCurrency(recommendations?.["Total Maturity Amount"])}
                      </td>
                    </tr>
                  </tfoot> */}
                </table>
              </div>

              {/* <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium mb-4 text-gray-700">Investment Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Initial Investment</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">
                      {formatCurrency(capital)}
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Total Return Rate</p>
                    <p className="text-2xl font-bold text-green-600 mt-1">
                      {formatPercentage(recommendations?.["Total Predicted Return"])}
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">Expected Maturity Value</p>
                    <p className="text-2xl font-bold text-purple-700 mt-1">
                      {formatCurrency(recommendations?.["Total Maturity Amount"])}
                    </p>
                  </div>
                </div>

                {recommendations?.["Investment Strategy"]?.length > 0 && (
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-2">Portfolio Breakdown</h4>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            Allocation Distribution
                          </span>
                        </div>
                      </div>
                      <div className="flex h-4 mb-2 overflow-hidden text-xs rounded-full">
                        {recommendations["Investment Strategy"].map((item, index) => {
                          const percentage = (parseFloat(item["Capital Allocation"]) / totalInvestment) * 100;
                          const colors = [
                            "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
                            "bg-red-500", "bg-indigo-500", "bg-pink-500"
                          ];
                          return (
                            <div
                              key={index}
                              style={{ width: `${percentage}%` }}
                              className={`${colors[index % colors.length]} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}
                            ></div>
                          );
                        })}
                      </div>
                      <div className="flex flex-wrap gap-3 mt-3 text-xs">
                        {recommendations["Investment Strategy"].map((item, index) => {
                          const investmentName = item["Mutual Fund"] || item[" Mutual Fund"] || item["Fixed Deposit"] || "Investment";
                          const percentage = (parseFloat(item["Capital Allocation"]) / totalInvestment) * 100;
                          const colors = [
                            "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-yellow-500",
                            "bg-red-500", "bg-indigo-500", "bg-pink-500"
                          ];
                          return (
                            <div key={index} className="flex items-center">
                              <div className={`w-3 h-3 ${colors[index % colors.length]} rounded-full mr-1`}></div>
                              <span>
                                {investmentName.length > 25 
                                  ? investmentName.substring(0, 25) + "..." 
                                  : investmentName} ({percentage.toFixed(1)}%)
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;