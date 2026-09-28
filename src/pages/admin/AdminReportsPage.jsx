import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import { BarChart3, PieChart, TrendingUp, Download, Calendar, Users, Building2, ClipboardList } from 'lucide-react';

export default function AdminReportsPage() {
  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav />
        
        <div className="px-5 pt-2 mb-4 shrink-0 flex justify-between items-start">
          <div>
            <h1 className="text-[26px] font-black text-[#1A1A1A] tracking-tight mb-1">Reports</h1>
            <p className="text-[12px] text-cit-text-secondary">System-wide analytics & insights</p>
          </div>
          <button className="bg-[#1A1A1A] text-white p-2.5 rounded-[12px] shadow-sm flex items-center gap-2">
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Overview Stats */}
        <div className="px-5 mb-6 shrink-0 grid grid-cols-2 gap-3">
          <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#FDF8ED] rounded-full border border-cit-gold/20"></div>
            <ClipboardList className="w-5 h-5 text-cit-gold mb-2 relative z-10" />
            <div className="text-[24px] font-black text-[#1A1A1A] leading-none mb-1 relative z-10">482</div>
            <div className="text-[10px] font-bold text-cit-text-secondary uppercase relative z-10">ODs Processed</div>
          </div>
          <div className="bg-white border border-[#F0EAD8] rounded-[16px] p-4 shadow-sm relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#FDF8ED] rounded-full border border-cit-gold/20"></div>
            <Calendar className="w-5 h-5 text-cit-gold mb-2 relative z-10" />
            <div className="text-[24px] font-black text-[#1A1A1A] leading-none mb-1 relative z-10">124</div>
            <div className="text-[10px] font-bold text-cit-text-secondary uppercase relative z-10">Events Hosted</div>
          </div>
        </div>

        {/* Chart 1 */}
        <div className="px-5 mb-6 shrink-0">
          <div className="bg-white border border-[#F0EAD8] rounded-[20px] p-4 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[14px] font-black text-[#1A1A1A] flex items-center gap-2"><BarChart3 className="w-4 h-4 text-cit-gold" /> Engagement Trend</h3>
              <select className="bg-[#F8F6F1] border border-cit-border rounded-lg text-[10px] font-bold px-2 py-1 outline-none">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            
            {/* Mock Bar Chart */}
            <div className="h-32 flex items-end justify-between gap-2 pt-4 border-b border-[#F0EAD8] pb-1">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-gradient-to-t from-[#A07810] to-[#E8B429] rounded-t-md opacity-90" style={{ height: `${h}%` }}></div>
                  <span className="text-[8px] font-bold text-[#9B9B9B]">W{i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Breakdowns */}
        <div className="px-5 flex flex-col gap-4 shrink-0">
          <div className="bg-[#1A1A1A] rounded-[20px] p-5 shadow-lg text-white relative overflow-hidden">
            <div className="absolute right-[-20%] top-[-20%] w-40 h-40 bg-cit-gold opacity-10 rounded-full blur-2xl"></div>
            <h3 className="text-[14px] font-black flex items-center gap-2 mb-4 relative z-10"><PieChart className="w-4 h-4 text-cit-gold" /> OD by Department</h3>
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center gap-3">
                <div className="text-[11px] font-bold w-8">CSE</div>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-cit-gold w-[75%] rounded-full"></div>
                </div>
                <div className="text-[10px] font-bold text-white/70">75%</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[11px] font-bold w-8">IT</div>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2ECC71] w-[45%] rounded-full"></div>
                </div>
                <div className="text-[10px] font-bold text-white/70">45%</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[11px] font-bold w-8">MECH</div>
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E74C3C] w-[20%] rounded-full"></div>
                </div>
                <div className="text-[10px] font-bold text-white/70">20%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
