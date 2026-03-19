import React from 'react';

interface GlassCardProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
}

export default function GlassCard({ icon: Icon, title, children }: GlassCardProps) {
    return (
        <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <Icon size={20} className="text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            </div>
            {children}
        </div>
    );
}
