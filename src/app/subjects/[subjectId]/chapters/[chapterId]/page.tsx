import { CHAPTER_SEED_LIST } from '@/data/seedData';
import { ChapterStudyClient } from '@/components/subjects/ChapterStudyClient';

export function generateStaticParams() {
  return CHAPTER_SEED_LIST.map(c => ({
    subjectId: c.subjectId,
    chapterId: `${c.subjectId}-${c.chapterNo}`,
  }));
}

export default function ChapterStudyPage({ params }: { params: { subjectId: string; chapterId: string } }) {
  const chapterId = params.chapterId || 'ADMIN-3';
  return <ChapterStudyClient chapterId={chapterId} />;
}
