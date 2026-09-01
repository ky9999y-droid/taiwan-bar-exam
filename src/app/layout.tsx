import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  title: '⚖️ 台灣律師考試第一試｜智慧研讀學習平台',
  description: '專為通過台灣專技高考律師第一試設計之考試型學習系統，包含15科學習地圖、9層考試型教材、歷屆官方真題庫、逐選項解析、錯題歸因分析、艾賓浩斯間隔複習與AI教練。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning className="dark">
      <body className="antialiased selection:bg-gold-500 selection:text-navy-950">
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
