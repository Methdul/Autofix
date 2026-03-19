import { Request, Response } from 'express';
import { generateChatbotReply } from './chatbot.service';

export async function chatHandler(req: Request, res: Response): Promise<void> {
    try {
        const { message } = req.body;

        if (!message || typeof message !== 'string') {
            res.status(400).json({ error: 'Message is required' });
            return;
        }

        const reply = await generateChatbotReply(message);

        res.status(200).json({ reply });
    } catch (error) {
        console.error('Chatbot error:', error);
        res.status(500).json({ error: 'Failed to generate chatbot response' });
    }
}