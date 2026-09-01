'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, RotateCcw, CheckCircle2, HelpCircle, XCircle, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { SEED_FLASHCARDS } from '@/data/seedData';
import { Flashcard } from '@/types';

export default function FlashcardsPage() {
  const [cards, setCards] = useState<Flashcard[]>(SEED_FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [completedCount, setCompletedCount] = useState<number>(0);

  const currentCard = cards[currentIndex];

  const handleRate = (ease: 'KNOWN' | 'VAGUE' | 'UNKNOWN') => {
    setIsFlipped(false);
    setCompletedCount(prev => prev + 1);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Loop or finish
      setCurrentIndex(0);
    }
  };

  if (!currentCard) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Top Header */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            個人記憶閃卡 Flashcards
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            主動回憶抽背牌組
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            卡片正面出題，心裡默背後翻面核對。依熟悉程度演算法自動排程。
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-navy-950 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-navy-800">
          進度：{currentIndex + 1} / {cards.length} 張
        </div>
      </div>

      {/* Interactive Flip Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer min-h-[320px] bg-white dark:bg-navy-900 rounded-3xl p-8 border-2 border-slate-200 dark:border-navy-700 hover:border-gold-500/60 shadow-lg flex flex-col justify-between transition-all duration-300 transform hover:scale-[1.01]"
      >
        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-100 dark:border-navy-800 pb-3">
          <span className="font-bold text-gold-600 dark:text-gold-400">
            {currentCard.chapterTitle}
          </span>
          <span className="text-[11px]">
            {isFlipped ? '【背面：標準答案與法條】' : '【正面：考點題目】點擊任意處翻面 🔄'}
          </span>
        </div>

        {/* Card Body */}
        <div className="my-auto py-6 text-center">
          {!isFlipped ? (
            <div className="space-y-4">
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-50 dark:bg-gold-950 text-amber-700 dark:text-gold-300 font-bold">
                考點回憶
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white leading-relaxed max-w-xl mx-auto">
                {currentCard.front}
              </h2>
            </div>
          ) : (
            <div className="space-y-4 text-left bg-slate-50 dark:bg-navy-950/80 p-6 rounded-2xl border border-slate-200 dark:border-navy-800 animate-fadeIn">
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                ✅ 正確觀念與實務依據：
              </div>
              <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed font-serif">
                {currentCard.back}
              </p>
              {currentCard.keyLawArticle && (
                <div className="pt-2 text-xs font-mono font-bold text-gold-600 dark:text-gold-400">
                  📜 關鍵法條：{currentCard.keyLawArticle}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Tags */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-navy-800 text-xs">
          <div className="flex gap-1.5">
            {currentCard.tags.map((t, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-500 font-mono">
                {t}
              </span>
            ))}
          </div>
          <span className="text-slate-400 text-[11px]">
            {isFlipped ? '點擊下方按鈕記錄掌握度' : '想好答案後點擊翻面'}
          </span>
        </div>
      </div>

      {/* Active Recall 3-Button Evaluation Bar */}
      {isFlipped && (
        <div className="grid grid-cols-3 gap-3 animate-fadeIn">
          <button
            onClick={() => handleRate('UNKNOWN')}
            className="p-3.5 rounded-2xl bg-red-100 hover:bg-red-200 dark:bg-red-950/80 dark:hover:bg-red-900 text-red-700 dark:text-red-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm"
          >
            <XCircle className="w-4 h-4" />
            完全不會 (重排)
          </button>
          <button
            onClick={() => handleRate('VAGUE')}
            className="p-3.5 rounded-2xl bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/80 dark:hover:bg-amber-900 text-amber-700 dark:text-amber-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm"
          >
            <HelpCircle className="w-4 h-4" />
            模糊 / 猶豫 (3天後)
          </button>
          <button
            onClick={() => handleRate('KNOWN')}
            className="p-3.5 rounded-2xl bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/80 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            熟練掌握 (7天後)
          </button>
        </div>
      )}

    </div>
  );
}
