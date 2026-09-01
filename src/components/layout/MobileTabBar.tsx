'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Target, XCircle, User } from 'lucide-react';

export const MobileTabBar: React.FC = () => {
  const pathname = usePathname();

  const tabs = [
    { label: '首頁', href: '/', icon: Home },
    { label: '研讀', href: '/subjects', icon: BookOpen },
    { label: '做題', href: '/practice/daily-15', icon: Target, isCenter: true },
    { label: '錯題', href: '/review/wrong', icon: XCircle },
    { label: '教練', href: '/ai-coach', icon: User }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-navy-900/95 backdrop-blur border-t border-slate-200 dark:border-navy-800 pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href || (tab.href !== '/' && pathname.startsWith(tab.href));

          if (tab.isCenter) {
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex flex-col items-center justify-center -mt-5"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-navy-900 to-slate-800 dark:from-gold-600 dark:to-amber-500 text-white dark:text-navy-950 flex items-center justify-center shadow-lg shadow-gold-500/20 active:scale-95 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-navy-900 dark:text-gold-400 mt-1">
                  {tab.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
                isActive
                  ? 'text-navy-900 dark:text-gold-400 font-bold'
                  : 'text-slate-400 dark:text-slate-400'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[11px]">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
