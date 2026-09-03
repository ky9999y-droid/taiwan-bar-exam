'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Scale,
  Flame,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ChevronRight,
  ArrowLeft,
  Filter,
  Play,
  RotateCcw,
  Star,
  Target,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { SUBJECTS_INFO, CHAPTER_SEED_LIST } from '@/data/seedData';
import { MasteryState, SubjectId } from '@/types';
import { getChapterDynamicMastery, getStoredAnswers } from '@/lib/storage';

export function SubjectDetailClient({ subjectId }: { subjectId: SubjectId }) {
  const [filterState, setFilterState] = useState<'ALL' | MasteryState>('ALL');
  const [userAnswersCount, setUserAnswersCount] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const answers = getStoredAnswers();
    setUserAnswersCount(answers.length);
  }, []);

  const subject = SUBJECTS_INFO.find(s => s.id === subjectId) || SUBJECTS_INFO[1];
  const rawChapters = CHAPTER_SEED_LIST.filter(c => c.subjectId === subjectId);

  // Dynamically compute mastery for each chapter from real user answer storage
  const chapters = rawChapters.map(c => {
    const chapKey = `${c.subjectId}-${c.chapterNo}`;
    if (!mounted) return { ...c, dynamic: null };
    const dynamic = getChapterDynamicMastery(c.subjectId, c.chapterNo, chapKey);
    return {
      ...c,
      masteryPercentage: dynamic.isCustomData ? dynamic.masteryPercentage : 0,
      status: dynamic.isCustomData ? dynamic.status : 'UNLEARNED',
      isWeakness: dynamic.isCustomData ? dynamic.isWeakness : false,
      dynamic
    };
  });

  const attemptedCount = chapters.filter(c => c.dynamic && c.dynamic.isCustomData).length;
  const weaknessCount = chapters.filter(c => c.isWeakness).length;
  const masteredCount = chapters.filter(c => c.status === 'MASTERED').length;

  const filteredChapters = chapters.filter(c => {
    if (filterState === 'ALL') return true;
    return c.status === filterState;
  });

  const getStatusBadge = (status: MasteryState, percentage: number, isCustomData: boolean) => {
    if (!isCustomData) {
      return (
        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-500 dark:bg-navy-800 dark:text-slate-400 flex items-center gap-1 border border-slate-200 dark:border-navy-700">
          <Clock className="w-3.5 h-3.5" /> 尚未測驗 (0%)
        </span>
      );
    }

    switch (status) {
      case 'MASTERED':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 🟢 熟練 ({percentage}%)
          </span>
        );
      case 'WEAKNESS':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 flex items-center gap-1 animate-pulse">
            <AlertTriangle className="w-3.5 h-3.5" /> ⚠️ 弱點 ({percentage}%)
          </span>
        );
      case 'NEEDS_REVIEW':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center gap-1">
            <RotateCcw className="w-3.5 h-3.5" /> 需要複習 ({percentage}%)
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 已完成 ({percentage}%)
          </span>
        );
      case 'LEARNING':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 學習中 ({percentage}%)
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-navy-800 dark:text-slate-300">
            尚未測驗
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Back Link & Title */}
      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
        <Link href="/subjects" className="hover:text-gold-500 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> 返回 15 科學習地圖
        </Link>
        <span>/</span>
        <span className="text-navy-900 dark:text-slate-200 font-bold">{subject.name}</span>
      </div>

      {/* Subject Header */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-navy-900 dark:bg-gold-500 text-gold-400 dark:text-navy-950 flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0">
            <Scale className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">
                {subject.name}
              </h1>
              <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-gold-50 dark:bg-gold-950 text-gold-700 dark:text-gold-300 border border-gold-300 dark:border-gold-800">
                {subject.paper === 'PAPER_1' ? '綜合法學（一）' : '綜合法學（二）'} • {subject.officialScore} 分
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl leading-relaxed">
              {subject.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/practice/session-${subject.id}`}
            className="px-4 py-2.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs sm:text-sm hover:bg-navy-800 dark:hover:bg-gold-400 shadow transition flex items-center gap-2"
          >
            <Target className="w-4 h-4" />
            開始{subject.name}專題刷題
          </Link>
        </div>
      </div>

      {/* Dynamic Progress Engine Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-gold-500/10 border border-blue-200 dark:border-navy-700 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-navy-900 dark:text-white flex items-center gap-1.5">
              動態學習掌握度引擎
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                實時個人作答統計
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
              {attemptedCount > 0
                ? `您已在本科完成 ${attemptedCount} / ${chapters.length} 個章節測驗（熟練 ${masteredCount} 章、弱點 ${weaknessCount} 章）`
                : '尚未開始本科測驗，點選各章「做本章歷屆題」即可自動記錄您的作答正確率並即時標示弱點章節'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 font-bold text-slate-700 dark:text-slate-200">
          <div className="text-right">
            <div className="text-xs text-slate-400">已測驗章節</div>
            <div className="text-sm font-extrabold text-navy-900 dark:text-gold-400">{attemptedCount} / {chapters.length}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400">⚠️ 弱點章節</div>
            <div className="text-sm font-extrabold text-red-500">{weaknessCount}</div>
          </div>
        </div>
      </div>

      {/* 6-State Filter Bar */}
      <div className="bg-slate-100 dark:bg-navy-950 p-1.5 rounded-2xl border border-slate-200 dark:border-navy-800 flex items-center gap-1.5 overflow-x-auto text-xs">
        <button
          onClick={() => setFilterState('ALL')}
          className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
            filterState === 'ALL'
              ? 'bg-white dark:bg-navy-800 text-navy-900 dark:text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
          }`}
        >
          全部章節 ({chapters.length})
        </button>
        <button
          onClick={() => setFilterState('WEAKNESS')}
          className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap flex items-center gap-1 ${
            filterState === 'WEAKNESS'
              ? 'bg-red-500 text-white shadow-sm'
              : 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" /> ⚠️弱點 ({weaknessCount})
        </button>
        <button
          onClick={() => setFilterState('NEEDS_REVIEW')}
          className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap flex items-center gap-1 ${
            filterState === 'NEEDS_REVIEW'
              ? 'bg-amber-500 text-white shadow-sm'
              : 'text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" /> 需要複習
        </button>
        <button
          onClick={() => setFilterState('MASTERED')}
          className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap flex items-center gap-1 ${
            filterState === 'MASTERED'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" /> 🟢 熟練 ({masteredCount})
        </button>
        <button
          onClick={() => setFilterState('COMPLETED')}
          className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
            filterState === 'COMPLETED'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-blue-600 dark:text-blue-400'
          }`}
        >
          已完成
        </button>
      </div>

      {/* Chapters List */}
      <div className="space-y-3">
        {filteredChapters.map((chap) => {
          const chapKey = `${chap.subjectId}-${chap.chapterNo}`;

          return (
            <div
              key={chapKey}
              className={`p-4 sm:p-5 rounded-2xl bg-white dark:bg-navy-900 border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                chap.isWeakness
                  ? 'border-red-300 dark:border-red-900/60 shadow-sm bg-gradient-to-r from-red-50/20 to-transparent'
                  : 'border-slate-200 dark:border-navy-800 hover:border-gold-500/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-3.5 flex-1">
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-navy-800 font-extrabold text-xs text-navy-900 dark:text-gold-400 flex items-center justify-center flex-shrink-0">
                  {chap.chapterNo < 10 ? `0${chap.chapterNo}` : chap.chapterNo}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-navy-900 dark:text-white">
                      {chap.title}
                    </h3>
                    {getStatusBadge(chap.status, chap.masteryPercentage, !!chap.dynamic?.isCustomData)}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                    <span className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      出題權重：{'★'.repeat(chap.weightStars)}
                    </span>
                    <span>歷屆考題：{chap.weightStars * 15 + 8} 題</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 self-end md:self-auto flex-shrink-0">
                <Link
                  href={`/subjects/${subject.id}/chapters/${chapKey}`}
                  className="px-3.5 py-2 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold hover:bg-navy-800 dark:hover:bg-gold-400 transition flex items-center gap-1.5 shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  研讀考試教材
                </Link>
                <Link
                  href={`/practice/session-${chapKey}`}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 dark:hover:bg-navy-700 transition flex items-center gap-1.5"
                >
                  <Target className="w-3.5 h-3.5 text-amber-500" />
                  做本章歷屆題
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
