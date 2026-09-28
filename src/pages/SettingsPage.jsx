import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import { Settings, Shield, Bell, UserPlus, Database, MonitorSmartphone, Palette, Globe, ChevronRight, LogOut, Key, User, Smartphone } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('General');
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const role = user?.role || 'student';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getSettingsGroups = () => {
    if (role === 'admin') {
      return [
        {
          title: 'System Configuration',
          items: [
            { icon: Globe, label: 'Institution Details', desc: 'Manage CIT name, logo, and contact info' },
            { icon: Database, label: 'Academic Terms', desc: 'Configure semesters and academic years' },
            { icon: UserPlus, label: 'Registration Settings', desc: 'Control new user signups and default roles' },
          ]
        },
        {
          title: 'Security & Access',
          items: [
            { icon: Shield, label: 'Role Permissions', desc: 'Customize what each user role can access' },
            { icon: MonitorSmartphone, label: 'Active Sessions', desc: 'View and manage logged-in devices' },
          ]
        },
        {
          title: 'Preferences',
          items: [
            { icon: Palette, label: 'Appearance', desc: 'Theme colors and branding options' },
            { icon: Bell, label: 'Notification Rules', desc: 'System-wide email and push alert settings' },
          ]
        }
      ];
    } else {
      return [
        {
          title: 'Account',
          items: [
            { icon: User, label: 'Personal Information', desc: 'Update your contact details and bio' },
            { icon: Key, label: 'Password & Security', desc: 'Change password and set up 2FA' },
          ]
        },
        {
          title: 'Preferences',
          items: [
            { icon: Bell, label: 'Notifications', desc: 'Choose what updates you want to receive' },
            { icon: Palette, label: 'Appearance', desc: 'Switch between light and dark mode' },
            { icon: Smartphone, label: 'App Settings', desc: 'Manage local data and caching' },
          ]
        }
      ];
    }
  };

  const settingsGroups = getSettingsGroups();

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0">
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Settings</h1>
          <p className="text-[12px] text-cit-text-secondary">
            {role === 'admin' ? 'Configure NAMMA CIT platform preferences' : 'Manage your account and app preferences'}
          </p>
        </div>

        <div className="px-5 flex flex-col gap-6">
          {settingsGroups.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3 className="text-[10px] font-black text-cit-gold tracking-[1.5px] uppercase ml-1">{group.title}</h3>
              <div className="bg-white border border-[#F0EAD8] rounded-[16px] shadow-sm overflow-hidden flex flex-col">
                {group.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className={`p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors ${i !== group.items.length - 1 ? 'border-b border-[#F0EAD8]' : ''}`}>
                      <div className="w-10 h-10 rounded-xl bg-[#FDF8ED] border border-cit-gold/20 flex items-center justify-center shrink-0 text-cit-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[13px] font-bold text-[#1A1A1A]">{item.label}</h4>
                        <p className="text-[11px] text-[#6B6B6B] truncate mt-0.5">{item.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#9B9B9B] shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {role === 'admin' && (
            <div className="mt-4 bg-[#FDF4F3] border border-[#FDECEA] rounded-[16px] p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#FDECEA] flex items-center justify-center shrink-0 text-[#C0392B]">
                <Settings className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-[13px] font-bold text-[#C0392B]">Danger Zone</h4>
                <p className="text-[11px] text-[#C0392B]/80 mt-0.5 mb-3">Irreversible and destructive actions.</p>
                <button className="text-[11px] font-bold bg-white text-[#C0392B] border border-[#FDECEA] px-4 py-2 rounded-[10px] shadow-sm hover:bg-[#FDECEA] transition-colors">
                  Reset System Data
                </button>
              </div>
            </div>
          )}

          {/* Logout Button */}
          <div className="mt-2 mb-6">
            <button 
              onClick={handleLogout}
              className="w-full py-3 bg-white border border-[#FDECEA] text-[#C0392B] rounded-[14px] font-bold text-[12px] flex items-center justify-center gap-2 shadow-[0_2px_8px_rgba(192,57,43,0.06)] hover:bg-[#FDECEA] transition-colors"
            >
              <LogOut className="w-4 h-4" /> Log Out
            </button>
          </div>

        </div>
      </div>
      <BottomNav />
    </div>
  );
}
