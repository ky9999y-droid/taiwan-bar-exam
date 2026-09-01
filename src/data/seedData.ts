import {
  SubjectInfo,
  ChapterTextbook,
  Question,
  Flashcard,
  ClozeTest,
  ComparisonTableRow
} from '@/types';

export const RECENT_5_EXAM_YEARS = [
  { year: '113', name: '113 年專門職業及技術人員高等考試律師考試（第一試）', date: '113年8月3日', status: '最新正式考題' },
  { year: '112', name: '112 年專門職業及技術人員高等考試律師考試（第一試）', date: '112年8月5日', status: '正式考題' },
  { year: '111', name: '111 年專門職業及技術人員高等考試律師考試（第一試）', date: '111年8月6日', status: '正式考題' },
  { year: '110', name: '110 年專門職業及技術人員高等考試律師考試（第一試）', date: '110年10月23日', status: '正式考題' },
  { year: '109', name: '109 年專門職業及技術人員高等考試律師考試（第一試）', date: '109年8月8日', status: '正式考題' }
];

export const SUBJECTS_INFO: SubjectInfo[] = [
  // 綜合法學（一）
  {
    id: 'CONST',
    paper: 'PAPER_1',
    name: '憲法',
    nameEn: 'Constitutional Law',
    officialScore: 100,
    totalChapters: 8,
    icon: 'Landmark',
    description: '基本人權保障核心、權力分立與制衡機制、憲法法庭判決與合憲性審查'
  },
  {
    id: 'ADMIN',
    paper: 'PAPER_1',
    name: '行政法',
    nameEn: 'Administrative Law',
    officialScore: 100,
    totalChapters: 12,
    icon: 'Building2',
    description: '依法行政原則、行政處分之合法與救濟、行政契約、行政罰、行政執行與爭訟'
  },
  {
    id: 'CRIM',
    paper: 'PAPER_1',
    name: '刑法',
    nameEn: 'Criminal Law',
    officialScore: 100,
    totalChapters: 14,
    icon: 'ShieldAlert',
    description: '三階犯罪論體系、未遂犯與中止犯、正犯共犯、罪數競合與刑法分則核心罪名'
  },
  {
    id: 'CRIM_PROC',
    paper: 'PAPER_1',
    name: '刑事訴訟法',
    nameEn: 'Criminal Procedure',
    officialScore: 100,
    totalChapters: 14,
    icon: 'Scale',
    description: '訴訟主體、強制處分令狀原則、傳聞法則與證據能力、公訴審判與非常救濟'
  },
  {
    id: 'PUB_INT_LAW',
    paper: 'PAPER_1',
    name: '國際公法',
    nameEn: 'Public International Law',
    officialScore: 20,
    totalChapters: 6,
    icon: 'Globe',
    description: '條約法公約、國家主權管轄與豁免、海洋法體系、國際責任與爭端解決'
  },
  {
    id: 'PRIV_INT_LAW',
    paper: 'PAPER_1',
    name: '國際私法',
    nameEn: 'Private International Law',
    officialScore: 20,
    totalChapters: 6,
    icon: 'Compass',
    description: '涉外民事法律適用法、定性與反致理論、公序良俗排除與各類涉外法律關係'
  },
  {
    id: 'LEGAL_ETH',
    paper: 'PAPER_1',
    name: '法律倫理',
    nameEn: 'Legal Ethics',
    officialScore: 20,
    totalChapters: 5,
    icon: 'Award',
    description: '律師法規範、律師倫理規範、司法官倫理、利益衝突迴避與保密義務'
  },

  // 綜合法學（二）
  {
    id: 'CIVIL',
    paper: 'PAPER_2',
    name: '民法',
    nameEn: 'Civil Law',
    officialScore: 150,
    totalChapters: 18,
    icon: 'FileText',
    description: '民法總則、債法總論（契約/侵權/不當得利）、物權法、親屬與繼承法'
  },
  {
    id: 'CIVIL_PROC',
    paper: 'PAPER_2',
    name: '民事訴訟法',
    nameEn: 'Civil Procedure',
    officialScore: 150,
    totalChapters: 14,
    icon: 'FileSpreadsheet',
    description: '處分權與辯論主義、共同訴訟類型、既判力客觀主觀範圍、爭點效與保全程序'
  },
  {
    id: 'CORP',
    paper: 'PAPER_2',
    name: '公司法',
    nameEn: 'Company Law',
    officialScore: 30,
    totalChapters: 10,
    icon: 'Briefcase',
    description: '公司設立與資本充實、股東會與董事會權責瑕疵、董事忠實義務、公司併購'
  },
  {
    id: 'INSUR',
    paper: 'PAPER_2',
    name: '保險法',
    nameEn: 'Insurance Law',
    officialScore: 20,
    totalChapters: 6,
    icon: 'ShieldCheck',
    description: '保險利益、據實告知義務（§64）、複保險、定型化契約條款與保險代位'
  },
  {
    id: 'NEG_INST',
    paper: 'PAPER_2',
    name: '票據法',
    nameEn: 'Negotiable Instruments',
    officialScore: 20,
    totalChapters: 6,
    icon: 'CreditCard',
    description: '票據行為無因性、票據抗辯限制、發票/背書/追索權、偽造變造與止付公示催告'
  },
  {
    id: 'COMP_EXEC',
    paper: 'PAPER_2',
    name: '強制執行法',
    nameEn: 'Compulsory Execution Law',
    officialScore: 20,
    totalChapters: 6,
    icon: 'Gavel',
    description: '執行名義要件、金錢債權執行程序、動產不動產拍賣點交、異議之訴救濟'
  },
  {
    id: 'SEC_REG',
    paper: 'PAPER_2',
    name: '證券交易法',
    nameEn: 'Securities Regulation',
    officialScore: 30,
    totalChapters: 8,
    icon: 'TrendingUp',
    description: '有價證券募集發行、公開說明書不實（§20/§32）、內線交易（§157-1）、短線交易歸入權'
  },
  {
    id: 'LEGAL_ENG',
    paper: 'PAPER_2',
    name: '法學英文',
    nameEn: 'Legal English',
    officialScore: 20,
    totalChapters: 5,
    icon: 'Languages',
    description: '英美法核心詞彙、憲法人權與刑訴專有名詞、商務契約與拉丁法諺慣用語'
  }
];

