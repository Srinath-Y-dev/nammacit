import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Bell, Calendar, ClipboardList, Megaphone } from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    { id: 1, type: 'od', title: 'OD Request Approved', desc: 'Your OD request for Hackathon 2024 was approved by HOD.', time: '2m ago', unread: true },
    { id: 2, type: 'announcement', title: 'End Semester Exams', desc: 'The schedule for the Even Semester exams has been published.', time: '1h ago', unread: true },
    { id: 3, type: 'event', title: 'Registration Confirmed', desc: 'You are successfully registered for AI/ML Workshop.', time: '2h ago', unread: false },
    { id: 4, type: 'system', title: 'Profile Updated', desc: 'Your password was successfully changed.', time: '1d ago', unread: false },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'od': return <ClipboardList className="w-4 h-4 text-[#1A7A4A]" />;
      case 'announcement': return <Megaphone className="w-4 h-4 text-[#C0392B]" />;
      case 'event': return <Calendar className="w-4 h-4 text-cit-gold" />;
      default: return <Bell className="w-4 h-4 text-[#6B6B6B]" />;
    }
  };

  const getIconBg = (type) => {
    switch(type) {
      case 'od': return 'bg-[#E8F7EF] border-[#1A7A4A]/20';
      case 'announcement': return 'bg-[#FDF4F3] border-[#C0392B]/20';
      case 'event': return 'bg-[#FDF8ED] border-cit-gold/20';
      default: return 'bg-[#F8F6F1] border-[#E8E0CC]';
    }
  };

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0 flex justify-between items-end">
          <div>
            <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Notifications</h1>
            <p className="text-[12px] text-cit-text-secondary">Stay updated with campus activities</p>
          </div>
          <button className="text-[10px] font-bold text-cit-gold uppercase tracking-wide">Mark all as read</button>
        </div>

        <div className="px-5 flex flex-col gap-3">
          {notifications.map(notif => (
            <div key={notif.id} className={`bg-white border rounded-[16px] p-4 flex gap-3 relative overflow-hidden transition-shadow ${notif.unread ? 'border-cit-gold/30 shadow-[0_4px_12px_rgba(201,149,26,0.08)]' : 'border-[#F0EAD8] shadow-sm'}`}>
              {notif.unread && <div className="absolute top-0 bottom-0 left-0 w-1 bg-cit-gold"></div>}
              
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${getIconBg(notif.type)}`}>
                {getIcon(notif.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <h4 className={`text-[13px] truncate ${notif.unread ? 'font-black text-[#1A1A1A]' : 'font-bold text-[#1A1A1A]/80'}`}>
                    {notif.title}
                  </h4>
                  <span className="text-[9px] font-bold text-[#9B9B9B] shrink-0 whitespace-nowrap ml-2">{notif.time}</span>
                </div>
                <p className="text-[11px] text-[#6B6B6B] leading-snug">{notif.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <BottomNav />
    </div>
  );
}
