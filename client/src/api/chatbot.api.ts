import { API_URL } from './auth.api';

const API_BASE = API_URL + '/api';

export interface ChatbotRequest {
    message: string;
}

export interface ChatbotResponse {
    reply: string;
}

export async function sendChatMessage(data: ChatbotRequest): Promise<ChatbotResponse> {
    const res = await fetch(`${API_BASE}/chatbot`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
        throw new Error(body.error ?? 'Failed to get chatbot reply');
    }

    return body;
}