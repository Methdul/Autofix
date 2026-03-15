import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

/**
 * Footer component styled to match the reference design.
 * Light background, 4-column grid: brand, Services, Company, Legal & Support.
 */
export default function Footer() {
    return (
        <footer className="bg-[#F5F6F8] border-t border-gray-200 font-poppins">
            <div className="max-w-6xl mx-auto px-8 pt-16 pb-6">

                {/* Top: 4-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">

                    {/* Brand column */}
                    <div className="flex flex-col gap-0 -mt-4">
                        <div className="flex items-center">
                            {/* Small logo mark */}
                            <img src="/logo.png" alt="Logo" className="w-24 h-24 -ml-2" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                            Sri Lanka's premier vehicle service platform connecting owners with verified professionals.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-3 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#0c4082] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200">
                                <Facebook size={14} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#0c4082] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200">
                                <Instagram size={14} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#0c4082] text-gray-500 hover:text-white flex items-center justify-center transition-all duration-200">
                                <Linkedin size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Services column */}
                    <div className="ml-6">
                        <h4 className="text-sm font-bold text-gray-900 mb-5 tracking-tight" >Services</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Browse Services', to: '/providers' },
                                { label: 'Find Providers', to: '/providers' },
                                { label: 'Book Service', to: '/providers' },
                                { label: 'Become Provider', to: '/register/business' },
                            ].map(({ label, to }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="text-sm text-gray-500 hover:text-[#0c4082] transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company column */}
                    <div className="ml-6">
                        <h4 className="text-sm font-bold text-gray-900 mb-5 tracking-tight">Company</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'About Us', to: '/about' },
                                { label: 'Contact Us', to: '/contact' },
                                { label: 'Careers', to: '/careers' },
                                { label: 'Blog', to: '/blog' },
                            ].map(({ label, to }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="text-sm text-gray-500 hover:text-[#0c4082] transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Support column */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-5 tracking-tight">Legal &amp; Support</h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Terms & Conditions', to: '/terms' },
                                { label: 'Privacy Policy', to: '/privacy' },
                                { label: 'Help Center', to: '/help' },
                                { label: 'FAQ', to: '/faq' },
                            ].map(({ label, to }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="text-sm text-gray-500 hover:text-[#0c4082] transition-colors duration-200"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom: divider + copyright */}
                <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-400 text-center">
                    © 2024 AutoFix. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
