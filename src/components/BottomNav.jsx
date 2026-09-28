import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Home, Calendar, ClipboardList, Bell, User, Users, Settings, Megaphone, Building2 } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || 'student';

  const navConfig = {
    student: [
      { id: 'home', icon: Home, label: 'Home', path: '/student/home' },
      { id: 'events', icon: Calendar, label: 'Events', path: '/student/events' },
      { id: 'od', icon: ClipboardList, label: 'OD Requests', path: '/student/od-requests' },
      { id: 'notifications', icon: Bell, label: 'Notifications', path: '/student/notifications' },
      { id: 'profile', icon: User, label: 'Profile', path: '/student/profile' },
    ],
    faculty: [
      { id: 'home', icon: Home, label: 'Home', path: '/faculty/home' },
      { id: 'od-approvals', icon: ClipboardList, label: 'OD Approvals', path: '/faculty/od-approvals' },
      { id: 'events', icon: Calendar, label: 'Events', path: '/faculty/events' },
      { id: 'announcements', icon: Megaphone, label: 'Announcements', path: '/faculty/announcements' },
      { id: 'profile', icon: User, label: 'Profile', path: '/faculty/profile' },
    ],
    clubhead: [
      { id: 'home', icon: Home, label: 'Home', path: '/clubhead/home' },
      { id: 'events', icon: Calendar, label: 'Events', path: '/clubhead/events' },
      { id: 'members', icon: Users, label: 'Members', path: '/clubhead/members' },
      { id: 'venue', icon: Building2, label: 'Venue', path: '/clubhead/venue-booking' },
      { id: 'profile', icon: User, label: 'Profile', path: '/clubhead/profile' },
    ],
    admin: [
      { id: 'home', icon: Home, label: 'Home', path: '/admin/home' },
      { id: 'users', icon: Users, label: 'Users', path: '/admin/users' },
      { id: 'events', icon: Calendar, label: 'Events', path: '/admin/events' },
      { id: 'venue', icon: Building2, label: 'Venue', path: '/admin/venue-management' },
      { id: 'settings', icon: Settings, label: 'Settings', path: '/admin/settings' },
    ]
  };

  const currentNav = navConfig[role] || navConfig.student;

  return (
    <div className="sticky bottom-0 z-10 bg-white border-t border-[#E8E0CC] px-2 pt-2 pb-5 flex justify-between items-center shrink-0">
      {currentNav.map(item => {
        // Precise active matching
        const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
        const Icon = item.icon;
        
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className="flex-1 flex flex-col items-center justify-center gap-1 min-w-[64px]"
          >
            <div className={`relative flex items-center justify-center w-8 h-8 rounded-xl transition-colors ${
              isActive ? 'bg-[#FAEEDA] text-[#C9951A]' : 'text-[#9B9B9B]'
            }`}>
              <Icon className={`w-[22px] h-[22px] ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              {item.id === 'notifications' && (
                <div className="absolute top-0.5 right-1 w-2.5 h-2.5 bg-[#C9951A] rounded-full border-[1.5px] border-white"></div>
              )}
            </div>
            <span className={`text-[9px] font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-0.5 ${
              isActive ? 'text-[#C9951A]' : 'text-[#9B9B9B]'
            }`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
