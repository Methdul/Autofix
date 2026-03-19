import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContact } from '../../api/contact.api';

interface ContactFormData {
    fullName: string;
    phone: string;
    email: string;
    message: string;
}

const EMPTY: ContactFormData = { fullName: '', phone: '', email: '', message: '' };

const labelClass = "block text-sm font-semibold text-gray-900 mb-2";
const inputClass = "w-full bg-[#F9FAFB] border border-gray-100 rounded-lg px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-400";

export default function ContactForm() {
    const [form, setForm] = useState<ContactFormData>(EMPTY);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await submitContact({
                name: form.fullName,
                email: form.email,
                phone: form.phone || undefined,
                message: form.message,
            });
            setSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#F8F9FA] rounded-3xl py-16 px-4 md:px-8 w-full max-w-5xl mx-auto flex flex-col items-center font-sans">
            
            {/* ── Header ────────────────────────────────────────────── */}
            <div className="text-center mb-10 space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                    Send us a Message
                </h2>
                <p className="text-[#6B7280] text-sm md:text-base max-w-lg mx-auto">
                    Have questions, feedback, or want to discuss a partnership? We're here to help.
                </p>
            </div>

            {/* ── Form Card ─────────────────────────────────────────── */}
            <div className="bg-white rounded-2xl p-6 md:p-10 w-full max-w-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100">
                
                {success ? (
                    /* Success State (Light Theme) */
                    <div className="flex flex-col items-center gap-4 py-8 text-center">
                        <CheckCircle size={56} className="text-green-500" />
                        <p className="text-2xl font-bold text-gray-900">Message sent successfully!</p>
                        <p className="text-gray-600">
                            We'll get back to you at <span className="font-semibold text-gray-900">{form.email || 'your email'}</span> shortly.
                        </p>
                        <button
                            onClick={() => {
                                setSuccess(false);
                                setForm(EMPTY);
                            }}
                            className="mt-4 text-sm text-[#1A3682] hover:text-[#152C6B] font-medium underline transition-colors"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    /* Form State */
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Top Row: Name & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className={labelClass}>
                                    Full Name *
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="fullName"
                                    placeholder="Your full name"
                                    className={inputClass}
                                    value={form.fullName}
                                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className={labelClass}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Your phone number"
                                    className={inputClass}
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className={labelClass}>
                                Email Address *
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                placeholder="email@example.com"
                                className={inputClass}
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className={labelClass}>
                                Message *
                            </label>
                            <textarea
                                required
                                id="message"
                                rows={5}
                                placeholder="Tell us how we can help you..."
                                className={`${inputClass} resize-none`}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                            />
                        </div>

                        {/* Error Alert */}
                        {error && (
                            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                                <AlertCircle size={16} />
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#1A3682] hover:bg-[#152C6B] active:scale-[0.99] text-white font-medium rounded-lg px-4 py-4 flex items-center justify-center gap-2 transition-all duration-200 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={16} className="text-white/90" />
                                    Send Message
                                </>
                            )}
                        </button>
                        
                    </form>
                )}
            </div>
        </div>
    );
}