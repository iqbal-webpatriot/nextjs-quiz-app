import { QUESTIONS_DATA } from "@/data/question";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_GPT_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        const { topic } = await req.json();
        console.log('Received topic:', topic);

        const prompt = `Generate 10 distinct questions on ${topic || "technology"} and ensure they are in JSON format containing an id, topic which is ${topic}, a question attribute containing the question, an options array of 3 options, and an answer property. Please ensure that the options array is shuffled to ensure that the answer does not retain a single position.
        - Please don't make the answers too obvious and lengthy.
        - Ensure the questions are unique and not repetitive.
        - The questions should not be too simple but intermediate level.
        - Return only the JSON object containing the questions.
        You can use this as a sample: ${JSON.stringify(QUESTIONS_DATA[topic || "technology"])}`;

        console.log('Generated prompt:', prompt);

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        const aiResponse = completion.choices[0].message?.content?.trim();
        console.log('AI Response:', aiResponse);

        if (!aiResponse) {
            return NextResponse.json(
                { message: "Empty response from AI", questions: [] },
                { status: 400 }
            );
        }

        let questions;

        try {
            questions = JSON.parse(aiResponse);
        } catch (error) {
            console.error("Failed to parse AI response as JSON:", aiResponse);
            return NextResponse.json(
                { message: "Error parsing AI response as JSON", questions: [] },
                { status: 400 }
            );
        }

        if (!Array.isArray(questions) || questions.length < 10) {
            console.warn("AI did not generate enough questions or response format is incorrect:", questions);
            return NextResponse.json(
                { message: "AI did not generate enough questions", questions },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Fetch complete", questions },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in POST /api/route:", error);
        return NextResponse.json(
            { message: "Internal server error", error },
            { status: 500 }
        );
    }
}
