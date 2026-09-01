'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Brain, RotateCcw, CheckCircle2, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { getAllQuestions } from '@/lib/storage';
import { Question } from '@/types';

export default function TodayReviewPage() {
  const [dueQuestions, setDueQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Return sample questions scheduled for today
    const all = getAllQuestions();
    setDueQuestions(all);
  }, []);

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Brain className="w-4 h-4" />
            艾賓浩斯遺忘曲線 智慧間隔複習引擎
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            今日到達衰退週期之題目（共 {dueQuestions.length} 題）
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            排程週期：第 1 天 ➔ 第 3 天 ➔ 第 7 天 ➔ 第 14 天 ➔ 第 30 天。抗擊大腦遺忘！
          </p>
        </div>

        <Link
          href="/practice/session-spaced"
          className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow transition flex items-center gap-2 self-start md:self-auto"
        >
          <RotateCcw className="w-4 h-4" />
          開始今日間隔複習刷題
        </Link>
      </div>

      {/* Due Questions List */}
      <div className="space-y-4">
        {dueQuestions.map((q, idx) => (
          <div
            key={q.id}
            className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-purple-200 dark:border-purple-950/60 shadow-sm space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-slate-100 dark:border-navy-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  間隔排程 Level {idx + 1}
                </span>
                <span className="font-bold text-navy-900 dark:text-white">
                  {q.chapterTitle}
                </span>
                <span className="text-slate-400">({q.examYear}年 第{q.questionNo}題)</span>
              </div>

              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                預計遺忘機率：高達 65%
              </div>
            </div>

            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
              {q.prompt}
            </p>

            <div className="flex items-center justify-between pt-2 text-xs">
              <div className="flex gap-1.5">
                {q.tags.map((t, tidx) => (
                  <span key={tidx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-950 text-slate-500 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/practice/session-${q.id}`}
                className="px-3.5 py-1.5 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition flex items-center gap-1 shadow-sm"
              >
                立即複習測驗 <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
