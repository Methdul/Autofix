import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

/**
 * Hero section — cinematic, full-height hero with glass CTA buttons
 */
export default function Hero() {
    return (
        <section className="relative min-h-[92vh] flex items-center px-6 pt-16 pb-24 bg-gradient-to-r from-[#FFFCF3] to-[#F6F7F8]">
            <div className="max-w-7xl mx-auto w-full text-center">

                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#2651A7]/40 bg-blue-500/5 text-[#2651A7]/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Sri Lanka's Premier Vehicle Service Platform
                </div>

                {/* Main heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#333842] tracking-tight leading-none mb-6">
                    Find Trusted
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#093A9D] to-[#2651A7]">
                        Auto Services
                    </span>
                </h1>

                <p className="text-lg font-poppins md:text-lg text-[#6B7280] mb-12 max-w-4xl mx-auto leading-relaxed">
                    Connect with verified mechanics, garages, and detailing experts across Sri Lanka <br /> Fast, Transparent, and Reliable.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/providers"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-800 hover:bg-blue-500 text-white font-bold text-sm shadow-[0_0_24px_rgba(59,130,246,0.45)] hover:shadow-[0_0_32px_rgba(59,130,246,0.65)] transition-all duration-300 active:scale-95"
                    >
                        Browse Providers
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/register"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-[1.5px] border-[#093A9D]/80 bg-white/50 text-[#093A9D] font-semibold text-sm backdrop-blur-sm hover:shadow-[0_0_32px_rgba(59,130,246,0.65)] transition-all duration-300 active:scale-95"
                    >
                        <ShieldCheck size={16}
                            stroke="currentColor"
                            className="transition-colors duration-300 group-hover:text-white" />
                        Join AutoFix
                    </Link>
                </div>

                {/* Trust pills */}
                <div className="mt-16 pt-10 flex flex-wrap justify-center gap-16">
                    {[
                        { value: '500+', label: 'Verified Providers' },
                        { value: '12,000+', label: 'Happy Customers' },
                        { value: '20+', label: 'Cities' },
                        { value: '4.8★', label: 'Rating' },
                    ].map((t) => {
                        // Split value and symbol
                        const match = t.value.match(/(\d+[\.,\d]*)(\+|★)?/);
                        const number = match ? match[1] : t.value;
                        const symbol = match && match[2] ? match[2] : '';

                        return (
                            <span
                                key={t.label}
                                className="flex flex-col items-center px-6 py-3 rounded-full text-center border border-white/10 bg-white/5 backdrop-blur-sm"
                            >
                                <span className="text-lg md:text-3xl font-bold text-[#333842]/70">
                                    {number}
                                    {symbol && <span className="text-[#2651A7]/70">{symbol}</span>}
                                </span>
                                <span className="text-xs md:text-sm text-[#333842]/50 mt-1">{t.label}</span>
                            </span>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
