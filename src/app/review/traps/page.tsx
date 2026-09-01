'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { getTrapQuestions } from '@/lib/storage';
import { Question } from '@/types';

export default function TrapsPage() {
  const [traps, setTraps] = useState<Question[]>([]);

  useEffect(() => {
    setTraps(getTrapQuestions());
  }, []);

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <AlertTriangle className="w-4 h-4" />
            個人陷阱題與不熟題本庫
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            我的陷阱題本（共 {traps.length} 題）
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            猜對也是不熟！在做題時標記「這題不熟 / 陷阱題」，系統將自動收錄並安排定期防猜重複考驗。
          </p>
        </div>

        <Link
          href="/practice/session-traps"
          className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow transition flex items-center gap-2 self-start md:self-auto"
        >
          <RotateCcw className="w-4 h-4" />
          開始陷阱題專項重測
        </Link>
      </div>

      {/* Traps List */}
      <div className="space-y-4">
        {traps.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-navy-800 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-amber-500 mx-auto" />
            <h3 className="font-bold text-lg text-navy-900 dark:text-white">目前沒有標記陷阱題</h3>
            <p className="text-xs text-slate-400">在平常做題時遇到猶豫猜對的題目，請隨時點擊「這題不熟」加入此處！</p>
            <Link
              href="/questions"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold mt-2"
            >
              前往題庫刷題
            </Link>
          </div>
        ) : (
          traps.map((q) => (
            <div
              key={q.id}
              className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-amber-200 dark:border-amber-950/60 shadow-sm space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-slate-100 dark:border-navy-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                    ⚠️ 陷阱/不熟標記
                  </span>
                  <span className="font-bold text-navy-900 dark:text-white">
                    {q.chapterTitle}
                  </span>
                  <span className="text-slate-400">({q.examYear}年 第{q.questionNo}題)</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">正確答案：<strong className="text-emerald-500 font-bold">({q.correctAnswer})</strong></span>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                {q.prompt}
              </p>

              <div className="flex items-center justify-between pt-2 text-xs">
                <div className="flex gap-1.5">
                  {q.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-950 text-slate-500 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/practice/session-${q.id}`}
                  className="px-3.5 py-1.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold hover:bg-navy-800 transition flex items-center gap-1 shadow-sm"
                >
                  重測與確認詳解 <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
