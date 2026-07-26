import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, User, Mail, Video } from 'lucide-react';

interface BookingModalProps {
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 10:00 AM');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('2:00 PM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [channelLink, setChannelLink] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const dates = [
    'Tomorrow',
    'Thursday, Jul 25',
    'Friday, Jul 26',
    'Monday, Jul 29',
    'Tuesday, Jul 30'
  ];

  const timeSlots = [
    '10:00 AM EST',
    '11:30 AM EST',
    '2:00 PM EST',
    '4:30 PM EST',
    '6:00 PM EST'
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#131313] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#1b1b1b]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FF6600]/20 text-[#FF6600] border border-[#FF6600]/30">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-outfit text-lg font-bold text-white">
                Book a 1-on-1 Strategy Call
              </h3>
              <p className="text-xs text-white/60 font-inter">
                30-min channel audit & short-form video roadmap
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white mb-2">
                Call Confirmed!
              </h3>
              <p className="text-white/70 text-sm max-w-sm mx-auto">
                A Google Meet calendar invite has been dispatched to <span className="text-[#FF6600] font-bold">{email}</span>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1b1b1b] border border-white/10 text-xs text-white/80 max-w-sm mx-auto space-y-1.5 text-left font-mono">
              <p><strong className="text-white">Date:</strong> {selectedDate}</p>
              <p><strong className="text-white">Time:</strong> {selectedTimeSlot}</p>
              <p><strong className="text-white">Host:</strong> Akrem Maarfi — Video Editor & Ads Specialist</p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#FF6600] text-white font-bold text-xs uppercase tracking-widest rounded-xl btn-primary-glow"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleConfirmBooking} className="p-6 space-y-6">
            {/* Date Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-bold flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4 text-[#FF6600]" />
                Select Date
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {dates.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center transition-all ${
                      selectedDate === d
                        ? 'bg-[#FF6600] text-white shadow-md'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FF6600]" />
                Select Time Slot
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center transition-all ${
                      selectedTimeSlot === slot
                        ? 'bg-[#FF6600] text-white shadow-md'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* User Details */}
            <div className="space-y-4 pt-2 border-t border-white/10">
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6600] focus:outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="e.g. alex@creator.com"
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6600] focus:outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-semibold">
                  Channel Handle / TikTok / YouTube Link
                </label>
                <input
                  type="text"
                  value={channelLink}
                  onChange={e => setChannelLink(e.target.value)}
                  placeholder="@yourchannel or channel URL"
                  className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF6600] focus:outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF6600] text-white font-inter text-xs sm:text-sm uppercase tracking-widest font-bold py-4 rounded-xl btn-primary-glow active:scale-95 transition-transform"
            >
              Confirm Strategy Call
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
