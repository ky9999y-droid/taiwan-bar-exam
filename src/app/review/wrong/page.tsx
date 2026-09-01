'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  XCircle,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Tag,
  Clock,
  Sparkles,
  HelpCircle,
  ChevronRight,
  Filter,
  Brain
} from 'lucide-react';
import { getWrongQuestions, updateErrorReason } from '@/lib/storage';
import { Question, UserAnswerRecord, ErrorReason } from '@/types';

export default function WrongQuestionsPage() {
  const [wrongItems, setWrongItems] = useState<(Question & { answerRecord?: UserAnswerRecord })[]>([]);
  const [selectedReasonFilter, setSelectedReasonFilter] = useState<string>('ALL');

  useEffect(() => {
    setWrongItems(getWrongQuestions());
  }, []);

  const handleReasonChange = (questionId: string, reason: ErrorReason) => {
    updateErrorReason(questionId, reason);
    setWrongItems(prev =>
      prev.map(item => {
        if (item.id === questionId && item.answerRecord) {
          return {
            ...item,
            answerRecord: { ...item.answerRecord, errorReason: reason }
          };
        }
        return item;
      })
    );
  };

  const reasonOptions: { key: ErrorReason; label: string; desc: string; icon: string }[] = [
    { key: 'CARELESS', label: '1. 粗心眼花', desc: '漏看題目「非」、「得」、「應」等關鍵否定/裁量詞', icon: '👀' },
    { key: 'LAW_FORGOTTEN', label: '2. 法條忘記', desc: '法條重要構成要件、年限除斥期間或法定但書遺忘', icon: '📜' },
    { key: 'CONCEPT_CONFUSED', label: '3. 觀念不清', desc: '法律關係或法理體系架構認知模糊', icon: '🧩' },
    { key: 'TWO_OPTIONS_TRAP', label: '4. 兩選項混淆', desc: '刪除兩個後，在最後二選一猶豫落入出題陷阱', icon: '⚖️' },
    { key: 'CASE_UNFAMILIAR', label: '5. 實務不熟', desc: '重要憲判字、大法官解釋或最高法院決議意旨不熟', icon: '🏛️' },
    { key: 'UNKNOWN', label: '6. 完全沒看過', desc: '冷門法條或罕見爭點首次接觸', icon: '❓' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-1">
            <XCircle className="w-4 h-4" />
            個人錯題精準歸因與清空系統
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            我的錯題本（共 {wrongItems.length} 題未攻克）
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            答錯不可怕，可怕的是不知道為什麼錯。手動標記 6 大錯誤原因，系統將依此提供客製化強化複習。
          </p>
        </div>

        <Link
          href="/practice/session-wrong"
          className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow transition flex items-center gap-2 self-start md:self-auto"
        >
          <RotateCcw className="w-4 h-4" />
          開始錯題全自動重測
        </Link>
      </div>

      {/* Wrong Questions List */}
      <div className="space-y-4">
        {wrongItems.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-navy-800 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="font-bold text-lg text-navy-900 dark:text-white">太棒了！目前沒有未清空的錯題</h3>
            <p className="text-xs text-slate-400">繼續保持，前往題庫做更多歷屆真題！</p>
            <Link
              href="/questions"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold mt-2"
            >
              前往歷屆題庫
            </Link>
          </div>
        ) : (
          wrongItems.map((q) => {
            const currentReason = q.answerRecord?.errorReason;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-red-200 dark:border-red-950/60 shadow-sm space-y-4"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-slate-100 dark:border-navy-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-bold bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                      第 {q.questionNo || 1} 題
                    </span>
                    <span className="font-bold text-navy-900 dark:text-white">
                      {q.chapterTitle}
                    </span>
                    <span className="text-slate-400">
                      ({q.examYear}年 律師一試)
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-slate-400">
                      你的歷史答案：<strong className="text-red-500 font-bold">({q.answerRecord?.selectedOption || 'A'})</strong>
                    </span>
                    <span className="text-slate-400">
                      正確答案：<strong className="text-emerald-500 font-bold">({q.correctAnswer})</strong>
                    </span>
                  </div>
                </div>

                {/* Prompt */}
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                  {q.prompt}
                </p>

                {/* 6-Reason Error Attribution Selector */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-navy-900 dark:text-gold-300 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-gold-500" />
                      請標定你這題答錯的主要原因：
                    </span>
                    {currentReason && (
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        已記錄原因
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {reasonOptions.map((r) => {
                      const isSelected = currentReason === r.key;

                      return (
                        <button
                          key={r.key}
                          onClick={() => handleReasonChange(q.id, r.key)}
                          className={`p-2.5 rounded-xl border text-left transition ${
                            isSelected
                              ? 'bg-red-50 dark:bg-red-950/60 border-red-500 text-red-900 dark:text-red-200 font-bold shadow-sm'
                              : 'bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="text-xs font-semibold flex items-center gap-1">
                            <span>{r.icon}</span>
                            <span>{r.label}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                            {r.desc}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-[11px] flex items-center gap-1">
                      <Brain className="w-3.5 h-3.5 text-purple-500" />
                      間隔複習週期：Level 2 / 5 (下次複習：明天)
                    </span>
                  </div>

                  <Link
                    href={`/practice/session-${q.id}`}
                    className="px-3.5 py-1.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold hover:bg-navy-800 transition flex items-center gap-1 shadow-sm"
                  >
                    立即重做這題 <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