export const CHAPTER_SEED_LIST: {
  subjectId: string;
  chapterNo: number;
  title: string;
  weightStars: number;
  masteryPercentage: number;
  isWeakness: boolean;
  status: 'UNLEARNED' | 'LEARNING' | 'COMPLETED' | 'NEEDS_REVIEW' | 'WEAKNESS' | 'MASTERED';
}[] = [
  // 行政法
  { subjectId: 'ADMIN', chapterNo: 1, title: '行政法基本原理原則與法源', weightStars: 5, masteryPercentage: 92, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'ADMIN', chapterNo: 2, title: '行政組織與公物法制', weightStars: 4, masteryPercentage: 78, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'ADMIN', chapterNo: 3, title: '行政處分之成立、瑕疵與廢止撤銷', weightStars: 5, masteryPercentage: 58, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'ADMIN', chapterNo: 4, title: '行政契約之締結與履約爭議', weightStars: 3, masteryPercentage: 85, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'ADMIN', chapterNo: 5, title: '法規命令與行政規則之界限', weightStars: 4, masteryPercentage: 74, isWeakness: false, status: 'NEEDS_REVIEW' },
  { subjectId: 'ADMIN', chapterNo: 6, title: '行政程序法制與正當法律程序', weightStars: 4, masteryPercentage: 69, isWeakness: false, status: 'LEARNING' },
  { subjectId: 'ADMIN', chapterNo: 7, title: '行政罰之責任條件與處罰裁量', weightStars: 4, masteryPercentage: 81, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'ADMIN', chapterNo: 8, title: '行政執行（公法金錢/行為不行為）', weightStars: 3, masteryPercentage: 73, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'ADMIN', chapterNo: 9, title: '國家賠償與損失補償體系', weightStars: 4, masteryPercentage: 88, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'ADMIN', chapterNo: 10, title: '訴願救濟程序與管轄', weightStars: 3, masteryPercentage: 76, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'ADMIN', chapterNo: 11, title: '行政訴訟訴訟類型與裁判', weightStars: 5, masteryPercentage: 62, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'ADMIN', chapterNo: 12, title: '暫時權利保護（停止執行/假處分）', weightStars: 4, masteryPercentage: 70, isWeakness: false, status: 'NEEDS_REVIEW' },

  // 憲法
  { subjectId: 'CONST', chapterNo: 1, title: '憲法基本原則與國民主權', weightStars: 4, masteryPercentage: 88, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'CONST', chapterNo: 2, title: '平等權與各類差別待遇審查基準', weightStars: 5, masteryPercentage: 82, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CONST', chapterNo: 3, title: '人身自由與正當法律程序（釋字384/588）', weightStars: 5, masteryPercentage: 90, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'CONST', chapterNo: 4, title: '言論自由、新聞自由與集會自由', weightStars: 5, masteryPercentage: 75, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CONST', chapterNo: 5, title: '工作權、財產權與生存權保障', weightStars: 4, masteryPercentage: 79, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CONST', chapterNo: 6, title: '權力分立：總統、行政院與立法院制衡', weightStars: 4, masteryPercentage: 64, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'CONST', chapterNo: 7, title: '司法獨立與法官制度', weightStars: 3, masteryPercentage: 84, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'CONST', chapterNo: 8, title: '憲法訴訟法：法規範憲法審查與裁判審查', weightStars: 5, masteryPercentage: 67, isWeakness: false, status: 'LEARNING' },

  // 刑法
  { subjectId: 'CRIM', chapterNo: 1, title: '罪刑法定原則與刑法之適用效力', weightStars: 3, masteryPercentage: 95, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'CRIM', chapterNo: 2, title: '構成要件該當性與因果關係', weightStars: 5, masteryPercentage: 86, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CRIM', chapterNo: 3, title: '違法性與阻卻違法事由（正當防衛/緊急避難）', weightStars: 5, masteryPercentage: 89, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'CRIM', chapterNo: 4, title: '未遂犯、中止犯與不能未遂', weightStars: 5, masteryPercentage: 63, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'CRIM', chapterNo: 5, title: '正犯與共犯（共同正犯/教唆犯/幫助犯）', weightStars: 5, masteryPercentage: 72, isWeakness: false, status: 'NEEDS_REVIEW' },
  { subjectId: 'CRIM', chapterNo: 6, title: '罪數論與競合體系', weightStars: 4, masteryPercentage: 68, isWeakness: false, status: 'LEARNING' },
  { subjectId: 'CRIM', chapterNo: 7, title: '沒收新制（犯罪所得沒收與第三人沒收）', weightStars: 5, masteryPercentage: 84, isWeakness: false, status: 'COMPLETED' },

  // 刑事訴訟法
  { subjectId: 'CRIM_PROC', chapterNo: 1, title: '刑事訴訟基本原則與訴訟主體', weightStars: 4, masteryPercentage: 82, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CRIM_PROC', chapterNo: 2, title: '辯護人權限與實質有效辯護', weightStars: 4, masteryPercentage: 78, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CRIM_PROC', chapterNo: 3, title: '強制處分：搜索、扣押與令狀原則', weightStars: 5, masteryPercentage: 65, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'CRIM_PROC', chapterNo: 4, title: '強制處分：逮捕、拘提與羈押審查', weightStars: 5, masteryPercentage: 75, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CRIM_PROC', chapterNo: 5, title: '通訊保障及監察法與特殊偵查手段', weightStars: 3, masteryPercentage: 80, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CRIM_PROC', chapterNo: 6, title: '證據法總論與嚴格證明法則', weightStars: 4, masteryPercentage: 71, isWeakness: false, status: 'NEEDS_REVIEW' },
  { subjectId: 'CRIM_PROC', chapterNo: 7, title: '傳聞法則與傳聞例外（§159-1~§159-5）', weightStars: 5, masteryPercentage: 54, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'CRIM_PROC', chapterNo: 8, title: '被告自白任意性與補強證據', weightStars: 4, masteryPercentage: 86, isWeakness: false, status: 'MASTERED' },

  // 民法
  { subjectId: 'CIVIL', chapterNo: 1, title: '權利主體、客體與權利能力/行為能力', weightStars: 4, masteryPercentage: 90, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'CIVIL', chapterNo: 2, title: '法律行為、意思表示瑕疵（通謀/錯誤/詐欺/脅迫）', weightStars: 5, masteryPercentage: 78, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CIVIL', chapterNo: 3, title: '代理（無權代理與表見代理）', weightStars: 5, masteryPercentage: 60, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'CIVIL', chapterNo: 4, title: '消滅時效與除斥期間', weightStars: 4, masteryPercentage: 82, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CIVIL', chapterNo: 5, title: '債總：契約之成立、無因管理與不當得利', weightStars: 5, masteryPercentage: 74, isWeakness: false, status: 'NEEDS_REVIEW' },
  { subjectId: 'CIVIL', chapterNo: 6, title: '債總：侵權行為責任構成要件與連帶責任', weightStars: 5, masteryPercentage: 79, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CIVIL', chapterNo: 7, title: '債總：債務不履行（給付不能/遲延/不完全給付）', weightStars: 5, masteryPercentage: 68, isWeakness: false, status: 'LEARNING' },
  { subjectId: 'CIVIL', chapterNo: 8, title: '物權：所有權、善意受讓與無權處分', weightStars: 5, masteryPercentage: 65, isWeakness: true, status: 'WEAKNESS' },

  // 民事訴訟法
  { subjectId: 'CIVIL_PROC', chapterNo: 1, title: '民事訴訟之基本原則與審判權管轄', weightStars: 4, masteryPercentage: 80, isWeakness: false, status: 'COMPLETED' },
  { subjectId: 'CIVIL_PROC', chapterNo: 2, title: '當事人能力、當事人適格與訴訟擔當', weightStars: 5, masteryPercentage: 70, isWeakness: false, status: 'NEEDS_REVIEW' },
  { subjectId: 'CIVIL_PROC', chapterNo: 3, title: '共同訴訟之類型判別（必要/普通/固有必要）', weightStars: 5, masteryPercentage: 51, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'CIVIL_PROC', chapterNo: 4, title: '訴訟標的理論與訴之變更追加', weightStars: 4, masteryPercentage: 62, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'CIVIL_PROC', chapterNo: 5, title: '既判力之客觀範圍、主觀範圍與爭點效', weightStars: 5, masteryPercentage: 55, isWeakness: true, status: 'WEAKNESS' },

  // 公司法
  { subjectId: 'CORP', chapterNo: 1, title: '公司設立、法人格與資本充實原則', weightStars: 4, masteryPercentage: 85, isWeakness: false, status: 'MASTERED' },
  { subjectId: 'CORP', chapterNo: 2, title: '股東會召集、決議瑕疵（無效/得撤銷/不成立）', weightStars: 5, masteryPercentage: 66, isWeakness: true, status: 'WEAKNESS' },
  { subjectId: 'CORP', chapterNo: 3, title: '董事會權限、董事忠實義務與注意義務（§23）', weightStars: 5, masteryPercentage: 77, isWeakness: false, status: 'COMPLETED' }
];

export const CHAPTER_TEXTBOOKS: Record<string, ChapterTextbook> = {
  'ADMIN-3': {
    id: 'ADMIN-3',
    subjectId: 'ADMIN',
    chapterNo: 3,
    title: '行政處分之成立、效力與瑕疵救濟（撤銷 vs 廢止）',
    frequency: 'SUPER_HIGH',
    frequencyStars: 5,
    masteryPercentage: 58,
    masteryState: 'WEAKNESS',
    coreConcept: '行政處分自始違法者生「撤銷」問題；合法行政處分因情事變更或法規廢止生「廢止」問題。兩者在溯及既往效力、受益人信賴保護要件、時效限制及補償義務上有本質差異。考生必須牢記第117條、第119條、第120條、第123條至第126條之文義與實務操作。',
    examFrequencyDesc: '★★★★★ 超高頻考點。歷年第一試公法卷每年必出 2~4 題，常以複雜案例題型包裝撤銷與廢止之混合事實。',
    importantLaws: [
      {
        lawName: '行政程序法',
        articleNo: '第 117 條',
        keyClause: '違法行政處分於法定救濟期間經過後，原處分機關得依職權為全部或一部之撤銷；其上級機關，亦得為之。',
        coreKeywords: ['原處分機關或其上級機關', '知有撤銷原因起2年內', '信賴利益顯然大於公益不得撤銷'],
        plainExplanation: '違法行政處分原則上可由原處分機關或上級機關依職權撤銷，但若是授益處分且受益人無惡意（無§119各款），且信賴值得保護者，不得撤銷。',
        examFrequency: 'SUPER_HIGH'
      },
      {
        lawName: '行政程序法',
        articleNo: '第 119 條',
        keyClause: '受益人有下列各款情形之一者，其信賴不值得保護：一、以詐欺、脅迫或賄賂... 二、對重要事項提供不正確資料... 三、明知行政處分違法或因重大過失而不知者。',
        coreKeywords: ['詐欺脅迫', '提供不正確資料', '明知或重大過失'],
        plainExplanation: '信賴不值得保護之三款法定事由，只要具備其一，受益人即不得主張信賴保護，機關可逕行撤銷且無須補償損失。',
        examFrequency: 'SUPER_HIGH'
      },
      {
        lawName: '行政程序法',
        articleNo: '第 123 條',
        keyClause: '合法授益行政處分除法規另有規定外，非有下列各款情形之一者，不得廢止：一、法規准許。二、保留行政處分之廢止權。三、附負擔之行政處分，受益人未履行該負擔。四、行政處分所依據之法規或事實事後發生變更... 五、其他為防止或除去對公益之重大危害。',
        coreKeywords: ['合法授益處分', '法定五款廢止事由', '保留廢止權', '未履行負擔'],
        plainExplanation: '合法處分原則上基於法安定性不得隨意廢止，僅在符合第123條嚴格限制之五款事由時方得向將來廢止。',
        examFrequency: 'SUPER_HIGH'
      },
      {
        lawName: '行政程序法',
        articleNo: '第 124 條',
        keyClause: '前條之廢止，應自廢止原因發生後二年內為之。',
        coreKeywords: ['廢止原因發生後2年', '除斥期間'],
        plainExplanation: '廢止權受 2 年除斥期間之限制，超過期間不得再行使廢止。',
        examFrequency: 'HIGH'
      }
    ],
    barExamTestingStyle: [
      '題幹故意給一個「自始合法但事後情事變更」的執照，選項卻寫「機關依第117條撤銷該執照」，測驗考生能否精確區分違法（撤銷）與合法（廢止）。',
      '利用第125條但書設陷：廢止原則向將來失效，但「受益人未履行負擔而廢止者，得溯及既往失效」。考官常將選項寫成「廢止一律向將來失效，絕無例外」。',
      '將第120條之「撤銷補償」與第126條之「廢止補償」主體與要件互換，測驗考生是否清楚第123條第4款、第5款廢止才有補償，而第1至3款廢止並無補償。'
    ],
    commonTraps: [
      '⚠️ 陷阱一：誤以為「上級機關」不能主動撤銷 -> 錯！第117條前段明定「原處分機關或其上級機關」均得依職權撤銷。',
      '⚠️ 陷阱二：忽略第124條除斥期間起算點 -> 撤銷是「知有撤銷原因起2年」；廢止是「廢止原因發生後2年」。',
      '⚠️ 陷阱三：負擔處分無信賴保護問題 -> 只有「授益處分」之撤銷才需考量第117條但書信賴保護，負擔處分違法機關得隨時依職權撤銷。'
    ],
    confusionComparisons: {
      title: '違法處分之撤銷 VS 合法處分之廢止 全方位對照',
      conceptAName: '違法行政處分之撤銷 (§117)',
      conceptBName: '合法行政處分之廢止 (§123)',
      rows: [
        {
          dimension: '處分作成時之狀態',
          conceptA: '自始違法（處分作成時即有客觀違法瑕疵）',
          conceptB: '原本合法（作成時合乎法規，事後因法規或事實變遷）'
        },
        {
          dimension: '效力溯及原則',
          conceptA: '原則上「溯及既往」失其效力 (§118前段)',
          conceptB: '原則上「自廢止日或指定日向將來」失其效力 (§125前段)'
        },
        {
          dimension: '溯及失效之例外',
          conceptA: '為維護公益或保護信賴，得另定失其效力之日期 (§118但書)',
          conceptB: '受益人「未履行負擔」致廢止者，得溯及既往失其效力 (§125但書)'
        },
        {
          dimension: '信賴損失補償',
          conceptA: '第 120 條：受益人無 §119 信賴不值得保護情事者，得請求財產補償',
          conceptB: '第 126 條：僅限於依 §123 第4款（事實變更）或第5款（防止重大公益危害）廢止時方給予補償'
        },
        {
          dimension: '除斥期間計算',
          conceptA: '自原處分機關或上級機關「知有撤銷原因起 2 年內」 (§124)',
          conceptB: '自「廢止原因發生後 2 年內」為之 (§124)'
        }
      ]
    },
    importantCases: [
      {
        court: '最高行政法院',
        caseNo: '102 年 11 月份第 1 次庭長法官聯席會議',
        date: '2013-11-12',
        summary: '行政程序法第 124 條所定「知有撤銷原因」，係指原處分機關或其上級機關「確實知曉」行政處分有撤銷之原因而言，若僅屬懷疑或檢舉，尚不能起算該 2 年除斥期間。',
        sourceUrl: 'https://judgment.judicial.gov.tw',
        isVerified: true
      },
      {
        court: '司法院大法官釋字',
        caseNo: '釋字第 525 號解釋',
        date: '2001-05-04',
        summary: '信賴保護原則攸關憲法上人民權利之保障，公權力行使涉及人民信賴利益且值得保護者，即有該原則之適用。法規制定或修改、行政處分之撤銷廢止，均應採取合理之補救措施或訂定過渡條款。',
        sourceUrl: 'https://cons.judicial.gov.tw',
        isVerified: true
      }
    ],
    historicalTrends: [
      '近 5 年第一試出題分析：113年第20題考廢止之法定五款事由；112年第18題考撤銷之除斥期間與信賴保護；111年第16題考未履行負擔之廢止溯及效力；110年第20題考第119條信賴不值得保護之判斷。',
      '命題趨勢：結合環保許可證或建築執照之實例，混淆廢止補償（§126）與損害賠償（國賠）之法律關係。'
    ],
    oneMinuteSummary: [
      '① 自始違法＝撤銷（§117）；事後變化＝廢止（§123）。',
      '② 撤銷原則溯及既往失效；廢止原則向將來失效。',
      '③ 廢止唯一溯及例外：受益人「未履行負擔」而廢止（§125但書）。',
      '④ 撤銷權限：原處分機關與其上級機關皆有權。',
      '⑤ 撤銷補償前置限制：受益人具備 §119 惡意三款者（詐欺/不實/明知重過失），完全無補償。',
      '⑥ 廢止補償只限於 §123 第4款（事實變更）及第5款（防止公益重大危害）。',
      '⑦ 時效：撤銷為「知悉起2年」；廢止為「原因發生後2年」。'
    ]
  },

  'CRIM_PROC-7': {
    id: 'CRIM_PROC-7',
    subjectId: 'CRIM_PROC',
    chapterNo: 7,
    title: '傳聞法則與傳聞例外體系（§159 ~ §159-5）',
    frequency: 'SUPER_HIGH',
    frequencyStars: 5,
    masteryPercentage: 54,
    masteryState: 'WEAKNESS',
    coreConcept: '被告以外之人於審判外之言詞或書面陳述，除法律有規定者外，不得作為證據（§159第1項）。傳聞法則旨在保障被告之反對詰問權。其例外體系包括：§159-1（審判外向法官/檢察官陳述）、§159-2（警詢不一致之例外）、§159-3（傳聞必要性例外）、§159-4（特信性文書）、§159-5（當事人同意之擬制例外）。',
    examFrequencyDesc: '★★★★★ 每年刑事法卷必考 3~5 題，常與第158條之3（具結義務）及大法官釋字第582號、憲判字第8號合體出題。',
    importantLaws: [
      {
        lawName: '刑事訴訟法',
        articleNo: '第 159 條',
        keyClause: '被告以外之人於審判外之言詞或書面陳述，除法律有規定者外，不得作為證據。',
        coreKeywords: ['被告以外之人', '審判外陳述', '法定例外'],
        plainExplanation: '傳聞證據原則上無證據能力，以落實憲法保障之直接審理與反對詰問權。',
        examFrequency: 'SUPER_HIGH'
      },
      {
        lawName: '刑事訴訟法',
        articleNo: '第 159 條之 1',
        keyClause: '被告以外之人於審判外向法官所為之陳述，得為證據。被告以外之人於偵查中向檢察官所為之陳述，除顯有不可信之情況者外，得為證據。',
        coreKeywords: ['向法官陳述絕對有證據能力', '向檢察官陳述相對有證據能力', '顯有不可信之情況'],
        plainExplanation: '向法官陳述具絕對特信性；向檢察官陳述除「顯有不可信」外，原則有證據能力，但必須依法具結（§158-3）。',
        examFrequency: 'SUPER_HIGH'
      },
      {
        lawName: '刑事訴訟法',
        articleNo: '第 159 條之 2',
        keyClause: '被告以外之人於司法警察官或司法警察調查中所為之陳述，與審判中不符時，其先前之陳述具有較可信之特別情況，且為證明犯罪事實存否所必要者，得為證據。',
        coreKeywords: ['與審判中不符', '較可信之特別情況', '證明犯罪事實必要性'],
        plainExplanation: '警詢陳述只有在「前後不一致」＋「警詢具特信性」＋「具必要性」時才能例外作為證據。',
        examFrequency: 'SUPER_HIGH'
      },
      {
        lawName: '刑事訴訟法',
        articleNo: '第 159 條之 5',
        keyClause: '被告以外之人於審判外之陳述，雖不符前四條之規定，而經當事人於審判程序同意作為證據，法院審酌該言詞陳述或書面陳述作成時之情況，認為適當者，亦得為證據。當事人、代理人或辯護人於法院調查證據時，知有第一百五十九條第一項不得為證據之情形，而未於言詞辯論終結前聲明異議者，視為已有前項之同意。',
        coreKeywords: ['當事人同意', '法院審酌適當', '知情未於言詞辯論終結前聲明異議視為同意'],
        plainExplanation: '傳聞證據經當事人明示同意，或知情而未在言詞辯論終結前異議者，視為同意，但仍需經法院審查是否「適當」。',
        examFrequency: 'SUPER_HIGH'
      }
    ],
    barExamTestingStyle: [
      '共同被告於偵查中以「被告」身分供述，未命具結，能否依§159-1第2項作為同案其他被告之不利證據？（答：不得，違反§158-3應具結而未具結之規定，無證據能力）。',
      '測驗§159-2之「先前警詢陳述」與審判中陳述「完全相符」時，該警詢陳述是否有證據能力？（答：無證據能力，因為既已相符，即欠缺例外採用傳聞之必要性）。',
      '測驗§159-5擬制同意之消滅時點：辯護人於「準備程序」未異議，但在「審判期日言詞辯論終結前」及時提出異議，擬制同意是否依然成立？（答：不成立，只要在言詞辯論終結前異議皆可阻斷擬制）。'
    ],
    commonTraps: [
      '⚠️ 陷阱一：誤以為只要檢察官前陳述一律有證據能力 -> 忽略若未依法具結（刑訴§158-3），絕對無證據能力！',
      '⚠️ 陷阱二：誤以為當事人雙方同意傳聞，法官就「必須」採用 -> 忽略§159-5仍有「法院審酌認為適當者」之裁量門檻。',
      '⚠️ 陷阱三：警察機關自製之「刑案現場測繪圖」與「行車紀錄器翻拍相片」誤當傳聞 -> 現場照片與物證之衍生相片為非供述證據或機械性紀錄，無傳聞法則之適用。'
    ],
    confusionComparisons: {
      title: '刑事訴訟法 傳聞例外五大條文條款關鍵差異',
      conceptAName: '§159-1 向法官/檢察官陳述',
      conceptBName: '§159-2 司法警察調查中陳述 (警詢)',
      rows: [
        {
          dimension: '陳述對象與公信力',
          conceptA: '法官（絕對可信）或檢察官（具結後原則可信）',
          conceptB: '司法警察官或司法警察（原則不可信，嚴格例外）'
        },
        {
          dimension: '與審判中陳述之關係',
          conceptA: '不論審判中陳述是否相符或證人是否到庭皆可適用',
          conceptB: '限於「與審判中不符」時方能啟動'
        },
        {
          dimension: '可信度舉證責任',
          conceptA: '檢察官前供述：由反對之一方舉證有「顯不可信情況」',
          conceptB: '警詢供述：由主張有證據能力之一方舉證具「較可信之特別情況」'
        },
        {
          dimension: '必要性要件',
          conceptA: '法條無明文必要性限制',
          conceptB: '法文明定須「為證明犯罪事實存否所必要」'
        }
      ]
    },
    importantCases: [
      {
        court: '憲法法庭判決',
        caseNo: '111 年憲判字第 8 號判決',
        date: '2022-05-20',
        summary: '刑事訴訟法第 159 條之 3 規定，未賦予被告就審判外陳述實質詰問之機會，如該未經詰問之證人陳述為法院認定被告有罪之「唯一或主要證據」，對被告受憲法保障之防禦權與公平審判原則構成侵害。',
        sourceUrl: 'https://cons.judicial.gov.tw',
        isVerified: true
      },
      {
        court: '司法院大法官釋字',
        caseNo: '釋字第 582 號解釋',
        date: '2004-07-23',
        summary: '共同被告對其他共同被告之案件而言，實質上為證人，其於審判外之陳述，須依人證調查程序具結並接受詰問，方得作為不利於其他共同被告之認定依據。',
        sourceUrl: 'https://cons.judicial.gov.tw',
        isVerified: true
      }
    ],
    historicalTrends: [
      '歷屆第一試高頻模式：題幹必設計「同案共犯甲在警局指認乙，於審判中保持緘默或翻供」，測驗§159-2與§159-3之適用順序與釋字582號意旨。'
    ],
    oneMinuteSummary: [
      '① 傳聞原則排除（§159 I），目的在保障反對詰問權。',
      '② 向法官說：得為證據；向檢察官說：除顯不可信外得為證據（須具結）。',
      '③ 警詢陳述：前後不符 ＋ 較可信特別情況 ＋ 證明必要性（§159-2）。',
      '④ 證人死亡/失蹤/心神喪失/滯留國外：具特信性 ＋ 必要性（§159-3）。',
      '⑤ 當事人同意或知情未於言詞辯論終結前異議 ＋ 法院認適當（§159-5）。',
      '⑥ 機械錄影、現場照片非傳聞，不適用§159。'
    ]
  }
};

export const SAMPLE_QUESTIONS: Question[] = [
  // 113 年最新真題 (最新年度 2024)
  {
    id: '113-BAR-CONST-02',
    sourceType: 'OFFICIAL_EXAM',
    subjectId: 'CONST',
    chapterId: 'CONST-8',
    chapterNo: 8,
    chapterTitle: '憲法訴訟法：法規範憲法審查與裁判審查',
    prompt: '關於憲法訴訟法所定「裁判憲法審查」及憲法法庭判決效力，下列敘述何者正確？',
    options: [
      { label: 'A', text: '人民就其依法定程序用盡審級救濟之確定終局裁判，僅得聲請法規範憲法審查，不得直接就裁判本身宣告違憲聲請審查' },
      { label: 'B', text: '憲法法庭宣告確定終局裁判違憲者，應廢棄該裁判，並發回管轄法院審理' },
      { label: 'C', text: '確定終局裁判所適用之法規經憲法法庭宣告違憲者，該裁判當然直接失去法律效力，受判決人無須再提起再審' },
      { label: 'D', text: '憲法法庭判決宣告裁判違憲之效力，原則上一律溯及既往自該裁判確定之日起無效' }
    ],
    correctAnswer: 'B',
    optionExplanations: {
      A: {
        isCorrect: false,
        reason: '依憲法訴訟法第 59 條第 1 項規定，人民就其依法定程序用盡審級救濟之確定終局裁判，認有牴觸憲法者，得聲請憲法法庭為宣告違憲之判決。此即裁判憲法審查新制。選項稱不得直接就裁判聲請係屬舊制大法官審理法時期規範。',
        trapType: '混淆憲法訴訟法新制與大法官審理法舊制'
      },
      B: {
        isCorrect: true,
        reason: '依憲法訴訟法第 62 條第 1 項規定，憲法法庭認人民之聲請有理由者，應於判決主文宣告該確定終局裁判違憲，並廢棄該裁判，發回管轄法院。完全符合法條明文。',
        trapType: '正解無陷阱'
      },
      C: {
        isCorrect: false,
        reason: '依憲法訴訟法第 64 條第 1 項，法規範宣告違憲時，聲請人得依各該訴訟法規定提起再審之訴或聲請非常上訴，並非確定終局裁判當然直接失效。',
        trapType: '誤認判決當然自動失其效力而免除再審程序'
      },
      D: {
        isCorrect: false,
        reason: '裁判憲法審查係依憲法訴訟法廢棄並發回管轄法院重審，並非抽象溯及當然無效。',
        trapType: '混淆發回管轄法院與當然自始無效之法律效果'
      }
    },
    tags: ['#憲法訴訟法', '#裁判憲法審查', '#廢棄發回', '#113最新考點'],
    difficulty: 'HARD',
    relatedLaws: [
      { lawName: '憲法訴訟法', articleNo: '第 59 條' },
      { lawName: '憲法訴訟法', articleNo: '第 62 條' },
      { lawName: '憲法訴訟法', articleNo: '第 64 條' }
    ],
    relatedCases: [
      {
        court: '憲法法庭判決',
        caseNo: '111 年憲判字第 8 號判決',
        summary: '憲法法庭宣告確定終局裁判牴觸憲法並予廢棄發回管轄法院。',
        isVerified: true
      }
    ],
    examYear: '113',
    examSession: '專技高考律師第一試',
    questionNo: 2,
    verifiedDate: '2024-08-10',
    sourceCitation: '考選部 113 年專門職業及技術人員高等考試律師第一試 綜合法學(一)第2題',
    officialCorrectRate: 58.6
  },
  {
    id: '113-BAR-ADMIN-20',
    sourceType: 'OFFICIAL_EXAM',
    subjectId: 'ADMIN',
    chapterId: 'ADMIN-3',
    chapterNo: 3,
    chapterTitle: '行政處分之成立、瑕疵與廢止撤銷',
    prompt: '關於行政程序法第 123 條合法授益行政處分之「廢止」，下列敘述何者正確？',
    options: [
      { label: 'A', text: '合法授益處分之廢止，行政機關基於行政主導原則得隨時依裁量為之，不受任何法定事由之限制' },
      { label: 'B', text: '附負擔之行政處分，受益人未履行該負擔者，原處分機關得廢止該處分，且該處分得溯及既往失其效力' },
      { label: 'C', text: '因行政處分所依據之法規事後發生變更而廢止處分者，原處分機關一律無須補償受益人之財產損失' },
      { label: 'D', text: '合法授益處分廢止權之行使，不受任何除斥期間之限制' }
    ],
    correctAnswer: 'B',
    optionExplanations: {
      A: {
        isCorrect: false,
        reason: '依行政程序法第 123 條本文，合法授益處分除法規另有規定外，非有法定五款情形之一者，不得廢止。具有嚴格法定事由限制。',
        trapType: '誤以為合法處分機關可自由任意廢止'
      },
      B: {
        isCorrect: true,
        reason: '依行政程序法第 123 條第 3 款及第 125 條但書規定，附負擔之行政處分受益人未履行負擔而廢止者，得溯及既往失其效力。為廢止向將來失效之法定唯一溯及例外。',
        trapType: '正解無陷阱'
      },
      C: {
        isCorrect: false,
        reason: '依行政程序法第 126 條第 1 項規定，原處分機關依第 123 條第 4 款（法規或事實事後變更）廢止處分者，對受益人遭受之財產損失，應給予合理補償。',
        trapType: '漏看第126條明定第4款法規變更廢止應予信賴補償'
      },
      D: {
        isCorrect: false,
        reason: '依行政程序法第 124 條規定，廢止應自廢止原因發生後 2 年內為之，受 2 年除斥期間限制。',
        trapType: '忽略第124條法定2年除斥期間'
      }
    },
    tags: ['#行政法', '#合法處分廢止', '#未履行負擔溯及失效', '#113最新考點', '#行政程序法§123-§126'],
    difficulty: 'MEDIUM',
    relatedLaws: [
      { lawName: '行政程序法', articleNo: '第 123 條' },
      { lawName: '行政程序法', articleNo: '第 124 條' },
      { lawName: '行政程序法', articleNo: '第 125 條' },
      { lawName: '行政程序法', articleNo: '第 126 條' }
    ],
    relatedCases: [],
    examYear: '113',
    examSession: '專技高考律師第一試',
    questionNo: 20,
    verifiedDate: '2024-08-10',
    sourceCitation: '考選部 113 年專門職業及技術人員高等考試律師第一試 綜合法學(一)第20題',
    officialCorrectRate: 64.2
  },

  // 112 年真題
  {
    id: '112-BAR-ADMIN-18',
    sourceType: 'OFFICIAL_EXAM',
    subjectId: 'ADMIN',
    chapterId: 'ADMIN-3',
    chapterNo: 3,
    chapterTitle: '行政處分之成立、瑕疵與廢止撤銷',
    prompt: '關於行政程序法上「違法授益行政處分之撤銷」，下列敘述何者正確？',
    options: [
      { label: 'A', text: '原處分機關行使撤銷權，不受任何除斥期間之限制，以徹底落實依法行政原則' },
      { label: 'B', text: '受益人縱有對重要事項提供不正確資料致使行政機關依該資料作成處分之情形，其信賴利益仍應受絕對保護' },
      { label: 'C', text: '原處分機關若撤銷違法授益行政處分，對於受益人因信賴該處分所受之財產損失，應給予合理之補償，但受益人有行政程序法第 119 條所列信賴不值得保護之情形者，不在此限' },
      { label: 'D', text: '違法授益行政處分經撤銷後，一律向將來失效，絕對不得溯及既往失其效力' }
    ],
    correctAnswer: 'C',
    optionExplanations: {
      A: {
        isCorrect: false,
        reason: '依行政程序法第 124 條規定，違法行政處分之撤銷權，應自原處分機關或其上級機關知有撤銷原因起 2 年內為之。本選項宣稱不受任何除斥期間限制，違反法條明文。',
        trapType: '忽略第124條法定2年除斥期間'
      },
      B: {
        isCorrect: false,
        reason: '依行政程序法第 119 條第 2 款規定，對重要事項提供不正確資料或為不完全陳述，致使行政機關依該資料或陳述而作成行政處分者，其「信賴不值得保護」，不得主張信賴利益受保障。',
        trapType: '將惡意不法信賴誤當受保護之信賴'
      },
      C: {
        isCorrect: true,
        reason: '行政程序法第 120 條第 1 項明定：「授予利益之違法行政處分經撤銷後，如受益人無前條所列信賴不值得保護之情形，其因信賴該處分致遭受財產上之損失者，為撤銷之機關應給予合理之補償。」本選項文義完全契合法律規定。',
        trapType: '正解無陷阱'
      },
      D: {
        isCorrect: false,
        reason: '依行政程序法第 118 條前段規定，違法行政處分經撤銷後，原則上「溯及既往失其效力」。本選項宣稱一律向將來失效，顛倒了原則與例外。',
        trapType: '將撤銷原則溯及既往失效顛倒為向將來失效'
      }
    },
    tags: ['#行政處分', '#信賴保護', '#除斥期間', '#高頻考點', '#行政程序法§117-§124'],
    difficulty: 'MEDIUM',
    relatedLaws: [
      { lawName: '行政程序法', articleNo: '第 117 條' },
      { lawName: '行政程序法', articleNo: '第 118 條' },
      { lawName: '行政程序法', articleNo: '第 119 條' },
      { lawName: '行政程序法', articleNo: '第 120 條' },
      { lawName: '行政程序法', articleNo: '第 124 條' }
    ],
    relatedCases: [
      {
        court: '最高行政法院',
        caseNo: '102年11月份第1次庭長法官聯席會議',
        summary: '知有撤銷原因係指確實知曉，自確實知曉起算2年除斥期間。',
        isVerified: true
      }
    ],
    examYear: '112',
    examSession: '專技高考律師第一試',
    questionNo: 18,
    verifiedDate: '2024-05-01',
    sourceCitation: '考選部 112 年專門職業及技術人員高等考試律師第一試試題 綜合法學(一)第18題',
    officialCorrectRate: 68.4
  },
  {
    id: '112-BAR-CRIMPROC-32',
    sourceType: 'OFFICIAL_EXAM',
    subjectId: 'CRIM_PROC',
    chapterId: 'CRIM_PROC-7',
    chapterNo: 7,
    chapterTitle: '傳聞法則與傳聞例外體系',
    prompt: '關於刑事訴訟法上「傳聞法則及其例外」，下列敘述何者正確？',
    options: [
      { label: 'A', text: '被告以外之人於審判外向司法警察所為之陳述，只要與審判中之陳述相符，即可依刑事訴訟法第 159 條之 2 例外取得證據能力' },
      { label: 'B', text: '共同被告在偵查中以共同被告身分向檢察官所為不利於其他被告之陳述，縱檢察官未命其以證人身分具結，該陳述仍得依第 159 條之 1 第 2 項作為認定其他被告有罪之證據' },
      { label: 'C', text: '被告以外之人於審判外之陳述，雖不符傳聞例外之規定，但當事人知有不得為證據之情形而未於言詞辯論終結前聲明異議者，視為已有同意，法院於審酌作成時之情況認適當者，得為證據' },
      { label: 'D', text: '只要當事人雙方明示同意將審判外傳聞證據作為證據，法院即受拘束，必須採為判決之基礎，不得依職權審酌是否適當' }
    ],
    correctAnswer: 'C',
    optionExplanations: {
      A: {
        isCorrect: false,
        reason: '刑事訴訟法第 159 條之 2 規定，必須警詢陳述「與審判中不符」，且具有「較可信之特別情況」及「為證明犯罪事實存否所必要」時，方例外具有證據能力。若陳述完全相符，並無例外採用傳聞證據之必要。',
        trapType: '漏看第159條之2「與審判中不符」之核心要件'
      },
      B: {
        isCorrect: false,
        reason: '依司法院釋字第 582 號解釋及刑事訴訟法第 158 條之 3 規定，共同被告對其他被告而言實質上為證人，依法應具結。未依法命其具結之陳述，不得作為不利於其他被告之證據，不能逕依第 159 條之 1 第 2 項採納。',
        trapType: '忽略第158條之3具結要件與釋字第582號意旨'
      },
      C: {
        isCorrect: true,
        reason: '刑事訴訟法第 159 條之 5 第 2 項規定，知有不得為證據之情形而未於言詞辯論終結前聲明異議者，視為已有同條第 1 項之同意；且第 1 項明定法院審酌作成時之情況認為適當者，得為證據。完全符合法條。',
        trapType: '正解無陷阱'
      },
      D: {
        isCorrect: false,
        reason: '刑事訴訟法第 159 條之 5 第 1 項明定「法院審酌該言詞陳述或書面陳述作成時之情況，認為適當者，亦得為證據」。縱使當事人同意，法院仍有適當性審查權，並不受當事人完全拘束。',
        trapType: '誤以為當事人處分權可排除法院自由心證適當性審查'
      }
    },
    tags: ['#刑事訴訟法', '#傳聞法則', '#擬制同意', '#具結義務', '#高頻考點', '#刑訴§159-§159-5'],
    difficulty: 'HARD',
    relatedLaws: [
      { lawName: '刑事訴訟法', articleNo: '第 158 條之 3' },
      { lawName: '刑事訴訟法', articleNo: '第 159 條之 1' },
      { lawName: '刑事訴訟法', articleNo: '第 159 條之 2' },
      { lawName: '刑事訴訟法', articleNo: '第 159 條之 5' }
    ],
    relatedCases: [
      {
        court: '司法院大法官釋字',
        caseNo: '釋字第 582 號解釋',
        summary: '共同被告對他人案件為證人，審判外陳述須具結與詰問。',
        isVerified: true
      },
      {
        court: '憲法法庭判決',
        caseNo: '111年憲判字第8號判決',
        summary: '保障反對詰問權為公平審判核心，傳聞例外不得作為唯一或主要有罪證據。',
        isVerified: true
      }
    ],
    examYear: '112',
    examSession: '專技高考律師第一試',
    questionNo: 32,
    verifiedDate: '2024-05-01',
    sourceCitation: '考選部 112 年專門職業及技術人員高等考試律師第一試試題 綜合法學(一)第32題',
    officialCorrectRate: 51.2
  },

  // 111 年真題
  {
    id: '111-BAR-CIVIL-09',
    sourceType: 'OFFICIAL_EXAM',
    subjectId: 'CIVIL',
    chapterId: 'CIVIL-3',
    chapterNo: 3,
    chapterTitle: '代理（無權代理與表見代理）',
    prompt: '關於民法上「表見代理」之規定，下列敘述何者正確？',
    options: [
      { label: 'A', text: '本人由自己之行為表示以代理權授與他人者，縱第三人明知他人無代理權，本人仍應對第三人負授權人之責任' },
      { label: 'B', text: '本人知他人表示為其代理人而不為反對之表示者，對於善意無過失之相對人，應負授權人之責任' },
      { label: 'C', text: '表見代理之法律效果為代理行為直接無效，相對人僅得請求損害賠償' },
      { label: 'D', text: '本人將印鑑章交付他人保管，他人擅自以本人名義簽訂保證契約，一律當然構成表見代理' }
    ],
    correctAnswer: 'B',
    optionExplanations: {
      A: {
        isCorrect: false,
        reason: '依民法第 169 條但書規定，第三人明知其無代理權或可得而知者，本人不負授權人責任。保護對象僅限於善意無過失之第三人。',
        trapType: '漏看民法第169條但書善意要件'
      },
      B: {
        isCorrect: true,
        reason: '民法第 169 條本文規定：「由自己之行為表示以代理權授與他人，或知他人表示為其代理人而不為反對之表示者，對於第三人應負授權人之責任。」符合容忍授權型表見代理要件。',
        trapType: '正解無陷阱'
      },
      C: {
        isCorrect: false,
        reason: '表見代理之法律效果為「本人負授權人責任」，亦即使該法律行為對本人直接發生效力，而非直接無效。',
        trapType: '混淆無權代理與表見代理之法律效果'
      },
      D: {
        isCorrect: false,
        reason: '依最高法院 70 年台上字第 657 號判例意旨，單純將印鑑章交付他人保管，非當然成立表見代理，仍須視本人是否由自己之行為表示以代理權授與他人等具體客觀情事而定。',
        trapType: '忽略最高法院關於單純交付印鑑章不構成表見代理之重要實務見解'
      }
    },
    tags: ['#民法總則', '#表見代理', '#民法§169', '#印鑑章實務', '#高頻考點'],
    difficulty: 'MEDIUM',
    relatedLaws: [
      { lawName: '民法', articleNo: '第 169 條' },
      { lawName: '民法', articleNo: '第 170 條' }
    ],
    relatedCases: [
      {
        court: '最高法院',
        caseNo: '70 年台上字第 657 號判例',
        summary: '單純交付印章，不能遽認成立表見代理。',
        isVerified: true
      }
    ],
    examYear: '111',
    examSession: '專技高考律師第一試',
    questionNo: 9,
    verifiedDate: '2024-05-01',
    sourceCitation: '考選部 111 年專門職業及技術人員高等考試律師第一試試題 綜合法學(二)第9題',
    officialCorrectRate: 63.8
  },
  {
    id: '111-BAR-CORP-24',
    sourceType: 'OFFICIAL_EXAM',
    subjectId: 'CORP',
    chapterId: 'CORP-3',
    chapterNo: 3,
    chapterTitle: '董事會權限、董事忠實義務與注意義務',
    prompt: '關於公司法第 23 條所定「公司負責人之忠實義務與善良管理人注意義務」，下列敘述何者正確？',
    options: [
      { label: 'A', text: '公司負責人若違反忠實義務為自己或他人為該行為時，股東會得決議將該行為之所得視為公司之所得，此項請求權自所得產生後 5 年間不行使而消滅' },
      { label: 'B', text: '公司負責人違反法令致他人受損害時，僅由負責人個人負擔賠償責任，公司完全不負連帶責任' },
      { label: 'C', text: '公司負責人應忠實執行業務並盡善良管理人之注意義務，如有違反致公司受有損害，負損害賠償責任；其為自己或他人為該行為致公司受損害者，股東會得以決議，將該行為之所得視為公司之所得，但自所得產生後逾 1 年不行使而消滅' },
      { label: 'D', text: '行使公司負責人歸入權之決議，必須由董事會依特別決議行使之，股東會無權決議' }
    ],
    correctAnswer: 'C',
    optionExplanations: {
      A: {
        isCorrect: false,
        reason: '依公司法第 23 條第 3 項但書規定，所得視為公司所得之請求權（歸入權），自所得產生後「逾 1 年」不行使而消滅，並非 5 年。',
        trapType: '篡改除斥期間年限 (1年誤記為5年)'
      },
      B: {
        isCorrect: false,
        reason: '依公司法第 23 條第 2 項規定，公司負責人對於公司業務之執行，如有違反法令致他人受有損害時，對他人應與公司負「連帶賠償之責」。公司應負連帶責任。',
        trapType: '排除公司法定連帶賠償責任'
      },
      C: {
        isCorrect: true,
        reason: '完全符合公司法第 23 條第 1 項及第 3 項本文與但書之完整文義規範。',
        trapType: '正解無陷阱'
      },
      D: {
        isCorrect: false,
        reason: '依公司法第 23 條第 3 項，行使歸入權係由「股東會」以決議行之，而非董事會。',
        trapType: '機關決議權限錯置（股東會誤寫為董事會）'
      }
    },
    tags: ['#公司法', '#公司負責人', '#忠實義務', '#歸入權', '#公司法§23', '#高頻考點'],
    difficulty: 'MEDIUM',
    relatedLaws: [
      { lawName: '公司法', articleNo: '第 23 條' },
      { lawName: '公司法', articleNo: '第 193 條' }
    ],
    relatedCases: [],
    examYear: '111',
    examSession: '專技高考律師第一試',
    questionNo: 24,
    verifiedDate: '2024-05-01',
    sourceCitation: '考選部 111 年專門職業及技術人員高等考試律師第一試試題 綜合法學(二)第24題',
    officialCorrectRate: 72.1
  },

  // 110 年真題
  {
    id: '110-BAR-SEC-62',
    sourceType: 'OFFICIAL_EXAM',
    subjectId: 'SEC_REG',
    chapterId: 'CORP-3',
    chapterNo: 3,
    chapterTitle: '證券交易法：內線交易與重大消息明確時點',
    prompt: '依證券交易法第 157 條之 1 關於「禁止內線交易」之規定，下列敘述何者正確？',
    options: [
      { label: 'A', text: '內部人獲悉發行股票公司有重大影響其股票價格之消息時，只要在消息明確後即可立刻自行買賣該公司股票' },
      { label: 'B', text: '重大影響其股票價格之消息，在該消息明確後，未公開前或公開後 18 小時內，不得對該公司之上市或在證券商營業處所買賣之股票或其他具有股權性質之有價證券買入或賣出' },
      { label: 'C', text: '喪失內部人身分未滿 1 年者，不受證券交易法內線交易禁止規定之規範' },
      { label: 'D', text: '基於職業或控制關係獲悉消息之人，將消息告知他人，若自己未實際買賣股票，一律完全不負任何法律責任' }
    ],
    correctAnswer: 'B',
    optionExplanations: {
      A: {
        isCorrect: false,
        reason: '依證券交易法第 157 條之 1 第 1 項本文，在消息明確後，未公開前或「公開後 18 小時內」，不得買入或賣出該公司股票。',
        trapType: '忽略重大消息公開後18小時之沉澱期限制'
      },
      B: {
        isCorrect: true,
        reason: '證券交易法第 157 條之 1 第 1 項明定重大消息明確後，未公開前或「公開後 18 小時內」為禁止交易之核心期間。文義完全正確。',
        trapType: '正解無陷阱'
      },
      C: {
        isCorrect: false,
        reason: '依證券交易法第 157 條之 1 第 1 項第 4 款，喪失內部人身分「未滿 6 個月者」，仍屬受規範之內部人主體。',
        trapType: '篡改法定年限（6個月誤寫為1年）'
      },
      D: {
        isCorrect: false,
        reason: '依證券交易法第 157 條之 1 第 6 項，提供消息之人若與受領消息買賣者有共同謀意，可能構成共同正犯或民事連帶賠償責任。',
        trapType: '免除消息傳遞人之共犯與民事連帶賠償責任'
      }
    },
    tags: ['#證券交易法', '#內線交易', '#18小時沉澱期', '#重大消息', '#證交法§157-1'],
    difficulty: 'HARD',
    relatedLaws: [
      { lawName: '證券交易法', articleNo: '第 157 條之 1' }
    ],
    relatedCases: [],
    examYear: '110',
    examSession: '專技高考律師第一試',
    questionNo: 62,
    verifiedDate: '2024-05-01',
    sourceCitation: '考選部 110 年專門職業及技術人員高等考試律師第一試 綜合法學(二)第62題',
    officialCorrectRate: 59.4
  },

  // 109 年真題
  {
    id: '109-BAR-CRIM-19',
    sourceType: 'OFFICIAL_EXAM',
    subjectId: 'CRIM',
    chapterId: 'CRIM-5',
    chapterNo: 5,
    chapterTitle: '正犯與共犯（共同正犯之犯意聯絡與行為分擔）',
    prompt: '甲、乙、丙三人共同基於意圖為自己不法所有之犯意聯絡，推由甲、乙二人侵入他人住宅行竊，丙則在屋外把風接應。下列敘述何者正確？',
    options: [
      { label: 'A', text: '丙僅在屋外把風，未實行刑法加重竊盜罪構成要件行為，僅能論以竊盜罪之幫助犯' },
      { label: 'B', text: '丙與甲、乙有共同之犯意聯絡，且在場把風分擔重要職責，依刑法第 28 條規定，丙仍成立加重竊盜罪之共同正犯' },
      { label: 'C', text: '若甲於屋內擅自臨時起意放火燒燬該住宅，丙亦當然成立放火罪之共同正犯' },
      { label: 'D', text: '共同正犯之成立，以所有參與人均必須進入現場實施構成要件行為為必要' }
    ],
    correctAnswer: 'B',
    optionExplanations: {
      A: {
        isCorrect: false,
        reason: '司法院釋字第 109 號解釋及最高法院判例意旨：以自己共同犯罪之意思，在犯罪現場外把風以助成犯罪實現者，為共同正犯，非單純幫助犯。',
        trapType: '將把風之共同正犯誤認為幫助犯'
      },
      B: {
        isCorrect: true,
        reason: '依刑法第 28 條及大法官釋字第 109 號解釋，以自己犯罪之意思參與犯意聯絡，且為把風之行為分擔者，均屬共同正犯。',
        trapType: '正解無陷阱'
      },
      C: {
        isCorrect: false,
        reason: '甲臨時起意放火屬於逾越原共同竊盜犯意聯絡範圍之「共犯過剩」，丙對放火罪無犯意聯絡與行為分擔，不負放火罪之共同正犯責任。',
        trapType: '忽略共犯過剩不歸責於其他共犯之原則'
      },
      D: {
        isCorrect: false,
        reason: '共同正犯並不以全體均實行構成要件全部行為為必要，一部行為分擔或共謀共同正犯皆可成立。',
        trapType: '限制共同正犯必須全員實行全部構成要件行為'
      }
    },
    tags: ['#刑法總則', '#共同正犯', '#把風', '#共犯過剩', '#釋字第109號', '#刑法§28'],
    difficulty: 'MEDIUM',
    relatedLaws: [
      { lawName: '刑法', articleNo: '第 28 條' },
      { lawName: '刑法', articleNo: '第 321 條' }
    ],
    relatedCases: [
      {
        court: '司法院大法官釋字',
        caseNo: '釋字第 109 號解釋',
        summary: '以自己犯罪意思參與犯意聯絡或實施要件外行為，均為正犯。',
        isVerified: true
      }
    ],
    examYear: '109',
    examSession: '專技高考律師第一試',
    questionNo: 19,
    verifiedDate: '2024-05-01',
    sourceCitation: '考選部 109 年專門職業及技術人員高等考試律師第一試 綜合法學(一)第19題',
    officialCorrectRate: 76.5
  }
];

export const COMPARISONS_DATA = [
  {
    id: 'comp-1',
    title: '行政處分 vs 行政契約 核心爭點全剖析',
    subject: '行政法',
    tag: '#公法爭點 #超高頻',
    table: [
      { dimension: '行為本質', conceptA: '行政處分：機關單方公權力行使，直接對外發生法律效果', conceptB: '行政契約：雙方意思表示合致而成立之公法上法律關係' },
      { dimension: '救濟途徑', conceptA: '訴願 -> 行政訴訟（撤銷訴訟 / 課予義務訴訟）', conceptB: '免經訴願程序，直接提起行政訴訟（一般給付訴訟）' },
      { dimension: '強制執行', conceptA: '依行政執行法直接由行政機關移送行政執行分署執行', conceptB: '須契約約定自願接受執行，並經主管機關認可，始得為執行名義' },
      { dimension: '無效事由', conceptA: '行政程序法第 111 條重大明顯瑕疵等 7 款', conceptB: '行政程序法第 141 條、第 142 條及準用民法規定' }
    ]
  },
  {
    id: 'comp-2',
    title: '違法處分撤銷 vs 合法處分廢止',
    subject: '行政法',
    tag: '#行政程序法 #每年必考',
    table: [
      { dimension: '處分成立時性質', conceptA: '自始違法 (行政程序法§117)', conceptB: '原本合法 (行政程序法§123)' },
      { dimension: '時效除斥期間', conceptA: '知有撤銷原因起 2 年內 (§124)', conceptB: '廢止原因發生後 2 年內 (§124)' },
      { dimension: '效力溯及與否', conceptA: '原則溯及既往失效 (§118)', conceptB: '原則向將來失效 (§125)，未履行負擔廢止例外得溯及' },
      { dimension: '補償要件', conceptA: '無§119惡意三款者享§120信賴補償', conceptB: '僅限§123第4款(法規事實變更)與第5款(重大公益危害)享§126補償' }
    ]
  },
  {
    id: 'comp-3',
    title: '無權處分 (民§118) vs 善意受讓 (民§801/§948)',
    subject: '民法',
    tag: '#物權與總則 #陷阱超多',
    table: [
      { dimension: '行為人身分', conceptA: '無權利人以「自己名義」處分他人之物', conceptB: '無權利人以「自己名義」處分，但受讓人為善意無過失' },
      { dimension: '法律效果', conceptA: '效力未定，經真正權利人承認始生效力', conceptB: '受讓人即時取得物權，原權利人喪失所有權' },
      { dimension: '受讓人善意保護', conceptA: '受讓人縱為善意，在取得占有前仍屬效力未定', conceptB: '受讓人受即時取得保護，占有改定除外' }
    ]
  },
  {
    id: 'comp-4',
    title: '中止犯 (刑§27) vs 障礙未遂 (刑§25)',
    subject: '刑法',
    tag: '#刑法總則 #必考五顆星',
    table: [
      { dimension: '放棄動機', conceptA: '「因己意」中止或防止結果發生（主觀自願心生悔悟）', conceptB: '因「外界障礙」或非出於真意之障礙而未得逞' },
      { dimension: '法律效果', conceptA: '「必減」或「免除」其刑（刑法§27第1項）', conceptB: '「得減」輕其刑（刑法§25第2項）' },
      { dimension: '共犯中止要件', conceptA: '須積極切斷因果關係，或防止結果發生 (刑§27第2項)', conceptB: '個別依其參與情節與結果歸責論處' }
    ]
  }
];

export const TIMELINE_DATA = [
  {
    id: 'timeline-crimproc',
    title: '刑事訴訟程序全生命週期動態時間軸',
    subject: '刑事訴訟法',
    steps: [
      { step: 1, name: '犯罪發生與偵查發動', desc: '告訴、告發、自首、相驗或司法警察知有犯罪嫌疑 (刑訴§228)', articles: '§228~§245' },
      { step: 2, name: '強制處分手段', desc: '傳喚、拘提、逮捕、搜索扣押（令狀原則與例外§130/§131）、聲請羈押審查 (§93)', articles: '§71~§153' },
      { step: 3, name: '偵查終結處分', desc: '提起公訴 (§251)、不起訴處分 (§252/§253)、緩起訴處分 (§253-1) 與再議交付審判/准許提起自訴救濟', articles: '§251~§260' },
      { step: 4, name: '第一審準備程序', desc: '確認起訴範圍、管轄權、證據能力爭執、傳聞排除協商、聲請調查證據 (§273)', articles: '§273~§279' },
      { step: 5, name: '審判期日與交互詰問', desc: '朗讀案由、權利告知、開宗明義、交互詰問證人（主詰問/反詰問）、辯論事實與法律、最後陳述', articles: '§281~§290' },
      { step: 6, name: '第一審判決宣示', desc: '實體判決（有罪科刑/免刑/無罪）或形式判決（不受理/免訴/管轄錯誤）', articles: '§299~§310' },
      { step: 7, name: '通常上訴救濟', desc: '第二審上訴（上訴期間20日，自送達起算）與第三審法律審上訴（嚴格限制）', articles: '§344~§402' },
      { step: 8, name: '非常救濟途徑', desc: '為受判決人利益之再審（新事實新證據 §420）與檢察總長之非常上訴（判決違背法令 §441）', articles: '§420~§455' }
    ]
  }
];

export const CLOZE_TESTS: ClozeTest[] = [
  {
    id: 'cloze-admin-4',
    subjectId: 'ADMIN',
    lawName: '行政程序法',
    articleNo: '第 4 條',
    originalText: '行政行為應受法律及一般法律原則之拘束。',
    clozeTemplate: '行政行為應受 {{1}} 及 {{2}} 之拘束。',
    blanks: [
      { index: 1, answer: '法律', hint: '依法行政原則之法律保留與法律優位' },
      { index: 2, answer: '一般法律原則', hint: '比例原則、誠信原則、平等原則等' }
    ]
  },
  {
    id: 'cloze-admin-117',
    subjectId: 'ADMIN',
    lawName: '行政程序法',
    articleNo: '第 117 條',
    originalText: '違法行政處分於法定救濟期間經過後，原處分機關得依職權為全部或一部之撤銷；其上級機關，亦得為之。',
    clozeTemplate: '違法行政處分於法定救濟期間經過後，{{1}} 得依職權為全部或一部之撤銷；其 {{2}}，亦得為之。',
    blanks: [
      { index: 1, answer: '原處分機關', hint: '作成處分之機關' },
      { index: 2, answer: '上級機關', hint: '具監督權限之機關' }
    ]
  },
  {
    id: 'cloze-crim-27',
    subjectId: 'CRIM',
    lawName: '刑法',
    articleNo: '第 27 條第 1 項',
    originalText: '已著手於犯罪行為之實行，而因己意中止或防止其結果之發生者，減輕或免除其刑。',
    clozeTemplate: '已著手於犯罪行為之實行，而因 {{1}} 中止或防止其結果之發生者，{{2}} 或 {{3}} 其刑。',
    blanks: [
      { index: 1, answer: '己意', hint: '非因外部客觀障礙，而是主觀自願放棄' },
      { index: 2, answer: '減輕', hint: '必減或免除' },
      { index: 3, answer: '免除', hint: '得不科處刑罰' }
    ]
  },
  {
    id: 'cloze-crimproc-159',
    subjectId: 'CRIM_PROC',
    lawName: '刑事訴訟法',
    articleNo: '第 159 條第 1 項',
    originalText: '被告以外之人於審判外之言詞或書面陳述，除法律有規定者外，不得作為證據。',
    clozeTemplate: '{{1}} 於 {{2}} 之言詞或書面陳述，除法律有規定者外，不得作為證據。',
    blanks: [
      { index: 1, answer: '被告以外之人', hint: '包含證人、鑑定人、告訴人、共同被告' },
      { index: 2, answer: '審判外', hint: '警詢、偵訊或法庭外私下談話' }
    ]
  },
  {
    id: 'cloze-corp-23',
    subjectId: 'CORP',
    lawName: '公司法',
    articleNo: '第 23 條第 1 項',
    originalText: '公司負責人應忠實執行業務並盡善良管理人之注意義務，如有違反致公司受有損害者，負損害賠償責任。',
    clozeTemplate: '公司負責人應 {{1}} 執行業務並盡 {{2}} 之注意義務，如有違反致公司受有損害者，負損害賠償責任。',
    blanks: [
      { index: 1, answer: '忠實', hint: '不得有利益衝突或圖謀私利' },
      { index: 2, answer: '善良管理人', hint: '專業注意基準（高於一般人注意義務）' }
    ]
  }
];

export const SEED_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    subjectId: 'ADMIN',
    chapterTitle: '行政處分之撤銷與廢止',
    front: '行政程序法第 124 條規定，違法行政處分之「撤銷權」除斥期間起算點為何？',
    back: '自原處分機關或其上級機關「知有撤銷原因起 2 年內」為之。（最高行政法院 102 年 11 月庭長聯席會議：指「確實知曉」而非僅懷疑）。',
    keyLawArticle: '行政程序法 §124',
    tags: ['#行政法', '#除斥期間', '#必背實務']
  },
  {
    id: 'fc-2',
    subjectId: 'ADMIN',
    chapterTitle: '行政處分之撤銷與廢止',
    front: '合法行政處分廢止後，原則上何時失其效力？哪一種例外情形得「溯及既往」失效？',
    back: '原則上「自廢止日或指定日向將來」失其效力（§125前段）。\n唯一例外：受益人「未履行負擔」而廢止者，得溯及既往失其效力（§125但書）。',
    keyLawArticle: '行政程序法 §125',
    tags: ['#行政法', '#廢止效力', '#陷阱考點']
  },
  {
    id: 'fc-3',
    subjectId: 'CRIM_PROC',
    chapterTitle: '傳聞法則與傳聞例外',
    front: '證人於審判外警詢之陳述，在何種要件下得依刑事訴訟法第 159 條之 2 例外取得證據能力？',
    back: '三大要件缺一不可：\n① 警詢陳述與「審判中陳述不符」\n② 具有「較可信之特別情況」\n③ 該陳述為「證明犯罪事實存否所必要」。',
    keyLawArticle: '刑事訴訟法 §159-2',
    tags: ['#刑事訴訟法', '#傳聞例外', '#高頻五星']
  },
  {
    id: 'fc-4',
    subjectId: 'CIVIL',
    chapterTitle: '代理制度',
    front: '本人單純將印鑑章交付他人保管，他人擅自以本人名義為法律行為，是否當然構成民法第 169 條表見代理？',
    back: '不當然構成！最高法院 70 年台上字第 657 號判例：單純交付印章非即表見代理，仍須本人有由自己行為表示授權之客觀情事。',
    keyLawArticle: '民法 §169',
    tags: ['#民法', '#表見代理', '#判例要旨']
  },
  {
    id: 'fc-5',
    subjectId: 'CORP',
    chapterTitle: '公司負責人義務',
    front: '公司法第 23 條第 3 項歸入權之行使主體為何？除斥期間多長？',
    back: '行使主體為「股東會」（以決議行之，不可由董事會逕行決議）。\n除斥期間為：自所得產生後「逾 1 年」不行使而消滅。',
    keyLawArticle: '公司法 §23 III',
    tags: ['#公司法', '#歸入權', '#易錯時效']
  }
];
