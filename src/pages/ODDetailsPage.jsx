import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import TopNav from '../components/TopNav';
import { ChevronLeft, Calendar, MapPin, Clock, FileText, CheckCircle2, XCircle, User, AlertTriangle } from 'lucide-react';

export default function ODDetailsPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || 'student';

  const odData = {
    id: "OD-2024-089",
    studentName: "Aditi Verma",
    rollNo: "22CS102",
    dept: "CSE",
    year: "2nd Year",
    event: "Hackathon 2024",
    venue: "Main Auditorium, Central Block",
    date: "May 25, 2024",
    duration: "Full Day",
    reason: "Participating in the annual 12-hour hackathon organized by AI Research Club. Have attached the registration confirmation email as proof.",
    status: "Pending", // Pending, Approved, Rejected
    appliedOn: "May 20, 2024",
    proof: "registration_proof.pdf",
    
    // Timeline
    history: [
      { step: "Submitted", by: "Aditi Verma", date: "May 20, 2024", time: "09:45 AM", status: "completed" },
      { step: "Faculty Approval", by: "Dr. Priya Nair", date: "Pending", time: "", status: "current" },
      { step: "HOD Approval", by: "Dr. S. Kumar", date: "Pending", time: "", status: "upcoming" }
    ]
  };

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-[#F0EAD8] px-5 py-4 flex items-center justify-between shadow-sm">
          <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8F6F1] text-[#1A1A1A] border border-[#E8E0CC]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <h1 className="text-[15px] font-black text-[#1A1A1A]">OD Request Details</h1>
            <p className="text-[10px] font-bold text-cit-text-secondary">{odData.id}</p>
          </div>
          <div className="w-8"></div>
        </div>

        <div className="px-5 pt-5 flex flex-col gap-4">
          
          {/* Status Banner */}
          <div className="bg-[#FEF3DC] border border-[#FAD7A1] rounded-[16px] p-4 flex justify-between items-center shadow-sm">
            <div>
              <p className="text-[10px] font-bold text-[#8B5E0A] uppercase tracking-wide mb-0.5">Current Status</p>
              <h2 className="text-[18px] font-black text-[#8B5E0A] flex items-center gap-2">
                <Clock className="w-5 h-5" /> Pending Faculty Approval
              </h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <span className="text-lg">⏳</span>
            </div>
          </div>

          {/* Student Info (For Faculty/Admin) */}
          {role !== 'student' && (
            <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#333333] flex items-center justify-center text-white font-black text-[16px]">
                {odData.studentName.split(' ').map(n=>n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-black text-[#1A1A1A]">{odData.studentName}</h3>
                <p className="text-[11px] font-bold text-[#6B6B6B]">{odData.rollNo} • {odData.dept} • {odData.year}</p>
              </div>
              <button className="text-[10px] font-bold text-cit-gold bg-[#FDF8ED] border border-cit-gold/20 px-3 py-1.5 rounded-lg">
                View Profile
              </button>
            </div>
          )}

          {/* Event Details */}
          <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm flex flex-col gap-3">
            <h3 className="text-[13px] font-black text-[#1A1A1A] border-b border-[#F0EAD8] pb-2 mb-1">Event Details</h3>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <div>
                <p className="text-[10px] font-bold text-cit-text-secondary uppercase mb-0.5 flex items-center gap-1"><Calendar className="w-3 h-3 text-cit-gold" /> Date</p>
                <p className="text-[12px] font-black text-[#1A1A1A]">{odData.date}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-cit-text-secondary uppercase mb-0.5 flex items-center gap-1"><Clock className="w-3 h-3 text-cit-gold" /> Duration</p>
                <p className="text-[12px] font-black text-[#1A1A1A]">{odData.duration}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] font-bold text-cit-text-secondary uppercase mb-0.5 flex items-center gap-1"><MapPin className="w-3 h-3 text-cit-gold" /> Venue</p>
                <p className="text-[12px] font-black text-[#1A1A1A]">{odData.venue}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[10px] font-bold text-cit-text-secondary uppercase mb-0.5 flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-cit-gold" /> Event Name</p>
                <p className="text-[12px] font-black text-[#1A1A1A]">{odData.event}</p>
              </div>
            </div>
          </div>

          {/* Reason & Proof */}
          <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm flex flex-col gap-3">
            <div>
              <p className="text-[10px] font-bold text-cit-text-secondary uppercase mb-1 flex items-center gap-1"><FileText className="w-3 h-3 text-cit-gold" /> Reason for OD</p>
              <p className="text-[12px] text-[#1A1A1A] leading-relaxed bg-[#F8F6F1] p-3 rounded-[10px] border border-[#E8E0CC]">{odData.reason}</p>
            </div>
            
            <div>
              <p className="text-[10px] font-bold text-cit-text-secondary uppercase mb-1">Attached Proof</p>
              <div className="flex items-center justify-between bg-[#F8F6F1] border border-[#E8E0CC] rounded-[10px] p-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#FDF4F3] text-[#C0392B] flex items-center justify-center font-black text-[10px]">PDF</div>
                  <span className="text-[11px] font-bold text-[#1A1A1A]">{odData.proof}</span>
                </div>
                <button className="text-[10px] font-bold text-cit-gold px-3 py-1 hover:bg-white rounded">View</button>
              </div>
            </div>
          </div>

          {/* Timeline Tracking */}
          <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm flex flex-col gap-3">
            <h3 className="text-[13px] font-black text-[#1A1A1A] border-b border-[#F0EAD8] pb-2 mb-1">Approval Tracking</h3>
            
            <div className="flex flex-col gap-0 pl-2">
              {odData.history.map((step, i) => (
                <div key={i} className="flex gap-4 relative">
                  {i !== odData.history.length - 1 && (
                    <div className={`absolute left-[11px] top-6 bottom-[-8px] w-[2px] ${step.status === 'completed' ? 'bg-[#1A7A4A]' : 'bg-[#E8E0CC]'}`}></div>
                  )}
                  
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 relative z-10 ${
                    step.status === 'completed' ? 'bg-[#1A7A4A] text-white' : 
                    step.status === 'current' ? 'bg-[#F39C12] border-2 border-white shadow-[0_0_0_2px_#F39C12] text-white' : 
                    'bg-[#F8F6F1] border-2 border-[#E8E0CC] text-transparent'
                  }`}>
                    {step.status === 'completed' && <CheckCircle2 className="w-4 h-4" />}
                    {step.status === 'current' && <Clock className="w-3 h-3" />}
                  </div>
                  
                  <div className="pb-6 pt-0.5">
                    <h4 className={`text-[12px] font-black ${step.status === 'upcoming' ? 'text-[#9B9B9B]' : 'text-[#1A1A1A]'}`}>{step.step}</h4>
                    <p className="text-[10px] font-medium text-[#6B6B6B] mt-0.5">{step.by}</p>
                    <p className="text-[9px] font-bold text-[#A07810] mt-0.5">{step.date} {step.time && `• ${step.time}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Action Bar for Faculty / Admin */}
      {role === 'faculty' || role === 'admin' ? (
        <div className="sticky bottom-0 z-50 bg-white border-t border-[#F0EAD8] px-5 py-4 pb-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex gap-3">
          <button className="flex-1 py-3.5 bg-[#E8F7EF] text-[#1A7A4A] border border-[#1A7A4A]/20 rounded-[14px] font-bold text-[13px] flex justify-center items-center gap-2 hover:bg-[#D1EFE0]">
            <CheckCircle2 className="w-5 h-5" /> Approve Request
          </button>
          <button className="flex-1 py-3.5 bg-[#FDF4F3] text-[#C0392B] border border-[#C0392B]/20 rounded-[14px] font-bold text-[13px] flex justify-center items-center gap-2 hover:bg-[#FDECEA]">
            <XCircle className="w-5 h-5" /> Reject
          </button>
        </div>
      ) : (
        <div className="sticky bottom-0 z-50 bg-white border-t border-[#F0EAD8] px-5 py-4 pb-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex gap-3">
          <button className="flex-1 py-3.5 bg-[#FDF4F3] text-[#C0392B] border border-[#FDECEA] rounded-[14px] font-bold text-[13px] hover:bg-[#FDECEA] transition-colors">
            Withdraw Request
          </button>
        </div>
      )}
    </div>
  );
}
