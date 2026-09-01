'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Tag, PlusCircle, Trash2, Edit3, Sparkles, ScrollText, CheckCircle2 } from 'lucide-react';

interface NoteItem {
  id: string;
  subject: string;
  chapterTitle: string;
  tag: string;
  content: string;
  updatedAt: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<NoteItem[]>([
    {
      id: 'note-1',
      subject: '行政法',
      chapterTitle: '第 3 章：行政處分之撤銷與廢止',
      tag: '#除斥期間 #重要實務',
      content: '最高行政法院 102 年 11 月庭長聯席會議：行政程序法第 124 條「知有撤銷原因」必須是機關「確實知曉」，不可僅憑傳聞或檢舉起算 2 年。特別注意與廢止之「原因發生後 2 年」起算點不同！',
      updatedAt: '2026-08-30'
    },
    {
      id: 'note-2',
      subject: '刑事訴訟法',
      chapterTitle: '第 7 章：傳聞法則與其例外',
      tag: '#釋字582 #反對詰問',
      content: '共同被告在偵查中之供述，若未依法具結（刑訴§158-3），絕對不得依§159-1第2項作為其他被告之不利證據。釋字582號落實憲法反對詰問權之核心！',
      updatedAt: '2026-08-29'
    }
  ]);

  const [newContent, setNewContent] = useState<string>('');
  const [newTag, setNewTag] = useState<string>('#我的爭點筆記');

  const handleAddNote = () => {
    if (!newContent.trim()) return;
    const newNote: NoteItem = {
      id: `note-${Date.now()}`,
      subject: '行政法',
      chapterTitle: '自訂考點筆記',
      tag: newTag,
      content: newContent,
      updatedAt: '剛剛'
    };
    setNotes(prev => [newNote, ...prev]);
    setNewContent('');
  };

  const handleDelete = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            個人法學筆記與爭點標籤庫
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            我的筆記與考點備忘（共 {notes.length} 則）
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            在研讀教材或做題目時隨手紀錄的體系精華、法諺與實務見解。
          </p>
        </div>
      </div>

      {/* New Note Input Card */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 border border-slate-200 dark:border-navy-800 shadow-sm space-y-3">
        <h3 className="font-bold text-xs sm:text-sm text-navy-900 dark:text-white flex items-center gap-2">
          <PlusCircle className="w-4 h-4 text-gold-500" />
          新增法學爭點筆記
        </h3>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="標籤，例如 #表見代理 #共同訴訟..."
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="w-1/3 text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white"
          />
          <input
            type="text"
            placeholder="請輸入關鍵爭點、口訣或實務見解筆記..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="flex-1 text-xs p-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white"
          />
          <button
            onClick={handleAddNote}
            className="px-4 py-2.5 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold hover:bg-navy-800 transition"
          >
            儲存筆記
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map((n) => (
          <div
            key={n.id}
            className="bg-white dark:bg-navy-900 rounded-2xl p-5 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-navy-900 dark:text-gold-400">
                  {n.subject} • {n.chapterTitle}
                </span>
                <span className="text-[10px] text-slate-400">{n.updatedAt}</span>
              </div>

              <span className="inline-block text-[11px] font-mono font-bold text-amber-700 dark:text-gold-300 bg-amber-50 dark:bg-gold-950/60 px-2 py-0.5 rounded">
                {n.tag}
              </span>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-serif whitespace-pre-line">
                {n.content}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-navy-800 flex justify-end">
              <button
                onClick={() => handleDelete(n.id)}
                className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1 font-semibold"
              >
                <Trash2 className="w-3.5 h-3.5" /> 刪除
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
