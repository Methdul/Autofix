import { useState } from 'react';
import { sendChatMessage } from '../api/chatbot.api';

export interface ChatItem {
    id: string;
    role: 'user' | 'assistant';
    text: string;
}

export function useChatbot() {
    const [messages, setMessages] = useState<ChatItem[]>([
        {
            id: crypto.randomUUID(),
            role: 'assistant',
            text: 'Hi! I can help with AutoFix services, providers, and bookings.'
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        const userMessage: ChatItem = {
            id: crypto.randomUUID(),
            role: 'user',
            text: trimmed
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const data = await sendChatMessage({ message: trimmed });

            const botMessage: ChatItem = {
                id: crypto.randomUUID(),
                role: 'assistant',
                text: data.reply
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error: any) {
            setMessages(prev => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    role: 'assistant',
                    text: error.message || 'Something went wrong.'
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        input,
        setInput,
        sendMessage,
        isLoading,
    };
}