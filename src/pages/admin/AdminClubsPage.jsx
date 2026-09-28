import { useState } from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import { Users, Award, Search, Plus, Edit3, ShieldAlert, BookOpen, Calendar } from 'lucide-react';

export default function AdminClubsPage() {
  const [isCreating, setIsCreating] = useState(false);

  const clubs = [
    { id: 1, name: 'AI Research Club', dept: 'CSE/IT', coord: 'Dr. Priya Nair', head: 'Vikram Singh', members: 120, events: 2 },
    { id: 2, name: 'Cultural Society', dept: 'All', coord: 'Prof. Ramesh', head: 'Aditi Verma', members: 450, events: 5 },
    { id: 3, name: 'Robotics Club', dept: 'ECE/MECH', coord: 'Dr. S. Kumar', head: 'Rahul Krishnan', members: 85, events: 1 },
  ];

  if (isCreating) {
    return (
      <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
        <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24 px-5 pt-4">
          <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => setIsCreating(false)} className="w-8 h-8 rounded-full bg-white border border-cit-border flex items-center justify-center shadow-sm">
              <span className="text-xl leading-none -mt-1 font-bold text-[#1A1A1A]">←</span>
            </button>
            <h1 className="text-[20px] font-black text-[#1A1A1A]">Create New Club</h1>
          </div>

          <div className="bg-white rounded-[20px] p-5 shadow-sm border border-[#F0EAD8] flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center py-4 border-2 border-dashed border-[#E8E0CC] rounded-[16px] bg-[#F8F6F1] cursor-pointer hover:bg-[#F0EAD8] transition-colors">
              <div className="w-12 h-12 rounded-full bg-white border border-[#E8E0CC] flex items-center justify-center mb-2">
                <Plus className="w-5 h-5 text-cit-gold" />
              </div>
              <span className="text-[11px] font-bold text-[#A07810]">Upload Club Logo</span>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Club Name *</label>
              <input type="text" placeholder="e.g. Literary Club" className="w-full border border-cit-border rounded-[12px] py-2.5 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Department / Scope *</label>
              <select className="w-full border border-cit-border rounded-[12px] py-2.5 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]">
                <option>All Departments</option>
                <option>CSE</option>
                <option>IT</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Faculty Coordinator *</label>
              <select className="w-full border border-cit-border rounded-[12px] py-2.5 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]">
                <option>Select Faculty...</option>
                <option>Dr. Priya Nair</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Student Club Head *</label>
              <select className="w-full border border-cit-border rounded-[12px] py-2.5 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]">
                <option>Select Student...</option>
                <option>Vikram Singh</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Description *</label>
              <textarea rows="3" placeholder="Brief description of the club..." className="w-full border border-cit-border rounded-[12px] py-2.5 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]"></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-[#A07810] to-[#E8B429] text-white font-bold py-3.5 rounded-[14px] shadow-[0_4px_14px_rgba(201,149,26,0.3)] hover:opacity-90 mt-2">
              Create Club →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0 flex justify-between items-start">
          <div>
            <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Clubs</h1>
            <p className="text-[12px] text-cit-text-secondary">Manage campus student clubs</p>
          </div>
        </div>

        {/* Search & Add */}
        <div className="px-5 mb-5 shrink-0 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9B9B]" />
            <input 
              type="text" 
              placeholder="Search clubs..."
              className="w-full bg-white border border-[#F0EAD8] rounded-[14px] py-3 pl-10 pr-4 text-[12px] font-medium text-[#1A1A1A] focus:outline-none focus:border-cit-gold shadow-sm"
            />
          </div>
          <button 
            onClick={() => setIsCreating(true)}
            className="w-11 h-11 shrink-0 bg-cit-gold text-white rounded-[14px] flex items-center justify-center shadow-[0_4px_12px_rgba(201,149,26,0.3)] hover:bg-[#A07810] transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Clubs List */}
        <div className="px-5 flex flex-col gap-4">
          {clubs.map(club => (
            <div key={club.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#333333] flex items-center justify-center text-[18px] font-black text-cit-gold shadow-inner shrink-0">
                  {club.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[16px] font-black text-[#1A1A1A] leading-tight truncate">{club.name}</h3>
                    <span className="bg-[#F8F6F1] text-[#6B6B6B] border border-[#E8E0CC] text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0">{club.dept}</span>
                  </div>
                  <p className="text-[11px] font-medium text-[#6B6B6B] mt-1">Coord: {club.coord}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-[#F8F6F1] rounded-[10px] p-2 flex items-center gap-2 border border-[#E8E0CC]">
                  <div className="w-6 h-6 rounded bg-white flex items-center justify-center border border-[#F0EAD8]">
                    <Users className="w-3 h-3 text-[#A07810]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#A07810] uppercase">Members</div>
                    <div className="text-[12px] font-black text-[#1A1A1A] leading-none mt-0.5">{club.members}</div>
                  </div>
                </div>
                <div className="bg-[#F8F6F1] rounded-[10px] p-2 flex items-center gap-2 border border-[#E8E0CC]">
                  <div className="w-6 h-6 rounded bg-white flex items-center justify-center border border-[#F0EAD8]">
                    <Calendar className="w-3 h-3 text-[#A07810]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#A07810] uppercase">Active Events</div>
                    <div className="text-[12px] font-black text-[#1A1A1A] leading-none mt-0.5">{club.events}</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FDF8ED] border border-[#FAD7A1]/50 rounded-[10px] py-2 px-3 mb-4 flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#A07810]">Club Head:</span>
                <span className="text-[11px] font-black text-[#1A1A1A]">{club.head}</span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-white border border-[#F0EAD8] text-[#1A1A1A] rounded-[10px] font-bold text-[11px] hover:bg-gray-50 flex justify-center items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#6B6B6B]" /> View Full
                </button>
                <button className="flex-1 py-2 bg-white border border-[#F0EAD8] text-[#1A1A1A] rounded-[10px] font-bold text-[11px] hover:bg-gray-50 flex justify-center items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5 text-[#6B6B6B]" /> Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
