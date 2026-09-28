import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { Calendar, Clock, MapPin, Image as ImageIcon, CheckCircle2, ChevronLeft } from 'lucide-react';

export default function CreateEventPage() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      navigate(-1); // go back after success
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col h-full bg-cit-page-bg items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-full bg-[#E8F7EF] flex items-center justify-center mb-4 border-[4px] border-white shadow-lg">
          <CheckCircle2 className="w-10 h-10 text-[#1A7A4A]" />
        </div>
        <h1 className="text-[24px] font-black text-[#1A1A1A] mb-2">Event Created!</h1>
        <p className="text-[13px] text-cit-text-secondary">Your event has been submitted for approval. You will be notified once it's reviewed.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-10">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        {/* Header directly acting as TopNav */}
        <div className="sticky top-0 z-50 bg-white border-b border-[#F0EAD8] px-5 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F8F6F1] text-[#1A1A1A]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-[15px] font-black text-[#1A1A1A]">Create New Event</h1>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        <form onSubmit={handleSubmit} className="px-5 pt-5 flex flex-col gap-5">
          {/* Poster Upload */}
          <div className="bg-[#F8F6F1] border-2 border-dashed border-[#E8E0CC] rounded-[16px] h-[140px] flex flex-col items-center justify-center cursor-pointer hover:bg-[#F0EAD8] transition-colors relative overflow-hidden group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2 shadow-sm group-hover:scale-105 transition-transform">
              <ImageIcon className="w-5 h-5 text-cit-gold" />
            </div>
            <span className="text-[11px] font-bold text-[#A07810]">Upload Event Poster</span>
            <span className="text-[9px] font-medium text-[#9B9B9B] mt-1">1080x1080px (Optional)</span>
          </div>

          <div className="bg-white border border-[#F0EAD8] rounded-[20px] p-4 shadow-sm flex flex-col gap-4">
            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Event Name *</label>
              <input required type="text" placeholder="e.g. Hackathon 2024" className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Event Type *</label>
              <select required className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]">
                <option value="">Select Category...</option>
                <option value="hackathon">Hackathon</option>
                <option value="workshop">Workshop</option>
                <option value="cultural">Cultural</option>
                <option value="sports">Sports</option>
                <option value="lecture">Guest Lecture</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Description *</label>
              <textarea required rows="3" placeholder="Tell students what this event is about..." className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]"></textarea>
            </div>
          </div>

          <div className="bg-white border border-[#F0EAD8] rounded-[20px] p-4 shadow-sm flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9B9B]" />
                  <input required type="date" className="w-full border border-cit-border rounded-[12px] py-3 pl-9 pr-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Time *</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B9B9B]" />
                  <input required type="time" className="w-full border border-cit-border rounded-[12px] py-3 pl-9 pr-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Venue *</label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-3 w-4 h-4 text-[#9B9B9B]" />
                <select required className="w-full border border-cit-border rounded-[12px] py-3 pl-9 pr-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1] appearance-none">
                  <option value="">Select Venue...</option>
                  <option value="main-auditorium">Main Auditorium</option>
                  <option value="seminar-a">Seminar Hall A</option>
                  <option value="seminar-b">Seminar Hall B</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#F0EAD8] rounded-[20px] p-4 shadow-sm flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Max Participants</label>
                <input type="number" placeholder="e.g. 100" className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#A07810] mb-1.5 tracking-wide uppercase">Deadline *</label>
                <input required type="date" className="w-full border border-cit-border rounded-[12px] py-3 px-3 text-[12px] font-medium text-cit-text-primary focus:outline-none focus:border-cit-gold bg-[#F8F6F1]" />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <button type="button" onClick={() => navigate(-1)} className="flex-1 py-3.5 bg-white border border-[#E8E0CC] text-[#1A1A1A] rounded-[14px] font-bold text-[13px] hover:bg-gray-50">
              Save Draft
            </button>
            <button type="submit" className="flex-[2] py-3.5 bg-gradient-to-r from-[#A07810] to-[#E8B429] text-white rounded-[14px] font-bold text-[13px] shadow-[0_4px_14px_rgba(201,149,26,0.3)] hover:opacity-90 flex justify-center items-center gap-2">
              Submit for Approval →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
