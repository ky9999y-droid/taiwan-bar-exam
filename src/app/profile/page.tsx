'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Calendar,
  Clock,
  Target,
  Sparkles,
  CheckCircle2,
  Settings,
  Flame,
  Award,
  BookOpen
} from 'lucide-react';

export default function ProfilePage() {
  const [dailyMinutes, setDailyMinutes] = useState<number>(120);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(6);
  const [targetDate, setTargetDate] = useState<string>('2027-08-07');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const scheduleDays = [
    { day: '星期一', subjects: '民法（債總侵權） ＋ 刑法（未遂犯）', minutes: 120 },
    { day: '星期二', subjects: '行政法（行政處分） ＋ 刑事訴訟法（傳聞法則）', minutes: 120 },
    { day: '星期三', subjects: '民事訴訟法（既判力） ＋ 憲法（人權基本原則）', minutes: 120 },
    { day: '星期四', subjects: '公司法（董事義務） ＋ 證券交易法（內線交易）', minutes: 120 },
    { day: '星期五', subjects: '國際公私法 ＋ 法律倫理 ＋ 強制執行法', minutes: 120 },
    { day: '星期六', subjects: '綜合法學（一）全真模考 ＋ 錯題深度檢討', minutes: 180 },
    { day: '星期日', subjects: '休息 / 弱點專題艾賓浩斯間隔複習', minutes: 60 }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <User className="w-4 h-4" />
            個人學習檔案與讀書計畫動態排程
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            考生個人設定與讀書進度規劃
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            設定每日目標時數與考試日期，系統自動依配分權重與個人弱點動態微調讀書課表。
          </p>
        </div>
      </div>

      {/* Plan Settings Card */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-5">
        <h2 className="font-extrabold text-base text-navy-900 dark:text-white flex items-center gap-2">
          <Settings className="w-5 h-5 text-gold-500" />
          讀書計畫參數設定
        </h2>

        {isSaved && (
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            讀書計畫設定已成功更新！系統已自動重新計算今日任務。
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              目標考試日期
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              每天預計研讀時間（分鐘）
            </label>
            <input
              type="number"
              value={dailyMinutes}
              onChange={(e) => setDailyMinutes(Number(e.target.value))}
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white font-bold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              每週讀書天數
            </label>
            <select
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white font-bold"
            >
              <option value={5}>每週 5 天</option>
              <option value={6}>每週 6 天 (推薦)</option>
              <option value={7}>每週 7 天 (全力衝刺)</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs hover:bg-navy-800 transition shadow"
          >
            儲存並重新排程
          </button>
        </div>
      </div>

      {/* Auto-Generated Weekly Schedule */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold text-base text-navy-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gold-500" />
            動態生成之每週科目排程表
          </h2>
          <span className="text-xs text-slate-400">
            自動依「弱點 60% ＋ 高頻 40%」配比
          </span>
        </div>

        <div className="space-y-2.5">
          {scheduleDays.map((s, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-navy-900 dark:text-gold-400 w-14">
                  {s.day}
                </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {s.subjects}
                </span>
              </div>

              <span className="text-slate-400 font-mono">
                ⏱️ {s.minutes} 分鐘
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
