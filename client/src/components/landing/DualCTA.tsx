import { Link } from 'react-router-dom';
import { Car, Store, ArrowRight } from 'lucide-react';

export default function DualCTA() {
    return (
        <section className="py-24 px-6 font-poppins-semibold">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#333842] mb-4 ">
                        Ready to Experience
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#333842] mb-4 ">
                        the Difference?
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-m ">
                        Whether you're a vehicle owner or a service professional, AutoFix is built for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

                    {/* Owner card */}
                    <div className="relative group rounded-2xl border border-blue-200/60 bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(59,130,246,0.10)] p-10 overflow-hidden hover:border-blue-400/60 hover:shadow-[0_12px_40px_rgba(59,130,246,0.18)] transition-all duration-300" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
                        {/* Glow top line */}
                        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
                        {/* Glass inner sheen */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/30 to-blue-100/10 pointer-events-none rounded-2xl" />
                        {/* Hover glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.12)_0%,transparent_60%)] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform duration-300">
                                <Car className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#333842] mb-3">For Vehicle Owners</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                Book trusted automotive services at your convenience. Browse verified providers and get quality work done across Sri Lanka.
                            </p>
                            <Link
                                to="/register?role=owner"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-[0_0_16px_rgba(59,130,246,0.3)] hover:shadow-[0_0_24px_rgba(59,130,246,0.5)] transition-all duration-300 group/btn"
                            >
                                Get Started
                                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Provider card */}
                    <div className="relative group rounded-2xl border border-emerald-200/60 bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(16,185,129,0.10)] p-10 overflow-hidden hover:border-emerald-400/60 hover:shadow-[0_12px_40px_rgba(16,185,129,0.18)] transition-all duration-300" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
                        {/* Glow top line */}
                        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
                        {/* Glass inner sheen */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-emerald-50/30 to-emerald-100/10 pointer-events-none rounded-2xl" />
                        {/* Hover glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12)_0%,transparent_60%)] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform duration-300">
                                <Store className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#333842] mb-3">For Service Providers</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                Grow your business and connect with customers who need you. Expand your reach across Sri Lanka on one trusted platform.
                            </p>
                            <Link
                                to="/register?role=provider"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-[0_0_16px_rgba(16,185,129,0.3)] hover:shadow-[0_0_24px_rgba(16,185,129,0.5)] transition-all duration-300 group/btn"
                            >
                                Join as Provider
                                <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
