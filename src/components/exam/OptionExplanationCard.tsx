'use client';

import React from 'react';
import { Question } from '@/types';
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, ScrollText, Landmark, Link2 } from 'lucide-react';

interface OptionExplanationCardProps {
  question: Question;
  selectedOption?: 'A' | 'B' | 'C' | 'D';
}

export const OptionExplanationCard: React.FC<OptionExplanationCardProps> = ({
  question,
  selectedOption
}) => {
  const isUserCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-md space-y-6 animate-fadeIn">
      
      {/* Answer & Status Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400">正確答案：</span>
          <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
            ({question.correctAnswer})
          </span>
          {selectedOption && (
            <span className="text-xs text-slate-500 dark:text-slate-400 border-l border-slate-300 dark:border-navy-700 pl-3">
              你的選擇：
              <strong className={isUserCorrect ? 'text-emerald-500 font-bold ml-1' : 'text-red-500 font-bold ml-1'}>
                ({selectedOption}) {isUserCorrect ? '（答對 ✅）' : '（答錯 ❌）'}
              </strong>
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {question.officialCorrectRate && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-200 dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-semibold">
              全站答對率：{question.officialCorrectRate}%
            </span>
          )}
          <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> 官方真題
          </span>
        </div>
      </div>

      {/* Option-by-Option Deep Breakdown */}
      <div className="space-y-4">
        <h4 className="font-bold text-sm text-navy-900 dark:text-white flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          逐選項深度剖析（為什麼對？為什麼錯？陷阱在哪？）
        </h4>

        <div className="space-y-3">
          {(['A', 'B', 'C', 'D'] as const).map((opt) => {
            const exp = question.optionExplanations[opt];
            const optContent = question.options.find(o => o.label === opt)?.text;
            const isCorrectOpt = opt === question.correctAnswer;
            const isUserPicked = opt === selectedOption;

            return (
              <div
                key={opt}
                className={`p-4 rounded-xl border transition ${
                  isCorrectOpt
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                    : isUserPicked
                    ? 'bg-red-50/50 dark:bg-red-950/20 border-red-300 dark:border-red-800'
                    : 'bg-slate-50/70 dark:bg-navy-950/50 border-slate-200 dark:border-navy-800'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    {isCorrectOpt ? (
                      <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ({opt}) 【正確選項】
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-700 dark:text-red-300">
                        <XCircle className="w-4 h-4 text-red-500" />
                        ({opt}) 【錯誤選項】
                      </span>
                    )}
                    {isUserPicked && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-white font-semibold">
                        你選擇了此項
                      </span>
                    )}
                  </div>

                  {exp?.trapType && !isCorrectOpt && (
                    <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded">
                      ⚠️ 陷阱：{exp.trapType}
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif leading-relaxed mb-2">
                  {optContent}
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-navy-900/80 p-3 rounded-lg border border-slate-100 dark:border-navy-800 leading-relaxed">
                  <strong className="text-slate-800 dark:text-slate-100 font-bold block mb-1">
                    🔍 詳解剖析：
                  </strong>
                  {exp?.reason}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Related Laws & Rulings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Cited Laws */}
        {question.relatedLaws && question.relatedLaws.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-2">
            <span className="font-bold text-xs text-navy-900 dark:text-gold-300 flex items-center gap-1.5">
              <ScrollText className="w-3.5 h-3.5 text-gold-500" />
              關聯法條依據
            </span>
            <div className="flex flex-wrap gap-1.5">
              {question.relatedLaws.map((l, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-[11px] text-slate-700 dark:text-slate-300 font-mono"
                >
                  {l.lawName} {l.articleNo}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Cited Cases */}
        {question.relatedCases && question.relatedCases.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-2">
            <span className="font-bold text-xs text-navy-900 dark:text-blue-300 flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-blue-500" />
              重要實務裁判依據
            </span>
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
              {question.relatedCases.map((c, idx) => (
                <div key={idx} className="p-2 rounded bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-[11px]">
                  <strong className="text-navy-900 dark:text-blue-200">{c.court} {c.caseNo}</strong>：{c.summary}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Official Citation Verification Footer */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-100 dark:border-navy-800">
        <span>出處：{question.sourceCitation}</span>
        <span>驗證日期：{question.verifiedDate}</span>
      </div>

    </div>
  );
};
