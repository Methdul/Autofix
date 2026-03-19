import React from 'react';

interface ValuePillProps {
    icon: React.ElementType;
    text: string;
}

export default function ValuePill({ icon: Icon, text }: ValuePillProps) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50">
            <Icon size={16} className="text-blue-600 shrink-0" />
            <span className="text-sm font-medium text-blue-800">{text}</span>
        </div>
    );
}
