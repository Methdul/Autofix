import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Force load env from src/.env because it wasn't picked up by the main application
dotenv.config({ path: path.join(process.cwd(), 'src', '.env') });
dotenv.config({ path: path.join(process.cwd(), '.env') }); // Fallback

let client: OpenAI;

export async function generateChatbotReply(message: string): Promise<string> {
    if (!client) {
        client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    const response = await client.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [
            {
                role: 'system',
                content: `You are AutoFix's website assistant.
Answer briefly and clearly.
Only help with vehicle services, bookings, providers, service categories, and general website guidance.
If asked something unrelated, politely say you only help with AutoFix-related questions.`
            },
            {
                role: 'user',
                content: message
            }
        ]
    });

    return response.choices[0]?.message?.content || 'Sorry, I could not generate a reply.';
}