export default function FilterTab({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'all', label: '📅 All Events' },
    { id: 'upcoming', label: '🕐 Upcoming' },
    { id: 'ongoing', label: '⏯ Ongoing' },
    { id: 'past', label: '📁 Past' },
  ];

  return (
    <div 
      className="flex gap-1.5 px-4 overflow-x-auto mb-4" 
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar { display: none; }
      `}} />
      {tabs.map(tab => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-2 rounded-pill text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              isActive 
                ? 'bg-gradient-to-br from-cit-gold to-cit-gold-light border-transparent text-white shadow-cit-active-tab'
                : 'bg-white border-[1.5px] border-cit-border text-cit-text-secondary'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
