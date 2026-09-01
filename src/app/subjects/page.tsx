'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookMarked, 
  Scale, 
  ChevronRight, 
  Flame, 
  AlertTriangle, 
  CheckCircle2, 
  Filter,
  Sparkles,
  BarChart2
} from 'lucide-react';
import { SUBJECTS_INFO, CHAPTER_SEED_LIST } from '@/data/seedData';
import { PaperType } from '@/types';

export default function SubjectsPage() {
  const [selectedPaper, setSelectedPaper] = useState<'ALL' | PaperType>('ALL');

  const filteredSubjects = SUBJECTS_INFO.filter(s => {
    if (selectedPaper === 'ALL') return true;
    return s.paper === selectedPaper;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <BookMarked className="w-4 h-4" />
            15 科全景考點學習地圖
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            第一試試卷架構與章節掌握度
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            點擊任一科目即可展開完整章節、6種掌握狀態（尚未學習、學習中、已完成、需要複習、弱點、熟練）與9層考試型教材。
          </p>
        </div>

        {/* Paper Selector Tabs */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-navy-950 rounded-xl border border-slate-200 dark:border-navy-800 self-start sm:self-auto">
          <button
            onClick={() => setSelectedPaper('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedPaper === 'ALL'
                ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
            }`}
          >
            全部 15 科 (600分)
          </button>
          <button
            onClick={() => setSelectedPaper('PAPER_1')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedPaper === 'PAPER_1'
                ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
            }`}
          >
            綜合法學（一）(300分)
          </button>
          <button
            onClick={() => setSelectedPaper('PAPER_2')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedPaper === 'PAPER_2'
                ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
            }`}
          >
            綜合法學（二）(300分)
          </button>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSubjects.map((sub) => {
          const chapters = CHAPTER_SEED_LIST.filter(c => c.subjectId === sub.id);
          const weakCount = chapters.filter(c => c.isWeakness).length;
          const avgMastery = chapters.length > 0 
            ? Math.round(chapters.reduce((acc, cur) => acc + cur.masteryPercentage, 0) / chapters.length)
            : 75;

          return (
            <Link
              key={sub.id}
              href={`/subjects/${sub.id}`}
              className="bg-white dark:bg-navy-900 rounded-2xl p-5 border border-slate-200 dark:border-navy-800 hover:border-gold-500 hover:shadow-lg transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-800 text-navy-900 dark:text-gold-400 flex items-center justify-center font-bold text-sm group-hover:scale-105 transition-transform">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-base text-navy-900 dark:text-white group-hover:text-gold-500 transition">
                        {sub.name}
                      </h2>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                        {sub.nameEn}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-gold-50 dark:bg-gold-950/60 text-gold-700 dark:text-gold-300 border border-gold-300 dark:border-gold-800">
                    {sub.officialScore} 分
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                  {sub.description}
                </p>
              </div>

              {/* Progress & Weakness Status */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-navy-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">
                    章節掌握度：<strong className="text-navy-900 dark:text-white font-bold">{avgMastery}%</strong>
                  </span>
                  {weakCount > 0 ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-red-500 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded">
                      <AlertTriangle className="w-3 h-3" /> {weakCount} 個弱點章節
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3" /> 掌握良好
                    </span>
                  )}
                </div>

                <div className="w-full bg-slate-100 dark:bg-navy-950 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      avgMastery >= 80
                        ? 'bg-emerald-500'
                        : avgMastery >= 65
                        ? 'bg-gold-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${avgMastery}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>共 {sub.totalChapters} 章</span>
                  <span className="group-hover:text-gold-500 flex items-center gap-0.5 font-semibold transition">
                    查看章節清單 <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}
