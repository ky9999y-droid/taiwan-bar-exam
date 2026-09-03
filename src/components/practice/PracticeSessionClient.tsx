'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';

import { getAllQuestions, saveAnswer, toggleTrapMark, getStoredAnswers } from '@/lib/storage';
import { SUBJECTS_INFO } from '@/data/seedData';
import { Question } from '@/types';
import { OptionExplanationCard } from '@/components/exam/OptionExplanationCard';

export function PracticeSessionClient({ sessionId }: { sessionId: string }) {
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [markedTraps, setMarkedTraps] = useState<Record<string, boolean>>({});
  const [markedReview, setMarkedReview] = useState<Record<string, boolean>>({});
  const [showInstantExplanation, setShowInstantExplanation] = useState<boolean>(true);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(1800); // 30 mins
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    const all = getAllQuestions();
    let filtered: Question[] = [];

    const rawKey = sessionId.startsWith('session-') ? sessionId.replace('session-', '') : sessionId;

    // 1. Paper 1 mock test (paper-1-113, session-paper-1-113, etc.)
    if (rawKey.startsWith('paper-1')) {
      const p1Subjects = ['CONST', 'ADMIN', 'CRIM', 'CRIM_PROC', 'PUB_INT_LAW', 'PRIV_INT_LAW', 'LEGAL_ETH'];
      filtered = all.filter(q => p1Subjects.includes(q.subjectId));
    }
    // 2. Paper 2 mock test (paper-2-113, session-paper-2-113, etc.)
    else if (rawKey.startsWith('paper-2')) {
      const p2Subjects = ['CIVIL', 'CIVIL_PROC', 'CORP', 'INSUR', 'NEG_INST', 'COMP_EXEC', 'SEC_REG', 'LEGAL_ENG'];
      filtered = all.filter(q => p2Subjects.includes(q.subjectId));
    }
    // 3. Specific subject practice (session-ADMIN, session-CONST, session-CRIM, session-CIVIL, etc.)
    else if (SUBJECTS_INFO.some(s => s.id === rawKey)) {
      filtered = all.filter(q => q.subjectId === rawKey);
    }
    // 4. Chapter-level practice (session-ADMIN-1, session-ADMIN-3, session-CRIM_PROC-7, etc.)
    else if (rawKey.includes('-') && !rawKey.startsWith('113-') && !rawKey.startsWith('112-') && !rawKey.startsWith('111-') && !rawKey.startsWith('110-') && !rawKey.startsWith('109-')) {
      const subId = rawKey.split('-')[0];
      const matchChapter = all.filter(q => q.chapterId === rawKey);
      if (matchChapter.length > 0) {
        filtered = matchChapter;
      } else {
        // Fallback to subject's own questions
        filtered = all.filter(q => q.subjectId === subId);
      }
    }
    // 5. Single question (session-113-BAR-CONST-01, etc.)
    else if (all.some(q => q.id === rawKey)) {
      filtered = all.filter(q => q.id === rawKey);
    }
    // 6. Wrong questions review session
    else if (rawKey === 'wrong') {
      const stored = getStoredAnswers();
      const wrongIds = stored.filter(a => !a.isCorrect).map(a => a.questionId);
      filtered = all.filter(q => wrongIds.includes(q.id));
    }
    // 7. Traps review session
    else if (rawKey === 'traps') {
      const stored = getStoredAnswers();
      const trapIds = stored.filter(a => a.isMarkedTrap).map(a => a.questionId);
      filtered = all.filter(q => trapIds.includes(q.id));
    }
    // 8. General / Quick / Daily
    else if (rawKey === 'daily-15') {
      filtered = all.slice(0, 15);
    } else if (rawKey === 'quick') {
      filtered = all.slice(0, 10);
    } else {
      filtered = all;
    }

    if (filtered.length === 0) {
      filtered = all;
    }

    setQuestions(filtered);

    // Hydrate existing answers if any
    const stored = getStoredAnswers();
    const ansMap: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
    const trapMap: Record<string, boolean> = {};
    stored.forEach(a => {
      ansMap[a.questionId] = a.selectedOption;
      if (a.isMarkedTrap) trapMap[a.questionId] = true;
    });
    setSelectedAnswers(ansMap);
    setMarkedTraps(trapMap);
  }, [sessionId]);

  // Timer Tick
  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setTimeLeftSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQ) return;
    const isCorrect = option === currentQ.correctAnswer;
    const newAnswers = { ...selectedAnswers, [currentQ.id]: option };
    setSelectedAnswers(newAnswers);

    saveAnswer({
      questionId: currentQ.id,
      selectedOption: option,
      isCorrect,
      isMarkedTrap: !!markedTraps[currentQ.id],
      timeSpentSeconds: 45,
      answeredAt: new Date().toISOString()
    });
  };

  const handleToggleTrap = () => {
    if (!currentQ) return;
    const nextState = toggleTrapMark(currentQ.id);
    setMarkedTraps(prev => ({ ...prev, [currentQ.id]: nextState }));
  };

  const handleToggleReviewFlag = () => {
    if (!currentQ) return;
    setMarkedReview(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }));
  };

  const handleFinish = () => {
    setIsFinished(true);
    if (typeof window !== 'undefined') {
      import('canvas-confetti').then((confettiModule) => {
        const confetti = confettiModule.default;
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }).catch(() => {});
    }
  };

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!currentQ) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-400">載入題庫中...</p>
      </div>
    );
  }

  const userSelected = selectedAnswers[currentQ.id];
  const isTrapMarked = !!markedTraps[currentQ.id];
  const isReviewFlagged = !!markedReview[currentQ.id];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Top Test Header Bar */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/questions"
            className="p-2 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-600 dark:text-slate-300 transition"
            title="退出測驗"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-navy-900 dark:text-white">
                {currentQ.chapterTitle}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                🟦 官方歷屆
              </span>
            </div>
            <span className="text-[11px] text-slate-400">
              進度：{currentIndex + 1} / {questions.length} 題
            </span>
          </div>
        </div>

        {/* Timer & Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowInstantExplanation(!showInstantExplanation)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition ${
              showInstantExplanation
                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-navy-700'
            }`}
          >
            {showInstantExplanation ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            {showInstantExplanation ? '即時解析：開啟' : '即時解析：隱藏'}
          </button>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-navy-950 font-mono font-bold text-xs sm:text-sm text-navy-900 dark:text-white border border-slate-200 dark:border-navy-800">
            <Clock className="w-4 h-4 text-gold-500" />
            {formatTimer(timeLeftSeconds)}
          </div>

          <button
            onClick={handleFinish}
            className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 shadow transition"
          >
            交卷結算
          </button>
        </div>
      </div>

      {/* Main Question Body Card */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-navy-800 shadow-sm space-y-6">
        
        {/* Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-100 dark:border-navy-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base text-navy-900 dark:text-gold-400">
              第 {currentIndex + 1} 題
            </span>
            <span className="text-slate-400">｜</span>
            <span className="text-slate-500 dark:text-slate-400">
              {currentQ.examYear ? `${currentQ.examYear} 年 ${currentQ.examSession} 第 ${currentQ.questionNo} 題` : '全真精選題目'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleTrap}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition flex items-center gap-1 border ${
                isTrapMarked
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                  : 'bg-slate-50 dark:bg-navy-950 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-navy-800 hover:border-amber-400'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              {isTrapMarked ? '已標記為陷阱題' : '這題不熟 / 陷阱題'}
            </button>

            <button
              onClick={handleToggleReviewFlag}
              className={`p-1.5 rounded-lg border transition ${
                isReviewFlagged
                  ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300 border-red-300'
                  : 'text-slate-400 hover:text-red-500 border-slate-200 dark:border-navy-800'
              }`}
              title="標記稍後檢查"
            >
              <Flag className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Question Prompt */}
        <div className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed font-sans">
          {currentQ.prompt}
        </div>

        {/* Options List (A, B, C, D) */}
        <div className="space-y-3 pt-2">
          {currentQ.options.map((opt) => {
            const isSelected = userSelected === opt.label;

            return (
              <button
                key={opt.label}
                onClick={() => handleSelectOption(opt.label)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isSelected
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 border-navy-900 dark:border-gold-500 shadow-md scale-[1.005]'
                    : 'bg-slate-50/70 dark:bg-navy-950/70 hover:bg-slate-100 dark:hover:bg-navy-800 border-slate-200 dark:border-navy-800 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-white text-navy-900 dark:bg-navy-950 dark:text-gold-400 shadow-sm'
                      : 'bg-slate-200 dark:bg-navy-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.label}
                </div>
                <span className="text-xs sm:text-sm font-serif leading-relaxed pt-0.5">
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-navy-800">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-xs font-bold text-slate-700 dark:text-slate-200 disabled:opacity-40 transition flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 上一題
          </button>

          <span className="text-xs text-slate-400 font-medium">
            {currentIndex + 1} / {questions.length}
          </span>

          <button
            onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={currentIndex === questions.length - 1}
            className="px-4 py-2 rounded-xl bg-navy-900 dark:bg-gold-500 hover:bg-navy-800 dark:hover:bg-gold-400 text-xs font-bold text-white dark:text-navy-950 disabled:opacity-40 transition flex items-center gap-1"
          >
            下一題 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Option Explanation Card (shown if answered & instant mode is ON, or finished) */}
      {(showInstantExplanation && userSelected) || isFinished ? (
        <OptionExplanationCard
          question={currentQ}
          selectedOption={userSelected}
        />
      ) : null}

      {/* Question Palette Matrix (題號矩陣跳轉導覽) */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-navy-900 dark:text-white">題號跳轉矩陣</span>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> 已作答
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> 標記稍後檢查
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-navy-700" /> 未作答
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {questions.map((q, idx) => {
            const isAnswered = !!selectedAnswers[q.id];
            const isCurrent = idx === currentIndex;
            const isFlagged = !!markedReview[q.id];

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition flex items-center justify-center relative ${
                  isCurrent
                    ? 'ring-2 ring-gold-500 font-extrabold shadow-md'
                    : ''
                } ${
                  isAnswered
                    ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-slate-100 dark:bg-navy-950 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white dark:border-navy-900" />
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
