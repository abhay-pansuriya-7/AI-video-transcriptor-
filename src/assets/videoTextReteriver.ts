import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI("AIzaSyC1vPmzSTefWgMqidIZpw7UpW4tlBPHv4Y");
const model = ai.getGenerativeModel({ model: "gemini-1.5-pro" });
async function main() {
    const result = await model.generateContent([
        "Generate a text file of this video like what is saying in the video.",
        {
            fileData: {
                fileUri: "https://www.youtube.com/watch?v=9hE5-98ZeCg",
                mimeType: "video/mp4",
            },
        },
    ]);
    console.log(result.response.text());
}

main();