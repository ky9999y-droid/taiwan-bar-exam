'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GitCompare, Search, ArrowRight, Sparkles, Filter, Bookmark, Scale } from 'lucide-react';
import { COMPARISONS_DATA } from '@/data/seedData';

export default function ComparisonsPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');

  const filtered = COMPARISONS_DATA.filter(c => {
    if (selectedSubject === 'ALL') return true;
    return c.subject === selectedSubject;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <GitCompare className="w-4 h-4" />
            易混淆法律爭點深度對照表庫
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            第一試高頻易混淆概念比較表
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            第一試最愛考「概念置換」與「法律效果偷換」。透過橫向比較徹底破除盲點。
          </p>
        </div>

        {/* Subject Filter */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="text-xs p-2.5 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 font-bold text-slate-800 dark:text-slate-100"
          >
            <option value="ALL">全部科目爭點</option>
            <option value="行政法">行政法</option>
            <option value="刑法">刑法</option>
            <option value="民法">民法</option>
          </select>
        </div>
      </div>

      {/* Comparisons Cards */}
      <div className="space-y-6">
        {filtered.map((comp) => (
          <div
            key={comp.id}
            className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-navy-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gold-100 dark:bg-gold-950 text-gold-700 dark:text-gold-300 flex items-center justify-center font-bold text-xs">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="font-extrabold text-base text-navy-900 dark:text-white">
                  {comp.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300">
                  {comp.subject}
                </span>
                <span className="text-[11px] font-mono text-gold-600 dark:text-gold-400">
                  {comp.tag}
                </span>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-navy-950 border-b border-slate-200 dark:border-navy-800">
                    <th className="p-3 font-bold text-slate-600 dark:text-slate-400 w-1/4">比較核心維度</th>
                    <th className="p-3 font-bold text-navy-900 dark:text-gold-300 w-3/8">概念 A</th>
                    <th className="p-3 font-bold text-navy-900 dark:text-gold-300 w-3/8">概念 B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-navy-800">
                  {comp.table.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-navy-950/40">
                      <td className="p-3 font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/30 dark:bg-navy-950/20">
                        {row.dimension}
                      </td>
                      <td className="p-3 text-slate-800 dark:text-slate-200 leading-relaxed">
                        {row.conceptA}
                      </td>
                      <td className="p-3 text-slate-800 dark:text-slate-200 leading-relaxed">
                        {row.conceptB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
