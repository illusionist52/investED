"use server"

import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import mutualFundReturns from "@/public/data/mutualFundsReturns";
import bankReturns from "@/public/data/bankReturns";

export async function Test() {
  const key = process.env.GROQ_API_KEY
  const llm = new ChatGroq({
    model: "llama-3.1-70b-versatile",
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
      Do not mention the data you have been provided, and use 'you' instead of user.`
    ],
    ["human", `User's capital: {capital}, Goal amount: {goal_amount}, Risk tolerance: {risk_tolerance}, Time period: {time}`],
  ]);
  
  
  
  const chain = prompt.pipe(llm);
  const res = await chain.invoke({
    mfdata:mutualFundReturns,
    bdata:bankReturns,
    capital: "100000 rupees",
    goal_amount: "100000 rupees",
    risk_tolerance: "Medium",
    time:"5 years"
  },);
  console.log(res.content)
}

