'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Layers,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  XCircle,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Filter,
  Shuffle,
  BarChart3,
  Flame,
  Scale
} from 'lucide-react';
import { SEED_FLASHCARDS, SUBJECTS_INFO, CHAPTER_SEED_LIST, getChapterTextbook } from '@/data/seedData';
import { Flashcard, SubjectId } from '@/types';
import { getStoredFlashcardRatings, saveFlashcardRating, FlashcardRatingRecord } from '@/lib/storage';

export default function FlashcardsPage() {
  const [selectedSubject, setSelectedSubject] = useState<'ALL' | SubjectId>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | 'KNOWN' | 'VAGUE' | 'UNKNOWN' | 'UNSEEN'>('ALL');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [ratings, setRatings] = useState<Record<string, FlashcardRatingRecord>>({});

  // Generate full library combining 54 core seed cards + 91 chapter-level deep cards
  const allInitialCards: Flashcard[] = React.useMemo(() => {
    const chapterCards: Flashcard[] = CHAPTER_SEED_LIST.map((chap) => {
      const tb = getChapterTextbook(`${chap.subjectId}-${chap.chapterNo}`);
      const law1 = tb.importantLaws?.[0];
      const trap1 = tb.commonTraps?.[0];
      return {
        id: `fc-chap-${chap.subjectId}-${chap.chapterNo}`,
        subjectId: chap.subjectId as SubjectId,
        chapterTitle: `第 ${chap.chapterNo} 章：${chap.title}`,
        front: `【核心觀念與考點】${chap.title}之法理本質與出題重點為何？`,
        back: `💡 核心觀念：\n${tb.coreConcept}\n\n${law1 ? `📜 重要法條（${law1.lawName} ${law1.articleNo}）：\n${law1.keyClause}\n關鍵字：${law1.coreKeywords?.join('、') || ''}\n\n` : ''}${trap1 ? `⚠️ 命題防雷：\n${trap1}` : ''}`,
        keyLawArticle: law1 ? `${law1.lawName} ${law1.articleNo}` : undefined,
        tags: [`#${chap.subjectId}`, `#第${chap.chapterNo}章`, `#核心爭點`]
      };
    });
    return [...SEED_FLASHCARDS, ...chapterCards];
  }, []);

  const [cards, setCards] = useState<Flashcard[]>(allInitialCards);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const storedRatings = getStoredFlashcardRatings();
    setRatings(storedRatings);
  }, []);

  // Filter cards by subject and rating status
  const filteredCards = cards.filter(c => {
    if (selectedSubject !== 'ALL' && c.subjectId !== selectedSubject) return false;
    const userRating = ratings[c.id]?.rating;
    if (selectedStatus === 'ALL') return true;
    if (selectedStatus === 'UNSEEN') return !userRating;
    return userRating === selectedStatus;
  });

  // Ensure currentIndex stays within bounds
  const safeIndex = Math.min(currentIndex, Math.max(0, filteredCards.length - 1));
  const currentCard = filteredCards[safeIndex];

  const handleRate = (rating: 'KNOWN' | 'VAGUE' | 'UNKNOWN') => {
    if (!currentCard) return;
    saveFlashcardRating(currentCard.id, rating);
    const updated = {
      ...ratings,
      [currentCard.id]: {
        cardId: currentCard.id,
        rating,
        ratedAt: new Date().toISOString(),
        reviewCount: (ratings[currentCard.id]?.reviewCount || 0) + 1
      }
    };
    setRatings(updated);
    setIsFlipped(false);

    if (safeIndex < filteredCards.length - 1) {
      setCurrentIndex(safeIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
  };

  const handleResetProgress = () => {
    if (typeof window !== 'undefined') {
      if (confirm('確定要重置所有閃卡的記憶評分紀錄嗎？')) {
        localStorage.removeItem('bar_exam_flashcard_ratings');
        setRatings({});
        setIsFlipped(false);
        setCurrentIndex(0);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        setIsFlipped(false);
        setCurrentIndex(prev => (prev < filteredCards.length - 1 ? prev + 1 : 0));
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        setIsFlipped(false);
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredCards.length - 1));
      } else if (e.key === '1' && isFlipped) {
        handleRate('UNKNOWN');
      } else if (e.key === '2' && isFlipped) {
        handleRate('VAGUE');
      } else if (e.key === '3' && isFlipped) {
        handleRate('KNOWN');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredCards.length, isFlipped, currentCard]);

  // Overall Statistics
  const totalInDeck = cards.length;
  const knownCount = cards.filter(c => ratings[c.id]?.rating === 'KNOWN').length;
  const vagueCount = cards.filter(c => ratings[c.id]?.rating === 'VAGUE').length;
  const unknownCount = cards.filter(c => ratings[c.id]?.rating === 'UNKNOWN').length;
  const unseenCount = totalInDeck - (knownCount + vagueCount + unknownCount);
  const masteryRate = totalInDeck > 0 ? Math.round((knownCount / totalInDeck) * 100) : 0;

  const currentCardSubject = currentCard ? SUBJECTS_INFO.find(s => s.id === currentCard.subjectId) : null;
  const currentCardRating = currentCard ? ratings[currentCard.id]?.rating : null;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            個人記憶閃卡 Flashcards ｜ 全 15 科高頻爭點抽背
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            主動回憶抽背牌組（Active Recall）
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            利用卡片正面出題，心裡默背後翻面核對關鍵要件。支援空白鍵翻轉與自動間隔排程。
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
          <button
            onClick={handleShuffle}
            className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
            title="隨機洗牌"
          >
            <Shuffle className="w-4 h-4 text-purple-500" />
            隨機洗牌
          </button>
          <button
            onClick={handleResetProgress}
            className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-red-50 dark:hover:bg-red-950/40 text-slate-500 hover:text-red-500 text-xs font-semibold transition"
            title="重置評分紀錄"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Progress & Stats Dashboard */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm text-center">
          <span className="text-[11px] text-slate-400 block font-semibold">全科閃卡總數</span>
          <span className="text-2xl font-black text-navy-900 dark:text-white">{totalInDeck}</span>
          <span className="text-[10px] text-slate-400 block">涵蓋 15 科</span>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 shadow-sm text-center">
          <span className="text-[11px] text-emerald-700 dark:text-emerald-300 block font-semibold">🟢 熟練掌握</span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{knownCount}</span>
          <span className="text-[10px] text-emerald-600/80 block">掌握率 {masteryRate}%</span>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 shadow-sm text-center">
          <span className="text-[11px] text-amber-700 dark:text-amber-300 block font-semibold">🟡 模糊猶豫</span>
          <span className="text-2xl font-black text-amber-600 dark:text-amber-400">{vagueCount}</span>
          <span className="text-[10px] text-amber-600/80 block">3天後複習</span>
        </div>

        <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 shadow-sm text-center">
          <span className="text-[11px] text-red-700 dark:text-red-300 block font-semibold">🔴 完全不會 / 待背</span>
          <span className="text-2xl font-black text-red-600 dark:text-red-400">{unknownCount + unseenCount}</span>
          <span className="text-[10px] text-red-600/80 block">未抽背 {unseenCount} 張</span>
        </div>
      </div>

      {/* Subject Filter Carousel */}
      <div className="bg-slate-100 dark:bg-navy-950 p-2 rounded-2xl border border-slate-200 dark:border-navy-800 flex items-center gap-1.5 overflow-x-auto text-xs">
        <button
          onClick={() => { setSelectedSubject('ALL'); setCurrentIndex(0); setIsFlipped(false); }}
          className={`px-3.5 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
            selectedSubject === 'ALL'
              ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
          }`}
        >
          全部 15 科 ({cards.length})
        </button>
        {SUBJECTS_INFO.map(s => {
          const count = cards.filter(c => c.subjectId === s.id).length;
          return (
            <button
              key={s.id}
              onClick={() => { setSelectedSubject(s.id); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
                selectedSubject === s.id
                  ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white'
              }`}
            >
              {s.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Status Filter Bar */}
      <div className="flex items-center justify-between text-xs px-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => { setSelectedStatus('ALL'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-2.5 py-1 rounded-lg font-semibold transition ${
              selectedStatus === 'ALL'
                ? 'bg-slate-200 dark:bg-navy-800 text-navy-900 dark:text-white font-bold'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            全部狀態 ({cards.filter(c => selectedSubject === 'ALL' || c.subjectId === selectedSubject).length})
          </button>
          <button
            onClick={() => { setSelectedStatus('UNKNOWN'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
              selectedStatus === 'UNKNOWN'
                ? 'bg-red-500 text-white font-bold shadow-sm'
                : 'text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" /> 完全不會
          </button>
          <button
            onClick={() => { setSelectedStatus('VAGUE'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
              selectedStatus === 'VAGUE'
                ? 'bg-amber-500 text-white font-bold shadow-sm'
                : 'text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" /> 模糊猶豫
          </button>
          <button
            onClick={() => { setSelectedStatus('KNOWN'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-2.5 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
              selectedStatus === 'KNOWN'
                ? 'bg-emerald-600 text-white font-bold shadow-sm'
                : 'text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" /> 已熟練
          </button>
        </div>

        <span className="text-slate-400 font-medium">
          第 {filteredCards.length > 0 ? safeIndex + 1 : 0} / {filteredCards.length} 張
        </span>
      </div>

      {/* Main Flashcard Card Body */}
      {filteredCards.length === 0 ? (
        <div className="p-12 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-center space-y-3">
          <p className="text-slate-400 text-sm">目前篩選條件下沒有閃卡。</p>
          <button
            onClick={() => { setSelectedSubject('ALL'); setSelectedStatus('ALL'); }}
            className="px-4 py-2 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold"
          >
            清除篩選條件
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`cursor-pointer min-h-[340px] rounded-3xl p-8 border-2 shadow-xl flex flex-col justify-between transition-all duration-300 select-none ${
              isFlipped
                ? 'bg-gradient-to-br from-purple-50 via-slate-50 to-indigo-50 dark:from-navy-900 dark:via-navy-950 dark:to-indigo-950/50 border-purple-400 dark:border-purple-600'
                : 'bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-700 hover:border-gold-500/70 hover:shadow-2xl'
            }`}
          >
            {/* Card Header */}
            <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-navy-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-navy-900 dark:text-gold-400">
                  {currentCardSubject?.name || currentCard.subjectId}
                </span>
                <span className="text-slate-300 dark:text-navy-700">｜</span>
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {currentCard.chapterTitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {currentCardRating === 'KNOWN' && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    🟢 已熟練
                  </span>
                )}
                {currentCardRating === 'VAGUE' && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                    🟡 模糊
                  </span>
                )}
                {currentCardRating === 'UNKNOWN' && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300">
                    🔴 完全不會
                  </span>
                )}
                <span className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
                  {isFlipped ? '【背面：標準答案與法條】' : '【正面：考點題目】點擊翻面 🔄'}
                </span>
              </div>
            </div>

            {/* Card Content Area */}
            <div className="my-auto py-6">
              {!isFlipped ? (
                <div className="space-y-4 text-center">
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-gold-50 dark:bg-gold-950 text-gold-700 dark:text-gold-300 font-bold border border-gold-200 dark:border-gold-800">
                    ❓ 考點主動回憶
                  </span>
                  <h2 className="text-lg sm:text-2xl font-bold text-navy-900 dark:text-white leading-relaxed max-w-2xl mx-auto font-serif">
                    {currentCard.front}
                  </h2>
                </div>
              ) : (
                <div className="space-y-4 text-left animate-fadeIn bg-white/80 dark:bg-navy-950/90 p-6 rounded-2xl border border-slate-200 dark:border-navy-800">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <span>✅ 正確法理與實務解析：</span>
                    {currentCard.keyLawArticle && (
                      <span className="font-mono text-gold-600 dark:text-gold-400">
                        📜 {currentCard.keyLawArticle}
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 whitespace-pre-line leading-relaxed font-sans font-medium">
                    {currentCard.back}
                  </p>
                </div>
              )}
            </div>

            {/* Footer Tags & Keyboard hint */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-navy-800 text-xs">
              <div className="flex gap-1.5 flex-wrap">
                {currentCard.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-navy-800 text-slate-500 font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-slate-400 text-[11px]">
                鍵盤快捷鍵：<strong>空白鍵</strong> 翻面 ｜ <strong>← →</strong> 切換卡片 ｜ <strong>1/2/3</strong> 快速評分
              </span>
            </div>
          </div>

          {/* Navigation & Active Recall Evaluation Buttons */}
          <div className="space-y-3">
            {/* 3 Rating Buttons (Shown when flipped) */}
            {isFlipped ? (
              <div className="grid grid-cols-3 gap-3 animate-fadeIn">
                <button
                  onClick={() => handleRate('UNKNOWN')}
                  className="p-4 rounded-2xl bg-red-100 hover:bg-red-200 dark:bg-red-950/80 dark:hover:bg-red-900 text-red-700 dark:text-red-300 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-1 transition shadow-sm"
                >
                  <div className="flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" />
                    完全不會 [1]
                  </div>
                  <span className="text-[10px] opacity-80">重新排程今日加強</span>
                </button>
                <button
                  onClick={() => handleRate('VAGUE')}
                  className="p-4 rounded-2xl bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/80 dark:hover:bg-amber-900 text-amber-700 dark:text-amber-300 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-1 transition shadow-sm"
                >
                  <div className="flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" />
                    模糊猶豫 [2]
                  </div>
                  <span className="text-[10px] opacity-80">3 天後間隔複習</span>
                </button>
                <button
                  onClick={() => handleRate('KNOWN')}
                  className="p-4 rounded-2xl bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/80 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold text-xs sm:text-sm flex flex-col items-center justify-center gap-1 transition shadow-sm"
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    熟練掌握 [3]
                  </div>
                  <span className="text-[10px] opacity-80">7 天後再次驗收</span>
                </button>
              </div>
            ) : null}

            {/* Previous & Next Control Bar */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setIsFlipped(false);
                  setCurrentIndex(prev => (prev > 0 ? prev - 1 : filteredCards.length - 1));
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 dark:hover:bg-navy-700 transition flex items-center gap-1.5 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" /> 上一張卡片
              </button>

              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-6 py-2.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs hover:bg-navy-800 dark:hover:bg-gold-400 transition flex items-center gap-1.5 shadow"
              >
                <RotateCcw className="w-4 h-4" />
                {isFlipped ? '翻回正面' : '翻面查看答案'}
              </button>

              <button
                onClick={() => {
                  setIsFlipped(false);
                  setCurrentIndex(prev => (prev < filteredCards.length - 1 ? prev + 1 : 0));
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 dark:hover:bg-navy-700 transition flex items-center gap-1.5 shadow-sm"
              >
                下一張卡片 <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
