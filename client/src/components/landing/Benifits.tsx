import { Sparkles } from 'lucide-react';


export default function Benefits() {
    return (
        <section className="bg-white py-28 px-6 font-poppins border-t border-gray-100">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

                {/* Left: Issue Cards */}
                <div className="w-full md:w-[46%] flex flex-col gap-3 flex-shrink-0">
                    <img
                        src="/active-bookings.png"
                        alt="Live Tracking image"
                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />

                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-[54%] flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#333842] leading-tight tracking-tight">
                        Service Tracker
                    </h2>

                    <p className="text-lg font-semibold text-gray-800">
                        Track your services in real-time.
                    </p>

                    <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
                        Autofix Service Tracker lets you effortlessly monitor all your active vehicle services in real time. Easily see which services are in progress, their status, and expected completion, keeping your vehicle maintenance organized, transparent, and stress free.
                    </p>

                    {/* Stat callout */}
                    <div className="mt-4 inline-flex items-start gap-3 bg-[#EEF0FC] text-[#2651A7] text-xs font-bold uppercase tracking-widest px-5 py-4 rounded-xl max-w-sm leading-snug">
                        <Sparkles size={16} className="mt-0.5 flex-shrink-0 text-[#2651A7]" />
                        Stay home and chill. They will update you on the go.
                    </div>
                </div>

            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 mt-40">

                {/* Left: Text Content */}
                <div className="w-full md:w-[46%] flex flex-col gap-6 flex-shrink-0 ml-16">
                    {/* <img
                        src="/active-bookings.png"
                        alt="Live Tracking image"
                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                    /> */}

                    <h2 className="text-4xl md:text-5xl font-bold text-[#333842] leading-tight tracking-tight">
                        Service Notes
                    </h2>

                    <p className="text-lg font-semibold text-gray-800">
                        Get notified about your vehicle's issues.
                    </p>

                    <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
                        Service centers can post real-time updates about current vehicle issues directly in Autofix. Customers are instantly informed about ongoing problems, maintenance alerts, or recommended actions, making communication transparent and ensuring vehicles get the right attention without delays
                    </p>

                    {/* Stat callout */}
                    <div className="mt-4 inline-flex items-start gap-3 bg-[#EEF0FC] text-[#2651A7] text-xs font-bold uppercase tracking-widest px-5 py-4 rounded-xl max-w-sm leading-snug">
                        <Sparkles size={16} className="mt-0.5 flex-shrink-0 text-[#2651A7]" />
                        Keep in touch with your service providers.
                    </div>

                </div>

                {/* Right: Image */}
                <div className="w-full md:w-[54%] flex flex-col gap-6 md:-ml-12 mr-20">
                    <img
                        src="/service-note.png"
                        alt="Live Tracking image"
                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />
                </div>

            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 mt-44 ml-20">

                {/* Left: Issue Cards */}
                <div className="w-full md:w-[39%] flex flex-col gap-3 flex-shrink-0 ">
                    <img
                        src="/stats.png"
                        alt="Live Tracking image"
                        className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />

                </div>

                {/* Right: Text Content */}
                <div className="w-full md:w-[54%] flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#333842] leading-tight tracking-tight">
                        Service Statistics
                    </h2>

                    <p className="text-lg font-semibold text-gray-800">
                        Discover insights, improve your vehicle care.
                    </p>

                    <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
                        Get a clear overview of your vehicle’s maintenance at a glance. See the percentage of completed, pending, and ongoing services, helping you track progress, plan future maintenance, and stay on top of every service effortlessly.
                    </p>

                    {/* Stat callout */}
                    <div className="mt-4 inline-flex items-start gap-3 bg-[#EEF0FC] text-[#2651A7] text-xs font-bold uppercase tracking-widest px-5 py-4 rounded-xl max-w-sm leading-snug">
                        <Sparkles size={16} className="mt-0.5 flex-shrink-0 text-[#2651A7]" />
                        Sit back, relax and see your service progress at a glance.
                    </div>
                </div>

            </div>
        </section>
    );
}
