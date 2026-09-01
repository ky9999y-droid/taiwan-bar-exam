'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ScrollText,
  Search,
  CheckCircle2,
  HelpCircle,
  Eye,
  EyeOff,
  Flame,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CLOZE_TESTS, CHAPTER_TEXTBOOKS } from '@/data/seedData';
import { ClozeTest } from '@/types';

export default function LawsPage() {
  const [clozeList, setClozeList] = useState<ClozeTest[]>(CLOZE_TESTS);
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [revealedBlanks, setRevealedBlanks] = useState<Record<string, boolean>>({});
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');

  const handleInputChange = (testId: string, blankIndex: number, val: string) => {
    setUserInputs(prev => ({
      ...prev,
      [`${testId}-${blankIndex}`]: val
    }));
  };

  const handleToggleReveal = (testId: string, blankIndex: number) => {
    const key = `${testId}-${blankIndex}`;
    setRevealedBlanks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredTests = clozeList.filter(t => {
    if (selectedSubject === 'ALL') return true;
    return t.subjectId === selectedSubject;
  });

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <ScrollText className="w-4 h-4" />
            重要法條重點整理 ＆ 關鍵字挖空主動回憶測驗
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            第一試必背法條與主動回憶挖空
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            拒絕死記硬背！透過關鍵字挖空測驗強化法感與法條要件記憶。
          </p>
        </div>

        {/* Subject Filter */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="text-xs p-2.5 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 font-bold text-slate-800 dark:text-slate-100"
          >
            <option value="ALL">全部科目法條</option>
            <option value="ADMIN">行政法 (行政程序法)</option>
            <option value="CRIM">刑法 (刑法總則)</option>
            <option value="CRIM_PROC">刑事訴訟法 (證據篇)</option>
            <option value="CORP">公司法 (公司負責人)</option>
          </select>
        </div>
      </div>

      {/* Cloze Tests List */}
      <div className="space-y-5">
        {filteredTests.map((cloze) => (
          <div
            key={cloze.id}
            className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-navy-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base text-navy-900 dark:text-gold-300">
                  📜 {cloze.lawName} {cloze.articleNo}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
                  必背超高頻
                </span>
              </div>

              <div className="text-xs text-slate-400">
                主動回憶關鍵要件
              </div>
            </div>

            {/* Interactive Cloze Template */}
            <div className="p-5 rounded-xl bg-amber-50/40 dark:bg-navy-950/80 border border-amber-200/60 dark:border-navy-800 text-sm sm:text-base font-serif leading-relaxed text-slate-900 dark:text-slate-100">
              {cloze.originalText}
            </div>

            {/* Blanks Interactive Input Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {cloze.blanks.map((b) => {
                const key = `${cloze.id}-${b.index}`;
                const userVal = userInputs[key] || '';
                const isRevealed = !!revealedBlanks[key];
                const isMatch = userVal.trim() === b.answer.trim();

                return (
                  <div
                    key={b.index}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-500 dark:text-slate-400">
                        空格 [{b.index}]
                      </span>
                      <button
                        onClick={() => handleToggleReveal(cloze.id, b.index)}
                        className="text-[11px] text-gold-600 dark:text-gold-400 hover:underline flex items-center gap-1 font-semibold"
                      >
                        {isRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                        {isRevealed ? '隱藏答案' : '顯示答案'}
                      </button>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="請輸入關鍵要件詞..."
                        value={isRevealed ? b.answer : userVal}
                        onChange={(e) => handleInputChange(cloze.id, b.index, e.target.value)}
                        className={`w-full p-2 text-xs sm:text-sm rounded-lg border font-medium ${
                          isMatch
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200'
                            : 'bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white'
                        }`}
                      />
                      {isMatch && !isRevealed && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-2.5 top-1/2 -translate-y-1/2" />
                      )}
                    </div>

                    {b.hint && (
                      <p className="text-[10px] text-slate-400 line-clamp-1">
                        💡 提示：{b.hint}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
