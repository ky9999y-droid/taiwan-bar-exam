'use client';

import {
  Question,
  UserAnswerRecord,
  SpacedReviewItem,
  ErrorReason,
  MockExamResult,
  UserStats,
  DailyStudyTask
} from '@/types';
import { SAMPLE_QUESTIONS } from '@/data/seedData';

const STORAGE_KEYS = {
  USER_ANSWERS: 'bar_exam_user_answers',
  SPACED_REVIEWS: 'bar_exam_spaced_reviews',
  USER_STATS: 'bar_exam_user_stats',
  BOOKMARKS: 'bar_exam_bookmarks',
  USER_NOTES: 'bar_exam_user_notes',
  MOCK_RESULTS: 'bar_exam_mock_results',
  CUSTOM_QUESTIONS: 'bar_exam_custom_questions'
};

export const getStoredAnswers = (): UserAnswerRecord[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_ANSWERS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveAnswer = (record: UserAnswerRecord): void => {
  if (typeof window === 'undefined') return;
  const existing = getStoredAnswers();
  const filtered = existing.filter(r => r.questionId !== record.questionId);
  filtered.push(record);
  localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(filtered));

  // Update spaced repetition schedule
  updateSpacedReview(record.questionId, record.isCorrect);
};

export const updateErrorReason = (questionId: string, reason: ErrorReason): void => {
  if (typeof window === 'undefined') return;
  const answers = getStoredAnswers();
  const target = answers.find(a => a.questionId === questionId);
  if (target) {
    target.errorReason = reason;
    localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(answers));
  }
};

export const toggleTrapMark = (questionId: string): boolean => {
  if (typeof window === 'undefined') return false;
  const answers = getStoredAnswers();
  const target = answers.find(a => a.questionId === questionId);
  if (target) {
    target.isMarkedTrap = !target.isMarkedTrap;
    localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(answers));
    return target.isMarkedTrap;
  } else {
    const newRecord: UserAnswerRecord = {
      questionId,
      selectedOption: 'A',
      isCorrect: true,
      isMarkedTrap: true,
      timeSpentSeconds: 0,
      answeredAt: new Date().toISOString()
    };
    answers.push(newRecord);
    localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(answers));
    return true;
  }
};

export const getSpacedReviews = (): SpacedReviewItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SPACED_REVIEWS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const updateSpacedReview = (questionId: string, isCorrect: boolean): void => {
  if (typeof window === 'undefined') return;
  const reviews = getSpacedReviews();
  const existing = reviews.find(r => r.questionId === questionId);
  const now = new Date();

  // Intervals in days: [0, 1, 3, 7, 14, 30]
  const INTERVAL_DAYS = [0, 1, 3, 7, 14, 30];

  if (existing) {
    if (isCorrect) {
      existing.intervalLevel = Math.min(existing.intervalLevel + 1, INTERVAL_DAYS.length - 1);
      existing.consecutiveCorrect += 1;
    } else {
      existing.intervalLevel = Math.max(0, existing.intervalLevel - 1);
      existing.consecutiveCorrect = 0;
    }
    const daysToAdd = INTERVAL_DAYS[existing.intervalLevel];
    const nextDate = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    existing.nextReviewDate = nextDate.toISOString();
    existing.lastAnsweredAt = now.toISOString();
  } else {
    const nextDate = isCorrect
      ? new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000)
      : new Date(now.getTime() + 0 * 24 * 60 * 60 * 1000);

    reviews.push({
      questionId,
      intervalLevel: isCorrect ? 1 : 0,
      nextReviewDate: nextDate.toISOString(),
      consecutiveCorrect: isCorrect ? 1 : 0,
      lastAnsweredAt: now.toISOString()
    });
  }

  localStorage.setItem(STORAGE_KEYS.SPACED_REVIEWS, JSON.stringify(reviews));
};

export const getAllQuestions = (): Question[] => {
  if (typeof window === 'undefined') return SAMPLE_QUESTIONS;
  try {
    const customRaw = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
    const custom = customRaw ? JSON.parse(customRaw) : [];
    return [...SAMPLE_QUESTIONS, ...custom];
  } catch {
    return SAMPLE_QUESTIONS;
  }
};

