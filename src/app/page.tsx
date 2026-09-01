'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Clock,
  CheckCircle2,
  AlertOctagon,
  Brain,
  Flame,
  Target,
  Trophy,
  ArrowRight,
  TrendingUp,
  BookOpen,
  HelpCircle,
  Sparkles,
  Award,
  Zap,
  CheckSquare,
  Square,
  ShieldCheck,
  ChevronRight,
  Layers,
  ScrollText,
  GitCompare
} from 'lucide-react';
import { getUserStats, getDailyTasks } from '@/lib/storage';
import { UserStats, DailyStudyTask } from '@/types';
import { SUBJECTS_INFO } from '@/data/seedData';

export default function DashboardPage() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [tasks, setTasks] = useState<DailyStudyTask[]>([]);

  useEffect(() => {
    setStats(getUserStats());
    setTasks(getDailyTasks());
  }, []);

  const toggleTask = (taskId: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  const completedCount = tasks.filter(t => t.isCompleted).length;
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <div className="space-y-6">
      
      {/* 1. Header Banner & Exam Countdown */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-slate-900 text-white p-6 sm:p-8 border border-navy-700 shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-gold-400 text-xs sm:text-sm font-semibold mb-2">
              <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-ping" />
              115 年專門職業及技術人員高等考試律師第一試
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              今日律師一試研讀進度
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              以通過第一試為唯一目標。依照「重點→法條→高頻考點→歷屆真題→錯題間隔複習」閉環推進。
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 self-start md:self-auto">
            <div className="text-center pr-4 border-r border-white/10">
              <span className="text-[11px] text-slate-400 font-medium block">距離目標考試</span>
              <span className="text-3xl sm:text-4xl font-black text-gold-400">128</span>
              <span className="text-xs text-slate-400 ml-1">天</span>
            </div>
            <div className="text-xs space-y-1">
              <div className="text-emerald-400 font-semibold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" /> 連續學習 {stats?.streakDays || 14} 天
              </div>
              <div className="text-slate-300">階段：<strong className="text-gold-300">衝刺刷題期</strong></div>
              <div className="text-[11px] text-slate-400">目標及格：372 分以上</div>
            </div>
          </div>
        </div>

        {/* Progress Bar of Today Tasks */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-300">今日任務完成度：</span>
            <div className="w-48 bg-slate-700/60 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-gold-500 to-amber-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="font-bold text-gold-300">{progressPercent}%</span>
            <span className="text-slate-400">({completedCount}/{tasks.length})</span>
          </div>

          <div className="text-slate-400 text-[11px]">
            今日讀書建議：優先清理【行政訴訟】與【傳聞例外】錯題庫
          </div>
        </div>
      </div>

      {/* 2. Today's Mission Queue (今日任務清單) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-gold-950/50 text-gold-600 dark:text-gold-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-base sm:text-lg text-navy-900 dark:text-white">
                  今日指定學習任務
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  系統根據遺忘曲線與歷屆配分智慧排程
                </p>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-medium">
              5 項任務
            </span>
          </div>

          <div className="space-y-2.5">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`group flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all ${
                  task.isCompleted
                    ? 'bg-slate-50/80 dark:bg-navy-950/40 border-slate-200 dark:border-navy-800 opacity-75'
                    : 'bg-white dark:bg-navy-850 border-slate-200 dark:border-navy-700 hover:border-gold-500/50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="text-slate-400 hover:text-gold-500 transition-colors flex-shrink-0"
                  >
                    {task.isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className={`text-sm font-semibold truncate ${
                      task.isCompleted
                        ? 'line-through text-slate-400 dark:text-slate-500'
                        : 'text-navy-900 dark:text-slate-100'
                    }`}>
                      {task.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      {task.subtitle}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-3 flex-shrink-0">
                  {task.estimatedMinutes && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-medium hidden sm:inline-block">
                      ⏱️ {task.estimatedMinutes} 分鐘
                    </span>
                  )}
                  {task.questionCount && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-amber-50 dark:bg-gold-950 text-amber-700 dark:text-gold-300 font-medium hidden sm:inline-block">
                      📝 {task.questionCount} 題
                    </span>
                  )}
                  <Link
                    href={task.actionUrl}
                    className="px-3 py-1.5 rounded-lg bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 hover:bg-navy-800 dark:hover:bg-gold-400 text-xs font-semibold flex items-center gap-1 transition"
                  >
                    開始
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Real-time Metrics & Weak Subject Alerts */}
        <div className="space-y-6">
          {/* Key Stats Cards */}
          <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-navy-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              個人學習數據即時統計
            </h3>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3 bg-slate-50 dark:bg-navy-950 rounded-xl border border-slate-100 dark:border-navy-800">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">今日讀書時間</span>
                <strong className="text-lg font-extrabold text-navy-900 dark:text-white">105</strong>
                <span className="text-xs text-slate-500 ml-1">分鐘</span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-navy-950 rounded-xl border border-slate-100 dark:border-navy-800">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">今日刷題 / 正確率</span>
                <strong className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">45</strong>
                <span className="text-xs text-slate-500 ml-1">(82%)</span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-navy-950 rounded-xl border border-slate-100 dark:border-navy-800">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">累積完成真題</span>
                <strong className="text-lg font-extrabold text-navy-900 dark:text-white">1,420</strong>
                <span className="text-xs text-slate-500 ml-1">題</span>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-navy-950 rounded-xl border border-slate-100 dark:border-navy-800">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block">未清空錯題庫</span>
                <strong className="text-lg font-extrabold text-red-500">38</strong>
                <span className="text-xs text-slate-500 ml-1">題</span>
              </div>
            </div>

            {/* Weak Subject Diagnosis */}
            <div className="p-4 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 dark:text-red-300 mb-1">
                <AlertOctagon className="w-4 h-4 text-red-500" />
                系統標定目前優先補強弱科
              </div>
              <ul className="text-xs text-red-900 dark:text-red-200 space-y-1">
                <li className="flex items-center justify-between">
                  <span>• 民事訴訟法（共同訴訟與既判力）</span>
                  <strong className="text-red-600 font-bold">51%</strong>
                </li>
                <li className="flex items-center justify-between">
                  <span>• 行政訴訟法（確認與課予義務）</span>
                  <strong className="text-red-600 font-bold">58%</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Action Hub */}
          <div className="bg-gradient-to-br from-amber-500/10 to-gold-500/5 dark:from-navy-900 dark:to-navy-850 rounded-2xl p-5 border border-gold-300/40 dark:border-navy-700 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              碎片時間高分捷徑
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/practice/daily-15"
                className="p-2.5 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-700 hover:border-gold-500 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 transition shadow-sm"
              >
                <Target className="w-4 h-4 text-amber-500" />
                快速 10 題
              </Link>
              <Link
                href="/laws"
                className="p-2.5 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-700 hover:border-gold-500 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 transition shadow-sm"
              >
                <ScrollText className="w-4 h-4 text-blue-500" />
                法條挖空測驗
              </Link>
              <Link
                href="/comparisons"
                className="p-2.5 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-700 hover:border-gold-500 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 transition shadow-sm"
              >
                <GitCompare className="w-4 h-4 text-purple-500" />
                爭點比較表
              </Link>
              <Link
                href="/flashcards"
                className="p-2.5 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-700 hover:border-gold-500 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 transition shadow-sm"
              >
                <Layers className="w-4 h-4 text-emerald-500" />
                閃卡抽背
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* 4. 15 Subjects Quick Overview Grid */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-base sm:text-lg text-navy-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-gold-500" />
              15 科全真命題地圖總覽
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              綜合法學（一）300分 ＋ 綜合法學（二）300分
            </p>
          </div>
          <Link
            href="/subjects"
            className="text-xs text-gold-600 dark:text-gold-400 font-semibold hover:underline flex items-center gap-1"
          >
            檢視全部章節進度 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {SUBJECTS_INFO.map((sub) => (
            <Link
              key={sub.id}
              href={`/subjects/${sub.id}`}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-navy-800 hover:border-gold-500/60 hover:shadow-md transition group"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-navy-900 dark:text-white group-hover:text-gold-500 transition">
                  {sub.name}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-semibold">
                  {sub.officialScore}分
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                {sub.description}
              </p>
              <div className="mt-2.5 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{sub.totalChapters} 章節</span>
                <span className="text-emerald-500 font-bold">進度 75%</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
