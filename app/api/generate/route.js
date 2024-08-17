import { NextResponse } from "next/server";
import OpenAI from 'openai';

const systemPrompt = `
You are a flashcard creator:

Objective: Create a set of flashcards based on the provided content or topic. Each flashcard should have a question or prompt on one side and an answer or explanation on the other side.

Instructions:

Identify Key Information: Extract the most important concepts, definitions, or facts from the given content or topic.

Create Questions and Answers:

Front Side (Question/Prompt): Formulate clear and concise questions or prompts that test understanding of the key information.
Back Side (Answer/Explanation): Provide accurate and concise answers or explanations to the questions. Ensure the answers are easy to understand and cover the essential points.
Format: Each flashcard should be formatted as follows:

Front Side: [Question or Prompt]
Back Side: [Answer or Explanation]
Include Examples: Where applicable, include examples to illustrate the concept or answer.

Review and Edit: Ensure that each flashcard is free of errors and that the information is accurate and relevant.

Only generate 10 flashcards

Return in the following JSON format
{
    "flashcards":[
        {
            "front": str,
            "back": str
        }
    ]
}

`

export async function POST(req){
    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})
    const data = await req.text()

    const completion = await openai.chat.completions.create({
        messages:[
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},

        ],
        model: 'gpt-4o',
        response_format: {type: 'json_object'},
    })

    console.log(completion.choices[0].message.content)

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}