import { useState } from 'react';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Search, Filter, Shield, ChevronRight, MapPin, Clock, Wifi, Battery } from 'lucide-react';

const odRequests = [
  {
    id: 1,
    month: 'MAY', day: '20', dow: 'MON',
    title: 'Industrial Visit – TechNova Solutions',
    venue: 'TechNova Solutions, Bangalore',
    time: '9:00 AM – 5:00 PM',
    applied: 'Applied on May 15, 2024',
    status: 'pending',
  },
  {
    id: 2,
    month: 'MAY', day: '15', dow: 'WED',
    title: 'Workshop – AI/ML Basics',
    venue: 'Seminar Hall A',
    time: '10:00 AM – 1:00 PM',
    applied: 'Applied on May 10, 2024',
    status: 'approved',
  },
  {
    id: 3,
    month: 'MAY', day: '10', dow: 'FRI',
    title: 'Guest Lecture – Future of IT',
    venue: 'Main Auditorium',
    time: '2:00 PM – 4:00 PM',
    applied: 'Applied on May 8, 2024',
    status: 'approved',
  },
  {
    id: 4,
    month: 'MAY', day: '05', dow: 'SUN',
    title: 'External Training Program',
    venue: 'Online',
    time: '11:00 AM – 3:00 PM',
    applied: 'Applied on May 2, 2024',
    status: 'rejected',
  },
];

const statusConfig = {
  pending:  { label: 'PENDING',  bg: '#FEF3DC', color: '#8B5E0A' },
  approved: { label: 'APPROVED', bg: '#E8F7EF', color: '#1A7A4A' },
  rejected: { label: 'REJECTED', bg: '#FDECEA', color: '#C0392B' },
};

