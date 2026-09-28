import { useState } from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import { Search, Filter, User, Shield, GraduationCap, Users, MoreVertical, Edit2, Key } from 'lucide-react';

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState('All Users');
  const [searchQuery, setSearchQuery] = useState('');

  const usersList = [
    { id: 1, name: 'Aditi Verma', uid: '22CS102', role: 'Student', dept: 'CSE', status: 'Active' },
    { id: 2, name: 'Rahul Krishnan', uid: '23IT045', role: 'Student', dept: 'IT', status: 'Active' },
    { id: 3, name: 'Dr. Priya Nair', uid: 'FAC-CS-01', role: 'Faculty', dept: 'CSE', status: 'Active' },
    { id: 4, name: 'Prof. Ramesh', uid: 'FAC-IT-02', role: 'Faculty', dept: 'IT', status: 'Active' },
    { id: 5, name: 'Vikram Singh', uid: '22CS090', role: 'Club Head', dept: 'AI Club', status: 'Active' },
    { id: 6, name: 'Karthik Raja', uid: '21ME001', role: 'Student', dept: 'MECH', status: 'Inactive' },
  ];

  const filteredUsers = usersList.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.uid.toLowerCase().includes(searchQuery.toLowerCase());
    let matchTab = true;
    if (activeTab === 'Students') matchTab = u.role === 'Student';
    if (activeTab === 'Faculty') matchTab = u.role === 'Faculty';
    if (activeTab === 'Club Heads') matchTab = u.role === 'Club Head';
    return matchSearch && matchTab;
  });

  const getRoleIcon = (role) => {
    switch(role) {
      case 'Faculty': return <User className="w-3.5 h-3.5" />;
      case 'Club Head': return <Users className="w-3.5 h-3.5" />;
      default: return <GraduationCap className="w-3.5 h-3.5" />;
    }
  };

  const getRoleColor = (role) => {
    switch(role) {
      case 'Faculty': return 'bg-[#FEF3DC] text-[#8B5E0A] border-[#FAD7A1]';
      case 'Club Head': return 'bg-[#E8F7EF] text-[#1A7A4A] border-[#1A7A4A]/20';
      default: return 'bg-[#F8F6F1] text-[#6B6B6B] border-[#E8E0CC]';
    }
  };

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0 flex justify-between items-start">
          <div>
            <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Users</h1>
            <p className="text-[12px] text-cit-text-secondary">Manage campus roles & permissions</p>
          </div>
          <button className="bg-[#1A1A1A] text-white p-2.5 rounded-[12px] shadow-sm">
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-5 mb-5 shrink-0 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9B9B]" />
            <input 
              type="text" 
              placeholder="Search by name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#F0EAD8] rounded-[14px] py-3 pl-10 pr-4 text-[12px] font-medium text-[#1A1A1A] focus:outline-none focus:border-cit-gold shadow-sm"
            />
          </div>
          <button className="w-11 h-11 shrink-0 bg-white border border-[#F0EAD8] text-[#1A1A1A] rounded-[14px] flex items-center justify-center shadow-sm hover:bg-gray-50">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-5 mb-5 shrink-0">
          <div className="flex bg-[#F8F6F1] rounded-xl p-1 border border-cit-border overflow-x-auto scrollbar-hide">
            {['All Users', 'Students', 'Faculty', 'Club Heads'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[85px] py-2 text-[11px] font-bold rounded-lg transition-colors whitespace-nowrap px-2 ${activeTab === tab ? 'bg-white shadow-sm text-cit-gold' : 'text-[#9B9B9B] hover:text-[#6B6B6B]'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Users List */}
        <div className="px-5 flex flex-col gap-3">
          <div className="text-[10px] font-bold text-[#A07810] uppercase tracking-widest mb-1">{filteredUsers.length} Results Found</div>
          {filteredUsers.map(user => (
            <div key={user.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 shadow-sm flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FDF8ED] to-[#FAEEDA] border border-cit-gold/20 flex items-center justify-center text-[16px] font-black text-cit-gold shadow-inner shrink-0">
                {user.name.split(' ').map(n=>n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="text-[14px] font-black text-[#1A1A1A] truncate">{user.name}</h3>
                  <button className="text-[#9B9B9B] hover:text-[#1A1A1A]">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 mt-1">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border flex items-center gap-1 ${getRoleColor(user.role)}`}>
                    {getRoleIcon(user.role)} {user.role}
                  </span>
                  <span className="text-[10px] font-bold text-[#6B6B6B]">{user.uid}</span>
                  <span className="text-[10px] font-bold text-[#6B6B6B]">• {user.dept}</span>
                </div>
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <div className="text-center py-8 text-cit-text-muted text-[12px]">
              No users found matching your criteria.
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
