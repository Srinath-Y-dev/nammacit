import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Megaphone, ChevronLeft, CheckCircle2, Users, FileText } from 'lucide-react';

export default function CreateAnnouncementPage() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col h-full bg-cit-page-bg items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-full bg-[#E8F7EF] flex items-center justify-center mb-4 border-[4px] border-white shadow-lg">
          <CheckCircle2 className="w-10 h-10 text-[#1A7A4A]" />
        </div>
        <h1 className="text-[24px] font-black text-[#1A1A1A] mb-2">Announcement Sent!</h1>
        <p className="text-[13px] text-cit-text-secondary">Your message has been broadcasted to the selected audience.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-10">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        <div className="sticky top-0 z-50 bg-white border-b border-[#F0EAD8] px-5 py-4 flex items-center justify-between shadow-sm">
          <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8F6F1] text-[#1A1A1A] border border-[#E8E0CC]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-[15px] font-black text-[#1A1A1A]">Post Announcement</h1>
          <div className="w-8"></div>
        </div>

        <form onSubmit={handleSubmit} className="px-5 pt-5 flex flex-col gap-5">
          
          <div className="bg-white border border-[#F0EAD8] rounded-[20px] p-4 shadow-sm flex flex-col gap-4">
            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Title *</label>
              <input required type="text" placeholder="e.g. End Semester Exam Schedule" className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Target Audience *</label>
              <select required className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]">
                <option value="all">All Campus</option>
                <option value="students">All Students</option>
                <option value="faculty">All Faculty</option>
                <option value="cse">CSE Department</option>
                <option value="it">IT Department</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Priority</label>
              <select className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]">
                <option value="normal">Normal</option>
                <option value="high">High (Push Notification Alert)</option>
              </select>
            </div>
          </div>

          <div className="bg-white border border-[#F0EAD8] rounded-[20px] p-4 shadow-sm flex flex-col gap-4">
            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> Message *</label>
              <textarea required rows="6" placeholder="Type your announcement details here..." className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]"></textarea>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <button type="button" onClick={() => navigate(-1)} className="flex-1 py-3.5 bg-white border border-[#E8E0CC] text-[#1A1A1A] rounded-[14px] font-bold text-[13px] hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="flex-[2] py-3.5 bg-gradient-to-r from-[#A07810] to-[#E8B429] text-white rounded-[14px] font-bold text-[13px] shadow-[0_4px_14px_rgba(201,149,26,0.3)] hover:opacity-90 flex justify-center items-center gap-2">
              <Megaphone className="w-4 h-4" /> Broadcast
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
