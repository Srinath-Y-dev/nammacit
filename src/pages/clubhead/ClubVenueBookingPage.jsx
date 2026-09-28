import { useState } from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import { Building2, Calendar, Clock, MapPin, ChevronRight, CheckCircle2, XCircle, Search, Edit3, Trash2 } from 'lucide-react';

export default function ClubVenueBookingPage() {
  const [activeTab, setActiveTab] = useState('Availability');
  
  const venues = ['Main Auditorium', 'Seminar Hall A', 'Seminar Hall B', 'Mini Auditorium', 'Open Air Theatre'];
  const [selectedVenue, setSelectedVenue] = useState('Main Auditorium');

  // Timeline mock data
  const timeSlots = [
    { time: '09:00 AM', status: 'free' },
    { time: '10:00 AM', status: 'booked', event: 'Guest Lecture', club: 'CSE Dept' },
    { time: '11:00 AM', status: 'booked', event: 'Guest Lecture', club: 'CSE Dept' },
    { time: '12:00 PM', status: 'free' },
    { time: '01:00 PM', status: 'free' },
    { time: '02:00 PM', status: 'booked', event: 'Tech Talk', club: 'AI Club' },
    { time: '03:00 PM', status: 'booked', event: 'Tech Talk', club: 'AI Club' },
    { time: '04:00 PM', status: 'free' },
  ];

  const myRequests = [
    { id: 1, venue: 'Seminar Hall A', event: 'Web Dev Bootcamp', date: 'May 15, 2024', time: '10:00 AM - 04:00 PM', reqDate: 'May 01, 2024', status: 'Approved' },
    { id: 2, venue: 'Main Auditorium', event: 'Annual Hackathon', date: 'May 20, 2024', time: '09:00 AM - 06:00 PM', reqDate: 'May 05, 2024', status: 'Pending' },
    { id: 3, venue: 'Mini Auditorium', event: 'UI/UX Workshop', date: 'May 25, 2024', time: '02:00 PM - 05:00 PM', reqDate: 'May 06, 2024', status: 'Rejected' },
  ];

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0">
          <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Venue Booking</h1>
          <p className="text-[12px] text-cit-text-secondary">Check availability and request venues</p>
        </div>

        {/* Tabs */}
        <div className="px-5 mb-5 shrink-0">
          <div className="flex bg-[#F8F6F1] rounded-xl p-1 border border-cit-border overflow-x-auto scrollbar-hide">
            {['Availability', 'My Requests', 'History'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] py-2 text-[11px] font-bold rounded-lg transition-colors whitespace-nowrap px-3 ${activeTab === tab ? 'bg-white shadow-sm text-cit-gold' : 'text-[#9B9B9B] hover:text-[#6B6B6B]'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Availability Tab */}
        {activeTab === 'Availability' && (
          <div className="px-5 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-[#F0EAD8] rounded-[12px] p-2 flex flex-col">
                <label className="text-[9px] font-bold text-[#A07810] mb-1 uppercase px-1">Select Venue</label>
                <select 
                  className="w-full text-[12px] font-bold text-[#1A1A1A] bg-transparent outline-none cursor-pointer"
                  value={selectedVenue}
                  onChange={(e) => setSelectedVenue(e.target.value)}
                >
                  {venues.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="bg-white border border-[#F0EAD8] rounded-[12px] p-2 flex flex-col">
                <label className="text-[9px] font-bold text-[#A07810] mb-1 uppercase px-1">Select Date</label>
                <input type="date" className="w-full text-[12px] font-bold text-[#1A1A1A] bg-transparent outline-none cursor-pointer" defaultValue="2024-05-15" />
              </div>
            </div>

            <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[14px] font-black text-[#1A1A1A] flex items-center gap-2"><Building2 className="w-4 h-4 text-cit-gold" /> {selectedVenue}</h3>
                <span className="text-[10px] font-bold bg-[#E8F7EF] text-[#1A7A4A] px-2 py-0.5 rounded-full">Capacity: 500</span>
              </div>
              
              <div className="relative border-l-2 border-[#F0EAD8] ml-2 pl-4 py-2 flex flex-col gap-4">
                {timeSlots.map((slot, i) => (
                  <div key={i} className="relative flex items-center gap-4">
                    <div className={`absolute -left-[21px] w-3 h-3 rounded-full border-2 border-white ${slot.status === 'free' ? 'bg-[#E8E0CC]' : 'bg-[#E74C3C]'}`}></div>
                    <div className="w-[60px] shrink-0 text-[10px] font-bold text-[#6B6B6B]">{slot.time}</div>
                    
                    {slot.status === 'free' ? (
                      <div className="flex-1 border border-dashed border-[#C9951A] bg-[#FDF8ED] rounded-[8px] p-2 flex items-center justify-center cursor-pointer hover:bg-[#FAEEDA] transition-colors">
                        <span className="text-[10px] font-bold text-cit-gold">+ Book Slot</span>
                      </div>
                    ) : (
                      <div className="flex-1 border border-[#FDECEA] bg-[#FDF4F3] rounded-[8px] p-2">
                        <div className="text-[11px] font-bold text-[#1A1A1A] leading-none mb-1">{slot.event}</div>
                        <div className="text-[9px] text-[#C0392B]">{slot.club}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#A07810] to-[#E8B429] text-white font-bold py-3.5 rounded-[16px] shadow-[0_4px_14px_rgba(201,149,26,0.3)] hover:opacity-90 flex justify-center items-center gap-2 mt-2">
              <Building2 className="w-4 h-4" /> Request this Venue
            </button>
          </div>
        )}

        {/* My Requests Tab */}
        {activeTab === 'My Requests' && (
          <div className="px-5 flex flex-col gap-4">
            {myRequests.map((req) => (
              <div key={req.id} className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-[10px] font-bold text-cit-gold mb-1 uppercase tracking-wider">{req.date}</div>
                    <h3 className="text-[15px] font-black text-[#1A1A1A] leading-tight mb-1">{req.venue}</h3>
                    <p className="text-[12px] font-medium text-[#6B6B6B] flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#A07810]" /> {req.event}</p>
                  </div>
                  {req.status === 'Pending' && <span className="bg-[#FEF3DC] text-[#8B5E0A] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><Clock className="w-3 h-3" /> Pending</span>}
                  {req.status === 'Approved' && <span className="bg-[#E8F7EF] text-[#1A7A4A] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Approved</span>}
                  {req.status === 'Rejected' && <span className="bg-[#FDECEA] text-[#C0392B] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><XCircle className="w-3 h-3" /> Rejected</span>}
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#FDF8ED] border border-cit-gold/20 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-[10px] font-bold text-[#1A1A1A]">
                    <Clock className="w-3.5 h-3.5 text-[#A07810]" /> {req.time}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-[#F0EAD8]">
                  <button className="flex-1 py-2 bg-[#F8F6F1] text-[#1A1A1A] rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 hover:bg-gray-100">
                    View Details <ChevronRight className="w-3 h-3" />
                  </button>
                  {req.status === 'Pending' && (
                    <>
                      <button className="w-10 h-10 border border-[#F0EAD8] text-[#1A1A1A] rounded-xl flex items-center justify-center hover:bg-gray-50">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 border border-[#FDECEA] bg-[#FDF4F3] text-[#C0392B] rounded-xl flex items-center justify-center hover:bg-[#FDECEA]">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
