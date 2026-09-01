'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  FileQuestion,
  ShieldCheck,
  Star,
  Flame,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
  AlertTriangle,
  RotateCcw,
  Calendar
} from 'lucide-react';
import { getAllQuestions } from '@/lib/storage';
import { SUBJECTS_INFO, RECENT_5_EXAM_YEARS } from '@/data/seedData';
import { Question, SourceType } from '@/types';

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [selectedSource, setSelectedSource] = useState<string>('ALL');
  const [searchTag, setSearchTag] = useState<string>('');

  useEffect(() => {
    setQuestions(getAllQuestions());
  }, []);

  const filteredQuestions = questions.filter((q) => {
    if (selectedSubject !== 'ALL' && q.subjectId !== selectedSubject) return false;
    if (selectedYear !== 'ALL' && q.examYear !== selectedYear) return false;
    if (selectedSource !== 'ALL' && q.sourceType !== selectedSource) return false;
    if (searchTag.trim()) {
      const query = searchTag.toLowerCase();
      const matchPrompt = q.prompt.toLowerCase().includes(query);
      const matchTag = q.tags.some(t => t.toLowerCase().includes(query));
      if (!matchPrompt && !matchTag) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <FileQuestion className="w-4 h-4" />
            歷屆試題與全真題庫資料庫（收錄最新前 5 年官方考題）
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            113 年 ～ 109 年 歷屆考題多維檢索
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            完整收錄最新前五年（113、112、111、110、109年）考選部專技高考律師第一試真題，支援逐選項精準詳解。
          </p>
        </div>

        <Link
          href="/practice/session-all"
          className="px-4 py-2.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs sm:text-sm hover:bg-navy-800 dark:hover:bg-gold-400 transition shadow flex items-center gap-2 self-start md:self-auto"
        >
          <Sparkles className="w-4 h-4" />
          以此條件隨機組卷測驗
        </Link>
      </div>

      {/* Year Badges Shortcuts */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-bold flex items-center gap-1 flex-shrink-0">
          <Calendar className="w-3.5 h-3.5" /> 快速選擇最新前 5 年：
        </span>
        <button
          onClick={() => setSelectedYear('ALL')}
          className={`px-3 py-1.5 rounded-xl font-bold transition flex-shrink-0 ${
            selectedYear === 'ALL'
              ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
              : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          全部 5 年真題
        </button>
        {RECENT_5_EXAM_YEARS.map(y => (
          <button
            key={y.year}
            onClick={() => setSelectedYear(y.year)}
            className={`px-3 py-1.5 rounded-xl font-bold transition flex-shrink-0 flex items-center gap-1 ${
              selectedYear === y.year
                ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <span>{y.year} 年</span>
            {y.year === '113' && (
              <span className="text-[10px] px-1 rounded bg-amber-400 text-navy-950 font-black">
                最新
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Multi-Filter Bar */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          
          {/* Subject Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              科目篩選
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-800 dark:text-slate-100 font-medium focus:ring-2 focus:ring-gold-500"
            >
              <option value="ALL">全部 15 科</option>
              {SUBJECTS_INFO.map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.officialScore}分)</option>
              ))}
            </select>
          </div>

          {/* Year Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              考試年度 (最新前5年)
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-800 dark:text-slate-100 font-medium focus:ring-2 focus:ring-gold-500"
            >
              <option value="ALL">全部前 5 年真題</option>
              {RECENT_5_EXAM_YEARS.map(y => (
                <option key={y.year} value={y.year}>{y.name}</option>
              ))}
            </select>
          </div>

          {/* Source Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              題庫來源標示
            </label>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-800 dark:text-slate-100 font-medium focus:ring-2 focus:ring-gold-500"
            >
              <option value="ALL">全部題庫</option>
              <option value="OFFICIAL_EXAM">🟦 官方歷屆考題 (首選)</option>
              <option value="AI_MOCK">🟨 AI 模擬精選題</option>
              <option value="CUSTOM">🟩 自建經典爭點題</option>
            </select>
          </div>

          {/* Tag & Text Search */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-1">
              考點標籤 / 關鍵字
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="例如 #傳聞法則 #信賴保護 #裁判憲法審查..."
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-gold-500"
              />
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-navy-800">
          <span className="text-slate-500 dark:text-slate-400">
            共篩選出 <strong className="text-navy-900 dark:text-white font-bold">{filteredQuestions.length}</strong> 道真題
          </span>
          <button
            onClick={() => {
              setSelectedSubject('ALL');
              setSelectedYear('ALL');
              setSelectedSource('ALL');
              setSearchTag('');
            }}
            className="text-xs text-slate-400 hover:text-gold-500 flex items-center gap-1 font-semibold"
          >
            <RotateCcw className="w-3 h-3" /> 重設所有篩選
          </button>
        </div>
      </div>

      {/* Questions Listing */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => (
          <div
            key={q.id}
            className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-navy-800 hover:border-gold-500/50 hover:shadow-md transition space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {q.sourceType === 'OFFICIAL_EXAM' ? '🟦 官方歷屆考題' : '🟨 AI模擬題'}
                </span>
                <span className="font-bold text-navy-900 dark:text-white">
                  {q.chapterTitle}
                </span>
                {q.examYear && (
                  <span className="text-slate-500 dark:text-slate-400 font-semibold">
                    ({q.examYear}年 第{q.questionNo}題)
                  </span>
                )}
                {q.examYear === '113' && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-gold-950 text-amber-800 dark:text-gold-300 font-extrabold border border-amber-300">
                    最新真題
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-semibold flex items-center gap-0.5">
                  難度：{q.difficulty === 'HARD' ? '★★★' : '★★☆'}
                </span>
              </div>
            </div>

            {/* Prompt Preview */}
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed font-sans line-clamp-2">
              {q.prompt}
            </p>

            {/* Tags & Action Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-navy-800 text-xs">
              <div className="flex flex-wrap gap-1.5">
                {q.tags.map((t, tidx) => (
                  <span
                    key={tidx}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-navy-950 text-slate-600 dark:text-slate-300 text-[11px] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/practice/session-${q.id}`}
                className="px-3.5 py-1.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold hover:bg-navy-800 dark:hover:bg-gold-400 transition flex items-center gap-1 shadow-sm"
              >
                立即作答與看逐選項解析 <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
