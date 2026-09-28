import { useNavigate } from 'react-router-dom';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { ChevronRight, Calendar, Users, Building2, Megaphone, FileText } from 'lucide-react';

export default function GenericListPage({ title, type = 'generic' }) {
  const navigate = useNavigate();

  // Generate mock data based on type so the page doesn't look empty
  const getMockData = () => {
    switch(type) {
      case 'club':
        return [
          { id: 1, title: 'AI Research Club', subtitle: 'Computer Science Dept', icon: Users, status: 'Active' },
          { id: 2, title: 'Robotics Society', subtitle: 'Mechanical Dept', icon: Users, status: 'Active' },
          { id: 3, title: 'Literary Club', subtitle: 'English Dept', icon: Users, status: 'Active' },
          { id: 4, title: 'Music Band', subtitle: 'Cultural Council', icon: Users, status: 'Inactive' },
        ];
      case 'announcement':
        return [
          { id: 1, title: 'Mid-Term Exams Schedule', subtitle: 'Posted 2 hours ago', icon: Megaphone, status: 'Important' },
          { id: 2, title: 'Campus Placement Drive', subtitle: 'Posted yesterday', icon: Megaphone, status: 'New' },
          { id: 3, title: 'Holiday Declaration', subtitle: 'Posted 3 days ago', icon: Megaphone, status: 'Info' },
        ];
      case 'venue':
        return [
          { id: 1, title: 'Main Auditorium', subtitle: 'Capacity: 1000', icon: Building2, status: 'Available' },
          { id: 2, title: 'Seminar Hall A', subtitle: 'Capacity: 200', icon: Building2, status: 'Booked' },
          { id: 3, title: 'Conference Room 1', subtitle: 'Capacity: 50', icon: Building2, status: 'Available' },
        ];
      case 'event':
        return [
          { id: 1, title: 'Tech Symposium 2024', subtitle: 'Next Monday', icon: Calendar, status: 'Upcoming' },
          { id: 2, title: 'Cultural Fest', subtitle: 'In 2 weeks', icon: Calendar, status: 'Upcoming' },
        ];
      case 'user':
        return [
          { id: 1, title: 'John Doe', subtitle: 'Computer Science (3rd Yr)', icon: Users, status: 'Active' },
          { id: 2, title: 'Jane Smith', subtitle: 'Information Technology (2nd Yr)', icon: Users, status: 'Active' },
          { id: 3, title: 'Alex Johnson', subtitle: 'Mechanical (4th Yr)', icon: Users, status: 'Active' },
        ];
      default:
        return [
          { id: 1, title: 'Item 1', subtitle: 'Description for item 1', icon: FileText, status: 'Active' },
          { id: 2, title: 'Item 2', subtitle: 'Description for item 2', icon: FileText, status: 'Pending' },
          { id: 3, title: 'Item 3', subtitle: 'Description for item 3', icon: FileText, status: 'Active' },
        ];
    }
  };

  const data = getMockData();

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative w-full">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0 flex items-center justify-between">
          <div>
            <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">{title}</h1>
            <p className="text-[12px] text-cit-text-secondary">View and manage {title.toLowerCase()}</p>
          </div>
          <button className="bg-cit-gold text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-[#A07810] transition-colors">
            + New
          </button>
        </div>

        <div className="px-5 flex flex-col gap-3">
          {data.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 flex items-center gap-4 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => navigate('#')}>
                <div className="w-12 h-12 rounded-xl bg-[#FDF8ED] border border-cit-gold/20 flex items-center justify-center shrink-0 text-cit-gold">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[14px] font-bold text-[#1A1A1A] truncate">{item.title}</h4>
                  <p className="text-[11px] text-[#6B6B6B] truncate mt-0.5">{item.subtitle}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    item.status === 'Active' || item.status === 'Available' || item.status === 'Important' 
                      ? 'bg-[#E8F7EF] text-[#1A7A4A] border border-[#1A7A4A]/20'
                      : item.status === 'Inactive' || item.status === 'Booked'
                      ? 'bg-[#FDECEA] text-[#C0392B] border border-[#C0392B]/20'
                      : 'bg-[#F3F4F6] text-[#4B5563] border border-[#4B5563]/20'
                  }`}>
                    {item.status}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#9B9B9B]" />
                </div>
              </div>
            );
          })}
          
          <div className="mt-4 p-4 border border-dashed border-[#C9951A]/30 rounded-[16px] text-center bg-[#FDF8ED]/50">
            <p className="text-[12px] font-medium text-cit-gold">More {title.toLowerCase()} will appear here soon.</p>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
