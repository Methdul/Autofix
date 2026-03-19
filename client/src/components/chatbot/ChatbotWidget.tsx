import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useChatbot } from '../../hooks/useChatbot';
import ChatMessage from './ChatMessage';

export default function ChatbotWidget() {
    const [open, setOpen] = useState(false);
    const { messages, input, setInput, sendMessage, isLoading } = useChatbot();

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {open ? (
                <div className="w-80 rounded-2xl border bg-white shadow-2xl">
                    <div className="flex items-center justify-between border-b px-4 py-3">
                        <h3 className="font-semibold">AutoFix Assistant</h3>
                        <button onClick={() => setOpen(false)} className="p-1">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="h-80 space-y-3 overflow-y-auto p-4">
                        {messages.map((msg) => (
                            <ChatMessage key={msg.id} role={msg.role} text={msg.text} />
                        ))}
                        {isLoading && (
                            <ChatMessage role="assistant" text="Typing..." />
                        )}
                    </div>

                    <div className="flex gap-2 border-t p-3">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') sendMessage();
                            }}
                            placeholder="Ask about services or bookings..."
                            className="flex-1 rounded-xl border px-3 py-2 text-sm outline-none"
                        />
                        <button
                            onClick={sendMessage}
                            className="rounded-xl bg-black px-4 py-2 text-sm text-white"
                        >
                            Send
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setOpen(true)}
                    className="rounded-full bg-black p-4 text-white shadow-lg"
                >
                    <MessageCircle size={22} />
                </button>
            )}
        </div>
    );
}