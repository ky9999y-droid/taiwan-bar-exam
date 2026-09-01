'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, CheckCircle2, ChevronRight, Scale, ShieldAlert } from 'lucide-react';
import { TIMELINE_DATA } from '@/data/seedData';

export default function TimelinesPage() {
  const timeline = TIMELINE_DATA[0];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4" />
            程序法動態時間軸導航
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
            {timeline.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            點擊各階段即可直達相關法條、考點重點整理與歷屆真題。
          </p>
        </div>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-navy-800 shadow-sm">
        <div className="relative border-l-2 border-slate-200 dark:border-navy-700 ml-4 sm:ml-6 space-y-8">
          {timeline.steps.map((step) => (
            <div key={step.step} className="relative pl-6 sm:pl-8 group">
              
              {/* Step Icon / Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-110 transition-transform">
                {step.step}
              </div>

              {/* Step Card */}
              <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 hover:border-gold-500 transition-all space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold text-base text-navy-900 dark:text-white">
                    {step.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-950/60 px-2.5 py-0.5 rounded-full">
                    {step.articles}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {step.desc}
                </p>

                <div className="pt-2 flex items-center gap-3 text-xs">
                  <Link
                    href={`/subjects/CRIM_PROC/chapters/CRIM_PROC-${step.step <= 4 ? 3 : 7}`}
                    className="text-navy-900 dark:text-gold-400 font-bold hover:underline flex items-center gap-1"
                  >
                    研讀本階段教材 <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/questions"
                    className="text-slate-400 hover:text-slate-200"
                  >
                    做本階段真題
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
