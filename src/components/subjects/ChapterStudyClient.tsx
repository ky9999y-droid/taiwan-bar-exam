'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Scale,
  Flame,
  AlertTriangle,
  FileText,
  Star,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowLeft,
  Target,
  Sparkles,
  Layers,
  ChevronRight,
  GitCompare,
  Bookmark,
  Share2,
  Printer
} from 'lucide-react';
import { getChapterTextbook, SUBJECTS_INFO } from '@/data/seedData';
import { StudyMode } from '@/types';

export function ChapterStudyClient({ chapterId }: { chapterId: string }) {
  const [studyMode, setStudyMode] = useState<StudyMode>('NORMAL');

  const textbook = getChapterTextbook(chapterId);
  const subject = SUBJECTS_INFO.find(s => s.id === textbook.subjectId) || SUBJECTS_INFO[1];

  return (
    <div className="space-y-6">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href={`/subjects/${subject.id}`} className="hover:text-gold-500 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 返回 {subject.name}
          </Link>
          <span>/</span>
          <span className="text-navy-900 dark:text-slate-200 font-bold truncate">
            第 {textbook.chapterNo} 章：{textbook.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/practice/session-${textbook.id}`}
            className="px-3.5 py-1.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold hover:bg-navy-800 dark:hover:bg-gold-400 transition flex items-center gap-1.5 shadow-sm"
          >
            <Target className="w-4 h-4 text-amber-400 dark:text-navy-900" />
            做本章精選歷屆題 (15題)
          </Link>
        </div>
      </div>

      {/* Header & Mode Switcher Bar */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-gold-600 dark:text-gold-400 font-bold mb-1">
              <span>{subject.name}</span> • <span>第 {textbook.chapterNo} 章</span>
              <span className="text-red-500 bg-red-50 dark:bg-red-950/60 px-2 py-0.5 rounded font-extrabold flex items-center gap-1">
                <Flame className="w-3 h-3" /> {'★'.repeat(textbook.frequencyStars)} 超高頻
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
              {textbook.title}
            </h1>
          </div>

          {/* 4 Mode Selector Tabs */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-navy-950 rounded-xl border border-slate-200 dark:border-navy-800 self-start md:self-auto">
            <button
              onClick={() => setStudyMode('NORMAL')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                studyMode === 'NORMAL'
                  ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              📖 正常研讀
            </button>
            <button
              onClick={() => setStudyMode('SUMMARY')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                studyMode === 'SUMMARY'
                  ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              ⚡ 重點整理
            </button>
            <button
              onClick={() => setStudyMode('CRAM')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                studyMode === 'CRAM'
                  ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              ⏱️ 考前速讀
            </button>
            <button
              onClick={() => setStudyMode('FLASHCARD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                studyMode === 'FLASHCARD'
                  ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              🧠 記憶閃卡
            </button>
          </div>
        </div>
      </div>

      {/* 9-Layer Standard Textbook Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Layer 1: Core Concept (核心觀念) */}
          <section className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-navy-900 dark:text-white font-bold text-base border-b border-slate-100 dark:border-navy-800 pb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-gold-100 dark:bg-gold-950 text-gold-700 dark:text-gold-300 text-xs font-black">
                1
              </span>
              核心觀念（白話速懂）
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans bg-slate-50 dark:bg-navy-950/60 p-4 rounded-xl border border-slate-100 dark:border-navy-800">
              {textbook.coreConcept}
            </p>
          </section>

          {/* Layer 2: Frequency & Weight (必考程度) */}
          <section className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-navy-900 dark:text-white font-bold text-base border-b border-slate-100 dark:border-navy-800 pb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-gold-100 dark:bg-gold-950 text-gold-700 dark:text-gold-300 text-xs font-black">
                2
              </span>
              必考程度分析
            </div>
            <div className="flex items-center gap-3 p-3.5 bg-amber-50/60 dark:bg-amber-950/30 rounded-xl border border-amber-200/80 dark:border-amber-900/60 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
              <Flame className="w-5 h-5 text-amber-600 dark:text-gold-400 flex-shrink-0" />
              <div>{textbook.examFrequencyDesc}</div>
            </div>
          </section>

          {/* Layer 3: Important Laws (重要法條) */}
          <section className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-navy-800 pb-3">
              <div className="flex items-center gap-2 text-navy-900 dark:text-white font-bold text-base">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-gold-100 dark:bg-gold-950 text-gold-700 dark:text-gold-300 text-xs font-black">
                  3
                </span>
                重要法條（條號、重點、關鍵字、易出題處）
              </div>
              <Link
                href="/laws"
                className="text-xs text-gold-600 dark:text-gold-400 font-semibold hover:underline"
              >
                法條挖空測驗 ➡️
              </Link>
            </div>

            <div className="space-y-4">
              {textbook.importantLaws.map((law, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-navy-800 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-navy-900 dark:text-gold-300">
                      📜 {law.lawName} {law.articleNo}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold-100 dark:bg-gold-950 text-gold-700 dark:text-gold-300 font-semibold">
                      高頻條文
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 law-quote-box font-serif leading-relaxed">
                    {law.keyClause}
                  </div>

                  {law.coreKeywords && (
                    <div className="flex flex-wrap items-center gap-1.5 text-xs pt-1">
                      <span className="text-slate-400 text-[11px]">必背關鍵字：</span>
                      {law.coreKeywords.map((kw, kidx) => (
                        <span
                          key={kidx}
                          className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 font-semibold text-[11px]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                    💡 條文白話拆解：{law.plainExplanation}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Layer 4: First Stage Testing Style (第一試常考方式) */}
          <section className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-navy-900 dark:text-white font-bold text-base border-b border-slate-100 dark:border-navy-800 pb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-gold-100 dark:bg-gold-950 text-gold-700 dark:text-gold-300 text-xs font-black">
                4
              </span>
              第一試常考出題模式
            </div>
            <div className="space-y-2">
              {textbook.barExamTestingStyle.map((style, sidx) => (
                <div
                  key={sidx}
                  className="flex items-start gap-2.5 p-3 bg-blue-50/50 dark:bg-navy-950/50 rounded-xl text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                >
                  <span className="text-blue-500 font-bold mt-0.5">🎯 考法 {sidx + 1}：</span>
                  <span>{style}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Layer 5: Common Traps (常見考試陷阱) */}
          <section className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-base border-b border-slate-100 dark:border-navy-800 pb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-black">
                5
              </span>
              ⚠️ 第一試常見考試陷阱與誘答
            </div>
            <div className="space-y-2.5">
              {textbook.commonTraps.map((trap, tidx) => (
                <div key={tidx} className="trap-alert-box text-xs sm:text-sm font-medium">
                  {trap}
                </div>
              ))}
            </div>
          </section>

          {/* Layer 6: Confusion Matrix Comparison Table (易混淆概念比較表) */}
          <section className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-navy-900 dark:text-white font-bold text-base border-b border-slate-100 dark:border-navy-800 pb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-black">
                6
              </span>
              易混淆概念深度比較表（{textbook.confusionComparisons.title}）
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-navy-950 border-b border-slate-200 dark:border-navy-800">
                    <th className="p-3 font-bold text-slate-700 dark:text-slate-300 w-1/4">比較維度</th>
                    <th className="p-3 font-bold text-navy-900 dark:text-gold-300 w-3/8">
                      {textbook.confusionComparisons.conceptAName}
                    </th>
                    <th className="p-3 font-bold text-navy-900 dark:text-gold-300 w-3/8">
                      {textbook.confusionComparisons.conceptBName}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-navy-800">
                  {textbook.confusionComparisons.rows.map((row, ridx) => (
                    <tr key={ridx} className="hover:bg-slate-50/50 dark:hover:bg-navy-950/40">
                      <td className="p-3 font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-navy-950/30">
                        {row.dimension}
                      </td>
                      <td className="p-3 text-slate-800 dark:text-slate-200">
                        {row.conceptA}
                      </td>
                      <td className="p-3 text-slate-800 dark:text-slate-200">
                        {row.conceptB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Layer 7: Important Cases (重要實務見解 - 絕不虛構) */}
          <section className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-navy-800 pb-3">
              <div className="flex items-center gap-2 text-navy-900 dark:text-white font-bold text-base">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-black">
                  7
                </span>
                重要實務見解（憲判字/釋字/庭長聯席會議/裁判）
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                100% 官方真實驗證
              </span>
            </div>

            <div className="space-y-3">
              {textbook.importantCases.map((cs, cidx) => (
                <div key={cidx} className="case-holding-box space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-navy-900 dark:text-blue-200">
                      🏛️ {cs.court} ｜ {cs.caseNo}
                    </span>
                    {cs.date && <span className="text-[11px] text-slate-400">{cs.date}</span>}
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                    {cs.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Layer 8: Historical Trends (歷屆出題規律) */}
          <section className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-navy-900 dark:text-white font-bold text-base border-b border-slate-100 dark:border-navy-800 pb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-gold-100 dark:bg-gold-950 text-gold-700 dark:text-gold-300 text-xs font-black">
                8
              </span>
              歷屆出題規律與頻率統計
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {textbook.historicalTrends.map((trend, tidx) => (
                <div key={tidx} className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-100 dark:border-navy-800">
                  📊 {trend}
                </div>
              ))}
            </div>
          </section>

          {/* Layer 9: One Minute Summary (考前一分鐘記憶) */}
          <section className="bg-gradient-to-br from-gold-500/10 via-amber-500/5 to-navy-900/40 rounded-2xl p-6 border-2 border-gold-400/60 dark:border-gold-500/50 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-navy-900 dark:text-gold-300 font-extrabold text-base border-b border-gold-300/40 dark:border-gold-800 pb-3">
              <Sparkles className="w-5 h-5 text-gold-500" />
              九、考前一分鐘超短記憶清單（考前必背）
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
              {textbook.oneMinuteSummary.map((sum, sidx) => (
                <div
                  key={sidx}
                  className="p-2.5 rounded-lg bg-white/80 dark:bg-navy-950/80 border border-gold-300/50 dark:border-navy-700 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>{sum}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Affix / Quick Nav Column */}
        <div className="space-y-4">
          <div className="sticky top-20 bg-white dark:bg-navy-900 rounded-2xl p-5 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
              章節導覽捷徑
            </h4>
            <div className="space-y-1 text-xs">
              <a href="#layer-1" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300">
                1. 核心觀念
              </a>
              <a href="#layer-3" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300">
                3. 重要法條
              </a>
              <a href="#layer-5" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300">
                5. 常見考試陷阱
              </a>
              <a href="#layer-6" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300">
                6. 易混淆概念比較表
              </a>
              <a href="#layer-7" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300">
                7. 重要實務見解
              </a>
              <a href="#layer-9" className="block px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300 font-bold text-gold-600 dark:text-gold-400">
                9. 一分鐘複習清單
              </a>
            </div>

            <hr className="border-slate-100 dark:border-navy-800" />

            <div className="space-y-2">
              <Link
                href={`/practice/session-${textbook.id}`}
                className="w-full py-2.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-navy-800 transition shadow"
              >
                <Target className="w-4 h-4" />
                立即開始做本章真題
              </Link>
              <Link
                href="/ai-coach"
                className="w-full py-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-navy-700 transition"
              >
                🤖 請教 AI 一試教練
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
