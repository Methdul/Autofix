interface StatProps {
    value: string;
    label: string;
}

export default function Stat({ value, label }: StatProps) {
    return (
        <div className="flex flex-col items-center px-8 py-4">
            <span className="text-3xl font-extrabold text-[#333842]/70 ]">
                {value}
            </span>
            <span className="text-xs text-slate-400 mt-1 uppercase tracking-widest">{label}</span>
        </div>
    );
}
