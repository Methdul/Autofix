import { Wrench, Droplet, Car, Settings, Sparkle, Activity } from "lucide-react";

export default function CategoryGrid() {
    return (
        <section className="bg-[#FAF9F6] py-32 px-6 relative font-poppins text-gray-900 border-t border-gray-100">
            {/* Background SVG curves to mimic the reference image */}
            <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none z-0">
                <svg
                    className="w-full h-full opacity-60"
                    viewBox="0 0 500 800"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-50,200 C150,200 350,300 500,320"
                        stroke="#093A9D"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M-50,230 C200,280 300,330 500,320"
                        stroke="#4f72b8ff"
                        strokeWidth="1"
                    />
                    <path
                        d="M-50,700 C200,600 300,500 500,480"
                        stroke="#4f72b8ff"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M-50,670 C150,600 350,520 500,480"
                        stroke="#4f72b8ff"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row relative z-10 gap-16 md:gap-0">
                {/* Left side: Heading */}
                <div className="md:w-1/2 md:pr-16">
                    <div className="sticky top-32 md:top-64 pb-16 md:pb-0 z-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#2651A7]/40 bg-blue-500/5 text-[#2651A7]/80 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            WHAT WE OFFER
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#333842] leading-[1.1]">
                            Service<br />
                            Categories.
                        </h2>
                    </div>
                </div>

                {/* Right side: Informational paragraphs */}
                <div className="md:w-1/2 relative md:pl-0">
                    {/* Main vertical line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

                    <div className="flex flex-col gap-12 md:gap-16 py-4 md:py-8">
                        {/* Block 1 */}
                        <div className="relative md:pl-12 flex items-start gap-8">
                            {/* Horizontal connector line */}
                            <div className="absolute left-0 top-5 w-8 h-px bg-gray-200 hidden md:block"></div>

                            {/* Icon on the left */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2651A7]/10 text-[#2651A7] p-3">
                                <Wrench size={28} strokeWidth={2.0} />
                            </div>

                            {/* Text on the right */}
                            <div className="flex flex-col">
                                <p className="text-[#333842] text-[20px] leading-relaxed font-medium">
                                    General Repairs
                                </p>
                                <p className="text-[#888] text-[14px] leading-snug mt-4 max-w-xs">
                                    Professional general repairs by verified providers across Sri Lanka
                                </p>
                            </div>

                        </div>

                        {/* Block 1 */}
                        <div className="relative md:pl-12 flex items-start gap-8">
                            {/* Horizontal connector line */}
                            <div className="absolute left-0 top-5 w-8 h-px bg-gray-200 hidden md:block"></div>

                            {/* Icon on the left */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2651A7]/10 text-[#2651A7] p-3">
                                <Car size={28} strokeWidth={2.0} />
                            </div>

                            {/* Text on the right */}
                            <div className="flex flex-col">
                                <p className="text-[#333842] text-[20px] leading-relaxed font-medium">
                                    Full Service
                                </p>
                                <p className="text-[#888] text-[14px] leading-snug mt-4 max-w-xs">
                                    Professional full service by verified providers across Sri Lanka
                                </p>
                            </div>

                        </div>

                        {/* Block 1 */}
                        <div className="relative md:pl-12 flex items-start gap-8">
                            {/* Horizontal connector line */}
                            <div className="absolute left-0 top-5 w-8 h-px bg-gray-200 hidden md:block"></div>

                            {/* Icon on the left */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2651A7]/10 text-[#2651A7] p-3">
                                <Droplet size={28} strokeWidth={2.0} />
                            </div>

                            {/* Text on the right */}
                            <div className="flex flex-col">
                                <p className="text-[#333842] text-[20px] leading-relaxed font-medium">
                                    Car Wash & Detailing
                                </p>
                                <p className="text-[#888] text-[14px] leading-snug mt-4 max-w-xs">
                                    Professional car wash & detailing by verified providers across Sri Lanka
                                </p>
                            </div>

                        </div>

                        {/* Block 1 */}
                        <div className="relative md:pl-12 flex items-start gap-8">
                            {/* Horizontal connector line */}
                            <div className="absolute left-0 top-5 w-8 h-px bg-gray-200 hidden md:block"></div>

                            {/* Icon on the left */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2651A7]/10 text-[#2651A7] p-3">
                                <Settings size={28} strokeWidth={2.0} />
                            </div>

                            {/* Text on the right */}
                            <div className="flex flex-col">
                                <p className="text-[#333842] text-[20px] leading-relaxed font-medium">
                                    Engine Work
                                </p>
                                <p className="text-[#888] text-[14px] leading-snug mt-4 max-w-xs">
                                    Professional engine work by verified providers across Sri Lanka
                                </p>
                            </div>

                        </div>

                        {/* Block 1 */}
                        <div className="relative md:pl-12 flex items-start gap-8">
                            {/* Horizontal connector line */}
                            <div className="absolute left-0 top-5 w-8 h-px bg-gray-200 hidden md:block"></div>

                            {/* Icon on the left */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2651A7]/10 text-[#2651A7] p-3">
                                <Sparkle size={28} strokeWidth={2.0} />
                            </div>

                            {/* Text on the right */}
                            <div className="flex flex-col">
                                <p className="text-[#333842] text-[20px] leading-relaxed font-medium">
                                    Paint & Body Work
                                </p>
                                <p className="text-[#888] text-[14px] leading-snug mt-4 max-w-xs">
                                    Professional paint & body work by verified providers across Sri Lanka
                                </p>
                            </div>

                        </div>

                        {/* Block 1 */}
                        <div className="relative md:pl-12 flex items-start gap-8">
                            {/* Horizontal connector line */}
                            <div className="absolute left-0 top-5 w-8 h-px bg-gray-200 hidden md:block"></div>

                            {/* Icon on the left */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2651A7]/10 text-[#2651A7] p-3">
                                <Activity size={28} strokeWidth={2.0} />
                            </div>

                            {/* Text on the right */}
                            <div className="flex flex-col">
                                <p className="text-[#333842] text-[20px] leading-relaxed font-medium">
                                    Diagnostics
                                </p>
                                <p className="text-[#888] text-[14px] leading-snug mt-4 max-w-xs">
                                    Professional diagnostics by verified providers across Sri Lanka
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
