import React from 'react';
import { format, isSameDay, parseISO } from 'date-fns';
import { X, Clock, Car, Wrench } from 'lucide-react';
import type { BookingResponse } from '../../../../api/booking.api';
import { cn } from '../../../../utils/cn';

interface DayDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    date: Date;
    bookings: BookingResponse[];
}

const DayDetailModal: React.FC<DayDetailModalProps> = ({ isOpen, onClose, date, bookings }) => {
    if (!isOpen) return null;

    const dayBookings = bookings.filter(booking => {
        const bookingDate = parseISO(booking.serviceDate);
        return isSameDay(bookingDate, date);
    });

    const statusConfig: Record<string, { bg: string; text: string; dot: string; label: string }> = {
        PENDING: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500', label: 'Pending' },
        ACCEPTED: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500', label: 'Confirmed' },
        IN_PROGRESS: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500', label: 'In Progress' },
        COMPLETED: { bg: 'bg-slate-100', text: 'text-slate-600', dot: 'bg-slate-400', label: 'Completed' },
        CANCELLED: { bg: 'bg-rose-50', text: 'text-rose-600', dot: 'bg-rose-400', label: 'Cancelled' },
        REJECTED: { bg: 'bg-rose-50', text: 'text-rose-600', dot: 'bg-rose-400', label: 'Declined' },
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                            {format(date, 'EEEE, MMMM d')}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium mt-0.5">
                            {dayBookings.length} {dayBookings.length === 1 ? 'booking' : 'bookings'} scheduled
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[60vh] space-y-3">
                    {dayBookings.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-7 h-7 text-slate-400" />
                            </div>
                            <p className="text-slate-500 font-medium">No bookings on this day</p>
                        </div>
                    ) : (
                        dayBookings.map((booking) => {
                            const config = statusConfig[booking.status] || statusConfig.PENDING;
                            return (
                                <div
                                    key={booking.id}
                                    className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-blue-50 rounded-lg">
                                                <Wrench className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="font-bold text-slate-800 text-sm">
                                                {booking.service?.name || 'General Service'}
                                            </span>
                                        </div>
                                        <span className={cn(
                                            'px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5',
                                            config.bg, config.text
                                        )}>
                                            <span className={cn('w-1.5 h-1.5 rounded-full', config.dot)} />
                                            {config.label}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        {booking.timeSlot && (
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                                <span className="font-medium">{booking.timeSlot}</span>
                                            </div>
                                        )}
                                        {booking.vehicle && (
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <Car className="w-3.5 h-3.5 text-slate-400" />
                                                <span className="font-medium">
                                                    {booking.vehicle.make} {booking.vehicle.model} — {booking.vehicle.licensePlate}
                                                </span>
                                            </div>
                                        )}
                                        {booking.description && (
                                            <p className="text-slate-500 text-xs mt-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                                                {booking.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default DayDetailModal;