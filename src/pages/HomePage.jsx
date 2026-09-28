import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Calendar, ClipboardList, Users, Megaphone, Award, ChevronRight, CheckCircle2, XCircle, Bell, Clock, Building2, UserPlus, FileText } from 'lucide-react';

export default function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const role = user?.role || 'student';

  // --- STUDENT DASHBOARD ---
  if (role === 'student') return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        <div className="px-5 pt-2 mb-6 shrink-0 relative z-10">
          <h2 className="text-[15px] font-bold text-cit-text-primary mb-0.5">Good Morning, {user?.name.split(' ')[0]} 👋</h2>
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Welcome Back!</h1>
          <p className="text-[12px] text-cit-text-secondary">Here's what's happening on campus today.</p>
        </div>
        <div className="mb-6 shrink-0">
          <div className="flex gap-3 px-5 overflow-x-auto scrollbar-hide pb-2">
            <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 min-w-[100px] flex flex-col items-center justify-center shadow-sm shrink-0">
              <Calendar className="w-6 h-6 text-cit-gold mb-2" />
              <div className="text-[22px] font-black text-[#1A1A1A] leading-none mb-1">07</div>
              <div className="text-[10px] font-bold text-cit-text-secondary text-center">Upcoming Events</div>
            </div>
            <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 min-w-[100px] flex flex-col items-center justify-center shadow-sm shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#1A7A4A] mb-2" />
              <div className="text-[22px] font-black text-[#1A1A1A] leading-none mb-1">03</div>
              <div className="text-[10px] font-bold text-cit-text-secondary text-center">Registered Events</div>
            </div>
            <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 min-w-[100px] flex flex-col items-center justify-center shadow-sm shrink-0">
              <Megaphone className="w-6 h-6 text-[#C0392B] mb-2" />
              <div className="text-[22px] font-black text-[#1A1A1A] leading-none mb-1">05</div>
              <div className="text-[10px] font-bold text-cit-text-secondary text-center">New Announcements</div>
            </div>
          </div>
        </div>
        <div className="px-5 mb-6 shrink-0">
          <div className="mb-3 text-[10px] font-black text-cit-gold tracking-[1.5px] uppercase">Quick Actions</div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => navigate('/student/od-requests')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left">
              <div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><ClipboardList className="w-4 h-4 text-cit-gold" /></div>
              <span className="text-[11px] font-bold text-[#1A1A1A]">Apply OD</span>
            </button>
            <button onClick={() => navigate('/student/events')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left">
              <div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Calendar className="w-4 h-4 text-cit-gold" /></div>
              <span className="text-[11px] font-bold text-[#1A1A1A]">Explore Events</span>
            </button>
            <button onClick={() => navigate('/student/announcements')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left">
              <div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Megaphone className="w-4 h-4 text-cit-gold" /></div>
              <span className="text-[11px] font-bold text-[#1A1A1A]">Announcements</span>
            </button>
            <button onClick={() => navigate('/student/notifications')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left">
              <div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Bell className="w-4 h-4 text-cit-gold" /></div>
              <span className="text-[11px] font-bold text-[#1A1A1A]">Notifications</span>
            </button>
          </div>
        </div>
        <div className="px-5 shrink-0">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] rounded-[16px] p-4 text-white shadow-lg relative overflow-hidden">
            <div className="text-[10px] font-black text-white/70 tracking-[1.5px] uppercase mb-3">MY OD REQUESTS</div>
            <div className="flex justify-between items-center relative z-10">
              <div className="flex gap-4">
                <div><span className="text-xl font-black text-[#F39C12]">2</span> <span className="text-[10px] text-white/80">Pending</span></div>
                <div><span className="text-xl font-black text-[#2ECC71]">1</span> <span className="text-[10px] text-white/80">Approved</span></div>
                <div><span className="text-xl font-black text-[#E74C3C]">0</span> <span className="text-[10px] text-white/80">Rejected</span></div>
              </div>
              <button onClick={() => navigate('/student/od-requests')} className="text-[11px] font-bold text-cit-gold hover:text-white transition-colors flex items-center gap-1">View All <ChevronRight className="w-3 h-3" /></button>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );

  // --- FACULTY DASHBOARD ---
  if (role === 'faculty') return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        <div className="px-5 pt-2 mb-4 shrink-0">
          <h2 className="text-[15px] font-bold text-cit-text-primary mb-0.5">Good Morning, {user?.name.split(' ')[0]} 👋</h2>
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Faculty Dashboard</h1>
          <p className="text-[12px] text-cit-text-secondary">Here's your campus activity for today.</p>
        </div>
        <div className="px-5 mb-5 shrink-0">
          <div className="bg-[#FEF3DC] border border-[#FAD7A1] rounded-[12px] p-3.5 flex items-center gap-3">
            <div className="text-2xl">⚠️</div>
            <div className="flex-1">
              <h4 className="text-[12px] font-bold text-[#8B5E0A]">8 OD requests awaiting your approval</h4>
            </div>
            <button onClick={() => navigate('/faculty/od-approvals')} className="text-[11px] font-bold text-[#8B5E0A] flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg shadow-sm">Review Now <ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>
        <div className="mb-6 shrink-0">
          <div className="flex gap-3 px-5 overflow-x-auto scrollbar-hide pb-2">
            {[
              { val: '08', lbl: 'Pending ODs', ic: ClipboardList },
              { val: '03', lbl: 'Upcoming Events', ic: Calendar },
              { val: '02', lbl: 'Event Requests', ic: FileText },
              { val: '05', lbl: 'Announcements', ic: Megaphone },
            ].map((stat, i) => {
              const Icon = stat.ic;
              return (
                <div key={i} className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 min-w-[95px] flex flex-col items-center justify-center shadow-sm shrink-0">
                  <Icon className="w-5 h-5 text-cit-gold mb-2" />
                  <div className="text-[20px] font-black text-[#1A1A1A] leading-none mb-1">{stat.val}</div>
                  <div className="text-[9px] font-bold text-cit-text-secondary text-center">{stat.lbl}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-5 mb-6 shrink-0">
          <div className="mb-3 text-[10px] font-black text-cit-gold tracking-[1.5px] uppercase">Quick Actions</div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => navigate('/faculty/od-approvals')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left"><div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><ClipboardList className="w-4 h-4 text-cit-gold" /></div><span className="text-[11px] font-bold text-[#1A1A1A]">Review ODs</span></button>
            <button onClick={() => navigate('/faculty/events/create')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left"><div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Calendar className="w-4 h-4 text-cit-gold" /></div><span className="text-[11px] font-bold text-[#1A1A1A]">Create Event</span></button>
            <button onClick={() => navigate('/faculty/venue-schedule')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left"><div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Building2 className="w-4 h-4 text-cit-gold" /></div><span className="text-[11px] font-bold text-[#1A1A1A]">Venue Schedule</span></button>
            <button onClick={() => navigate('/faculty/announcements/create')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left"><div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Megaphone className="w-4 h-4 text-cit-gold" /></div><span className="text-[11px] font-bold text-[#1A1A1A]">Post Notice</span></button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );

  // --- CLUB HEAD DASHBOARD ---
  if (role === 'clubhead') return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        <div className="px-5 pt-2 mb-4 shrink-0">
          <h2 className="text-[15px] font-bold text-cit-text-primary mb-0.5">Good Morning, {user?.name.split(' ')[0]} 👋</h2>
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Club Dashboard</h1>
          <p className="text-[12px] font-bold text-cit-gold mb-1">{user?.clubName}</p>
          <p className="text-[12px] text-cit-text-secondary">Here's your club activity today.</p>
        </div>
        <div className="px-5 mb-5 shrink-0 flex flex-col gap-2">
          <div className="bg-[#FEF3DC] border border-[#FAD7A1] rounded-[12px] p-3 flex items-center gap-3">
            <div className="text-xl">⚠️</div>
            <div className="flex-1"><h4 className="text-[11px] font-bold text-[#8B5E0A]">8 membership requests pending</h4></div>
            <button onClick={() => navigate('/clubhead/members')} className="text-[10px] font-bold text-[#8B5E0A] bg-white px-2 py-1.5 rounded-lg shadow-sm">Review →</button>
          </div>
          <div className="bg-[#EDF2FA] border border-[#C6D8F5] rounded-[12px] p-3 flex items-center gap-3">
            <div className="text-xl">⏳</div>
            <div className="flex-1"><h4 className="text-[11px] font-bold text-[#2A5298]">Venue request for Hackathon is under review</h4></div>
          </div>
        </div>
        <div className="mb-6 shrink-0">
          <div className="flex gap-3 px-5 overflow-x-auto scrollbar-hide pb-2">
            {[
              { val: '120', lbl: 'Total Members', ic: Users },
              { val: '02', lbl: 'Active Events', ic: Calendar },
              { val: '04', lbl: 'Upcoming Events', ic: Clock },
              { val: '01', lbl: 'Venue Requests', ic: Building2 },
            ].map((stat, i) => {
              const Icon = stat.ic;
              return (
                <div key={i} className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 min-w-[95px] flex flex-col items-center justify-center shadow-sm shrink-0">
                  <Icon className="w-5 h-5 text-cit-gold mb-2" />
                  <div className="text-[20px] font-black text-[#1A1A1A] leading-none mb-1">{stat.val}</div>
                  <div className="text-[9px] font-bold text-cit-text-secondary text-center">{stat.lbl}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-5 mb-6 shrink-0">
          <div className="mb-3 text-[10px] font-black text-cit-gold tracking-[1.5px] uppercase">Quick Actions</div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => navigate('/clubhead/events/create')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left"><div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Calendar className="w-4 h-4 text-cit-gold" /></div><span className="text-[11px] font-bold text-[#1A1A1A]">Create Event</span></button>
            <button onClick={() => navigate('/clubhead/venue-booking/request')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left"><div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Building2 className="w-4 h-4 text-cit-gold" /></div><span className="text-[11px] font-bold text-[#1A1A1A]">Request Venue</span></button>
            <button onClick={() => navigate('/clubhead/events')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left"><div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Users className="w-4 h-4 text-cit-gold" /></div><span className="text-[11px] font-bold text-[#1A1A1A]">Registrations</span></button>
            <button onClick={() => navigate('/clubhead/announcements/create')} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex items-center gap-3 shadow-sm hover:bg-gray-50 text-left"><div className="w-8 h-8 rounded-full bg-[#FDF8ED] flex items-center justify-center shrink-0"><Megaphone className="w-4 h-4 text-cit-gold" /></div><span className="text-[11px] font-bold text-[#1A1A1A]">Announcement</span></button>
          </div>
        </div>
        <div className="px-5 shrink-0">
          <div className="mb-3 text-[10px] font-black text-cit-gold tracking-[1.5px] uppercase flex justify-between items-center">
            <span>Upcoming Events</span>
            <span onClick={() => navigate('/clubhead/events')} className="text-cit-text-muted hover:text-cit-gold cursor-pointer flex items-center gap-1">View All <ChevronRight className="w-3 h-3" /></span>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { id: 1, name: 'Hackathon 2024', date: 'May 25, 2024', status: 'Approved', regs: 142 },
              { id: 2, name: 'AI/ML Bootcamp', date: 'June 05, 2024', status: 'Pending', regs: 0 },
            ].map(ev => (
              <div key={ev.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 shadow-sm flex flex-col gap-2 relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <h3 className="text-[14px] font-black text-[#1A1A1A]">{ev.name}</h3>
                  {ev.status === 'Approved' ? (
                    <span className="bg-[#E8F7EF] text-[#1A7A4A] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#1A7A4A]/20">{ev.status}</span>
                  ) : (
                    <span className="bg-[#FEF3DC] text-[#8B5E0A] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#FAD7A1]">{ev.status}</span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-[11px] font-medium text-[#6B6B6B]">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-cit-gold" /> {ev.date}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3 text-cit-gold" /> {ev.regs} Registrations</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );

  // --- ADMIN DASHBOARD ---
  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        <div className="px-5 pt-2 mb-4 shrink-0">
          <h2 className="text-[15px] font-bold text-cit-text-primary mb-0.5">Good Morning, Admin 👋</h2>
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Control Panel</h1>
          <p className="text-[12px] text-cit-text-secondary">Campus-wide overview for today.</p>
        </div>
        <div className="px-5 mb-5 shrink-0 flex flex-col gap-2">
          <div className="bg-[#FEF3DC] border border-[#FAD7A1] rounded-[12px] p-2.5 flex items-center gap-3">
            <div className="text-lg">⚠️</div>
            <div className="flex-1"><h4 className="text-[11px] font-bold text-[#8B5E0A]">12 event approvals pending</h4></div>
            <button onClick={() => navigate('/admin/events')} className="text-[10px] font-bold text-[#8B5E0A] bg-white px-2 py-1 rounded shadow-sm">Review →</button>
          </div>
          <div className="bg-[#FEF3DC] border border-[#FAD7A1] rounded-[12px] p-2.5 flex items-center gap-3">
            <div className="text-lg">⚠️</div>
            <div className="flex-1"><h4 className="text-[11px] font-bold text-[#8B5E0A]">5 venue requests pending</h4></div>
            <button onClick={() => navigate('/admin/venue-management')} className="text-[10px] font-bold text-[#8B5E0A] bg-white px-2 py-1 rounded shadow-sm">Review →</button>
          </div>
        </div>
        <div className="mb-6 shrink-0">
          <div className="grid grid-cols-4 gap-3 px-5">
            {[
              { val: '1.2k', lbl: 'Students', ic: Users },
              { val: '86', lbl: 'Faculty', ic: UserPlus },
              { val: '18', lbl: 'Clubs', ic: Award },
              { val: '14', lbl: 'Events', ic: Calendar },
            ].map((stat, i) => {
              const Icon = stat.ic;
              return (
                <div key={i} className="bg-white border border-[#F0EAD8] rounded-[16px] p-2.5 flex flex-col items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5 text-cit-gold mb-1" />
                  <div className="text-[16px] font-black text-[#1A1A1A] leading-none mb-1">{stat.val}</div>
                  <div className="text-[8px] font-bold text-cit-text-secondary text-center leading-tight">{stat.lbl}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-5 shrink-0">
          <div className="mb-3 text-[10px] font-black text-cit-gold tracking-[1.5px] uppercase">Campus Activity Feed</div>
          <div className="flex flex-col gap-2">
            {[
              { ic: '📋', text: '48 new OD requests submitted today', time: 'Just now' },
              { ic: '📅', text: 'Hackathon 2024 – 35 registrations', time: '2h ago' },
              { ic: '👥', text: 'New Club Request – AI Research Club', time: '5h ago' },
              { ic: '📢', text: 'Exam Schedule announcement posted', time: '1d ago' },
            ].map((feed, i) => (
              <div key={i} className="bg-white border border-[#F0EAD8] rounded-[12px] p-3 flex gap-3 items-center shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#FDF8ED] flex items-center justify-center text-sm">{feed.ic}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[11px] font-bold text-[#1A1A1A] truncate">{feed.text}</h4>
                  <p className="text-[9px] text-cit-text-muted mt-0.5">{feed.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
