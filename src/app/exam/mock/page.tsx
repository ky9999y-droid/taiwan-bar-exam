'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Trophy,
  Scale,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Award,
  Sparkles,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { SUBJECTS_INFO, RECENT_5_EXAM_YEARS } from '@/data/seedData';

export default function MockExamPage() {
  const [showResultDemo, setShowResultDemo] = useState<boolean>(false);
  const [selectedMockYear, setSelectedMockYear] = useState<string>('113');

  const mockTypes = [
    {
      id: `paper-1-${selectedMockYear}`,
      title: `${selectedMockYear} 年 綜合法學（一）全真試卷`,
      subtitle: '憲法＋行政法＋刑法＋刑事訴訟法＋國際公私法＋法律倫理',
      questionsCount: 150,
      durationMinutes: 180,
      totalScore: 300,
      badge: `${selectedMockYear}年 正式考題組卷`,
      color: 'border-blue-300 dark:border-blue-800'
    },
    {
      id: `paper-2-${selectedMockYear}`,
      title: `${selectedMockYear} 年 綜合法學（二）全真試卷`,
      subtitle: '民法＋民事訴訟法＋公司法＋保險法＋票據法＋強執＋證交＋法英',
      questionsCount: 150,
      durationMinutes: 180,
      totalScore: 300,
      badge: `${selectedMockYear}年 正式考題組卷`,
      color: 'border-purple-300 dark:border-purple-800'
    },
    {
      id: `single-admin-${selectedMockYear}`,
      title: `行政法高頻爭點單科專卷 (${selectedMockYear}年真題重點)`,
      subtitle: '行政處分、行政契約、行政罰與救濟類型 20 題',
      questionsCount: 20,
      durationMinutes: 25,
      totalScore: 100,
      badge: '單科速測',
      color: 'border-amber-300 dark:border-amber-800'
    },
    {
      id: `single-crimproc-${selectedMockYear}`,
      title: `刑事訴訟法精選專卷 (${selectedMockYear}年真題重點)`,
      subtitle: '強制處分、傳聞法則與證據能力專題 20 題',
      questionsCount: 20,
      durationMinutes: 25,
      totalScore: 100,
      badge: '單科速測',
      color: 'border-emerald-300 dark:border-emerald-800'
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Trophy className="w-4 h-4" />
            最新前 5 年（113~109年）全真歷屆模擬考場
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            最新前 5 年考題全真計時模擬考
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            模考進行期間完全鎖定答案，交卷後自動產出各科得分、及格落點預測、答題速度分析與弱點補強清單。
          </p>
        </div>

        <button
          onClick={() => setShowResultDemo(!showResultDemo)}
          className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 transition flex items-center gap-1.5 self-start md:self-auto"
        >
          <BarChart3 className="w-4 h-4 text-emerald-500" />
          {showResultDemo ? '隱藏診斷報告範例' : '查看模考成績單範例'}
        </button>
      </div>

      {/* Year Selection Bar */}
      <div className="bg-slate-100 dark:bg-navy-950 p-2 rounded-2xl border border-slate-200 dark:border-navy-800 flex items-center gap-2 overflow-x-auto">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 pl-2 flex items-center gap-1 flex-shrink-0">
          <Calendar className="w-4 h-4 text-gold-500" /> 選擇模擬考年度：
        </span>
        {RECENT_5_EXAM_YEARS.map((y) => (
          <button
            key={y.year}
            onClick={() => setSelectedMockYear(y.year)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 flex-shrink-0 ${
              selectedMockYear === y.year
                ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-navy-900'
            }`}
          >
            <span>{y.year} 年全真試卷</span>
            {y.year === '113' && (
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400 text-navy-950 font-black">
                最新
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Mock Exam Result Card (Shown if toggled or after test) */}
      {showResultDemo && (
        <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 sm:p-8 border-2 border-gold-500/50 shadow-xl space-y-6 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-navy-800 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> 測驗完成報告書 ｜ 測驗編號 #MOCK-{selectedMockYear}-P1
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white mt-1">
                {selectedMockYear} 年 綜合法學（一）全真模考成績單
              </h2>
            </div>

            <div className="flex items-center gap-4 bg-slate-50 dark:bg-navy-950 p-4 rounded-2xl border border-slate-200 dark:border-navy-800">
              <div className="text-center pr-4 border-r border-slate-200 dark:border-navy-700">
                <span className="text-[11px] text-slate-400 block">總得分數</span>
                <span className="text-3xl font-black text-emerald-600 dark:text-gold-400">226</span>
                <span className="text-xs text-slate-400"> / 300</span>
              </div>
              <div className="text-xs space-y-0.5">
                <div className="font-bold text-emerald-600 dark:text-emerald-400">✅ 及格安全區 (前 33%)</div>
                <div className="text-slate-500">正確率：<strong>75.3%</strong></div>
                <div className="text-slate-400 text-[11px]">平均每題：1.08 分鐘</div>
              </div>
            </div>
          </div>

          {/* Breakdown by Subjects */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-navy-900 dark:text-white">各科目得分細項與掌握度</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1">
                <div className="flex justify-between font-bold">
                  <span>憲法</span>
                  <span className="text-emerald-600">44 / 50 分 (88%) 🟢 優異</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-navy-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1">
                <div className="flex justify-between font-bold">
                  <span>行政法</span>
                  <span className="text-amber-600">72 / 100 分 (72%) 🟡 尚可</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-navy-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: '72%' }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1">
                <div className="flex justify-between font-bold">
                  <span>刑法</span>
                  <span className="text-emerald-600">46 / 50 分 (92%) 🟢 優異</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-navy-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-red-200 dark:border-red-900/60 space-y-1">
                <div className="flex justify-between font-bold">
                  <span>刑事訴訟法</span>
                  <span className="text-red-500">52 / 80 分 (65.0%) ⚠️ 弱點</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-navy-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full" style={{ width: '65%' }} />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-1">
                <div className="flex justify-between font-bold">
                  <span>國際公私法 & 法倫</span>
                  <span className="text-amber-600">12 / 20 分 (60%) ⚠️ 警戒</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-navy-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: '60%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mock Exam Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mockTypes.map((mock) => (
          <div
            key={mock.id}
            className={`bg-white dark:bg-navy-900 rounded-2xl p-6 border ${mock.color} shadow-sm flex flex-col justify-between space-y-5 hover:shadow-lg transition`}
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-navy-950 text-slate-600 dark:text-slate-300">
                  {mock.badge}
                </span>
                <span className="text-xs font-bold text-gold-600 dark:text-gold-400">
                  滿分 {mock.totalScore} 分
                </span>
              </div>

              <h2 className="font-extrabold text-lg text-navy-900 dark:text-white">
                {mock.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {mock.subtitle}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <span>📝 {mock.questionsCount} 題</span>
                <span>⏱️ {mock.durationMinutes} 分鐘</span>
              </div>

              <Link
                href={`/practice/session-${mock.id}`}
                className="px-4 py-2 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold hover:bg-navy-800 dark:hover:bg-gold-400 transition flex items-center gap-1.5 shadow-sm"
              >
                進入 {selectedMockYear} 年考場 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
