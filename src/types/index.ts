export type SubjectId =
  | 'CONST'
  | 'ADMIN'
  | 'CRIM'
  | 'CRIM_PROC'
  | 'PUB_INT_LAW'
  | 'PRIV_INT_LAW'
  | 'LEGAL_ETH'
  | 'CIVIL'
  | 'CIVIL_PROC'
  | 'CORP'
  | 'INSUR'
  | 'NEG_INST'
  | 'COMP_EXEC'
  | 'SEC_REG'
  | 'LEGAL_ENG';

export type PaperType = 'PAPER_1' | 'PAPER_2';

export type MasteryState =
  | 'UNLEARNED'      // 尚未學習
  | 'LEARNING'       // 學習中
  | 'COMPLETED'      // 已完成
  | 'NEEDS_REVIEW'   // 需要複習
  | 'WEAKNESS'       // ⚠️弱點
  | 'MASTERED';      // 🟢熟練

export type FrequencyTier = 'SUPER_HIGH' | 'HIGH' | 'MEDIUM' | 'LOW';

export type SourceType = 'OFFICIAL_EXAM' | 'AI_MOCK' | 'CUSTOM';

export type DifficultyLevel = 'EASY' | 'MEDIUM' | 'HARD';

export type StudyMode = 'NORMAL' | 'SUMMARY' | 'CRAM' | 'FLASHCARD';

export type ErrorReason =
  | 'CARELESS'           // 粗心眼花
  | 'LAW_FORGOTTEN'       // 法條關鍵要件忘記
  | 'CONCEPT_CONFUSED'    // 核心法理觀念不清
  | 'TWO_OPTIONS_TRAP'    // 雙選項混淆二選一
  | 'UNKNOWN'             // 完全沒看過此概念
  | 'CASE_UNFAMILIAR';    // 重要實務見解不熟

export interface SubjectInfo {
  id: SubjectId;
  paper: PaperType;
  name: string;
  nameEn: string;
  officialScore: number;
  totalChapters: number;
  icon: string;
  description: string;
}

export interface LawReference {
  lawName: string;
  articleNo: string;
  keyClause?: string;
  coreKeywords?: string[];
  plainExplanation?: string;
  examFrequency?: FrequencyTier;
}

export interface CaseReference {
  court: string;
  caseNo: string;
  date?: string;
  summary: string;
  sourceUrl?: string;
  isVerified: boolean;
}

export interface ComparisonTableRow {
  dimension: string;
  conceptA: string;
  conceptB: string;
  notes?: string;
}

export interface ChapterTextbook {
  id: string;
  subjectId: SubjectId;
  chapterNo: number;
  title: string;
  frequency: FrequencyTier;
  frequencyStars: number; // 1 ~ 5
  masteryPercentage: number;
  masteryState: MasteryState;
  
  // 9-layer exam-oriented content
  coreConcept: string;                // 一、核心觀念 (用最易理解方式解釋)
  examFrequencyDesc: string;          // 二、必考程度
  importantLaws: LawReference[];      // 三、重要法條 (條號、重點、關鍵字、易出題處)
  barExamTestingStyle: string[];      // 四、第一試常考方式
  commonTraps: string[];              // 五、常見考試陷阱
  confusionComparisons: {             // 六、易混淆概念比較表
    title: string;
    conceptAName: string;
    conceptBName: string;
    rows: ComparisonTableRow[];
  };
  importantCases: CaseReference[];    // 七、重要實務見解 (嚴謹不虛構)
  historicalTrends: string[];         // 八、歷屆出題規律
  oneMinuteSummary: string[];         // 九、考前一分鐘複習 (5~10個核心記憶點)
}

export interface OptionItem {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface OptionAnalysis {
  isCorrect: boolean;
  reason: string;
  trapType?: string;
}

export interface Question {
  id: string;
  sourceType: SourceType;             // 🟦 官方歷屆 | 🟨 AI模擬 | 🟩 自建
  subjectId: SubjectId;
  chapterId: string;
  chapterNo: number;
  chapterTitle: string;
  prompt: string;
  options: OptionItem[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  optionExplanations: {
    A: OptionAnalysis;
    B: OptionAnalysis;
    C: OptionAnalysis;
    D: OptionAnalysis;
  };
  tags: string[];
  difficulty: DifficultyLevel;
  relatedLaws: LawReference[];
  relatedCases: CaseReference[];
  
  // Official Citation Metadata
  examYear?: string;
  examSession?: string;
  questionNo?: number;
  verifiedDate: string;
  sourceCitation: string;
  officialCorrectRate?: number;
}

export interface UserAnswerRecord {
  questionId: string;
  selectedOption: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  isMarkedTrap: boolean;
  errorReason?: ErrorReason;
  timeSpentSeconds: number;
  answeredAt: string;
}

export interface SpacedReviewItem {
  questionId: string;
  intervalLevel: number; // 0: 當天, 1: 1天, 2: 3天, 3: 7天, 4: 14天, 5: 30天
  nextReviewDate: string;
  consecutiveCorrect: number;
  lastAnsweredAt: string;
}

export interface Flashcard {
  id: string;
  subjectId: SubjectId;
  chapterTitle: string;
  front: string;
  back: string;
  keyLawArticle?: string;
  tags: string[];
  easeLevel?: 'KNOWN' | 'VAGUE' | 'UNKNOWN';
}

export interface ClozeTest {
  id: string;
  subjectId: SubjectId;
  lawName: string;
  articleNo: string;
  originalText: string;
  clozeTemplate: string; // "行政行為應受 {{1}} 及 {{2}} 之拘束。"
  blanks: {
    index: number;
    answer: string;
    hint?: string;
  }[];
}

export interface MockExamConfig {
  id: string;
  title: string;
  type: 'SINGLE_SUBJECT' | 'PAPER_1' | 'PAPER_2' | 'FULL_EXAM';
  subjectId?: SubjectId;
  totalQuestions: number;
  durationMinutes: number;
  questions: Question[];
}

export interface MockExamResult {
  id: string;
  configId: string;
  title: string;
  score: number;
  totalScore: number;
  correctCount: number;
  totalQuestions: number;
  accuracy: number;
  timeSpentMinutes: number;
  subjectScores: {
    subjectId: SubjectId;
    name: string;
    score: number;
    maxScore: number;
    accuracy: number;
  }[];
  weakChapters: {
    subjectName: string;
    chapterTitle: string;
    accuracy: number;
    recommendedAction: string;
  }[];
  completedAt: string;
}

export interface DailyStudyTask {
  id: string;
  type: 'STUDY' | 'PRACTICE' | 'WRONG_REVIEW' | 'SPACED_REVIEW';
  title: string;
  subtitle: string;
  estimatedMinutes?: number;
  questionCount?: number;
  isCompleted: boolean;
  actionUrl: string;
}

export interface UserStats {
  targetExamDate: string;
  streakDays: number;
  todayStudyMinutes: number;
  todayQuestionsCount: number;
  todayCorrectRate: number;
  totalQuestionsCompleted: number;
  totalWrongQuestionsCount: number;
  mockExamAvgScore: number;
  predictedWeakSubjects: string[];
}
