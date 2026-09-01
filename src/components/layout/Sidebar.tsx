'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  BookMarked,
  BookOpen,
  Flame,
  ScrollText,
  AlertTriangle,
  FileQuestion,
  Target,
  XCircle,
  Brain,
  Trophy,
  BarChart3,
  Bot,
  Layers,
  Settings,
  Sparkles,
  GitCompare,
  Clock,
  LucideIcon
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  highlight?: boolean;
  isAi?: boolean;
  count?: number;
  countColor?: string;
}

interface NavSection {
  group: string;
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const navSections: NavSection[] = [
    {
      group: '學習導航',
      items: [
        { label: '首頁儀表板', href: '/', icon: Home, badge: '今日' },
        { label: '15 科學習地圖', href: '/subjects', icon: BookMarked },
        { label: '高頻五星考點', href: '/subjects/ADMIN/chapters/ADMIN-3', icon: Flame, highlight: true },
        { label: '法條重點整理', href: '/laws', icon: ScrollText },
        { label: '爭點比較表', href: '/comparisons', icon: GitCompare },
        { label: '程序法時間軸', href: '/timelines', icon: Clock },
        { label: '記憶閃卡 Flashcards', href: '/flashcards', icon: Layers }
      ]
    },
    {
      group: '題庫與測驗',
      items: [
        { label: '歷屆考古題庫', href: '/questions', icon: FileQuestion },
        { label: '快速章節練習', href: '/practice/session-quick', icon: Target },
        { label: '全真模擬考場', href: '/exam/mock', icon: Trophy, badge: '模考' }
      ]
    },
    {
      group: '複習與弱點強化',
      items: [
        { label: '我的錯題本', href: '/review/wrong', icon: XCircle, count: 38, countColor: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' },
        { label: '我的陷阱題本', href: '/review/traps', icon: AlertTriangle, count: 14, countColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
        { label: '今日間隔複習', href: '/review/today', icon: Brain, badge: '艾賓浩斯' },
        { label: '15科弱點分析', href: '/analytics', icon: BarChart3 }
      ]
    },
    {
      group: '智慧教練與工具',
      items: [
        { label: 'AI 律師一試教練', href: '/ai-coach', icon: Bot, isAi: true },
        { label: '題庫管理後台', href: '/admin', icon: Settings }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-64 bg-white dark:bg-navy-950 border-r border-slate-200 dark:border-navy-800 overflow-y-auto transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 space-y-6">
          {navSections.map((sec, idx) => (
            <div key={idx} className="space-y-1">
              <div className="px-3 text-[11px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                {sec.group}
              </div>
              <div className="space-y-0.5 mt-1.5">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-3 py-2 text-xs sm:text-sm font-medium rounded-xl transition-colors ${
                        isActive
                          ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-sm'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800/80'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className={`w-4 h-4 ${
                            isActive
                              ? 'text-gold-400 dark:text-navy-950'
                              : item.isAi
                              ? 'text-purple-500'
                              : item.highlight
                              ? 'text-amber-500'
                              : 'text-slate-400 dark:text-slate-400'
                          }`}
                        />
                        <span>{item.label}</span>
                      </div>

                      {/* Badges or Counts */}
                      {item.badge && (
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                            isActive
                              ? 'bg-white/20 text-white dark:bg-navy-900/40 dark:text-navy-950'
                              : 'bg-gold-100 dark:bg-gold-950 text-gold-700 dark:text-gold-300'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      {item.count !== undefined && (
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                            isActive ? 'bg-white/20 text-white' : item.countColor
                          }`}
                        >
                          {item.count}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip Card in Sidebar */}
        <div className="p-4 m-3 mt-4 rounded-xl bg-gradient-to-br from-slate-100 to-amber-50/40 dark:from-navy-900 dark:to-navy-800 border border-slate-200 dark:border-navy-700 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1.5 font-bold text-navy-900 dark:text-gold-300 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            一試得分關鍵
          </div>
          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            第一試單選題 80% 來自「法條要件顛倒」與「原則例外混淆」。切勿死背，注重對比！
          </p>
        </div>
      </aside>
    </>
  );
};
