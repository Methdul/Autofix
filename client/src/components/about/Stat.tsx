interface StatProps {
    value: string;
    label: string;
}

export default function Stat({ value, label }: StatProps) {
    return (
        <div className="flex flex-col items-center px-8 py-5 bg-white">
            <span className="text-3xl font-extrabold text-blue-600">
                {value}
            </span>
            <span className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-semibold">{label}</span>
        </div>
    );
}
