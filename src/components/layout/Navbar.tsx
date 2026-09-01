'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  Search, 
  Moon, 
  Sun, 
  Flame, 
  Bell, 
  User, 
  BookOpen, 
  HelpCircle,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [daysRemaining, setDaysRemaining] = useState<number>(128);

  useEffect(() => {
    // Check initial dark mode preference
    if (typeof window !== 'undefined') {
      const isDarkMode = document.documentElement.classList.contains('dark') || 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(isDarkMode);
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (typeof document !== 'undefined') {
      if (nextDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-navy-900/95 backdrop-blur border-b border-slate-200 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-navy-900 dark:bg-gold-500 text-gold-400 dark:text-navy-950 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg tracking-tight text-navy-900 dark:text-white flex items-center gap-1.5">
                律師一試｜智慧研讀
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-gold-100 dark:bg-gold-900/50 text-gold-700 dark:text-gold-300 border border-gold-300 dark:border-gold-700">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
                Taiwan Bar Exam Smart Prep Platform
              </p>
            </div>
          </Link>
        </div>

        {/* Center: Global Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="搜尋法條（如行程§117）、爭點、實務判決或歷屆題目..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-slate-100 dark:bg-navy-950 border border-slate-200 dark:border-navy-700 rounded-full text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
        </div>

        {/* Right: Countdown Badge, Theme Switcher & Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Target Countdown Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-500/10 to-gold-500/20 dark:from-gold-950/40 dark:to-navy-800 border border-amber-300/60 dark:border-gold-700/60 rounded-full">
            <Flame className="w-4 h-4 text-amber-600 dark:text-gold-400 animate-pulse" />
            <span className="text-xs font-semibold text-amber-900 dark:text-gold-200">
              距離一試：<strong className="text-amber-700 dark:text-gold-400 font-extrabold text-sm">{daysRemaining}</strong> 天
            </span>
            <span className="text-[10px] hidden lg:inline-block px-1.5 py-0.2 bg-amber-500/20 text-amber-800 dark:text-gold-300 rounded font-medium">
              衝刺期
            </span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 hover:text-navy-900 dark:text-slate-400 dark:hover:text-gold-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
            title={isDark ? "切換至淺色模式" : "切換至深色模式"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* User Badge */}
          <Link 
            href="/profile"
            className="flex items-center gap-2 p-1 pl-2 pr-2.5 rounded-full bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 border border-slate-200 dark:border-navy-700 transition"
          >
            <div className="w-6 h-6 rounded-full bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 flex items-center justify-center text-xs font-bold">
              律
            </div>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200 hidden sm:inline">
              準律師
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
};
