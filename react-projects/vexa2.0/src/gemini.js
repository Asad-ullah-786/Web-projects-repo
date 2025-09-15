let apiKey = "AIzaSyBiesyPYJVrURWcOt_EEg8mlsMtVOb7xBo";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
});
const generativeConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 50,  // increase to allow around 30 words
  responseMimeType: "text/plain"
  
};


async function run(prompt) {
  const chatSession = model.startChat({
    generativeConfig,
    history: [],
  });
  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}
export default run;
