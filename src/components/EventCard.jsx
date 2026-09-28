import { Bookmark, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function EventCard({ event }) {
  const [bookmarked, setBookmarked] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || 'student';

  return (
    <div className="bg-white border border-[#F0EAD8] rounded-card p-[14px] flex gap-3 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      {/* DATE BOX */}
      <div className="w-12 shrink-0 flex flex-col">
        <div className="bg-cit-gold text-white text-[10px] font-bold uppercase text-center rounded-t-md py-0.5">
          {event.month}
        </div>
        <div className="flex flex-col items-center justify-center border-x border-b border-cit-border rounded-b-md pb-1 pt-0.5">
          <span className="text-2xl font-bold text-cit-text-primary leading-none">{event.day}</span>
          <span className="text-[9px] font-medium text-cit-text-muted mt-0.5">{event.dow}</span>
        </div>
      </div>

      {/* EVENT IMAGE */}
      <div 
        className="w-16 h-[72px] shrink-0 rounded-[10px] flex items-center justify-center text-3xl"
        style={{ background: event.gradient }}
      >
        {event.emoji}
      </div>

      {/* EVENT INFO */}
      <div className="flex-1 min-w-0 relative flex flex-col">
        {/* Status & Bookmark */}
        <div className="flex justify-between items-start mb-1.5">
          <span className="text-[9px] font-bold bg-cit-gold-bg text-[#8B5E0A] px-2 py-0.5 rounded-pill uppercase tracking-wide">
            {event.status}
          </span>
          <button 
            onClick={() => setBookmarked(!bookmarked)}
            className="text-cit-gold -mt-1 -mr-1 p-1"
          >
            <Bookmark className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} strokeWidth={2} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-cit-text-primary mb-1 truncate">
          {event.name}
        </h3>

        {/* Venue & Time */}
        <div className="flex items-center text-[11px] text-cit-text-secondary mb-0.5 truncate">
          <MapPin className="w-3 h-3 mr-1 shrink-0" />
          <span className="truncate">{event.venue}</span>
        </div>
        <div className="flex items-center text-[11px] text-cit-text-secondary mb-2 truncate">
          <Clock className="w-3 h-3 mr-1 shrink-0" />
          <span className="truncate">{event.duration}</span>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-auto pt-2 gap-2 min-w-0">
          <div className="flex items-center min-w-0 flex-1">
            <div className="flex shrink-0">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cit-gold to-cit-gold-light border-[1.5px] border-white flex items-center justify-center text-[8px] font-bold text-white z-20">AS</div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1A7A4A] to-[#2ecc71] border-[1.5px] border-white flex items-center justify-center text-[8px] font-bold text-white -ml-1.5 z-10">RK</div>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#2d1b69] to-[#c75c9b] border-[1.5px] border-white flex items-center justify-center text-[8px] font-bold text-white -ml-1.5 z-0">MP</div>
            </div>
            <span className="bg-[#F0EAD8] text-cit-text-secondary text-[9px] font-bold px-1.5 rounded-pill ml-1 truncate shrink-0 max-w-[60px]">
              {event.extra}
            </span>
            <span className="text-[10px] text-cit-text-muted ml-1 whitespace-nowrap truncate min-w-0">
              {event.going} Going
            </span>
          </div>
          <button 
            onClick={() => navigate(`/${role}/events/${event.id}`)}
            className="border-[1.5px] border-cit-gold text-cit-gold text-[11px] font-bold px-2 py-0.5 rounded-lg bg-transparent shrink-0"
          >
            Details ›
          </button>
        </div>
      </div>
    </div>
  );
}
