import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../context/AuthContext';
import { Megaphone, Search, Filter, Plus, ChevronRight, Clock, Info, AlertTriangle } from 'lucide-react';

const mockAnnouncements = [
  {
    id: 1,
    title: 'End Semester Exam Schedule',
    content: 'The end semester examination schedule has been published. Please check the portal for your respective department dates.',
    date: '2 hours ago',
    type: 'High Priority',
    author: 'Admin',
    icon: AlertTriangle,
    color: 'text-[#C0392B]',
    bg: 'bg-[#FDECEA]'
  },
  {
    id: 2,
    title: 'Hackathon 2024 Registration Extended',
    content: 'Good news! The registration deadline for Hackathon 2024 has been extended by 3 days.',
    date: 'Yesterday',
    type: 'Update',
    author: 'Computer Science Dept',
    icon: Megaphone,
    color: 'text-cit-gold',
    bg: 'bg-[#FDF8ED]'
  },
  {
    id: 3,
    title: 'Campus Placement Drive: Tech Innovations',
    content: 'Tech Innovations will be conducting a placement drive on campus next week for final year students.',
    date: '2 days ago',
    type: 'Important',
    author: 'Placement Cell',
    icon: Info,
    color: 'text-[#1A7A4A]',
    bg: 'bg-[#E8F7EF]'
  }
];

export default function AnnouncementsPage() {
  const { user } = useAuth();
  const role = user?.role || 'student';
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAnnouncements = mockAnnouncements.filter(a => 
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    a.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        <TopNav />

        <div className="px-5 pt-4 mb-4 shrink-0 flex items-center justify-between">
          <div>
            <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Announcements</h1>
            <p className="text-[12px] text-cit-text-secondary">Stay updated with campus news</p>
          </div>
          {(role === 'faculty' || role === 'clubhead' || role === 'admin') && (
            <button 
              onClick={() => navigate(`/${role}/announcements/create`)}
              className="bg-cit-gold text-white text-[11px] font-bold px-3 py-2 rounded-lg shadow-sm hover:bg-[#A07810] transition-colors flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> New
            </button>
          )}
        </div>

        <div className="px-5 mb-5 shrink-0">
           <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-cit-text-muted" />
            <input 
              type="text" 
              placeholder="Search announcements..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-9 pr-3 border-[1.5px] border-cit-border rounded-btn text-[13px] bg-white text-cit-text-primary placeholder:text-cit-text-muted focus:outline-none focus:border-cit-gold transition-colors"
            />
          </div>
        </div>

        <div className="px-5 flex flex-col gap-3">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map(announcement => {
              const Icon = announcement.icon;
              return (
                <div key={announcement.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg ${announcement.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-4 h-4 ${announcement.color}`} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-cit-text-secondary uppercase tracking-wider">{announcement.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-[10px] text-cit-text-muted font-medium bg-[#F8F6F1] px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 mr-1" />
                      {announcement.date}
                    </div>
                  </div>
                  
                  <h3 className="text-[15px] font-black text-[#1A1A1A] leading-tight mb-2 mt-2">{announcement.title}</h3>
                  <p className="text-[12px] text-cit-text-secondary leading-relaxed mb-3 line-clamp-2">
                    {announcement.content}
                  </p>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-[#F0EAD8]">
                    <div className="text-[10px] font-semibold text-cit-text-muted flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cit-gold"></span>
                      By {announcement.author}
                    </div>
                    <button className="text-[11px] font-bold text-cit-gold group-hover:text-cit-gold-dark transition-colors flex items-center gap-0.5">
                      Read more <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-cit-text-muted text-sm border border-dashed border-cit-border rounded-2xl bg-white">
              No announcements found.
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
