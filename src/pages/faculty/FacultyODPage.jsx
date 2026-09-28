import { useState } from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import { Search, Filter, Shield, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';

const facultyOdRequests = [
  {
    id: 1,
    studentName: 'Arjun Sharma',
    roll: '21CS045',
    section: 'CSE-A',
    month: 'MAY', day: '20', dow: 'MON',
    title: 'Industrial Visit – TechNova Solutions',
    venue: 'TechNova Solutions, Bangalore',
    time: '9:00 AM – 5:00 PM',
    applied: 'May 15, 2024',
    status: 'pending',
  },
  {
    id: 2,
    studentName: 'Meera K',
    roll: '21CS046',
    section: 'CSE-A',
    month: 'MAY', day: '15', dow: 'WED',
    title: 'Workshop – AI/ML Basics',
    venue: 'Seminar Hall A',
    time: '10:00 AM – 1:00 PM',
    applied: 'May 10, 2024',
    status: 'approved',
  },
  {
    id: 3,
    studentName: 'Ravi S',
    roll: '21CS048',
    section: 'CSE-B',
    month: 'MAY', day: '10', dow: 'FRI',
    title: 'Guest Lecture – Future of IT',
    venue: 'Main Auditorium',
    time: '2:00 PM – 4:00 PM',
    applied: 'May 8, 2024',
    status: 'rejected',
  }
];

export default function FacultyODPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = facultyOdRequests.filter(r => {
    const matchTab = activeTab === 'all' || r.status === activeTab;
    const matchSearch = r.studentName.toLowerCase().includes(searchQuery.toLowerCase())
      || r.roll.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: '⏳ Pending' },
    { id: 'approved', label: '✅ Approved' },
    { id: 'rejected', label: '❌ Rejected' },
  ];

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        <TopNav backButton={true} />

        <div className="px-4 pt-1 mb-4 relative shrink-0">
          <h1 className="text-[26px] font-bold text-cit-text-primary mb-1">OD Approvals</h1>
          <p className="text-xs text-cit-text-secondary max-w-[200px] leading-relaxed">
            Review and manage student OD requests.
          </p>
        </div>

        <div className="bg-white border border-[#F0EAD8] rounded-card p-4 mx-4 mb-4 shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <div className="text-[11px] font-bold text-cit-gold uppercase tracking-[1.5px] mb-3">OVERVIEW</div>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#EDF2FA] mx-auto mb-1 flex items-center justify-center text-sm">📋</div>
              <div className="text-lg font-bold text-cit-text-primary leading-tight">24</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Total</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3DC] mx-auto mb-1 flex items-center justify-center text-sm">⏳</div>
              <div className="text-lg font-bold text-[#8B5E0A] leading-tight">08</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Pending</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#E8F7EF] mx-auto mb-1 flex items-center justify-center text-sm">✅</div>
              <div className="text-lg font-bold text-[#1A7A4A] leading-tight">14</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Approved</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#FDECEA] mx-auto mb-1 flex items-center justify-center text-sm">❌</div>
              <div className="text-lg font-bold text-[#C0392B] leading-tight">02</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Rejected</div>
            </div>
          </div>
        </div>

        <div className="flex gap-1.5 px-4 overflow-x-auto mb-3 shrink-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-pill text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-br from-cit-gold to-cit-gold-light border-transparent text-white shadow-cit-active-tab'
                  : 'bg-white border-[1.5px] border-cit-border text-cit-text-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2 px-4 mb-3.5 shrink-0">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-cit-text-muted" />
            <input 
              type="text" 
              placeholder="Search by student or roll no..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-9 pr-3 border-[1.5px] border-cit-border rounded-btn text-[13px] bg-white text-cit-text-primary placeholder:text-cit-text-muted focus:outline-none focus:border-cit-gold transition-colors"
            />
          </div>
          <button className="px-4 py-2.5 flex items-center justify-center gap-1.5 border border-cit-border bg-white rounded-btn text-xs font-semibold text-cit-text-secondary whitespace-nowrap active:bg-gray-50">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        <div className="flex flex-col gap-2.5 px-4 shrink-0">
          {filtered.length > 0 ? (
            filtered.map(r => (
              <div key={r.id} className="bg-white border border-[#F0EAD8] rounded-[14px] p-3.5 flex flex-col gap-3 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                
                {/* Header: Student Info + Status */}
                <div className="flex justify-between items-start pb-2 border-b border-[#F0EAD8]">
                  <div>
                    <h3 className="text-[13px] font-bold text-cit-text-primary leading-tight">{r.studentName}</h3>
                    <p className="text-[10px] text-cit-text-secondary mt-0.5">{r.roll} • {r.section}</p>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-pill uppercase tracking-wide ${
                    r.status === 'pending' ? 'bg-[#FEF3DC] text-[#8B5E0A]' : 
                    r.status === 'approved' ? 'bg-[#E8F7EF] text-[#1A7A4A]' : 
                    'bg-[#FDECEA] text-[#C0392B]'
                  }`}>
                    {r.status}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex gap-3">
                  <div className="w-[44px] shrink-0 flex flex-col">
                    <div className="bg-cit-gold text-white text-[9px] font-bold uppercase text-center rounded-t-[5px] py-0.5">{r.month}</div>
                    <div className="flex flex-col items-center justify-center border-x-[1.5px] border-b-[1.5px] border-cit-border rounded-b-[5px] pb-0.5 pt-0.5">
                      <span className="text-[20px] font-bold text-cit-text-primary leading-none">{r.day}</span>
                      <span className="text-[8px] font-medium text-cit-text-muted mt-0.5">{r.dow}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[12px] font-bold text-cit-text-primary mb-1 truncate">{r.title}</h4>
                    <p className="text-[11px] text-cit-text-secondary truncate">📍 {r.venue}</p>
                    <p className="text-[11px] text-cit-text-secondary truncate mt-0.5">🕙 {r.time}</p>
                    <p className="text-[9px] text-cit-text-muted mt-1 flex justify-between">
                      Applied: {r.applied}
                      <span className="text-cit-gold font-bold">View full details ›</span>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                {r.status === 'pending' && (
                  <div className="flex gap-2 mt-1">
                    <button className="flex-1 py-2 bg-[#E8F7EF] border border-[#1A7A4A]/20 text-[#1A7A4A] rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 hover:bg-[#D1F0DE] transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                    </button>
                    <button className="flex-1 py-2 bg-[#FDECEA] border border-[#C0392B]/20 text-[#C0392B] rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 hover:bg-[#FADBD8] transition-colors">
                      <XCircle className="w-3.5 h-3.5" /> Reject
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-cit-text-muted text-sm border border-cit-border border-dashed rounded-xl">
              No OD requests found.
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
