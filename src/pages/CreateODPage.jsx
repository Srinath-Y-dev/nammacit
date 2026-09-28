import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { Calendar, Clock, MapPin, CheckCircle2, ChevronLeft, UploadCloud, Users, FileText } from 'lucide-react';

export default function CreateODPage() {
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
        <h1 className="text-[24px] font-black text-[#1A1A1A] mb-2">Request Submitted!</h1>
        <p className="text-[13px] text-cit-text-secondary">Your OD request has been sent to your Faculty Coordinator for approval.</p>
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
          <h1 className="text-[15px] font-black text-[#1A1A1A]">New OD Request</h1>
          <div className="w-8"></div>
        </div>

        <form onSubmit={handleSubmit} className="px-5 pt-5 flex flex-col gap-4">
          
          <div className="bg-[#FEF3DC] border border-[#FAD7A1] rounded-[16px] p-4 flex gap-3">
            <div className="text-xl">⚠️</div>
            <div className="flex-1">
              <h4 className="text-[11px] font-bold text-[#8B5E0A] mb-0.5">Important Guidelines</h4>
              <p className="text-[10px] text-[#8B5E0A]/80 leading-tight">Requests must be submitted at least 2 days prior. Attach valid proof for external events.</p>
            </div>
          </div>

          <div className="bg-white border border-[#F0EAD8] rounded-[20px] p-4 shadow-sm flex flex-col gap-4">
            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Event Name *</label>
              <input required type="text" placeholder="e.g. CodeFest Hackathon" className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Venue / Location *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9B9B]" />
                <input required type="text" placeholder="e.g. VIT Chennai" className="w-full border border-cit-border rounded-[12px] py-3 pl-9 pr-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9B9B]" />
                  <input required type="date" className="w-full border border-cit-border rounded-[12px] py-3 pl-9 pr-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Duration *</label>
                <select required className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]">
                  <option value="full">Full Day</option>
                  <option value="forenoon">Forenoon (FN)</option>
                  <option value="afternoon">Afternoon (AN)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#F0EAD8] rounded-[20px] p-4 shadow-sm flex flex-col gap-4">
            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Additional Members (Optional)</label>
              <input type="text" placeholder="Enter Roll Numbers separated by comma" className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> Reason / Description *</label>
              <textarea required rows="3" placeholder="Briefly explain the purpose of this OD..." className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]"></textarea>
            </div>
          </div>

          {/* PDF Proof Upload */}
          <div className="bg-white border border-[#F0EAD8] rounded-[20px] p-4 shadow-sm">
            <label className="block text-[10px] font-bold text-[#A07810] mb-2 tracking-wide uppercase">Proof Document *</label>
            <div className="bg-[#F8F6F1] border-2 border-dashed border-[#E8E0CC] rounded-[16px] h-[100px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#F0EAD8] transition-colors relative overflow-hidden group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-105 transition-transform">
                <UploadCloud className="w-4 h-4 text-cit-gold" />
              </div>
              <span className="text-[11px] font-bold text-[#A07810]">Upload PDF</span>
              <span className="text-[9px] font-medium text-[#9B9B9B] mt-0.5">Max size 2MB</span>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <button type="button" onClick={() => navigate(-1)} className="flex-1 py-3.5 bg-white border border-[#E8E0CC] text-[#1A1A1A] rounded-[14px] font-bold text-[13px] hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="flex-[2] py-3.5 bg-gradient-to-r from-[#A07810] to-[#E8B429] text-white rounded-[14px] font-bold text-[13px] shadow-[0_4px_14px_rgba(201,149,26,0.3)] hover:opacity-90 flex justify-center items-center">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
