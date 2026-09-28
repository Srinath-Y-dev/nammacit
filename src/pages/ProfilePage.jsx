import { useAuth } from '../context/AuthContext';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Settings, Calendar, ClipboardList, BookOpen, Clock, Award, Star, Users, Edit3, ChevronRight, ShieldAlert, LogOut, Building2, UserPlus, Megaphone, BarChart2, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const role = user?.role || 'student';
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getProfileData = () => {
    switch (role) {
      case 'student': return {
        title: 'Student Profile',
        badge: 'Student',
        idLabel: 'NAMMA CIT ID',
        idNumber: user?.campusId,
        joined: 'Aug 2021',
        infoTitle: 'Academic Info',
        infoGrid: [
          { icon: <BookOpen className="w-5 h-5 text-cit-gold" />, label: 'Department', value: user?.department || 'CSE' },
          { icon: <Calendar className="w-5 h-5 text-cit-gold" />, label: 'Year', value: user?.year || '3rd Year' },
          { icon: <ClipboardList className="w-5 h-5 text-cit-gold" />, label: 'Roll No', value: user?.rollNumber || '21CS045' },
          { icon: <Users className="w-5 h-5 text-cit-gold" />, label: 'Section', value: user?.section || 'CSE-A' },
        ],
        quickAccess: [
          { icon: <ClipboardList className="w-5 h-5 text-cit-gold" />, label: 'Attendance' },
          { icon: <Clock className="w-5 h-5 text-cit-gold" />, label: 'Timetable' },
          { icon: <Award className="w-5 h-5 text-cit-gold" />, label: 'Certificates' },
          { icon: <Star className="w-5 h-5 text-cit-gold" />, label: 'Achievements' },
          { icon: <Users className="w-5 h-5 text-cit-gold" />, label: 'Clubs' },
          { icon: <Calendar className="w-5 h-5 text-cit-gold" />, label: 'Events' },
          { icon: <BookOpen className="w-5 h-5 text-cit-gold" />, label: 'OD Requests' },
          { icon: <Settings className="w-5 h-5 text-cit-gold" />, label: 'Settings' },
        ]
      };
      case 'faculty': return {
        title: 'Faculty Profile',
        badge: 'Faculty',
        idLabel: 'FACULTY ID',
        idNumber: user?.employeeId,
        joined: 'July 2018',
        infoTitle: 'Professional Info',
        infoGrid: [
          { icon: <BookOpen className="w-5 h-5 text-cit-gold" />, label: 'Department', value: user?.department || 'IT' },
          { icon: <Award className="w-5 h-5 text-cit-gold" />, label: 'Designation', value: user?.designation || 'Assoc. Prof' },
          { icon: <ClipboardList className="w-5 h-5 text-cit-gold" />, label: 'Employee ID', value: user?.employeeId || 'EMP-042' },
          { icon: <Star className="w-5 h-5 text-cit-gold" />, label: 'Experience', value: '8 Years' },
        ],
        quickAccess: [
          { icon: <ClipboardList className="w-5 h-5 text-cit-gold" />, label: 'OD Approvals' },
          { icon: <Calendar className="w-5 h-5 text-cit-gold" />, label: 'My Events' },
          { icon: <Building2 className="w-5 h-5 text-cit-gold" />, label: 'Venue Schedule' },
          { icon: <Award className="w-5 h-5 text-cit-gold" />, label: 'Announcements' },
          { icon: <Settings className="w-5 h-5 text-cit-gold" />, label: 'Settings' },
        ]
      };
      case 'clubhead': return {
        title: 'Club Head Profile',
        badge: 'Club Head',
        idLabel: 'CLUB HEAD ID',
        idNumber: user?.campusId,
        joined: 'Aug 2022',
        infoTitle: 'Club Info',
        infoGrid: [
          { icon: <BookOpen className="w-5 h-5 text-cit-gold" />, label: 'Department', value: user?.department || 'CSE' },
          { icon: <Calendar className="w-5 h-5 text-cit-gold" />, label: 'Year', value: user?.year || '2nd Year' },
          { icon: <Star className="w-5 h-5 text-cit-gold" />, label: 'Club Name', value: user?.clubName || 'AI Club' },
          { icon: <Award className="w-5 h-5 text-cit-gold" />, label: 'Role', value: user?.clubRole || 'President' },
        ],
        quickAccess: [
          { icon: <Calendar className="w-5 h-5 text-cit-gold" />, label: 'Create Event' },
          { icon: <Building2 className="w-5 h-5 text-cit-gold" />, label: 'Request Venue' },
          { icon: <Users className="w-5 h-5 text-cit-gold" />, label: 'Members' },
          { icon: <ClipboardList className="w-5 h-5 text-cit-gold" />, label: 'Registrations' },
          { icon: <Award className="w-5 h-5 text-cit-gold" />, label: 'Announcements' },
          { icon: <Settings className="w-5 h-5 text-cit-gold" />, label: 'Settings' },
        ]
      };
      case 'admin': return {
        title: 'Admin Profile',
        badge: 'System Admin',
        idLabel: 'ADMIN ID',
        idNumber: user?.adminId,
        joined: 'Jan 2015',
        infoTitle: 'Access Info',
        infoGrid: [
          { icon: <Settings className="w-5 h-5 text-cit-gold" />, label: 'Role', value: 'Global Admin' },
          { icon: <Users className="w-5 h-5 text-cit-gold" />, label: 'Access', value: 'Full' },
          { icon: <ClipboardList className="w-5 h-5 text-cit-gold" />, label: 'Admin ID', value: user?.adminId || 'ADM-001' },
          { icon: <Star className="w-5 h-5 text-cit-gold" />, label: 'Level', value: 'Tier 1' },
        ],
        quickAccess: [
          { icon: <Users className="w-5 h-5 text-cit-gold" />, label: 'Users' },
          { icon: <Calendar className="w-5 h-5 text-cit-gold" />, label: 'Events' },
          { icon: <Building2 className="w-5 h-5 text-cit-gold" />, label: 'Venues' },
          { icon: <Award className="w-5 h-5 text-cit-gold" />, label: 'Clubs' },
          { icon: <Megaphone className="w-5 h-5 text-cit-gold" />, label: 'Announcements' },
          { icon: <BarChart2 className="w-5 h-5 text-cit-gold" />, label: 'Reports' },
          { icon: <Bell className="w-5 h-5 text-cit-gold" />, label: 'Notifications' },
          { icon: <Settings className="w-5 h-5 text-cit-gold" />, label: 'Settings' },
        ]
      };
      default: return null;
    }
  };

  const data = getProfileData();
  if (!data) return null;

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        {/* Header Section */}
        <div className="px-5 pt-2 mb-4 relative z-10 shrink-0">
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">{data.title}</h1>
          <p className="text-[12px] text-cit-text-secondary max-w-[200px]">View and manage your personal information</p>
        </div>

        {/* Profile Card */}
        <div className="px-5 mb-5 shrink-0 relative z-10">
          <div className="bg-white rounded-[20px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#F0EAD8] flex flex-col relative">
            <div className="flex gap-4 mb-2">
              <div className="w-[84px] h-[84px] shrink-0 rounded-full bg-[#FDF8ED] border-2 border-cit-gold p-1 relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cit-gold to-cit-gold-light flex items-center justify-center text-white text-3xl font-bold">
                  {user?.initials}
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-cit-gold rounded-full border-2 border-white flex items-center justify-center text-white cursor-pointer shadow-sm">
                  <Edit3 className="w-3 h-3" />
                </div>
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-[18px] font-black text-[#1A1A1A] truncate">{user?.name}</h2>
                  <span className="bg-[#E8F7EF] text-[#1A7A4A] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 flex items-center gap-1 border border-[#1A7A4A]/20">
                    <span className="w-1.5 h-1.5 bg-[#1A7A4A] rounded-full"></span> Active
                  </span>
                </div>
                <div className="text-[11px] font-bold text-cit-gold mb-1 truncate">{data.badge}</div>
                <div className="text-[11px] text-[#6B6B6B] flex items-center gap-1.5 truncate">
                  <span className="text-[#A07810]">✉</span> <span className="truncate">{user?.email}</span>
                </div>
                <div className="text-[11px] text-[#6B6B6B] flex items-center gap-1.5 truncate mt-1">
                  <span className="text-[#A07810]">📞</span> <span className="truncate">{user?.phone}</span>
                </div>
              </div>
            </div>
            
            <button className="self-end border-[1.5px] border-[#C9951A] text-[#C9951A] text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 mt-2 hover:bg-[#FDF8ED] transition-colors">
              Edit Profile <Edit3 className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Dynamic ID Card */}
        <div className="px-5 mb-6 shrink-0">
          <div className="bg-gradient-to-br from-[#A07810] to-[#E8B429] rounded-[16px] p-4 flex shadow-[0_8px_20px_rgba(201,149,26,0.3)] relative overflow-hidden text-white">
            <div className="flex-1 relative z-10 flex flex-col justify-between">
              <div>
                <div className="text-[9px] font-bold text-white/80 uppercase tracking-widest mb-0.5 flex items-center gap-1">{data.idLabel} <ChevronRight className="w-3 h-3" /></div>
                <div className="text-[18px] font-black tracking-widest font-mono">{data.idNumber}</div>
              </div>
              <div className="mt-4 flex items-center">
                <div className="h-8 w-48 bg-white/20 rounded flex items-center justify-between px-1 backdrop-blur-sm">
                  {/* Fake barcode */}
                  {[...Array(30)].map((_, i) => (
                    <div key={i} className="bg-white h-6" style={{ width: Math.random() > 0.5 ? '2px' : '3px', opacity: Math.random() > 0.3 ? 1 : 0 }}></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="shrink-0 pl-4 border-l border-white/20 relative z-10 flex flex-col justify-center gap-3">
              <div>
                <div className="text-[8px] font-medium text-white/80 flex items-center gap-1 mb-0.5"><Calendar className="w-2.5 h-2.5" /> Since</div>
                <div className="text-[11px] font-bold">{data.joined}</div>
              </div>
              <div>
                <div className="text-[8px] font-medium text-white/80 flex items-center gap-1 mb-0.5"><Award className="w-2.5 h-2.5" /> Status</div>
                <div className="text-[11px] font-bold flex items-center gap-1"><ShieldAlert className="w-3 h-3" /> Active</div>
              </div>
            </div>
            <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-10 pointer-events-none">
              <span className="text-8xl font-black">N</span>
            </div>
          </div>
        </div>

        {/* Club Head Permissions Block (If Club Head) */}
        {role === 'clubhead' && (
          <div className="px-5 mb-6 shrink-0">
            <div className="mb-3 text-[10px] font-black text-cit-gold tracking-[1.5px] uppercase">Permissions Overview</div>
            <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-3.5 shadow-sm">
              <div className="flex gap-2 items-start mb-2">
                <span className="text-[#1A7A4A] font-bold text-[12px] mt-0.5">✅</span>
                <p className="text-[10px] text-cit-text-secondary leading-snug">Can Create/Edit/Cancel Events, Manage Club Members, Request Venues, Create Announcements</p>
              </div>
              <div className="flex gap-2 items-start pt-2 border-t border-[#F0EAD8]">
                <span className="text-[#C0392B] font-bold text-[12px] mt-0.5">❌</span>
                <p className="text-[10px] text-cit-text-secondary leading-snug">Cannot Approve OD Requests, Allocate Venues, Override Approvals</p>
              </div>
            </div>
          </div>
        )}

        {/* Info Grid */}
        <div className="px-5 mb-6 shrink-0">
          <div className="mb-3 text-[10px] font-black text-cit-gold tracking-[1.5px] uppercase">{data.infoTitle}</div>
          <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-3 flex shadow-sm">
            {data.infoGrid.map((info, i) => (
              <div key={i} className={`flex-1 flex flex-col items-center justify-center py-2 ${i !== data.infoGrid.length - 1 ? 'border-r border-[#F0EAD8]' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-[#FDF8ED] flex items-center justify-center mb-1.5">{info.icon}</div>
                <div className="text-[9px] font-bold text-[#6B6B6B] mb-0.5 text-center px-1">{info.label}</div>
                <div className="text-[10px] font-black text-[#1A1A1A] text-center">{info.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="px-5 mb-6 shrink-0">
          <div className="mb-3 text-[10px] font-black text-cit-gold tracking-[1.5px] uppercase">Quick Access</div>
          <div className="grid grid-cols-4 gap-3">
            {data.quickAccess.map((item, i) => (
              <div key={i} className="bg-white border border-[#F0EAD8] rounded-[12px] p-2.5 flex flex-col items-center justify-center gap-1.5 shadow-sm cursor-pointer hover:bg-gray-50">
                <div className="w-9 h-9 rounded-lg border border-[#F0EAD8] flex items-center justify-center">{item.icon}</div>
                <span className="text-[8px] font-bold text-[#1A1A1A] text-center px-1 leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div className="px-5 mt-2 mb-6 shrink-0">
          <button 
            onClick={handleLogout}
            className="w-full py-3 bg-white border border-[#FDECEA] text-[#C0392B] rounded-[14px] font-bold text-[12px] flex items-center justify-center gap-2 shadow-[0_2px_8px_rgba(192,57,43,0.06)] hover:bg-[#FDECEA] transition-colors"
          >
            <LogOut className="w-4 h-4" /> Log Out
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
