import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ChevronLeft, Building2, User, Megaphone, Flag, Edit3 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function EventDetailsPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || 'student';

  const event = {
    name: "Annual Hackathon 2024",
    club: "AI Research Club",
    status: "OPEN",
    venue: "Main Auditorium, Central Block",
    date: "May 25, 2024",
    time: "09:00 AM – 06:00 PM",
    registered: 142,
    max: 200,
    deadline: "May 20, 2024",
    desc: "Join us for the biggest 12-hour hackathon of the year! Build innovative solutions in AI, Web3, and Open Source. Mentors from top tech companies will be present. Food and swags provided for all participants.",
  };

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-10">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        {/* Banner Section */}
        <div className="h-[220px] bg-gradient-to-br from-[#1a1a2e] to-[#e8b429] relative shrink-0">
          <button onClick={() => navigate(-1)} className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          {role === 'clubhead' && (
            <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 z-10">
              <Edit3 className="w-5 h-5" />
            </button>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="bg-[#E8F7EF] text-[#1A7A4A] text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider mb-2 inline-block shadow-sm">
              {event.status}
            </span>
            <h1 className="text-[26px] font-black leading-tight mb-1">{event.name}</h1>
            <p className="text-[12px] font-medium text-white/80 flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Organized by {event.club}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-5 px-5 pt-6 relative z-10 -mt-2 bg-cit-page-bg rounded-t-[24px]">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#FDF8ED] flex items-center justify-center mb-2">
                <Calendar className="w-4 h-4 text-cit-gold" />
              </div>
              <p className="text-[10px] font-bold text-cit-text-secondary uppercase mb-0.5">Date</p>
              <p className="text-[12px] font-black text-[#1A1A1A]">{event.date}</p>
            </div>
            <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#FDF8ED] flex items-center justify-center mb-2">
                <Clock className="w-4 h-4 text-cit-gold" />
              </div>
              <p className="text-[10px] font-bold text-cit-text-secondary uppercase mb-0.5">Time</p>
              <p className="text-[12px] font-black text-[#1A1A1A]">{event.time}</p>
            </div>
          </div>

          <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8F6F1] border border-[#E8E0CC] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-cit-gold" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-cit-text-secondary uppercase mb-0.5">Venue</p>
              <p className="text-[13px] font-black text-[#1A1A1A] leading-tight">{event.venue}</p>
            </div>
          </div>

          {/* Registration Status */}
          <div className="bg-[#F8F6F1] border border-[#E8E0CC] rounded-[16px] p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-bold text-[#1A1A1A]">Registration Status</span>
              <span className="text-[11px] font-bold text-cit-gold">{event.registered} / {event.max} Filled</span>
            </div>
            <div className="w-full bg-[#E8E0CC] h-2 rounded-full overflow-hidden mb-3">
              <div className="bg-cit-gold h-full rounded-full" style={{ width: `${(event.registered / event.max) * 100}%` }}></div>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#C0392B]">
              <Flag className="w-3.5 h-3.5" /> Deadline: {event.deadline}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-[14px] font-black text-[#1A1A1A] mb-2">About Event</h3>
            <p className="text-[12px] text-cit-text-secondary leading-relaxed">{event.desc}</p>
          </div>

        </div>
      </div>

      {/* Fixed Action Bottom Bar */}
      <div className="sticky bottom-0 z-50 bg-white border-t border-[#F0EAD8] px-5 py-4 pb-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex gap-3">
        {role === 'student' ? (
          <>
            <button className="flex-[2] py-3.5 bg-gradient-to-r from-[#1A1A1A] to-[#333333] text-white rounded-[14px] font-bold text-[13px] shadow-md hover:opacity-90 flex justify-center items-center gap-2">
              Register for Event →
            </button>
            <button onClick={() => navigate('/student/od-requests/create')} className="flex-1 py-3.5 bg-white border border-[#E8E0CC] text-[#A07810] rounded-[14px] font-bold text-[12px] hover:bg-[#FDF8ED] flex justify-center items-center">
              Apply OD
            </button>
          </>
        ) : role === 'admin' ? (
          <>
            <button className="flex-1 py-3.5 bg-[#E8F7EF] text-[#1A7A4A] border border-[#1A7A4A]/20 rounded-[14px] font-bold text-[13px] flex justify-center items-center gap-2">
              Approve
            </button>
            <button className="flex-1 py-3.5 bg-[#FDF4F3] text-[#C0392B] border border-[#C0392B]/20 rounded-[14px] font-bold text-[13px] flex justify-center items-center gap-2">
              Reject
            </button>
          </>
        ) : (
          <button className="flex-1 py-3.5 bg-white border border-[#E8E0CC] text-[#1A1A1A] rounded-[14px] font-bold text-[13px] flex justify-center items-center gap-2">
            View Participant List
          </button>
        )}
      </div>
    </div>
  );
}
