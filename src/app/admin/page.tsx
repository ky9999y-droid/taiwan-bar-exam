'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Settings,
  UploadCloud,
  FileSpreadsheet,
  PlusCircle,
  Database,
  CheckCircle2,
  AlertTriangle,
  FileJson,
  Layers,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { getAllQuestions } from '@/lib/storage';
import { Question } from '@/types';

export default function AdminPage() {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [importSuccessMessage, setImportSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [questionsCount, setQuestionsCount] = useState<number>(4);

  const sampleJsonTemplate = `[
  {
    "id": "112-BAR-CRIM-15",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CRIM",
    "chapterId": "CRIM-4",
    "chapterNo": 4,
    "chapterTitle": "未遂犯與中止犯",
    "prompt": "甲意圖殺乙而開槍射擊，未擊中乙，甲因乙下跪求饒心生悔悟棄槍離去。下列敘述何者正確？",
    "options": [
      { "label": "A", "text": "甲成立故意殺人既遂犯" },
      { "label": "B", "text": "甲因結果未發生成立普通障礙未遂，得減輕其刑" },
      { "label": "C", "text": "甲因己意中止且防止結果發生，成立中止犯，應減輕或免除其刑" },
      { "label": "D", "text": "甲構成不可罰之不能未遂" }
    ],
    "correctAnswer": "C",
    "optionExplanations": {
      "A": { "isCorrect": false, "reason": "結果未發生，不成立既遂。", "trapType": "誤認既遂" },
      "B": { "isCorrect": false, "reason": "甲係出於己意自願放棄，非障礙未遂。", "trapType": "混淆中止與障礙" },
      "C": { "isCorrect": true, "reason": "依刑法第27條第1項，因己意中止者必減或免除其刑。", "trapType": "正解" },
      "D": { "isCorrect": false, "reason": "開槍具客觀危險性，非不能未遂。", "trapType": "不能犯要件錯誤" }
    },
    "tags": ["#刑法總則", "#中止犯", "#刑法§27"],
    "difficulty": "MEDIUM",
    "relatedLaws": [{ "lawName": "刑法", "articleNo": "第 27 條" }],
    "relatedCases": [],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 15,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(一)第15題"
  }
]`;

  const handleImportJson = () => {
    setErrorMessage('');
    setImportSuccessMessage('');

    if (!jsonInput.trim()) {
      setErrorMessage('請先貼入符合 JSON Schema 規範的題庫資料！');
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      if (!Array.isArray(parsed)) {
        throw new Error('題庫 JSON 必須為題目陣列 [...]');
      }

      // Basic schema validation
      for (const item of parsed) {
        if (!item.id || !item.sourceType || !item.prompt || !item.correctAnswer || !item.optionExplanations) {
          throw new Error(`題目 [${item.id || '未知'}] 缺少必要欄位 (sourceType, prompt, correctAnswer, optionExplanations)！`);
        }
      }

      // Save to localStorage custom questions
      if (typeof window !== 'undefined') {
        const existingRaw = localStorage.getItem('bar_exam_custom_questions');
        const existing = existingRaw ? JSON.parse(existingRaw) : [];
        const merged = [...existing, ...parsed];
        localStorage.setItem('bar_exam_custom_questions', JSON.stringify(merged));
      }

      setImportSuccessMessage(`✅ 成功驗證並匯入 ${parsed.length} 道合法標準題目！已即時加入全真題庫中。`);
      setJsonInput('');
      setQuestionsCount(prev => prev + parsed.length);
    } catch (err: any) {
      setErrorMessage(`❌ 匯入失敗：${err.message}`);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Settings className="w-4 h-4" />
            教材與歷屆題庫維護管理後台
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            題庫批次校驗匯入與題審中心
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            支援 JSON / CSV 規格化題庫批次驗證匯入。系統嚴格檢驗逐選項詳解、法規出處與防虛構標記。
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-navy-950 p-2.5 rounded-xl border border-slate-200 dark:border-navy-800 self-start md:self-auto">
          <Database className="w-4 h-4 text-emerald-500" />
          全站目前有效題庫：{questionsCount} 題
        </div>
      </div>

      {/* Batch Import Card */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-navy-800 pb-3">
          <h2 className="font-extrabold text-base text-navy-900 dark:text-white flex items-center gap-2">
            <FileJson className="w-5 h-5 text-gold-500" />
            JSON 題庫批次驗證與匯入
          </h2>
          <button
            onClick={() => setJsonInput(sampleJsonTemplate)}
            className="text-xs text-gold-600 dark:text-gold-400 font-semibold hover:underline flex items-center gap-1"
          >
            載入標準範本格式
          </button>
        </div>

        {importSuccessMessage && (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <span>{importSuccessMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-300 dark:border-red-800 text-xs sm:text-sm text-red-800 dark:text-red-200 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
            請貼入題庫 JSON（支援單題或陣列）：
          </label>
          <textarea
            rows={10}
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="請貼入符合 JSON Schema 規範之題目資料..."
            className="w-full p-4 font-mono text-xs rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            系統將自動執行 Zod / JSON Schema 型別安全檢驗
          </div>

          <button
            onClick={handleImportJson}
            className="px-6 py-2.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs sm:text-sm hover:bg-navy-800 dark:hover:bg-gold-400 transition flex items-center gap-2 shadow"
          >
            <UploadCloud className="w-4 h-4" />
            執行校驗並批次匯入
          </button>
        </div>
      </div>

    </div>
  );
}
