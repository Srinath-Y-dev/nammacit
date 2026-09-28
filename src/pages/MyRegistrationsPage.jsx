import { useState } from 'react';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Calendar, MapPin, CheckCircle2, Clock, XCircle, ChevronRight, Eye } from 'lucide-react';

export default function MyRegistrationsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const registrations = [
    { id: 1, event: 'Hackathon 2024', venue: 'Main Auditorium', date: 'May 25, 2024', status: 'Registered', odStatus: 'Pending OD' },
    { id: 2, event: 'AI/ML Workshop', venue: 'Seminar Hall A', date: 'May 28, 2024', status: 'Waitlisted', odStatus: null },
    { id: 3, event: 'Guest Lecture', venue: 'Mini Auditorium', date: 'May 10, 2024', status: 'Cancelled', odStatus: null },
  ];

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0">
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">My Registrations</h1>
          <p className="text-[12px] text-cit-text-secondary">Track your event enrollments</p>
        </div>

        {/* Tabs */}
        <div className="px-5 mb-5 shrink-0">
          <div className="flex bg-[#F8F6F1] rounded-xl p-1 border border-cit-border overflow-x-auto scrollbar-hide">
            {['All', 'Registered', 'Waitlisted', 'Cancelled'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[80px] py-2 text-[11px] font-bold rounded-lg transition-colors whitespace-nowrap px-3 ${activeTab === tab ? 'bg-white shadow-sm text-cit-gold' : 'text-[#9B9B9B] hover:text-[#6B6B6B]'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="px-5 flex flex-col gap-4">
          {registrations.map(reg => (
            <div key={reg.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 pr-4">
                  <div className="text-[10px] font-bold text-cit-gold mb-1 uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {reg.date}
                  </div>
                  <h3 className="text-[15px] font-black text-[#1A1A1A] leading-tight mb-1">{reg.event}</h3>
                  <p className="text-[11px] font-medium text-[#6B6B6B] flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#A07810]" /> {reg.venue}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                {reg.status === 'Registered' && <span className="bg-[#E8F7EF] text-[#1A7A4A] text-[9px] font-bold px-2 py-1 rounded-md uppercase border border-[#1A7A4A]/20 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Registered</span>}
                {reg.status === 'Waitlisted' && <span className="bg-[#FEF3DC] text-[#8B5E0A] text-[9px] font-bold px-2 py-1 rounded-md uppercase border border-[#FAD7A1] flex items-center gap-1"><Clock className="w-3 h-3" /> Waitlisted</span>}
                {reg.status === 'Cancelled' && <span className="bg-[#FDECEA] text-[#C0392B] text-[9px] font-bold px-2 py-1 rounded-md uppercase border border-[#C0392B]/20 flex items-center gap-1"><XCircle className="w-3 h-3" /> Cancelled</span>}
                
                {reg.odStatus && (
                  <span className="bg-[#F8F6F1] text-[#A07810] text-[9px] font-bold px-2 py-1 rounded-md uppercase border border-[#E8E0CC]">
                    {reg.odStatus}
                  </span>
                )}
              </div>

              <div className="flex gap-2 pt-3 border-t border-[#F0EAD8]">
                <button className="flex-[2] py-2 bg-[#F8F6F1] text-[#1A1A1A] rounded-[10px] font-bold text-[11px] flex items-center justify-center gap-1.5 hover:bg-gray-100">
                  <Eye className="w-3.5 h-3.5" /> View Event
                </button>
                {reg.status === 'Registered' && (
                  <button className="flex-1 py-2 bg-white border border-[#FDECEA] text-[#C0392B] rounded-[10px] font-bold text-[11px] hover:bg-[#FDECEA] transition-colors">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
