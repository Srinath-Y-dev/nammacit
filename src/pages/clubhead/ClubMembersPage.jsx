import { useState } from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import { Users, CheckCircle2, XCircle, Search, ChevronDown, UserMinus } from 'lucide-react';

export default function ClubMembersPage() {
  const [activeTab, setActiveTab] = useState('All Members');
  
  const pendingRequests = [
    { id: 1, name: 'Aditi Verma', roll: '22CS102', dept: 'CSE', year: '2nd Year', date: 'May 12' },
    { id: 2, name: 'Rahul Krishnan', roll: '23IT045', dept: 'IT', year: '1st Year', date: 'May 14' },
  ];

  const allMembers = [
    { id: 3, name: 'Vikram Singh', roll: '22CS090', dept: 'CSE', year: '2nd Year', role: 'President', initials: 'VS' },
    { id: 4, name: 'Neha Reddy', roll: '21EC034', dept: 'ECE', year: '3rd Year', role: 'Secretary', initials: 'NR' },
    { id: 5, name: 'Karan Patel', roll: '23ME011', dept: 'MECH', year: '1st Year', role: 'Member', initials: 'KP' },
  ];

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0">
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Club Members</h1>
          <p className="text-[12px] text-cit-text-secondary">Manage AI Research Club memberships</p>
        </div>

        {/* Search Bar */}
        <div className="px-5 mb-5 shrink-0">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9B9B]" />
            <input 
              type="text" 
              placeholder="Search members by name or roll no..."
              className="w-full bg-white border border-[#F0EAD8] rounded-[14px] py-3 pl-10 pr-4 text-[12px] font-medium text-[#1A1A1A] focus:outline-none focus:border-cit-gold shadow-sm"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="px-5 mb-5 shrink-0">
          <div className="flex bg-[#F8F6F1] rounded-xl p-1 border border-cit-border overflow-x-auto scrollbar-hide">
            {['All Members', 'Pending Requests', 'Core Team'].map(tab => (
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

        {/* Pending Requests Tab */}
        {activeTab === 'Pending Requests' && (
          <div className="px-5 flex flex-col gap-3">
            {pendingRequests.map(req => (
              <div key={req.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FDF8ED] border border-cit-gold/20 flex items-center justify-center text-[16px] font-bold text-cit-gold">
                    {req.name.split(' ').map(n=>n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-black text-[#1A1A1A] truncate">{req.name}</h3>
                    <p className="text-[11px] font-medium text-[#6B6B6B]">{req.roll} • {req.dept} • {req.year}</p>
                    <p className="text-[9px] font-bold text-cit-gold mt-0.5">Requested on: {req.date}</p>
                  </div>
                </div>
                <div className="flex gap-2 pt-1">
                  <button className="flex-1 bg-[#E8F7EF] text-[#1A7A4A] border border-[#1A7A4A]/20 py-2 rounded-xl text-[11px] font-bold flex justify-center items-center gap-1.5 hover:bg-[#D1EFE0]">
                    <CheckCircle2 className="w-4 h-4" /> Approve
                  </button>
                  <button className="flex-1 bg-[#FDF4F3] text-[#C0392B] border border-[#C0392B]/20 py-2 rounded-xl text-[11px] font-bold flex justify-center items-center gap-1.5 hover:bg-[#FDECEA]">
                    <XCircle className="w-4 h-4" /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* All Members Tab */}
        {activeTab === 'All Members' && (
          <div className="px-5 flex flex-col gap-3">
            <div className="text-[10px] font-bold text-cit-text-secondary uppercase tracking-widest mb-1">120 Total Members</div>
            {allMembers.map(member => (
              <div key={member.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 shadow-sm flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A07810] to-[#E8B429] flex items-center justify-center text-[16px] font-bold text-white shadow-inner">
                  {member.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-[14px] font-black text-[#1A1A1A] truncate">{member.name}</h3>
                    {member.role !== 'Member' && (
                      <span className="bg-[#FEF3DC] text-[#8B5E0A] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#FAD7A1]">
                        {member.role}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] font-medium text-[#6B6B6B]">{member.roll} • {member.dept} • {member.year}</p>
                </div>
                <button className="w-8 h-8 rounded-full border border-[#F0EAD8] flex items-center justify-center hover:bg-gray-50 text-[#1A1A1A]">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