export const getWrongQuestions = (): (Question & { answerRecord?: UserAnswerRecord })[] => {
  const answers = getStoredAnswers();
  const wrongAnswerMap = new Map(answers.filter(a => !a.isCorrect).map(a => [a.questionId, a]));
  const allQ = getAllQuestions();
  return allQ
    .filter(q => wrongAnswerMap.has(q.id))
    .map(q => ({
      ...q,
      answerRecord: wrongAnswerMap.get(q.id)
    }));
};

export const getTrapQuestions = (): (Question & { answerRecord?: UserAnswerRecord })[] => {
  const answers = getStoredAnswers();
  const trapMap = new Map(answers.filter(a => a.isMarkedTrap).map(a => [a.questionId, a]));
  const allQ = getAllQuestions();
  return allQ
    .filter(q => trapMap.has(q.id))
    .map(q => ({
      ...q,
      answerRecord: trapMap.get(q.id)
    }));
};

export const getDueSpacedReviewQuestions = (): Question[] => {
  const reviews = getSpacedReviews();
  const nowStr = new Date().toISOString();
  const dueIds = new Set(reviews.filter(r => r.nextReviewDate <= nowStr).map(r => r.questionId));
  const allQ = getAllQuestions();
  return allQ.filter(q => dueIds.has(q.id));
};

export const getUserStats = (): UserStats => {
  const answers = getStoredAnswers();
  const wrongQuestions = answers.filter(a => !a.isCorrect);
  const correctCount = answers.filter(a => a.isCorrect).length;
  const totalCount = answers.length;
  const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 78;

  // Calculate days remaining to August 2027 or target date
  const targetDate = new Date('2027-08-07');
  const now = new Date();
  const diffDays = Math.max(1, Math.ceil((targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

  return {
    targetExamDate: '2027-08-07',
    streakDays: 14,
    todayStudyMinutes: 105,
    todayQuestionsCount: 45,
    todayCorrectRate: accuracy,
    totalQuestionsCompleted: 1420 + totalCount,
    totalWrongQuestionsCount: wrongQuestions.length || 38,
    mockExamAvgScore: 388,
    predictedWeakSubjects: ['民事訴訟法 (共同訴訟與既判力)', '行政訴訟法 (確認訴訟與課予義務)']
  };
};

export const getDailyTasks = (): DailyStudyTask[] => {
  return [
    {
      id: 'task-1',
      type: 'STUDY',
      title: '📖 行政法｜行政處分之撤銷與廢止',
      subtitle: '超高頻五星爭點、除斥期間與信賴保護 (20 分鐘)',
      estimatedMinutes: 20,
      isCompleted: true,
      actionUrl: '/subjects/ADMIN/chapters/ADMIN-3'
    },
    {
      id: 'task-2',
      type: 'STUDY',
      title: '📖 刑事訴訟法｜傳聞法則與傳聞例外',
      subtitle: '§159-1~§159-5 與 111年憲判字第8號實務 (25 分鐘)',
      estimatedMinutes: 25,
      isCompleted: false,
      actionUrl: '/subjects/CRIM_PROC/chapters/CRIM_PROC-7'
    },
    {
      id: 'task-3',
      type: 'PRACTICE',
      title: '📝 歷屆精選｜行政法與刑訴真題測驗',
      subtitle: '考選部官方真題 15 題',
      questionCount: 15,
      isCompleted: false,
      actionUrl: '/practice/daily-15'
    },
    {
      id: 'task-4',
      type: 'WRONG_REVIEW',
      title: '❌ 昨日錯題強化｜6大錯誤原因重測',
      subtitle: '針對關鍵法條與二選一陷阱題 (8 題)',
      questionCount: 8,
      isCompleted: false,
      actionUrl: '/review/wrong'
    },
    {
      id: 'task-5',
      type: 'SPACED_REVIEW',
      title: '🧠 艾賓浩斯記憶衰退排程複習',
      subtitle: '依間隔重複演算法推播之待複習題組 (12 題)',
      questionCount: 12,
      isCompleted: false,
      actionUrl: '/review/today'
    }
  ];
};
