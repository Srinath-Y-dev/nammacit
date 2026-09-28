import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Lock, EyeOff, Globe } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [role, setRole] = useState('student');

  const handleLogin = () => {
    login(role);
    if (role === 'student') navigate('/student/home');
    if (role === 'faculty') navigate('/faculty/home');
    if (role === 'clubhead') navigate('/clubhead/home');
    if (role === 'admin') navigate('/admin/home');
  };

  const config = {
    student: {
      label: 'Register Number',
      placeholder: 'e.g. 22MCA001',
      showGoogle: true,
      showRegister: true,
    },
    faculty: {
      label: 'Employee ID',
      placeholder: 'e.g. FAC-IT-042',
      showGoogle: true,
      showRegister: false,
    },
    clubhead: {
      label: 'Register Number',
      placeholder: 'e.g. 22CS045',
      showGoogle: true,
      showRegister: false,
    },
    admin: {
      label: 'Admin ID',
      placeholder: 'e.g. ADM-001',
      showGoogle: false,
      showRegister: false,
    }
  };

  const currentConfig = config[role];

  return (
    <div className="flex flex-col h-full bg-[#FDFBF7] items-center px-6 pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-cit-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-cit-gold opacity-10 rounded-full blur-3xl"></div>
      
      {/* Logo Area */}
      <div className="flex flex-col items-center mb-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl border-2 border-cit-gold flex items-center justify-center mb-3 shadow-sm relative">
          <div className="absolute inset-1 border-[1.5px] border-cit-gold rounded-xl"></div>
          <span className="text-3xl font-black text-cit-gold">N</span>
        </div>
        <h1 className="text-[22px] font-black text-[#1A1A1A] tracking-widest uppercase">NAMMA CIT</h1>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-6 h-[1px] bg-cit-border"></div>
          <span className="text-[8px] font-bold text-cit-gold uppercase tracking-[2px]">Smart Campus Platform</span>
          <div className="w-6 h-[1px] bg-cit-border"></div>
        </div>
      </div>

      <div className="text-center mb-5 relative z-10">
        <h2 className="text-[20px] font-bold text-[#1A1A1A] mb-1">Welcome Back! 👋</h2>
        <p className="text-[#6B6B6B] text-xs">Login to continue to NAMMA CIT</p>
      </div>
      
      {/* Login Card */}
      <div className="w-full bg-white rounded-[20px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#F0EAD8] relative z-10">
        
        {/* Role Selector */}
        <div className="flex bg-[#F8F6F1] rounded-xl p-1 mb-5 border border-cit-border overflow-x-auto scrollbar-hide">
          {[
            { id: 'student', label: 'Student' },
            { id: 'faculty', label: 'Faculty' },
            { id: 'clubhead', label: 'Club Head' },
            { id: 'admin', label: 'Admin' }
          ].map(r => (
            <button 
              key={r.id}
              onClick={() => setRole(r.id)}
              className={`flex-1 min-w-[70px] py-1.5 text-[10px] font-bold rounded-lg transition-colors whitespace-nowrap px-2 ${role === r.id ? 'bg-white shadow-sm text-cit-gold' : 'text-cit-text-muted hover:text-cit-text-secondary'}`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">
            {currentConfig.label}
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#C9951A]" />
            <input 
              type="text" 
              placeholder={currentConfig.placeholder}
              className="w-full border border-cit-border rounded-[12px] py-2.5 pl-9 pr-4 text-[12px] text-cit-text-primary focus:outline-none focus:border-cit-gold bg-white"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Password</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#A07810]" />
            <input 
              type="password" 
              placeholder="••••••••••••••••"
              className="w-full border border-cit-border rounded-[12px] py-2.5 pl-9 pr-9 text-[12px] text-cit-text-primary focus:outline-none focus:border-cit-gold bg-white"
            />
            <EyeOff className="absolute right-3.5 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-cit-text-muted cursor-pointer" />
          </div>
        </div>

        <div className="flex justify-between items-center mb-5">
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-3.5 h-3.5 rounded border border-cit-gold bg-cit-gold flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span className="text-[10px] font-semibold text-[#1A1A1A]">Remember me</span>
          </label>
          <span className="text-[10px] font-bold text-[#A07810] cursor-pointer">Forgot Password?</span>
        </div>

        <button 
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-[#A07810] to-[#E8B429] text-white font-bold py-3 rounded-[12px] shadow-[0_4px_14px_rgba(201,149,26,0.3)] hover:opacity-90 transition-opacity flex justify-center items-center gap-2 mb-5 text-[13px]"
        >
          Login <span className="text-lg leading-none">→</span>
        </button>

        {currentConfig.showGoogle && (
          <>
            <div className="relative flex items-center justify-center mb-5">
              <div className="absolute w-full border-t border-cit-border"></div>
              <span className="bg-white px-3 text-[9px] font-bold text-[#A07810] relative z-10 uppercase">OR</span>
            </div>
            <button className="w-full bg-white border border-cit-border text-[#1A1A1A] font-bold py-3 rounded-[12px] flex justify-center items-center gap-2 hover:bg-gray-50 transition-colors text-[12px]">
              <Globe className="w-[16px] h-[16px] text-blue-500" /> Continue with Google
            </button>
          </>
        )}
      </div>

      {currentConfig.showRegister && (
        <div className="mt-5 text-[11px] font-medium text-[#1A1A1A] relative z-10">
          New here? <span className="font-bold text-[#A07810] cursor-pointer ml-1">Register Now →</span>
        </div>
      )}
    </div>
  );
}
