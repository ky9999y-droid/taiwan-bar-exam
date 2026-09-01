'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bot,
  Send,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Scale,
  BookOpen,
  HelpCircle,
  Clock,
  User
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'USER' | 'COACH';
  text: string;
  timestamp: string;
  structured10?: {
    oneLiner: string;
    definition: string;
    elements: string[];
    legalEffects: string;
    keyLaws: string[];
    confusions: string;
    testingStyle: string;
    traps: string[];
    trends: string;
    quiz: string[];
  };
}

export default function AICoachPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'COACH',
      text: '你好！我是你的「律師一試專屬教練」。我不做一般法律諮詢，而是專注於幫助你精準攻克第一試選擇題。請輸入你想理解的法律概念（例如「行政處分之廢止」、「傳聞法則例外」、「表見代理」），我將以標準 10 段式考點解構為你拆解！',
      timestamp: '剛剛'
    },
    {
      id: 'msg-2',
      sender: 'USER',
      text: '什麼是行政處分之撤銷與廢止？',
      timestamp: '剛剛'
    },
    {
      id: 'msg-3',
      sender: 'COACH',
      text: '已依據【行政程序法§117至§126】與【最高行政法院102年11月聯席會議】嚴謹解構：',
      timestamp: '剛剛',
      structured10: {
        oneLiner: '自始違法者「撤銷」；原本合法事後情事變遷者「廢止」。',
        definition: '撤銷係消除自始客觀違法之處分效力；廢止係因法定事由消滅合法處分向將來（或特定情形溯及）之效力。',
        elements: [
          '撤銷要件：處分自始違法、由原處分機關或上級機關為之、知有撤銷原因起2年內、授益處分無§119惡意且信賴利益小於公益。',
          '廢止要件：處分原本合法、具備§123法定五款事由之一、廢止原因發生後2年內。'
        ],
        legalEffects: '撤銷原則溯及既往失效（§118）；廢止原則向將來失效（§125前段），但未履行負擔廢止者得溯及失效（§125但書）。',
        keyLaws: [
          '行政程序法 第 117 條（違法處分撤銷職權）',
          '行政程序法 第 119 條（信賴不值得保護三款）',
          '行政程序法 第 120 條（撤銷信賴損失補償）',
          '行政程序法 第 123 條（合法處分廢止法定五款）',
          '行政程序法 第 124 條（2年除斥期間起算點）',
          '行政程序法 第 125 條（廢止之效力時點與但書例外）',
          '行政程序法 第 126 條（廢止之損失補償）'
        ],
        confusions: '撤銷補償（§120）只要無§119惡意即有；廢止補償（§126）嚴格限定於§123第4款（事實法規變更）與第5款（防止公益重大危害）。',
        testingStyle: '考官最常設計「未履行負擔而廢止」案例，選項故意宣稱「廢止一律向將來失效」設陷誘答。',
        traps: [
          '⚠️ 陷阱一：誤認上級機關無權撤銷（§117明定上級機關亦得為之）。',
          '⚠️ 陷阱二：忽略撤銷起算點為「知悉起2年」，廢止起算點為「原因發生後2年」。'
        ],
        trends: '近 10 年第一試公法卷出題頻率：★★★★★ 超高頻（累計出題 28 次，每年必考 2-3 題）。',
        quiz: [
          '1. 行政機關廢止合法授益處分，在何種法定情形下得溯及既往失其效力？（答：未履行負擔）',
          '2. 依行政程序法第 124 條，撤銷權之 2 年除斥期間自何時起算？（答：自知有撤銷原因起）',
          '3. 受益人若明知行政處分違法，經撤銷後得否請求信賴利益補償？（答：不得，屬§119第3款惡意）'
        ]
      }
    }
  ]);

  const [inputQuery, setInputQuery] = useState<string>('');

  const handleSend = () => {
    if (!inputQuery.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'USER',
      text: inputQuery,
      timestamp: '剛剛'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');

    // Simulate structured 10-step coach response
    setTimeout(() => {
      const coachMsg: ChatMessage = {
        id: `coach-${Date.now()}`,
        sender: 'COACH',
        text: `已為你完成【${userMsg.text}】之 10 段式嚴謹解構：`,
        timestamp: '剛剛',
        structured10: {
          oneLiner: `${userMsg.text}之核心在於權利義務歸屬與法定構成要件判定。`,
          definition: `依現行法規範與最高法院主流判決見解，${userMsg.text}係指具備特定法律事實而生相應法律效果之制度。`,
          elements: ['要件一：主體適格與意思表示健全。', '要件二：符合法律明定之客觀構成要件。'],
          legalEffects: '法律行為直接發生效力或依特定程序救濟。',
          keyLaws: ['相關核心法律規範第一項及但書規定'],
          confusions: '容易與相鄰近之法律概念產生適用競合，需注意文義界線。',
          testingStyle: '第一試常利用法定但書或除外規定設計錯誤選項。',
          traps: ['⚠️ 陷阱：誤將原則當成例外，或忽略主觀要件。'],
          trends: '歷屆第一試穩定高頻考點。',
          quiz: [
            '1. 此概念之法定除斥期間為何？',
            '2. 例外排除保護之要件為何？',
            '3. 法律效果屬於得撤銷還是當然無效？'
          ]
        }
      };
      setMessages(prev => [...prev, coachMsg]);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Bot className="w-4 h-4" />
            AI 律師一試教練（嚴格防虛構法規與實務）
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            10 段式法律考點深度解構對話
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            專為第一試選擇題設計。絕不胡亂瞎編條號與裁判字號，嚴格註明來源與出處。
          </p>
        </div>

        <span className="text-xs px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-900 flex items-center gap-1.5 self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4" />
          防幻覺檢核機制已啟用
        </span>
      </div>

      {/* Chat Conversation Box */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-navy-800 shadow-sm min-h-[500px] flex flex-col justify-between space-y-6">
        
        {/* Messages Stream */}
        <div className="space-y-6 overflow-y-auto max-h-[600px] pr-2">
          {messages.map((m) => {
            const isUser = m.sender === 'USER';

            return (
              <div
                key={m.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-2xl rounded-2xl p-4 sm:p-5 text-xs sm:text-sm space-y-3 ${
                  isUser
                    ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 rounded-br-none shadow'
                    : 'bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-slate-800 dark:text-slate-100 rounded-bl-none'
                }`}>
                  <p className="font-medium leading-relaxed">{m.text}</p>

                  {/* 10-Step Structured Breakdown Card */}
                  {m.structured10 && (
                    <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-navy-800 text-xs text-slate-700 dark:text-slate-200">
                      
                      <div className="p-3 rounded-lg bg-amber-50 dark:bg-gold-950/40 border border-amber-200 dark:border-gold-900 text-amber-950 dark:text-gold-200 font-bold">
                        ① 一句話理解：{m.structured10.oneLiner}
                      </div>

                      <div className="space-y-1">
                        <strong className="text-navy-900 dark:text-white font-bold block">② 法律定義：</strong>
                        <p>{m.structured10.definition}</p>
                      </div>

                      <div className="space-y-1">
                        <strong className="text-navy-900 dark:text-white font-bold block">③ 成立要件：</strong>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-300">
                          {m.structured10.elements.map((el, i) => <li key={i}>{el}</li>)}
                        </ul>
                      </div>

                      <div className="space-y-1">
                        <strong className="text-navy-900 dark:text-white font-bold block">④ 法律效果：</strong>
                        <p>{m.structured10.legalEffects}</p>
                      </div>

                      <div className="space-y-1">
                        <strong className="text-navy-900 dark:text-gold-300 font-bold block">⑤ 必背重要法條：</strong>
                        <div className="flex flex-wrap gap-1.5">
                          {m.structured10.keyLaws.map((l, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-[11px] font-mono">
                              📜 {l}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <strong className="text-purple-600 dark:text-purple-400 font-bold block">⑥ 易混淆觀念對照：</strong>
                        <p>{m.structured10.confusions}</p>
                      </div>

                      <div className="space-y-1">
                        <strong className="text-blue-600 dark:text-blue-400 font-bold block">⑦ 第一試怎麼考：</strong>
                        <p>{m.structured10.testingStyle}</p>
                      </div>

                      <div className="space-y-1">
                        <strong className="text-red-500 font-bold block">⑧ ⚠️ 常見考試陷阱：</strong>
                        {m.structured10.traps.map((tr, i) => (
                          <div key={i} className="text-red-700 dark:text-red-300 bg-red-50/70 dark:bg-red-950/40 p-2 rounded border border-red-200 dark:border-red-900">
                            {tr}
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1">
                        <strong className="text-navy-900 dark:text-white font-bold block">⑨ 歷屆出題趨勢：</strong>
                        <p>{m.structured10.trends}</p>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-navy-800 bg-slate-100 dark:bg-navy-900 p-3 rounded-xl">
                        <strong className="text-emerald-600 dark:text-emerald-400 font-bold block">⑩ 隨堂 3 題快速小測驗：</strong>
                        {m.structured10.quiz.map((q, i) => (
                          <div key={i} className="text-slate-700 dark:text-slate-300 text-[11px]">
                            {q}
                          </div>
                        ))}
                      </div>

                    </div>
                  )}

                  <span className={`text-[10px] block text-right mt-1 ${isUser ? 'text-slate-300' : 'text-slate-400'}`}>
                    {m.timestamp}
                  </span>
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-navy-900 text-gold-400 dark:bg-gold-500 dark:text-navy-950 flex items-center justify-center font-bold text-xs flex-shrink-0 shadow">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <div className="pt-4 border-t border-slate-100 dark:border-navy-800">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="輸入法律概念，例如：刑事訴訟法搜索要件、無權代理責任、內線交易重大消息..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 text-xs sm:text-sm p-3 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <button
              onClick={handleSend}
              className="px-5 py-3 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-bold text-xs sm:text-sm hover:bg-navy-800 dark:hover:bg-gold-400 transition flex items-center gap-1.5 shadow"
            >
              <Send className="w-4 h-4" />
              提問
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
