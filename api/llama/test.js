"use server"

import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import mutualFundReturns from "@/public/data/mutualFundsReturns";
import bankReturns from "@/public/data/bankReturns";

export async function Test(data) {
  const key = process.env.GROQ_API_KEY
  const llm = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 1,
    maxTokens: undefined,
    maxRetries: 2,
    apiKey: key
    // other params...
  });
  // const llmWithResponseFormat = llm.bind({
  //   response_format: { type: "json_object" },
  // });
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `You are an expert financial advisor who recommends mutual funds and fixed deposits from {mfdata} and {bdata} based on the user's capital, goal amount, risk tolerance, and investment time period.
      You must provide detailed investment strategies, explaining how much capital to invest, where to invest it, and why. Additionally, state what the investment will become after the specified period and include the total predicted returns of the recommended mutual funds in percentage terms. 
      Your goal is to maximize returns while aligning with the user's risk tolerance, time period of investment, and financial goals. Use the following mutual fund and FD data to make informed recommendations. 
      Do not mention the data you have been provided, and use 'you' instead of user.Return the response in just JSON format in tabular format.Keep the root key as Investment plan. DO not include anything other than the object. No backticks no  nothing. Keep the JSON structure
      "Capital Allocation": "60%",
      "Investment Amount": "60000",
      "Investment Option": "Aditya Birla Sun Life India GenNext Fund - Direct Plan - Growth",
      "Predicted Return": "1.216%",
      "Maturity Amount": "67329.36",
      "Reason": "Medium risk tolerance and 4-year time period make this fund a suitable option"
     similar to this.
      
      `
    ],
    ["human", `User's capital: {capital}, Goal amount: {goal_amount}, Risk tolerance: {risk_tolerance}, Time period: {time}`],
  ]);
  
  
  
  const chain = prompt.pipe(llm);
  const res = await chain.invoke({
    mfdata:mutualFundReturns,
    bdata:bankReturns,
    capital: data.capital,
    goal_amount: data.goal_amount,
    risk_tolerance: data.risk_tolerance,
    time:data.period
  },);
  return res.content
}

