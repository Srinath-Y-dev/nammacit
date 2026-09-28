import { useState } from 'react';
import TopNav from '../../components/TopNav';
import BottomNav from '../../components/BottomNav';
import { Search, Filter, BarChart2, Download } from 'lucide-react';

export default function AdminODReportsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: 'Pending' },
    { id: 'approved', label: 'Approved' },
    { id: 'rejected', label: 'Rejected' },
    { id: 'department', label: 'Department-wise' },
  ];

  return (
    <div className="flex flex-col h-full bg-cit-page-bg overflow-hidden relative">
      <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide pb-24">
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} />
        <TopNav backButton={true} />

        <div className="px-4 pt-1 mb-4 relative shrink-0">
          <h1 className="text-[26px] font-bold text-cit-text-primary mb-1">OD Reports</h1>
          <p className="text-xs text-cit-text-secondary max-w-[200px] leading-relaxed">
            Campus-wide OD tracking and overrides.
          </p>
        </div>

        <div className="bg-white border border-[#F0EAD8] rounded-card p-4 mx-4 mb-4 shrink-0 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <div className="text-[11px] font-bold text-cit-gold uppercase tracking-[1.5px] mb-3">THIS MONTH</div>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#EDF2FA] mx-auto mb-1 flex items-center justify-center text-sm">📋</div>
              <div className="text-lg font-bold text-cit-text-primary leading-tight">186</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Total</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3DC] mx-auto mb-1 flex items-center justify-center text-sm">⏳</div>
              <div className="text-lg font-bold text-[#8B5E0A] leading-tight">22</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Pending</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#E8F7EF] mx-auto mb-1 flex items-center justify-center text-sm">✅</div>
              <div className="text-lg font-bold text-[#1A7A4A] leading-tight">148</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Approved</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-[#FDECEA] mx-auto mb-1 flex items-center justify-center text-sm">❌</div>
              <div className="text-lg font-bold text-[#C0392B] leading-tight">16</div>
              <div className="text-[9px] text-cit-text-secondary font-medium">Rejected</div>
            </div>
          </div>
        </div>

        <div className="flex gap-1.5 px-4 overflow-x-auto mb-4 shrink-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-pill text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-br from-cit-gold to-cit-gold-light border-transparent text-white shadow-cit-active-tab'
                  : 'bg-white border-[1.5px] border-cit-border text-cit-text-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="px-4 shrink-0">
          <div className="bg-white border border-[#F0EAD8] rounded-[14px] overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
            <div className="bg-[#FDF8ED] px-4 py-3 flex justify-between items-center border-b border-[#F0EAD8]">
              <span className="text-[11px] font-bold text-[#1A1A1A]">DEPARTMENT SUMMARY</span>
              <button className="text-cit-gold text-[10px] font-bold flex items-center gap-1">
                <Download className="w-3 h-3" /> Export CSV
              </button>
            </div>
            <div className="p-0">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-[#F8F6F1] text-[#6B6B6B]">
                  <tr>
                    <th className="py-2.5 px-4 font-semibold">Dept</th>
                    <th className="py-2.5 px-2 font-semibold text-center">Total</th>
                    <th className="py-2.5 px-2 font-semibold text-center text-[#8B5E0A]">Pend</th>
                    <th className="py-2.5 px-2 font-semibold text-center text-[#1A7A4A]">Appr</th>
                    <th className="py-2.5 px-4 font-semibold text-center text-[#C0392B]">Rej</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0EAD8]">
                  {[
                    { dept: 'CSE', total: 64, pend: 8, appr: 52, rej: 4 },
                    { dept: 'IT', total: 48, pend: 6, appr: 38, rej: 4 },
                    { dept: 'ECE', total: 38, pend: 5, appr: 30, rej: 3 },
                    { dept: 'MECH', total: 22, pend: 2, appr: 18, rej: 2 },
                    { dept: 'MCA', total: 14, pend: 1, appr: 10, rej: 3 },
                  ].map((row, i) => (
                    <tr key={i} className="text-[#1A1A1A]">
                      <td className="py-3 px-4 font-bold">{row.dept}</td>
                      <td className="py-3 px-2 text-center">{row.total}</td>
                      <td className="py-3 px-2 text-center font-bold text-[#8B5E0A]">{row.pend}</td>
                      <td className="py-3 px-2 text-center font-bold text-[#1A7A4A]">{row.appr}</td>
                      <td className="py-3 px-4 text-center font-bold text-[#C0392B]">{row.rej}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
      <BottomNav />
    </div>
  );
}
