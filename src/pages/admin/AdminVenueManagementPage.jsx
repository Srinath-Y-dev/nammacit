import { useState } from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import { Building2, Calendar, Clock, MapPin, ChevronRight, CheckCircle2, XCircle, Search, Users, Edit3 } from 'lucide-react';

export default function AdminVenueManagementPage() {
  const [activeTab, setActiveTab] = useState('All Venues');
  
  const venues = [
    { id: 1, name: 'Main Auditorium', capacity: 1200, status: 'Occupied', currentEvent: 'Annual Tech Symposium' },
    { id: 2, name: 'Seminar Hall A', capacity: 150, status: 'Available', currentEvent: null },
    { id: 3, name: 'Seminar Hall B', capacity: 150, status: 'Occupied', currentEvent: 'TCS Placement Drive' },
    { id: 4, name: 'Mini Auditorium', capacity: 300, status: 'Available', currentEvent: null },
    { id: 5, name: 'Open Air Theatre', capacity: 800, status: 'Available', currentEvent: null },
  ];

  const pendingRequests = [
    { id: 101, club: 'AI Research Club', event: 'Hackathon 2024', venue: 'Main Auditorium', date: 'May 20, 2024', time: '09:00 AM - 06:00 PM', reqDate: 'May 10' },
    { id: 102, club: 'Cultural Society', event: 'Dance Practice', venue: 'Open Air Theatre', date: 'May 22, 2024', time: '04:00 PM - 07:00 PM', reqDate: 'May 11' },
  ];

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0">
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Venue Management</h1>
          <p className="text-[12px] text-cit-text-secondary">Approve requests and manage campus venues</p>
        </div>

        {/* Tabs */}
        <div className="px-5 mb-5 shrink-0">
          <div className="flex bg-[#F8F6F1] rounded-xl p-1 border border-cit-border overflow-x-auto scrollbar-hide">
            {['All Venues', 'Pending Requests', 'Approved', 'History'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[110px] py-2 text-[11px] font-bold rounded-lg transition-colors whitespace-nowrap px-2 ${activeTab === tab ? 'bg-white shadow-sm text-cit-gold' : 'text-[#9B9B9B] hover:text-[#6B6B6B]'}`}
              >
                {tab} {tab === 'Pending Requests' && <span className="bg-[#C0392B] text-white text-[9px] px-1.5 py-0.5 rounded-full ml-1">2</span>}
              </button>
            ))}
          </div>
        </div>

        {/* All Venues Tab */}
        {activeTab === 'All Venues' && (
          <div className="px-5 flex flex-col gap-4">
            {venues.map(v => (
              <div key={v.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm relative">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF8ED] border border-cit-gold/20 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-cit-gold" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-black text-[#1A1A1A] leading-tight">{v.name}</h3>
                      <p className="text-[11px] font-medium text-[#6B6B6B] flex items-center gap-1 mt-0.5">
                        <Users className="w-3 h-3 text-cit-gold" /> Capacity: {v.capacity}
                      </p>
                    </div>
                  </div>
                  {v.status === 'Available' ? (
                    <span className="bg-[#E8F7EF] text-[#1A7A4A] text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-[#1A7A4A]/20">Available</span>
                  ) : (
                    <span className="bg-[#FDECEA] text-[#C0392B] text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-[#C0392B]/20">Occupied</span>
                  )}
                </div>
                
                {v.status === 'Occupied' && (
                  <div className="bg-[#F8F6F1] border border-[#E8E0CC] rounded-[12px] p-2.5 mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                      <Clock className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-bold text-[#6B6B6B] uppercase">Current Booking</div>
                      <div className="text-[11px] font-bold text-[#1A1A1A] truncate">{v.currentEvent}</div>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-white border border-[#F0EAD8] text-[#1A1A1A] rounded-[10px] font-bold text-[11px] hover:bg-gray-50 transition-colors">
                    View Schedule
                  </button>
                  <button className="flex-1 py-2 bg-[#FDF8ED] border border-cit-gold/30 text-cit-gold rounded-[10px] font-bold text-[11px] hover:bg-[#FAEEDA] transition-colors">
                    Manage Bookings
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pending Requests Tab */}
        {activeTab === 'Pending Requests' && (
          <div className="px-5 flex flex-col gap-4">
            {pendingRequests.map(req => (
              <div key={req.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[10px] font-bold text-cit-gold mb-1 uppercase tracking-wider">{req.date}</div>
                  <div className="text-[9px] text-[#6B6B6B] font-medium">Req: {req.reqDate}</div>
                </div>
                
                <h3 className="text-[16px] font-black text-[#1A1A1A] leading-tight mb-1">{req.event}</h3>
                <p className="text-[11px] font-bold text-[#6B6B6B] mb-3">Club: <span className="text-[#A07810]">{req.club}</span></p>
                
                <div className="bg-[#F8F6F1] rounded-[12px] p-3 mb-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#1A1A1A]">
                    <Building2 className="w-4 h-4 text-[#A07810]" /> {req.venue}
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#1A1A1A]">
                    <Clock className="w-4 h-4 text-[#A07810]" /> {req.time}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#E8F7EF] text-[#1A7A4A] border border-[#1A7A4A]/20 py-2.5 rounded-[12px] text-[11px] font-bold flex justify-center items-center gap-1.5 hover:bg-[#D1EFE0]">
                      <CheckCircle2 className="w-4 h-4" /> Approve
                    </button>
                    <button className="flex-1 bg-[#FDF4F3] text-[#C0392B] border border-[#C0392B]/20 py-2.5 rounded-[12px] text-[11px] font-bold flex justify-center items-center gap-1.5 hover:bg-[#FDECEA]">
                      <XCircle className="w-4 h-4" /> Reject
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 bg-white border border-[#F0EAD8] text-[#1A1A1A] rounded-[12px] font-bold text-[11px] hover:bg-gray-50 flex justify-center items-center gap-1.5">
                      <Edit3 className="w-4 h-4" /> Modify Allocation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
