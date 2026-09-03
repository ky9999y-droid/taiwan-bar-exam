import { SAMPLE_QUESTIONS, CHAPTER_SEED_LIST, SUBJECTS_INFO, RECENT_5_EXAM_YEARS } from '@/data/seedData';
import { PracticeSessionClient } from '@/components/practice/PracticeSessionClient';

export function generateStaticParams() {
  const defaults = [
    'daily-15',
    'session-quick',
    'session-mock',
    'session-wrong',
    'session-traps',
    'session-spaced',
    'session-all'
  ];

  // All 15 subject sessions
  const subjectSessions = SUBJECTS_INFO.map(s => `session-${s.id}`);

  // All 5 years mock exam papers (paper-1, paper-2, single-admin, single-crimproc)
  const mockExamSessions: string[] = [];
  RECENT_5_EXAM_YEARS.forEach(y => {
    mockExamSessions.push(`session-paper-1-${y.year}`);
    mockExamSessions.push(`session-paper-2-${y.year}`);
    mockExamSessions.push(`session-single-admin-${y.year}`);
    mockExamSessions.push(`session-single-crimproc-${y.year}`);
  });

  const questionSessions = SAMPLE_QUESTIONS.map(q => `session-${q.id}`);
  const chapterSessions = CHAPTER_SEED_LIST.map(c => `session-${c.subjectId}-${c.chapterNo}`);

  const allIds = Array.from(new Set([
    ...defaults,
    ...subjectSessions,
    ...mockExamSessions,
    ...questionSessions,
    ...chapterSessions
  ]));

  return allIds.map(id => ({
    sessionId: id,
  }));
}

export default function PracticeSessionPage({ params }: { params: { sessionId: string } }) {
  const sessionId = params.sessionId || 'daily-15';
  return <PracticeSessionClient sessionId={sessionId} />;
}
