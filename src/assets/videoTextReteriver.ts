import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
export async function videoTextReteriver() {
    const result = await ai.models.generateContent(
        {
            model: "gemini-2.0-flash",
            contents: [
                "Generate a text file of this video like what is saying in the video.",
                {
                    fileData: {
                        fileUri: "https://www.youtube.com/watch?v=9hE5-98ZeCg",
                    },
                },
            ],
        }

    );
    console.log("🤖: ", result.text);
}

