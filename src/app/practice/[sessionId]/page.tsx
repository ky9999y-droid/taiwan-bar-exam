import { SAMPLE_QUESTIONS, CHAPTER_SEED_LIST } from '@/data/seedData';
import { PracticeSessionClient } from '@/components/practice/PracticeSessionClient';

export function generateStaticParams() {
  const defaults = [
    'daily-15',
    'session-quick',
    'session-mock',
    'session-wrong',
    'session-traps',
    'session-spaced',
    'session-all',
    'session-ADMIN',
    'session-CRIM',
    'session-CIVIL',
    'session-CRIM_PROC'
  ];
  const questionSessions = SAMPLE_QUESTIONS.map(q => `session-${q.id}`);
  const chapterSessions = CHAPTER_SEED_LIST.map(c => `session-${c.subjectId}-${c.chapterNo}`);
  const allIds = Array.from(new Set([...defaults, ...questionSessions, ...chapterSessions]));

  return allIds.map(id => ({
    sessionId: id,
  }));
}

export default function PracticeSessionPage({ params }: { params: { sessionId: string } }) {
  const sessionId = params.sessionId || 'daily-15';
  return <PracticeSessionClient sessionId={sessionId} />;
}