export default function ODPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = odRequests.filter(r => {
    const matchTab = activeTab === 'all' || r.status === activeTab;
    const matchSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase())
      || r.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTab && matchSearch;
  });

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: '⏳ Pending' },
    { id: 'approved', label: '✅ Approved' },
    { id: 'rejected', label: '❌ Rejected' },
    { id: 'withdrawn', label: '↩️ Withdrawn' },
  ];

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">


      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        {/* 1. TOP NAV */}
        <TopNav backButton={true} />

        {/* 2. PAGE TITLE SECTION */}
        <div className="px-4 pt-1 mb-4 relative shrink-0">
          <h1 className="text-[26px] font-bold text-cit-text-primary mb-1 relative z-10">OD Management</h1>
          <p className="text-xs text-cit-text-secondary max-w-[200px] leading-relaxed relative z-10">
            Submit, track and manage your On Duty requests.
          </p>
          <div className="absolute right-4 top-0 opacity-10 z-0 text-cit-text-primary">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
              <path d="M9 22v-4h6v4"></path>
              <path d="M8 6h.01"></path>
              <path d="M16 6h.01"></path>
              <path d="M12 6h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M16 10h.01"></path>
              <path d="M16 14h.01"></path>
              <path d="M8 10h.01"></path>
              <path d="M8 14h.01"></path>
            </svg>
          </div>
        </div>

        {/* 3. OVERVIEW DASHBOARD CARD */}
        <div className="bg-white border border-[#F0EAD8] rounded-card p-4 mx-4 mb-4 shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <div className="text-[11px] font-bold text-cit-gold uppercase tracking-[1.5px] mb-3">OVERVIEW</div>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#EDF2FA] mx-auto mb-1 flex items-center justify-center text-sm">📋</div>
              <div className="text-lg font-bold text-cit-text-primary leading-tight">12</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Total</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3DC] mx-auto mb-1 flex items-center justify-center text-sm">⏳</div>
              <div className="text-lg font-bold text-[#8B5E0A] leading-tight">05</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Pending</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#E8F7EF] mx-auto mb-1 flex items-center justify-center text-sm">✅</div>
              <div className="text-lg font-bold text-[#1A7A4A] leading-tight">06</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Approved</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#FDECEA] mx-auto mb-1 flex items-center justify-center text-sm">❌</div>
              <div className="text-lg font-bold text-[#C0392B] leading-tight">01</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Rejected</div>
            </div>
          </div>
          <button className="w-full mt-3 p-3.5 bg-gradient-to-br from-cit-gold to-cit-gold-light border-none rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 shadow-[0_3px_12px_rgba(201,149,26,0.35)] hover:shadow-lg transition-shadow">
            ＋ New OD Request <span className="text-lg leading-none">→</span>
          </button>
        </div>

        {/* 4. STATUS FILTER TABS */}
        <div className="flex gap-1.5 px-4 overflow-x-auto mb-3 shrink-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-pill text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-br from-cit-gold to-cit-gold-light border-transparent text-white shadow-cit-active-tab'
                    : 'bg-white border-[1.5px] border-cit-border text-cit-text-secondary'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 5. SEARCH + FILTER ROW */}
        <div className="flex gap-2 px-4 mb-3.5 shrink-0">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-cit-text-muted" />
            <input 
              type="text" 
              placeholder="Search OD requests..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-9 pr-3 border-[1.5px] border-cit-border rounded-btn text-[13px] bg-white text-cit-text-primary placeholder:text-cit-text-muted focus:outline-none focus:border-cit-gold transition-colors"
            />
          </div>
          <button className="px-4 py-2.5 flex items-center justify-center gap-1.5 border border-cit-border bg-white rounded-btn text-xs font-semibold text-cit-text-secondary whitespace-nowrap active:bg-gray-50">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        {/* 6. OD REQUEST CARDS */}
        <div className="flex flex-col gap-2.5 px-4 shrink-0">
          {filtered.length > 0 ? (
            filtered.map(r => {
              const statusColors = statusConfig[r.status];
              return (
                <div key={r.id} className="bg-white border border-[#F0EAD8] rounded-[14px] p-3.5 flex gap-3 cursor-pointer shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                  {/* DATE BOX */}
                  <div className="w-[44px] shrink-0 flex flex-col">
                    <div className="bg-cit-gold text-white text-[9px] font-bold uppercase text-center rounded-t-[5px] py-0.5">
                      {r.month}
                    </div>
                    <div className="flex flex-col items-center justify-center border-x-[1.5px] border-b-[1.5px] border-cit-border rounded-b-[5px] pb-0.5 pt-0.5">
                      <span className="text-[20px] font-bold text-cit-text-primary leading-none">{r.day}</span>
                      <span className="text-[8px] font-medium text-cit-text-muted mt-0.5">{r.dow}</span>
                    </div>
                  </div>

                  {/* OD INFO */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    <h3 className="text-[13px] font-bold text-cit-text-primary mb-[3px] truncate">
                      {r.title}
                    </h3>
                    <div className="flex items-center text-[11px] text-cit-text-secondary mb-[3px] truncate">
                      <MapPin className="w-3 h-3 mr-1 shrink-0" />
                      <span className="truncate">{r.venue}</span>
                    </div>
                    <div className="flex items-center text-[11px] text-cit-text-secondary mb-1 truncate">
                      <Clock className="w-3 h-3 mr-1 shrink-0" />
                      <span className="truncate">{r.time}</span>
                    </div>
                    <div className="text-[10px] text-cit-text-muted mt-1">
                      {r.applied}
                    </div>
                  </div>

                  {/* STATUS + ARROW */}
                  <div className="flex flex-col items-end justify-between shrink-0">
                    <span 
                      className="text-[9px] font-bold px-2 py-0.5 rounded-pill uppercase tracking-wide"
                      style={{ background: statusColors.bg, color: statusColors.color }}
                    >
                      {statusColors.label}
                    </span>
                    <ChevronRight className="w-5 h-5 text-cit-text-muted" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-6 text-cit-text-muted text-sm border border-cit-border border-dashed rounded-xl">
              No OD requests found.
            </div>
          )}
        </div>

        {/* 7. HELP & SUPPORT CARD */}
        <div className="mx-4 mt-1 mb-[100px] bg-cit-gold-bg border border-[#E8D5A0] rounded-[14px] p-3.5 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-cit-gold to-cit-gold-light flex items-center justify-center text-xl shrink-0 shadow-sm text-white">
            <Shield className="w-5 h-5" fill="currentColor" />
          </div>
          <div className="flex flex-col flex-1">
            <h4 className="text-xs font-bold text-cit-text-primary">Need help with OD requests?</h4>
            <p className="text-[11px] text-cit-text-secondary leading-tight mt-0.5">Contact your faculty coordinator for assistance.</p>
          </div>
          <button className="ml-auto bg-transparent border-[1.5px] border-cit-gold text-cit-gold text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0">
            Contact ›
          </button>
        </div>
      </div>

      {/* 8. BOTTOM NAVIGATION BAR */}
      <BottomNav />
    </div>
  );
}
