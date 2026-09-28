import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import FilterTab from '../components/FilterTab';
import EventCard from '../components/EventCard';
import { useAuth } from '../context/AuthContext';
import { Search, Filter, ArrowUpDown, Wifi, Battery, Plus } from 'lucide-react';

const events = [
  {
    id: 1,
    month: "MAY", day: "25", dow: "SAT",
    gradient: "linear-gradient(135deg, #1a1a2e, #e8b429)",
    emoji: "💡",
    status: "UPCOMING",
    name: "Hackathon 2024",
    venue: "Lab Block, Computer Center",
    duration: "10:00 AM – 6:00 PM",
    going: "35+", extra: "+32",
  },
  {
    id: 2,
    month: "MAY", day: "28", dow: "TUE",
    gradient: "linear-gradient(135deg, #2d1b69, #c75c9b)",
    emoji: "🎭",
    status: "UPCOMING",
    name: "Cultural Fest 2024",
    venue: "Main Auditorium",
    duration: "11:00 AM – 8:00 PM",
    going: "71+", extra: "+68",
  },
  {
    id: 3,
    month: "JUN", day: "02", dow: "SUN",
    gradient: "linear-gradient(135deg, #0d1117, #3a6186)",
    emoji: "🎤",
    status: "UPCOMING",
    name: "Guest Lecture Series",
    venue: "Seminar Hall A",
    duration: "2:00 PM – 4:00 PM",
    going: "48+", extra: "+45",
  }
];

export default function EventsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const role = user?.role || 'student';
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getTabs = () => {
    switch(role) {
      case 'faculty': return ['All Events', 'Upcoming', 'Ongoing', 'Completed', 'Cancelled', 'My Events'];
      case 'clubhead': return ['All', 'Draft', 'Pending Approval', 'Approved', 'Rejected', 'Published', 'Cancelled'];
      case 'admin': return ['All', 'Pending Approval', 'Upcoming', 'Ongoing', 'Completed', 'Cancelled'];
      default: return ['All Events', 'Upcoming', 'Ongoing', 'Past'];
    }
  };

  const currentTabs = getTabs();

  const filteredEvents = events.filter(e => {
    const matchesTab = activeTab === 'all' || e.status.toLowerCase() === activeTab;
    const matchesSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">


      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        
        {/* 2. TOP NAVIGATION BAR */}
        <TopNav />

        {/* 3. PAGE TITLE SECTION */}
        <div className="px-4 mb-3 relative mt-2 shrink-0">
          <h1 className="text-[26px] font-bold text-cit-text-primary mb-1 relative z-10">Events</h1>
          <p className="text-xs text-cit-text-secondary max-w-[220px] leading-relaxed relative z-10">
            Discover and participate in exciting events on campus.
          </p>
          <div className="absolute right-4 top-0 opacity-10 z-0 text-cit-text-primary">
            {/* Faint campus building SVG placeholder */}
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
              <path d="M9 22v-4h6v4"></path>
              <path d="M8 6h.01"></path>
              <path d="M16 6h.01"></path>
              <path d="M12 6h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M16 10h.01"></path>
              <path d="M16 14h.01"></path>
              <path d="M8 10h.01"></path>
              <path d="M8 14h.01"></path>
            </svg>
          </div>
        </div>

        {/* 4. FILTER TABS */}
        <div className="flex gap-1.5 px-4 overflow-x-auto mb-4 shrink-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {currentTabs.map(tab => {
            const tabId = tab.toLowerCase().replace(' ', '-');
            const isActive = activeTab === tabId || (activeTab === 'all' && tab.includes('All'));
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tabId)}
                className={`px-3.5 py-2 rounded-pill text-[11px] font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-br from-cit-gold to-cit-gold-light border-transparent text-white shadow-sm'
                    : 'bg-white border-[1.5px] border-cit-border text-cit-text-secondary'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 5. SEARCH + FILTER ROW */}
        <div className="px-4 mb-4 flex flex-col gap-2 shrink-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-cit-text-muted" />
            <input 
              type="text" 
              placeholder="Search events..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-9 pr-3 border-[1.5px] border-cit-border rounded-btn text-[13px] bg-white text-cit-text-primary placeholder:text-cit-text-muted focus:outline-none focus:border-cit-gold transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2.5 flex items-center justify-center gap-1.5 border border-cit-border bg-white rounded-btn text-xs font-semibold text-cit-text-secondary active:bg-gray-50">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex-1 py-2.5 flex items-center justify-center gap-1.5 border border-cit-border bg-white rounded-btn text-xs font-semibold text-cit-text-secondary active:bg-gray-50">
              <ArrowUpDown className="w-4 h-4" /> Sort
            </button>
          </div>
        </div>

        {/* 6. EVENT CARDS */}
        <div className="flex flex-col shrink-0">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <div className="text-center py-8 text-cit-text-muted text-sm">
              No events found.
            </div>
          )}
        </div>

        {/* 7. CREATE EVENT BANNER / FAB */}
        {(role === 'clubhead' || role === 'faculty') && (
          <div className="fixed bottom-24 right-5 z-50">
            <button onClick={() => navigate(`/${role}/events/create`)} className="w-14 h-14 bg-cit-gold text-white rounded-full flex items-center justify-center shadow-lg hover:bg-cit-gold-dark transition-colors">
              <Plus className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* 8. BOTTOM NAVIGATION BAR */}
      <BottomNav />
    </div>
  );
}
