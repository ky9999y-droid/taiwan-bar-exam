'use client';

import React from 'react';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Flame,
  CheckCircle2,
  Clock,
  Target,
  ArrowRight,
  Sparkles,
  PieChart,
  HelpCircle
} from 'lucide-react';
import { SUBJECTS_INFO, CHAPTER_SEED_LIST } from '@/data/seedData';

export default function AnalyticsPage() {
  const weakChapters = CHAPTER_SEED_LIST.filter(c => c.isWeakness);

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4" />
            15 科深度弱點樹狀診斷與歷屆頻率分佈
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            弱點透視與出題頻率交叉分析
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            精準定位失分黑洞，不浪費時間在已經熟練的章節，將時間投入最高投資報酬率的弱點章節。
          </p>
        </div>
      </div>

      {/* Priority Weakness Diagnosis Card */}
      <div className="bg-red-50/60 dark:bg-red-950/20 rounded-2xl p-6 border border-red-200 dark:border-red-900/50 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <h2 className="font-extrabold text-base sm:text-lg text-red-900 dark:text-red-200">
              系統判定：當前優先搶分之 5 大弱點章節
            </h2>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
            及格關鍵
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {weakChapters.map((w, idx) => {
            const sub = SUBJECTS_INFO.find(s => s.id === w.subjectId);

            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-red-200 dark:border-red-900/40 shadow-sm flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-navy-900 dark:text-gold-400">
                      {sub?.name}
                    </span>
                    <span className="font-extrabold text-red-500">
                      掌握度 {w.masteryPercentage}%
                    </span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    第 {w.chapterNo} 章：{w.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs">
                  <span className="text-amber-500 font-semibold">
                    {'★'.repeat(w.weightStars)} 超高頻
                  </span>
                  <Link
                    href={`/subjects/${w.subjectId}/chapters/${w.subjectId}-${w.chapterNo}`}
                    className="text-navy-900 dark:text-gold-400 font-bold hover:underline flex items-center gap-0.5"
                  >
                    立即補強 <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 15-Subject Performance Heatmap */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-base sm:text-lg text-navy-900 dark:text-white flex items-center gap-2">
            <PieChart className="w-5 h-5 text-gold-500" />
            15 科答對率與配分權重矩陣
          </h2>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-emerald-500" /> 80% 以上（熟練）
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-amber-500" /> 65%~79%（尚可）
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-red-500" /> 65% 以下（警戒）
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SUBJECTS_INFO.map((sub) => {
            const chaps = CHAPTER_SEED_LIST.filter(c => c.subjectId === sub.id);
            const rate = chaps.length > 0
              ? Math.round(chaps.reduce((acc, cur) => acc + cur.masteryPercentage, 0) / chaps.length)
              : 74;

            return (
              <div
                key={sub.id}
                className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-navy-900 dark:text-white">
                    {sub.name}
                  </span>
                  <span className={`font-black ${
                    rate >= 80 ? 'text-emerald-500' : rate >= 65 ? 'text-amber-500' : 'text-red-500'
                  }`}>
                    {rate}%
                  </span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-navy-800 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      rate >= 80 ? 'bg-emerald-500' : rate >= 65 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${rate}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>官方配分：{sub.officialScore} 分</span>
                  <Link
                    href={`/subjects/${sub.id}`}
                    className="hover:text-gold-500 font-semibold"
                  >
                    查看章節
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
