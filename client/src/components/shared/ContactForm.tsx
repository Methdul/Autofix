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
        <div className="w-full max-w-2xl mx-auto font-sans">
            
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Get in Touch
                </h2>
                <p className="text-gray-600 mt-3 md:text-lg max-w-lg mx-auto">
                    Have questions, feedback, or want to discuss a partnership? We're here to help.
                </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                {success ? (
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
                            className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                                <input required type="text" id="fullName" placeholder="Your full name" className={inputClass} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                                <input type="tel" id="phone" placeholder="Your phone number" className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className={labelClass}>Email Address *</label>
                            <input required type="email" id="email" placeholder="email@example.com" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        </div>

                        <div>
                            <label htmlFor="message" className={labelClass}>Message *</label>
                            <textarea required id="message" rows={5} placeholder="Tell us how we can help you..." className={`${inputClass} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                                <AlertCircle size={16} />
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-3.5 flex items-center justify-center gap-2 transition-colors duration-200 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                                    <Send size={18} />
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