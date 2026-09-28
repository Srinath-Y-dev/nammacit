import { Menu, Bell, ArrowLeft, X, Home, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function TopNav({ backButton }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const role = user?.role || 'student';
  
  const handleProfileClick = () => {
    navigate(`/${role}/profile`);
  };

  const handleLogout = () => {
    if (logout) logout();
    navigate('/login');
  };

  return (
    <>
      <div className="sticky top-0 z-20 bg-[#F8F6F1] px-5 py-4 flex items-center justify-between shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          {backButton ? (
            <button 
              onClick={() => navigate(-1)}
              className="w-8 h-8 bg-white border border-cit-border rounded-lg flex items-center justify-center text-cit-text-primary shadow-sm cursor-pointer hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={() => setIsMenuOpen(true)} className="p-1 -ml-1 cursor-pointer hover:bg-black/5 rounded-lg transition-colors">
              <Menu className="w-6 h-6 text-cit-text-primary" />
            </button>
          )}
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cit-gold to-cit-gold-light flex items-center justify-center text-white font-bold text-lg shadow-sm">
            C
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-black text-[14px] text-cit-text-primary leading-none mb-0.5">NAMMA CIT</span>
            <span className="text-[9px] uppercase text-cit-gold-dark font-bold tracking-wider leading-none">Smart Campus</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer hover:bg-black/5 p-1.5 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-cit-text-primary" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-cit-gold rounded-full border border-[#F8F6F1]"></div>
          </div>
          <button 
            onClick={handleProfileClick}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-cit-gold to-cit-gold-light flex items-center justify-center text-white font-bold text-sm shadow-sm hover:opacity-90 transition-opacity"
          >
            {user?.initials || 'U'}
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="relative w-[280px] bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="p-5 bg-[#F8F6F1] border-b border-cit-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cit-gold to-cit-gold-light flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  {user?.initials || 'U'}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[15px] text-cit-text-primary">{user?.name || 'User'}</span>
                  <span className="text-[11px] text-cit-text-secondary capitalize">{role}</span>
                </div>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-cit-text-secondary" />
              </button>
            </div>
            
            <div className="flex-1 py-4 overflow-y-auto">
              <div className="px-3 space-y-1">
                <button onClick={() => { setIsMenuOpen(false); navigate(`/${role}/home`); }} className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl hover:bg-[#F8F6F1] transition-colors text-cit-text-primary font-semibold text-[14px]">
                  <Home className="w-5 h-5 text-cit-gold" /> Home
                </button>
                <button onClick={() => { setIsMenuOpen(false); handleProfileClick(); }} className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl hover:bg-[#F8F6F1] transition-colors text-cit-text-primary font-semibold text-[14px]">
                  <User className="w-5 h-5 text-cit-gold" /> Profile
                </button>
                <button onClick={() => { setIsMenuOpen(false); navigate(`/${role}/settings`); }} className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-xl hover:bg-[#F8F6F1] transition-colors text-cit-text-primary font-semibold text-[14px]">
                  <Settings className="w-5 h-5 text-cit-gold" /> Settings
                </button>
              </div>
            </div>
            
            <div className="p-5 border-t border-cit-border">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FDECEA] text-[#C0392B] rounded-xl font-bold text-[14px] hover:bg-[#fbd3cf] transition-colors"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
