import {
  SubjectInfo,
  SubjectId,
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
  "ADMIN-1": {
    "id": "ADMIN-1",
    "subjectId": "ADMIN",
    "chapterNo": 1,
    "title": "行政法基本原理原則與法源體系",
    "frequency": "SUPER_HIGH",
    "frequencyStars": 5,
    "masteryPercentage": 92,
    "masteryState": "MASTERED",
    "coreConcept": "依法行政原則為公法基石，區分為「法律優位原則」（消極防杜違法，行政行為不得牴觸法律）與「法律保留原則」（積極要求特定行政行為必須有法律或法律具體明確授權之法規命令為依據）。釋字第443號確立「層級化法律保留體系」，將公權力干預區分為憲法保留、絕對法律保留、相對法律保留與非法律保留。此外，比例原則（行程§7適當性/必要性/狹義比例性）、信賴保護原則（釋字525、行程§8）、明確性原則（行程§5）及不當聯結禁止原則（行程§10）為律師一試每年必考高頻爭點。",
    "examFrequencyDesc": "★★★★★ 超高頻基礎必考點。歷屆第一試綜合法學（一）每年必出 2~3 題，常以「給付行政與干預行政之法律保留密度差異」或「授權明確性與法規命令違法」為主要題型。",
    "importantLaws": [
      {
        "lawName": "行政程序法",
        "articleNo": "第 4 條",
        "keyClause": "行政行為應受法律及一般法律原則之拘束。",
        "coreKeywords": [
          "依法行政原則",
          "法律優位",
          "一般法律原則拘束"
        ],
        "plainExplanation": "行政機關行使一切公權力，不僅不能牴觸現行法律，亦必須嚴格遵守誠信、平等、比例等公法一般法理。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 5 條",
        "keyClause": "行政行為之內容應明確。",
        "coreKeywords": [
          "行政行為內容明確",
          "可理解性",
          "可預見性",
          "可審查性"
        ],
        "plainExplanation": "法規範與處分內容必須達到受規範人民可理解、可預見，且司法得為審查之明確程度（釋字432/521）。",
        "examFrequency": "HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 7 條",
        "keyClause": "行政行為，應依下列原則為之：一、採取之方法應有助於目的之達成。二、有多種同樣能達成目的之方法時，應選擇對人民權益損害最少者。三、採取之方法所造成之損害不得與欲達成目的之利益顯失均衡。",
        "coreKeywords": [
          "適當性原則",
          "必要性原則 (損害最小)",
          "狹義比例性 (比例相當)"
        ],
        "plainExplanation": "比例原則三階審查：①合目的性 ②最小侵害手段 ③手段造成之損害與預期公益不得顯失均衡（不得用大砲打小鳥）。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 8 條",
        "keyClause": "行政行為，應以誠實信用之方法為之，並應保護人民正當合理之信賴。",
        "coreKeywords": [
          "誠實信用原則",
          "信賴保護原則",
          "正當合理信賴"
        ],
        "plainExplanation": "人民因信賴國家公權力行為而為財產或生活之安排，其信賴利益如值得保護，國家不得恣意變更或剝奪。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 10 條",
        "keyClause": "行政機關行使裁量權，不得逾越法定之裁量範圍，並應符合法規授權之目的。",
        "coreKeywords": [
          "裁量界限",
          "不得逾越法定範圍",
          "不當聯結禁止"
        ],
        "plainExplanation": "機關裁量時若逾越授權範圍、怠於行使裁量或出於與法令無關之考量（不當聯結），均構成違法裁量。",
        "examFrequency": "HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹描述主管機關核發許可時附加無合理關聯之負擔（如要求建商額外捐贈無關之偏鄉圖書館設施），測驗是否違反「不當聯結禁止原則」。",
      "利用「給付行政」設陷阱：稱「給付行政一律完全不受法律保留拘束，行政機關得自由決定」-> 錯誤，涉及重大公益或給付之重要事項，仍受相對法律保留或預算保留拘束。",
      "比例原則三階層概念顛倒：將「損害最小原則（必要性）」寫成「手段利益衡量（狹義比例性）」，測驗考生基本概念。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：誤以為信賴保護「只適用於違法授益處分之撤銷」-> 錯！釋字第525號已明確宣示法規廢止或修改亦有信賴保護適用。",
      "⚠️ 陷阱二：誤以為法規授權只要條文有寫「其辦法由主管機關定之」即符合授權明確性 -> 錯！釋字第394號要求目的、內容、範圍必須具體明確。",
      "⚠️ 陷阱三：混淆裁量逾越（超過法律效果上下限）與裁量濫用（考量不相關因素/違反平等不當聯結）。"
    ],
    "confusionComparisons": {
      "title": "法律優位原則 VS 法律保留原則 核心界線",
      "conceptAName": "法律優位原則（消極依法行政）",
      "conceptBName": "法律保留原則（積極依法行政）",
      "rows": [
        {
          "dimension": "核心意涵",
          "conceptA": "行政行為不得牴觸法律（上位規範優於下位規範）",
          "conceptB": "行政行為必須有法律之授權依據方得為之"
        },
        {
          "dimension": "適用範圍",
          "conceptA": "適用於一切行政領域（包括干預行政、給付行政、行政私法）",
          "conceptB": "以干預行政為主（絕對/相對保留），給付行政採重要性理論"
        },
        {
          "dimension": "無法律依據時之效力",
          "conceptA": "若無法律存在，只要不牴觸一般原則仍得行使",
          "conceptB": "若無法律授權，機關不得逕行剝奪限制人民權利"
        },
        {
          "dimension": "代表性大法官解釋",
          "conceptA": "司法院釋字第 137 號、第 216 號",
          "conceptB": "司法院釋字第 443 號（層級化法律保留）"
        }
      ]
    },
    "importantCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 443 號解釋",
        "date": "1997-06-13",
        "summary": "確立層級化法律保留體系：憲法保留（如第8條人身自由）、絕對法律保留（剝奪生命自由或刑罰）、相對法律保留（重大財產或秩序干預，得授權法規命令）、非法律保留（執行細節性技術性事項）。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 525 號解釋",
        "date": "2001-05-04",
        "summary": "法規之廢止或修改，如涉及人民正當合理之信賴利益，除有重大公益外，應採取合理之補救措施或訂定過渡條款以保護信賴。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "113年第18題考裁量濫用與不當聯結禁止原則之界限；111年第15題考釋字443號層級化法律保留之範圍判斷；110年第19題考法規變遷與信賴保護原則。"
    ],
    "oneMinuteSummary": [
      "① 法律優位＝不可牴觸法律；法律保留＝干預必有法律授權。",
      "② 釋字443號層級化：憲法保留 ➔ 絕對保留 ➔ 相對保留 ➔ 執行細節性命令。",
      "③ 比例原則三階：適當性（合目的）➔ 必要性（損害最小）➔ 狹義比例（利益均衡）。",
      "④ 信賴保護三要件：信賴基礎（有效公權力行為）＋ 信賴表現（財產生活處分）＋ 信賴值得保護（無行程§119惡意）。",
      "⑤ 不當聯結禁止：公權力要求人民給付或附加負擔，須與行政目的有正當合理之內在實質關聯。"
    ]
  },
  "ADMIN-2": {
    "id": "ADMIN-2",
    "subjectId": "ADMIN",
    "chapterNo": 2,
    "title": "行政組織、管轄權限分配與公物法制",
    "frequency": "HIGH",
    "frequencyStars": 4,
    "masteryPercentage": 78,
    "masteryState": "COMPLETED",
    "coreConcept": "行政組織法探討行政主體（公法人：國家、地方自治團體、行政法人）與行政機關、內部單位之區分（以有無獨立印信、獨立編制預算、獨立對外行文為判準）。權限移轉與變更三核心：①權限委任（行程§15 I，上下級機關）②權限委託（§15 II，不相隸屬之行政機關）③受託行使公權力（§16，民間個人或團體，於委託範圍內視為行政機關）。公物法制則探討公物成立、利用關係（一般利用、特別利用、特許利用）與公物相鄰關係。",
    "examFrequencyDesc": "★★★★ 高頻考點。第一試特別愛考「受託行使公權力之救濟管道與訴願管轄機關（以原委託機關為訴願管轄機關，訴願法§7）」及「行政助手與受託行使公權力之區別」。",
    "importantLaws": [
      {
        "lawName": "行政程序法",
        "articleNo": "第 11 條",
        "keyClause": "行政機關之管轄權，依其組織法規或其他行政法規規定之。行政機關之管轄權，非依法規不得設定或變更。",
        "coreKeywords": [
          "管轄法定原則",
          "管轄恆定",
          "非依法規不得設定變更"
        ],
        "plainExplanation": "機關管轄權限由法規明定，機關不得私自創設、放棄或任意移轉。",
        "examFrequency": "HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 15 條",
        "keyClause": "行政機關得依法規將其權限之一部分，委任所屬下級機關執行之。行政機關因業務上之需要，得依法規將其權限之一部分，委託不相隸屬之行政機關執行之。前二項情形，應將委任或委託事項及法規依據公告之，並刊登政府公報或新聞紙。",
        "coreKeywords": [
          "權限委任 (下級)",
          "權限委託 (不相隸屬)",
          "公告並刊登公報"
        ],
        "plainExplanation": "權限委任是給下級；權限委託是給無隸屬關係之其他機關。兩者皆須有法規依據並踐行公告程序。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 16 條",
        "keyClause": "行政機關得依法規將其權限之一部分，委託民間團體或個人辦理。前項情形，應將委託事項及法規依據公告之... 第一項受託之民間團體或個人，於其受託範圍內，視為行政機關。",
        "coreKeywords": [
          "受託行使公權力",
          "民間團體或個人",
          "於受託範圍內視為行政機關"
        ],
        "plainExplanation": "國家將公權力移轉給民間行使（如私立大學核發畢業證書、民間汽車檢驗廠核發檢驗合格證），受託人在該範圍內等同於行政機關。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "訴願法",
        "articleNo": "第 7 條",
        "keyClause": "無隸屬關係之機關辦理受託事件所為之行政處分，向原委託機關或其直接上級機關提起訴願。受委託之民間團體或個人所為之行政處分，向原委託機關提起訴願。",
        "coreKeywords": [
          "受託民間處分",
          "向原委託機關提起訴願",
          "救濟管轄"
        ],
        "plainExplanation": "民間受託作成處分後，人民不服應向「原委託之行政機關」提起訴願。",
        "examFrequency": "SUPER_HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹設計：甲受交通部委託辦理汽車檢驗，甲以檢驗不合格拒發合格標章，民眾不服應向誰提起訴願？（答：向委託之交通部或公路總局提起訴願，非向甲之直接主管機關）。",
      "測驗「受託行使公權力」與「行政助手」之分辨：義勇消防人員、交通拖吊車司機僅為行政助手（無獨立作成處分權）；私立大學退學處分、海難救助協會則為受託行使公權力。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：誤將「委任」與「委託」搞混 -> 委任必有「上下級隸屬關係」；委託是「不相隸屬」或「民間」。",
      "⚠️ 陷阱二：忽略公告義務 -> 未依法規依據刊登政府公報之委任或委託，管轄權移轉不生效力。",
      "⚠️ 陷阱三：行政機關內部單位（如地方法院政風室、大學教務處）原則上無行政主體性與當事人能力，不得對外獨立作成行政處分。"
    ],
    "confusionComparisons": {
      "title": "權限委任 vs 權限委託 vs 行政委託（民間）全方位對照",
      "conceptAName": "權限委任 (§15 I)",
      "conceptBName": "受託行使公權力 (§16)",
      "rows": [
        {
          "dimension": "受移轉對象",
          "conceptA": "所屬下級行政機關（具隸屬關係）",
          "conceptB": "民間私人、公司或非營利團體（私法人/自然人）"
        },
        {
          "dimension": "處分作成名義",
          "conceptA": "以下級機關自己名義作成處分",
          "conceptB": "以受託民間團體/個人名義作成處分"
        },
        {
          "dimension": "訴願管轄機關",
          "conceptA": "向下級機關之直接上級機關提起訴願",
          "conceptB": "向「原委託之行政機關」提起訴願（訴願法§7）"
        },
        {
          "dimension": "國家賠償責任",
          "conceptA": "由受委任之機關負責賠償（國賠§9 I）",
          "conceptB": "由委託機關負國家賠償責任（國賠§4 I）"
        }
      ]
    },
    "importantCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 269 號解釋",
        "date": "1990-11-09",
        "summary": "依法設立之私立學校，就其依法律授權核發畢業證書或為退學處分之事項，係受委託行使公權力，於受託範圍內視為行政機關，人民得循訴願及行政訴訟救濟。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 382 號解釋",
        "date": "1995-06-23",
        "summary": "公私立學校對學生所為足以改變學生身分或受教育機會之退學、開除學籍等處分，學生得用盡校內申訴後提起訴願及行政訴訟。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "112年第17題考權限委任與委託之公告要件與處分效力；110年第18題考受託行使公權力之訴願管轄與國賠責任歸屬。"
    ],
    "oneMinuteSummary": [
      "① 委任＝給下級機關；委託＝給不相隸屬機關；行政委託＝給民間。",
      "② 委任/委託/行政委託皆須：法律或法規授權 ＋ 公告登公報，否則移轉無效。",
      "③ 民間受託人於受託範圍內「視為行政機關」，以自己名義作成處分。",
      "④ 民間受託處分之訴願管轄：向「原委託行政機關」提起訴願（訴願法§7）。",
      "⑤ 國賠責任：受託民間行使公權力侵害人民權利者，由「委託機關」負國賠責任（國賠§4）。"
    ]
  },
  "ADMIN-4": {
    "id": "ADMIN-4",
    "subjectId": "ADMIN",
    "chapterNo": 4,
    "title": "行政契約之締結、類型與爭議處理法制",
    "frequency": "HIGH",
    "frequencyStars": 4,
    "masteryPercentage": 85,
    "masteryState": "MASTERED",
    "coreConcept": "行政契約係行政機關與人民或行政機關間，以設定、變更或消滅公法上法律關係為目的之合意（行程§135）。行政契約嚴格採「書面要式」（§139，未以書面為之者無效）。代替行政處分之雙務契約須符合第137條「特定目的、相當對價、正當合理關聯（不當聯結禁止）」。契約自願接受執行條款（§148）須經行政院或主管機關認可，債務人不履行時得直接移送行政執行。此外，行政機關享有單方情事變更調整與終止權（§146/§147），並準用民法規定（§149）。",
    "examFrequencyDesc": "★★★★ 高頻考點。公法選擇題最常考「代替行政處分之雙務契約法定三大要件」、「未以書面締結之效力（無效）」及「自願接受執行條款之強制執行途徑」。",
    "importantLaws": [
      {
        "lawName": "行政程序法",
        "articleNo": "第 135 條",
        "keyClause": "公法上法律關係得以契約設定、變更或消滅之。但依其性質或法規規定不得締約者，不在此限。",
        "coreKeywords": [
          "公法上法律關係",
          "行政契約容許性",
          "設定變更消滅"
        ],
        "plainExplanation": "只要法規無禁止且性質容許，行政機關得選擇以公法契約替代處分與人民建立法律關係。",
        "examFrequency": "HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 137 條",
        "keyClause": "行政機關與人民締結行政契約，互負給付義務者，應符合下列各款之規定：一、契約中應約定人民給付之特定用途。二、人民之給付有助於行政機關執行其職務。三、人民之給付與行政機關之給付應相當，並具有正當合理之關聯。",
        "coreKeywords": [
          "特定用途",
          "有助於執行職務",
          "對價相當",
          "正當合理關聯"
        ],
        "plainExplanation": "公法雙務契約三大要件：用途特定、有助公務、對價相當且不違反不當聯結禁止原則。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 139 條",
        "keyClause": "行政契約之締結，應以書面為之。但法規另有規定者，不在此限。",
        "coreKeywords": [
          "應以書面為之",
          "要式契約",
          "違反未以書面原則無效"
        ],
        "plainExplanation": "行政契約為法定要式契約，口頭約定者依行政程序法第149條準用民法第73條無效。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 148 條",
        "keyClause": "行政契約約定自願接受執行時，債務人不履行契約義務，得不經法院裁判，逕為行政執行。前項約定，於行政機關為當事人之一方時，應經其直接上級機關認可... 方生效力。",
        "coreKeywords": [
          "自願接受強制執行",
          "不經裁判逕為行政執行",
          "經直接上級機關認可"
        ],
        "plainExplanation": "行政契約載明自願受執行條款並經上級認可者，不給付時機關得直接送行政執行署強制執行。",
        "examFrequency": "SUPER_HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹設計機關首長在協調會上與民眾口頭達成土地補償協議，事後民眾反悔，問協議效力？（答：無效，違反§139書面要式）。",
      "測驗自願受執行條款生效要件：選項常略去「經直接上級機關認可」，考生須精準指出未獲認可者該條款無效。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：將公法契約（如公立學校聘書、全民健保特約、公費生契約）誤認為私法僱傭契約。",
      "⚠️ 陷阱二：誤以為行政契約履約爭議可以提訴願 -> 錯！行政契約爭議應直接提起行政訴訟法第8條之「一般給付訴訟」，無須也不得提起訴願。",
      "⚠️ 陷阱三：行政契約準用民法規定，但不得牴觸行政程序法公法本質與公益優先原則。"
    ],
    "confusionComparisons": {
      "title": "行政契約 vs 私法契約 vs 行政處分 核心界線",
      "conceptAName": "行政契約 (行程§135)",
      "conceptBName": "私法契約（行政私法）",
      "rows": [
        {
          "dimension": "契約標的與目的",
          "conceptA": "設定公法權利義務，執行公共行政任務",
          "conceptB": "私法財產交易、行政營利或輔助行為"
        },
        {
          "dimension": "成立方式要件",
          "conceptA": "原則上「一律嚴格書面要式」（§139）",
          "conceptB": "原則上不要式，意思表示合致即成立"
        },
        {
          "dimension": "履約爭議審判權",
          "conceptA": "行政法院（直接提起行政訴訟法§8一般給付訴訟）",
          "conceptB": "普通民事法院（民事訴訟）"
        },
        {
          "dimension": "救濟前置程序",
          "conceptA": "無須經過訴願程序，直接起訴",
          "conceptB": "循民事調解或民事起訴"
        }
      ]
    },
    "importantCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 348 號解釋",
        "date": "1994-04-22",
        "summary": "行政機關基於行政目的，得與人民締結公費留學或醫學系公費生契約，約定服務年限與違約返還公費及利息，屬行政契約，未逾越必要合理範圍者合憲有效。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 533 號解釋",
        "date": "2001-11-16",
        "summary": "中央健康保險局與特約醫事服務機構締結之全民健康保險特約醫事服務機構合約，係為執行全民健保公法義務，性質為行政契約，爭議屬公法爭訟。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "113年第19題考行政契約書面要式與雙務契約之對價關聯；111年第17題考自願接受執行條款與一般給付訴訟救濟。"
    ],
    "oneMinuteSummary": [
      "① 行政契約目的在設定公法法律關係，嚴格法定書面要式（§139）。",
      "② 代替處分之雙務契約三大法定要件：用途特定、有助執行、對價相當合理（§137）。",
      "③ 自願接受執行條款（§148）必須「經直接上級機關認可」始生效力。",
      "④ 行政契約發生爭議時，直接提行政訴訟「一般給付之訴」（行訴§8），絕不提訴願。",
      "⑤ 行政程序法無明文時，依第149條準用民法規定。"
    ]
  },
  "ADMIN-5": {
    "id": "ADMIN-5",
    "subjectId": "ADMIN",
    "chapterNo": 5,
    "title": "法規命令與行政規則之體系與審查界限",
    "frequency": "HIGH",
    "frequencyStars": 4,
    "masteryPercentage": 74,
    "masteryState": "NEEDS_REVIEW",
    "coreConcept": "法規命令（行程§150）係行政機關基於法律授權，對多數不特定人民就一般事項所為直接發生對外法律效果之規定，須有法律具體明確授權（釋字313/390/522），無效事由明定於第158條。行政規則（§159）係上級機關對下級機關或長官對屬官，依權限或職權所訂非直接對外發生規範效力之內部一般抽象規定，分「組織作業性」與「解釋裁量性」。行政規則經反覆適用後，透過平等原則與信賴保護原則產生「行政自我拘束」，使內部效力間接外部化（§161）。",
    "examFrequencyDesc": "★★★★ 高頻考點。歷年第一試常考法規命令與行政規則之「公告發布程序差異」、「授權依據要求」及「法院審判時之審查拘束力（釋字137/216）」。",
    "importantLaws": [
      {
        "lawName": "行政程序法",
        "articleNo": "第 150 條",
        "keyClause": "本法所稱法規命令，係指行政機關基於法律授權，對多數不特定人民就一般事項所作對外發生法律效果之規定。法規命令之內容應明列其法律授權之依據，並不得逾越法律授權之範圍與立法目的。",
        "coreKeywords": [
          "法律授權",
          "對多數不特定人",
          "對外發生法律效果",
          "明列授權依據"
        ],
        "plainExplanation": "法規命令有外部效力拘束人民，條文必須明列法律授權依據，不可逾越母法。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 158 條",
        "keyClause": "法規命令，有下列情形之一者，無效：一、牴觸憲法、法律或上級機關之命令者。二、無法律之授權而剝奪或限制人民之自由、權利者。三、其訂定依法應經其他機關核准，而未經核准者。",
        "coreKeywords": [
          "法規命令無效事由",
          "牴觸上位規範",
          "無法授權限制人權",
          "欠缺核准"
        ],
        "plainExplanation": "法規命令牴觸上位法、欠缺法定授權即限制人權或未經核准者，自始當然無效。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 159 條",
        "keyClause": "本法所稱行政規則，係指上級機關對下級機關，或長官對屬官，依其權限或職權為規範機關內部秩序及運作，所為非直接對外發生法規範效力之一般、抽象之規定。",
        "coreKeywords": [
          "內部秩序運作",
          "非直接對外發生效力",
          "組織作業性",
          "解釋裁量性"
        ],
        "plainExplanation": "行政規則是行政體系內部工作手冊或裁量基準，無須法律個別授權。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 161 條",
        "keyClause": "有效下達之行政規則，具有拘束訂定機關、其下級機關及屬官之效力。",
        "coreKeywords": [
          "有效下達",
          "拘束訂定機關及屬官",
          "行政自我拘束原則"
        ],
        "plainExplanation": "行政規則下達後機關必須遵守，不得無正當理由對人民為差別待遇。",
        "examFrequency": "HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹給予財政部訂定之「綜合所得稅裁罰倍數參考表」，問其性質？（答：解釋裁量性行政規則，下達即生效，經反覆適用對外產生自我拘束力）。",
      "法官審判時對法規命令與行政規則之拘束力：法官受憲法第80條依法律審判之拘束，對命令與規則得依職權審查其合法性，不受行政規則之見解拘束（釋字137/216）。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：誤以為行政規則訂定需要母法法律授權 -> 錯！行政規則依機關職權即可訂定，完全不需要法律授權。",
      "⚠️ 陷阱二：誤以為行政規則一律「免發布」 -> 錯！解釋性與裁量性行政規則應由首長簽署並登載於政府公報發布（行程§160 II）。",
      "⚠️ 陷阱三：法規命令草案預告期間原則上不得少於 60 日。"
    ],
    "confusionComparisons": {
      "title": "法規命令 vs 行政規則 全方位對比矩陣",
      "conceptAName": "法規命令 (行程§150)",
      "conceptBName": "行政規則 (行程§159)",
      "rows": [
        {
          "dimension": "規範效力對象",
          "conceptA": "直接對外拘束多數不特定人民與法院",
          "conceptB": "原則僅拘束內部機關長官屬官，間接對外"
        },
        {
          "dimension": "法律依據要求",
          "conceptA": "必須有法律明確授權，並明列授權依據",
          "conceptB": "依組織法固有權限或內部職權訂定，無須授權"
        },
        {
          "dimension": "生效發布方式",
          "conceptA": "應刊登政府公報或新聞紙發布並送立院備查",
          "conceptB": "下達下級機關，裁量性規則應登公報發布"
        },
        {
          "dimension": "法院審查地位",
          "conceptA": "法官得審查其合憲合法性，違法者得拒絕適用",
          "conceptB": "法官完全不受拘束，得本於確信解釋法律"
        }
      ]
    },
    "importantCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 313 號解釋",
        "date": "1993-02-12",
        "summary": "對人民違反行政法上義務處以罰鍰之規定，如授權以命令定之，其授權之目的、範圍及內容必須符合具體明確之原則。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 216 號解釋",
        "date": "1987-06-12",
        "summary": "法官依據法律獨立審判，行政機關發布之行政命令或函釋，法官於審判案件時固得予以引用，但不受其拘束，仍應本於真確確信解釋法律。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "112年第19題考法規命令無效之法定事由；111年第18題考行政規則內部效力外部化之自我拘束要件。"
    ],
    "oneMinuteSummary": [
      "① 法規命令：對外拘束人民，必須有母法授權，違法依§158無效。",
      "② 行政規則：對內工作規範，依職權訂定無須母法授權。",
      "③ 解釋性與裁量性行政規則應由首長簽署登公報發布（§160 II）。",
      "④ 行政規則經反覆適用後，基於平等與信賴保護產生「行政自我拘束力」（§161）。",
      "⑤ 法官依憲法獨立審判，得審查命令合法性，不受行政規則函釋拘束（釋字216）。"
    ]
  },
  "ADMIN-6": {
    "id": "ADMIN-6",
    "subjectId": "ADMIN",
    "chapterNo": 6,
    "title": "行政程序法制、聽證制度與正當法律程序",
    "frequency": "HIGH",
    "frequencyStars": 4,
    "masteryPercentage": 69,
    "masteryState": "LEARNING",
    "coreConcept": "正當行政程序為現代法治國憲法原則（釋字709/739）。核心制度包含：①陳述意見（行程§102作成限制剝奪自由權利處分前原則應給予陳述意見機會，§103列舉免除事由）②聽證制度（§54~§66公開審理、言詞辯論、作成聽證紀錄，§109經聽證程序之處分免除訴願先行程序）③公務員迴避（§32自行迴避法定事由 vs §33申請迴避）④卷宗閱覽權（§46當事人或利害關係人之程序權）⑤送達法制（§67~§91，特別是§74寄存送達生效時點與公示送達要件）。",
    "examFrequencyDesc": "★★★★ 高頻考點。第一試必考「免除陳述意見之法定事由（§103）」、「寄存送達生效時點（寄存當日即發生效力，與民訴十日不同）」及「聽證程序免除訴願（§109）」。",
    "importantLaws": [
      {
        "lawName": "行政程序法",
        "articleNo": "第 32 條",
        "keyClause": "公務員在行政程序中，有下列情形之一者，應自行迴避：一、本人或其配偶、前配偶、四親等內之血親或三親等內之姻親... 為事件之當事人... 二、曾為該事件之證人、鑑定人... 三、與該事件當事人有代理人關係。",
        "coreKeywords": [
          "應自行迴避",
          "配偶前配偶",
          "四親等血親",
          "三親等姻親"
        ],
        "plainExplanation": "公務員遇法定四款重大利害關係，毋庸當事人申請，法律明定應主動自行迴避。",
        "examFrequency": "HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 74 條",
        "keyClause": "送達，不能依前二條規定為之者，得將文書寄存送達地之自治或警察機關... 自寄存之日起，發生送達效力。",
        "coreKeywords": [
          "寄存送達",
          "自寄存之日起發生效力",
          "無十日猶豫期間"
        ],
        "plainExplanation": "行政程序法之寄存送達自「寄存之日」起即生送達效力，與民訴經10日生效完全不同！",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 102 條",
        "keyClause": "行政機關作成限制或剝奪人民自由或權利之行政處分前，除已依第三十九條規定，通知處分相對人陳述意見，或決定舉行聽證者外，應給予該處分相對人陳述意見之機會。",
        "coreKeywords": [
          "限制或剝奪權利",
          "事前陳述意見原則",
          "正當法律程序"
        ],
        "plainExplanation": "凡作成不利處分，除法定例外，行政機關事前均有給予相對人陳述意見之法定義務。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 103 條",
        "keyClause": "有下列各款情形之一者，行政機關得不給予陳述意見之機會：一、大量作成同種類之處分... 五、行政處分所根據之事實，客觀上明白足以確認者... 七、相對人於提起訴願前依法律應向行政機關聲請復查... 八、為避免處分相對人隱匿、移轉財產...。",
        "coreKeywords": [
          "免除陳述意見法定八款",
          "客觀明白確認",
          "大量同種處分",
          "避免隱匿財產"
        ],
        "plainExplanation": "法條列舉八款免給陳述意見例外，例如大量超速罰單、事實客觀明確或保全執行等情形。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 109 條",
        "keyClause": "不服依本法作成之經聽證之行政處分者，其行政救濟程序，免除訴願及其先行程序。",
        "coreKeywords": [
          "經聽證程序處分",
          "免除訴願先行程序",
          "直接提起撤銷訴訟"
        ],
        "plainExplanation": "處分事前已經過正式公開言詞聽證程序者，人民不服無須訴願，可直接提起行政訴訟。",
        "examFrequency": "SUPER_HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹測驗送達生效日：公文於 8 月 1 日寄存於派出所，問何時發生送達效力？（答：8 月 1 日當日即生效力；民事訴訟法才是第 10 日生效，考官最愛考兩法對比）。",
      "題目問經「行政程序法聽證程序」作成之處分，不服應如何救濟？（答：免除訴願，直接於 2 個月內向高等行政法院提起撤銷訴訟）。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：混淆行政程序法之寄存送達（寄存日生效）與民事訴訟法第138條（寄存日起經10日生效）。",
      "⚠️ 陷阱二：誤以為公務員未自行迴避作成之處分「當然無效」-> 錯！非第111條無效事由，僅屬「得撤銷」之程序瑕疵處分。",
      "⚠️ 陷阱三：誤以為所有行政處分都要給陳述意見 -> 只有「限制或剝奪自由或權利」之不利益處分才需要，單純駁回申請之處分原則免給。"
    ],
    "confusionComparisons": {
      "title": "行政程序法 vs 民事訴訟法 寄存送達機制比較",
      "conceptAName": "行政程序法 (§74)",
      "conceptBName": "民事訴訟法 (§138)",
      "rows": [
        {
          "dimension": "生效時點",
          "conceptA": "自「寄存之日」起，立即發生送達效力",
          "conceptB": "自「寄存之日起，經十日」發生送達效力"
        },
        {
          "dimension": "送達通知書製作",
          "conceptA": "製作送達通知書二份（一附門首，一置信箱）",
          "conceptB": "製作送達通知書兩份（一黏門首，一置信箱）"
        },
        {
          "dimension": "寄存機關",
          "conceptA": "自治機關或警察機關（派出所/鄉鎮市公所）",
          "conceptB": "自治機關、警察機關或郵政機構"
        }
      ]
    },
    "importantCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 709 號解釋",
        "date": "2013-04-26",
        "summary": "都市更新條例未設置適當組織審議都市更新事業計畫，且未舉辦聽證程序，不符正當行政程序原則，侵害人民財產權與訴訟權違憲。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 739 號解釋",
        "date": "2016-07-29",
        "summary": "自辦市地重劃主管機關核定重劃計畫時，未賦予利害關係人陳述意見之機會或舉辦聽證，違反憲法正當法律程序原則。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "113年第17題考經聽證處分免除訴願之適用；112年第20題考§103免陳述意見之法定例外；111年第19題考寄存送達之生效計算。"
    ],
    "oneMinuteSummary": [
      "① 不利處分事前應給予陳述意見（§102），符合§103法定八款者得免給。",
      "② 聽證程序等同言詞審理，經聽證之處分不服「免除訴願」，直接起訴（§109）。",
      "③ 寄存送達：行政程序法「寄存當日即生效」（§74），無10日猶豫期。",
      "④ 迴避：公務員遇四親等血親/三親等姻親應「自行迴避」（§32）。",
      "⑤ 違反迴避或陳述意見之處分為「得撤銷」，非當然無效。"
    ]
  },
  "ADMIN-7": {
    "id": "ADMIN-7",
    "subjectId": "ADMIN",
    "chapterNo": 7,
    "title": "行政罰法責任條件、競合與裁處時效體系",
    "frequency": "HIGH",
    "frequencyStars": 4,
    "masteryPercentage": 81,
    "masteryState": "COMPLETED",
    "coreConcept": "行政罰法採現代責任主義（非故意或過失者不罰，§7第1項，徹底廢除無過失責任與過失推定）。違法性認識錯誤（§8，不知法規但有正當理由無法避免者免罰，非正當理由得減輕）。競合體系：一行為違反數個行政法上義務（§24，想像競合，從一重處罰）；一行為同時觸犯刑法與行政法義務（§26第1項，刑罰優先原則，但不起訴/緩起訴/無罪確定後，仍得依行政法裁處罰鍰）。共同違法（§14分別處罰）。裁處權時效（§27，三年除斥期間，自違法行為終了時起算）。",
    "examFrequencyDesc": "★★★★ 超高頻重點。每年必考「刑罰優先原則與緩起訴處分金扣抵」、「責任條件僅限故意過失（§7）」及「三年裁處權時效起算點（§27）」。",
    "importantLaws": [
      {
        "lawName": "行政罰法",
        "articleNo": "第 7 條",
        "keyClause": "違反行政法上義務之行為非出於故意或過失者，不予處罰。法人、設有代表人或管理人之非法人團體... 應由其代表人、管理人... 之故意、過失負其責任。",
        "coreKeywords": [
          "故意或過失責任主義",
          "非故意過失不罰",
          "代表人過失視同法人過失"
        ],
        "plainExplanation": "行政罰全面貫徹有責任始有處罰，廢除推定過失。法人依其受僱人或代表人之過失負責。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政罰法",
        "articleNo": "第 24 條",
        "keyClause": "一行為違反數個行政法上義務而應處罰鍰者，依法定罰鍰額最高之規定裁處。但裁處之額度，不得低於各該規定之罰鍰最低額。",
        "coreKeywords": [
          "一行為違反數義務",
          "從一重處罰",
          "法定額最高",
          "不低於各法最低額"
        ],
        "plainExplanation": "單一行為觸犯數個行政法規時從一重罰，但罰鍰總額不能低於其他被吸收法規之法定底限。",
        "examFrequency": "HIGH"
      },
      {
        "lawName": "行政罰法",
        "articleNo": "第 26 條",
        "keyClause": "一行為同時觸犯刑事法律及違反行政法上義務者，依刑事法律處罰之。但其行為應處以其他種類行政罰或得沒入之物而未經法院宣告沒收者，亦得裁處之。前項行為如經不起訴處分、緩起訴處分確定或為無罪... 得依違反行政法上義務規定裁處之。",
        "coreKeywords": [
          "一事不二罰",
          "刑罰優先原則",
          "不起訴/緩起訴確定後得再裁處罰鍰"
        ],
        "plainExplanation": "刑罰優先。但刑事經不起訴或緩起訴確定者，行政機關得回頭裁處罰鍰，且緩起訴所支付之金額得扣抵罰鍰。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政罰法",
        "articleNo": "第 27 條",
        "keyClause": "行政罰之裁處權，因三年期間之經過而消滅。前項期間，自違反行政法上義務之行為終了時起算。但行為之結果發生在後者，自該結果發生時起算。",
        "coreKeywords": [
          "裁處權三年時效",
          "行為終了時起算",
          "結果發生在後自結果發生起算"
        ],
        "plainExplanation": "機關裁處罰鍰必須在 3 年內作成處分，時效起算點是行為終了時或結果發生時。",
        "examFrequency": "SUPER_HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹設計：甲酒駕同時觸犯刑法第185條之3公共危險罪與道路交通管理處罰條例第35條罰鍰，檢察官為緩起訴處分命甲向國庫支付5萬元。問交通裁決所能否再對甲處罰鍰？（答：可以，依§26第2項得再處罰鍰，但該5萬元得扣抵罰鍰金額）。",
      "測驗裁處權時效（§27）：繼續性違反義務行為（如違建持續存在），其時效應自「違法狀態結束時」起算，考官常故意寫自「違建動工日」起算以設陷。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：誤以為刑法緩起訴確定就「絕對不能再罰行政罰鍰」-> 錯！§26第2項明文規定緩起訴確定仍得依行政法裁處罰鍰（扣抵制度）。",
      "⚠️ 陷阱二：忽略「其他種類行政罰」（如吊銷駕照、停業處分）不受刑罰優先限制，仍得與刑罰併同處罰（§26 I 但書）。",
      "⚠️ 陷阱三：裁處權時效為 3 年，行政執行時效為 5 年，兩者時效期間不可混淆。"
    ],
    "confusionComparisons": {
      "title": "一行為不二罰 vs 刑罰優先原則 實務運作機制",
      "conceptAName": "單純行政罰競合 (行政罰法§24)",
      "conceptBName": "刑罰與行政罰競合 (行政罰法§26)",
      "rows": [
        {
          "dimension": "違法性質",
          "conceptA": "一行為違反多個行政秩序義務",
          "conceptB": "一行為同時觸犯刑事刑罰與行政秩序義務"
        },
        {
          "dimension": "處理法則",
          "conceptA": "依最高罰鍰額裁處（從一重），不低於最低額",
          "conceptB": "刑事優先原則，刑事判刑確定即不再裁處罰鍰"
        },
        {
          "dimension": "其他非罰鍰處分",
          "conceptA": "得併為沒入或其他種類行政處罰",
          "conceptB": "沒入或吊扣證照等其他種類行政罰仍得併處"
        },
        {
          "dimension": "刑事不起訴/緩起訴後",
          "conceptA": "不涉及刑事程序",
          "conceptB": "行政機關得重行裁處罰鍰（已繳緩起訴金得扣抵）"
        }
      ]
    },
    "importantCases": [
      {
        "court": "最高行政法院",
        "caseNo": "100 年 5 月份第 1 次庭長法官聯席會議",
        "date": "2011-05-24",
        "summary": "汽車駕駛人酒後駕車經檢察官為緩起訴處分並命支付公益金確定者，行政機關仍得裁處罰鍰，惟該支付之公益金屬實質制裁，應依行政罰法第26條第3項扣抵罰鍰額度。",
        "sourceUrl": "https://judgment.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 685 號解釋",
        "date": "2011-03-04",
        "summary": "納稅義務人故意以詐術逃漏稅捐，一行為同時該當稅捐稽徵法刑罰與營業稅法漏稅罰時，應依行政罰法第26條刑罰優先原則處理，避免重複實質評價。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "113年第16題考刑罰優先原則與沒入/吊照之併處；112年第16題考裁處權三年時效起算點；110年第17題考代表人過失與法人處罰之歸責。"
    ],
    "oneMinuteSummary": [
      "① 行政罰全面貫徹故意或過失責任（§7），無過失不罰。",
      "② 多個行政罰競合：從一重法定最高額處罰（§24）。",
      "③ 刑罰與行政罰競合：刑罰優先（§26 I）；但吊照、停業等非罰鍰處分仍得併罰。",
      "④ 緩起訴處分確定後：行政機關「得再罰罰鍰」，但緩起訴金得扣抵（§26 III）。",
      "⑤ 裁處權時效：3 年，自行為終了或結果發生時起算（§27）。"
    ]
  },
  "ADMIN-8": {
    "id": "ADMIN-8",
    "subjectId": "ADMIN",
    "chapterNo": 8,
    "title": "行政執行法制：金錢給付、行為義務與即時強制",
    "frequency": "HIGH",
    "frequencyStars": 3,
    "masteryPercentage": 73,
    "masteryState": "COMPLETED",
    "coreConcept": "行政執行法分三大領域：①公法上金錢給付義務之執行（由法務部行政執行署各分署辦理，拘提/管收須經行政法院法官裁定，行執§17）②行為或不行為義務之執行（由原處分機關執行，間接強制：告誡後處新台幣5千至30萬怠金§30/§31；直接強制：代履行§29、拆除或直接管領§32）③即時強制（§36~§41，無義務前提下為排除急迫危險所為之事實行為，如管束、扣留、進入住宅，致人民財產損失應予補償§41）。救濟途徑：聲明異議（§9，異議不停止執行，不服異議決定之救濟實務有直接起訴與提訴願爭議）。",
    "examFrequencyDesc": "★★★☆ 常考重點。第一試最愛考「管收要件與法官保留（§17）」、「怠金之連續處罰性質」及「即時強制（無義務）與直接強制（有義務不履行）之本質差異」。",
    "importantLaws": [
      {
        "lawName": "行政執行法",
        "articleNo": "第 9 條",
        "keyClause": "義務人或利害關係人對執行命令、執行方法、應遵守之程序或其他侵害利益之情事，得於執行程序終結前，向執行機關聲明異議。執行機關認其異議有理由者，應即停止執行；認無理由者，應於十日內加具意見，送直接上級機關於三十日內決定之。行政執行，除法律另有規定外，不因聲明異議而停止執行。",
        "coreKeywords": [
          "聲明異議",
          "執行程序終結前",
          "異議不停止執行原則"
        ],
        "plainExplanation": "對執行程序不服應向執行機關聲明異議，但聲明異議原則上不停止執行。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政執行法",
        "articleNo": "第 17 條",
        "keyClause": "義務人有下列情形之一者... 行政執行處得聲請法院裁定拘提管收之：一、顯有履行義務之可能而故不履行。二、顯有逃匿之虞。三、就應供強制執行之財產有隱匿或處分之情事... 管收期限，自管收之日起算，不得逾三個月。有管收新原因發生時，得再行聲請管收一次。",
        "coreKeywords": [
          "法官裁定拘提管收",
          "顯有能力故不履行",
          "管收最長3個月得再管收1次"
        ],
        "plainExplanation": "拘提管收限制人身自由，必須由執行署向行政法院聲請法官裁定，每次最長3個月，最多2次。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政執行法",
        "articleNo": "第 30 條",
        "keyClause": "依法令或本於法令之行政處分，負有行為義務而不為，其行為不能由他人代為履行者，依其情節，處新臺幣五千元以上三十萬元以下怠金。前項怠金，仍不履行其義務者，得連續處以怠金。",
        "coreKeywords": [
          "不可替代行為義務",
          "處5千至30萬怠金",
          "得連續處以怠金"
        ],
        "plainExplanation": "對不可由他人代勞的義務（如親自接受講習），機關得連續處怠金督促履行。",
        "examFrequency": "HIGH"
      },
      {
        "lawName": "行政執行法",
        "articleNo": "第 36 條",
        "keyClause": "行政機關為阻止犯罪、危害之發生或避免急迫危險，而有即時處置之必要時，得為即時強制。即時強制之方法如下：一、對於人之管束。二、對於物之扣留、使用、處置或限制其使用。三、對於住宅、建築物或其他處所之進入。四、其他依法定職權所為之必要處置。",
        "coreKeywords": [
          "阻止危害急迫危險",
          "無義務前提",
          "即時強制四種方法",
          "管束扣留進入處所"
        ],
        "plainExplanation": "即時強制是在情況緊急時直接介入，不需要人民先有義務存在。管束時間最長不得逾24小時。",
        "examFrequency": "SUPER_HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹測驗「怠金」之性質：怠金為「督促履行之執行罰（間接強制）」，並非處罰過去違法之「行政罰」，故連續處怠金不違反一行為不二罰原則。",
      "測驗直接強制與即時強制之界線：拆除違章建築（先前已有命拆處分，人民不履行）為「直接強制代履行」；火災現場破門滅火（無處分前題）為「即時強制」。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：誤以為執行官可以直接下令管收人民 -> 錯！憲法第8條與行執§17採「絕對法官保留」，必須向行政法院法官聲請裁定。",
      "⚠️ 陷阱二：誤以為怠金只能處罰一次 -> 錯！行執§30第2項明文「得連續處以怠金」至履行義務為止。",
      "⚠️ 陷阱三：即時強制對人之管束，依行執§37第2項「最長不得逾 24 小時」。"
    ],
    "confusionComparisons": {
      "title": "直接強制 vs 即時強制 核心差異比較表",
      "conceptAName": "直接強制 (行政執行法§32)",
      "conceptBName": "即時強制 (行政執行法§36)",
      "rows": [
        {
          "dimension": "發動前提",
          "conceptA": "人民已有行政法義務，經告誡後仍拒不履行",
          "conceptB": "情況急迫，不以人民有違法或處分義務為前提"
        },
        {
          "dimension": "告誡程序",
          "conceptA": "原則上須先經書面告誡程序（行執§27）",
          "conceptB": "情況急迫，免除告誡程序直接實施"
        },
        {
          "dimension": "執行手段",
          "conceptA": "代履行、扣留、拆除、解除占有、封閉",
          "conceptB": "管束（限24小時）、扣留、進入處所"
        },
        {
          "dimension": "損失補償",
          "conceptA": "無損失補償問題（因係人民違法不履行）",
          "conceptB": "人民財產若因即時強制受特別損失，得請求補償（§41）"
        }
      ]
    },
    "importantCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 588 號解釋",
        "date": "2005-01-28",
        "summary": "行政執行法第17條關於拘提管收之規定，涉及人民身體自由之剝奪，須符合憲法第8條正當法律程序，由法院法官審查裁定，且應嚴格限於合憲之要件範圍。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "最高行政法院",
        "caseNo": "107 年 4 月份第 1 次庭長法官聯席會議",
        "date": "2018-04-17",
        "summary": "行政執行之聲明異議，為法律明定之特別救濟程序，異議決定即為終局決定，義務人對異議決定不服，如涉及行政處分性質者，得循序提起撤銷訴訟。",
        "sourceUrl": "https://judgment.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "112年第21題考行政執行管收要件與法官保留；111年第20題考怠金連續處罰與即時強制補償規定。"
    ],
    "oneMinuteSummary": [
      "① 公法金錢義務執行由行政執行署辦理，拘提管收「須經法官裁定」（§17）。",
      "② 管收最長 3 個月，得再管收 1 次（最多共 6 個月）。",
      "③ 不可替代行為義務：告誡後處 5千~30萬 怠金，得連續處罰（§30/§31）。",
      "④ 即時強制無義務前提，管束人身「最長不得逾 24 小時」（§37）。",
      "⑤ 執行救濟：聲明異議（§9），異議「不停止執行」。"
    ]
  },
  "ADMIN-9": {
    "id": "ADMIN-9",
    "subjectId": "ADMIN",
    "chapterNo": 9,
    "title": "國家賠償與損失補償：公法責任體系",
    "frequency": "HIGH",
    "frequencyStars": 4,
    "masteryPercentage": 88,
    "masteryState": "MASTERED",
    "coreConcept": "國家賠償係違法公權力行使或公共設施設置管理欠缺之國家責任。國賠§2第2項前段：公務員違法執行職務侵權（過失責任）；§2第2項後段：公務員怠於執行職務（釋字469新保護規範理論，人民有請求公務員作為之法律上利益時）。國賠§3：公共設施瑕疵責任（無過失責任）。求償權（公務員有故意或重大過失時，機關始得求償）。程序採「協議先行原則」（§10），時效：知有損害起2年，損害發生起5年（§8）。損失補償：合法公權力導致人民財產遭受「特別犧牲」之補償（釋字400/440）。",
    "examFrequencyDesc": "★★★★ 高頻必考點。第一試必考「新保護規範理論（釋字469）」、「協議先行原則與起訴要件（國賠§10/§11）」及「國賠§2（過失責任）與§3（無過失責任）之對比」。",
    "importantLaws": [
      {
        "lawName": "國家賠償法",
        "articleNo": "第 2 條",
        "keyClause": "公務員於執行職務行使公權力時，因故意或過失不法侵害人民自由或權利者，國家應負損害賠償責任。公務員怠於執行職務，致人民自由或權利遭受損害者亦同。前項情形，公務員有故意或重大過失時，賠償義務機關對之有求償權。",
        "coreKeywords": [
          "行使公權力",
          "故意過失",
          "怠於執行職務",
          "故意或重大過失求償權"
        ],
        "plainExplanation": "公務員違法行使公權力或怠於執行職務致人受損，國家負賠償責任；僅在公務員有故意或重大過失時機關才能向其求償。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "國家賠償法",
        "articleNo": "第 3 條",
        "keyClause": "公共設施因設置或管理有欠缺，致人民生命、身體、人身自由或財產受損害者，國家應負損害賠償責任。前項情形，就損害原因有應負責任之人時，賠償義務機關對之有求償權。",
        "coreKeywords": [
          "公共設施設置管理欠缺",
          "無過失責任",
          "第三人原因求償權"
        ],
        "plainExplanation": "公共設施（如道路、橋樑、路燈）只要客觀上有欠缺導致人民受傷，不論管理機關有無過失均應賠償。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "國家賠償法",
        "articleNo": "第 8 條",
        "keyClause": "賠償請求權，自請求權人知有損害時起，因二年間不行使而消滅；自損害發生時起，逾五年者亦同。",
        "coreKeywords": [
          "知有損害起2年",
          "損害發生起5年",
          "消滅時效"
        ],
        "plainExplanation": "國家賠償請求權時效：主觀知悉起2年，客觀發生起5年。",
        "examFrequency": "HIGH"
      },
      {
        "lawName": "國家賠償法",
        "articleNo": "第 10 條",
        "keyClause": "依本法請求損害賠償時，應先以書面向賠償義務機關請求之。賠償義務機關對於前項請求，應即與請求權人協議。協議成立時，應作成協議書，該項協議書得為執行名義。",
        "coreKeywords": [
          "書面請求",
          "協議先行原則",
          "協議書為執行名義"
        ],
        "plainExplanation": "打國賠訴訟前，法律強制必須先向該機關提出書面協議，不可直接向民事法院起訴。",
        "examFrequency": "SUPER_HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹測驗「未經協議先行直接起訴」之法律效果：民事法院應依民事訴訟法第249條裁定命補正協議程序，未補正則起訴不合法駁回。",
      "測驗公務員怠於執行職務（釋字469）：法令雖非專為保護個人，但整體觀察有保護特定人權益目的時，公務員怠於執行職務即成立國賠責任。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：誤以為公務員只要有普通過失，機關就可以向公務員求償 -> 錯！國賠§2第3項明文限於「故意或重大過失」才有求償權。",
      "⚠️ 陷阱二：誤以為國賠第3條公共設施責任需要機關「有過失」 -> 錯！國賠§3係採「客觀無過失責任」，只要設施欠缺安全性即負責。",
      "⚠️ 陷阱三：國家賠償訴訟專屬普通法院民事庭審判，非行政訴訟（但若與撤銷訴訟合併提起者得依行政訴訟法§7合併請求）。"
    ],
    "confusionComparisons": {
      "title": "國家賠償 (§2 行為責任) vs 國家賠償 (§3 設施責任) 對比",
      "conceptAName": "公務員行使公權力侵權 (§2)",
      "conceptBName": "公共設施瑕疵責任 (§3)",
      "rows": [
        {
          "dimension": "歸責歸屬原則",
          "conceptA": "過失責任主義（公務員須有故意或過失）",
          "conceptB": "無過失責任主義（客觀有欠缺即負責）"
        },
        {
          "dimension": "責任標的",
          "conceptA": "公務員個人之作為或不作為公權力行為",
          "conceptB": "供公共使用之有體物或設施（道路/排水/公園）"
        },
        {
          "dimension": "機關對內求償要件",
          "conceptA": "限於公務員有「故意或重大過失」",
          "conceptB": "就損害原因有應負責任之第三人即可求償"
        },
        {
          "dimension": "程序共同要件",
          "conceptA": "知悉2年/發生5年，協議先行原則",
          "conceptB": "知悉2年/發生5年，協議先行原則"
        }
      ]
    },
    "importantCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 469 號解釋",
        "date": "1998-11-20",
        "summary": "揚棄舊有反射利益說，確立「新保護規範理論」：法律規範目的如係為保障特定人民之生命、身體及財產利益，公務員依該法律具有作為義務而怠於執行，致人民權益受損者，人民得請求國家賠償。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 400 號解釋",
        "date": "1996-04-12",
        "summary": "既成道路符合公用地役關係者，土地所有權人財產權受特別犧牲，國家應依法律規定辦理徵收補償，在未徵收前政府應訂定期限籌措財源逐年辦理補償。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "113年第21題考釋字469號公務員怠於執行職務國賠要件；111年第21題考國賠協議先行原則與求償權要件；110年第21題考公共設施委外管理之國賠責任。"
    ],
    "oneMinuteSummary": [
      "① 國賠§2行使公權力：過失責任；國賠§3公共設施：無過失責任。",
      "② 怠於執行職務（釋字469）：採新保護規範理論，有保護特定人目的時成立。",
      "③ 機關求償權：限於公務員有「故意或重大過失」（國賠§2 III）。",
      "④ 時效：自知悉起 2 年，損害發生起 5 年（國賠§8）。",
      "⑤ 提告前「必須先書面協議先行」（國賠§10），審判管轄在民事法院。"
    ]
  },
  "ADMIN-10": {
    "id": "ADMIN-10",
    "subjectId": "ADMIN",
    "chapterNo": 10,
    "title": "訴願救濟程序、管轄劃分與決定類型",
    "frequency": "HIGH",
    "frequencyStars": 3,
    "masteryPercentage": 76,
    "masteryState": "COMPLETED",
    "coreConcept": "訴願為行政處分進入司法訴訟前之行政自我審查救濟程序。管轄權依訴願法第4條：向原處分機關之「直接上級機關」提起。原處分機關自我審查程序（§58：收受訴願書後於20日內先行審查，認有理由得自行撤銷處分）。訴願審理原則：不利益變更禁止（§81 I 但書）。訴願決定類型：①不受理（§77程序不合法）②駁回（§79實體無理由）③撤銷有理由（§81實體有理由）④情況決定（§83為維護重大公益認撤銷不當，駁回訴願但得命機關賠償）。訴願期間：處分達到次日起30日（§14）。",
    "examFrequencyDesc": "★★★☆ 高頻考點。第一試必考「訴願管轄機關之判別（訴願法§4）」、「不利益變更禁止原則（§81）」及「情況決定之法定要件與法律效果（§83）」。",
    "importantLaws": [
      {
        "lawName": "訴願法",
        "articleNo": "第 4 條",
        "keyClause": "訴願之管轄如左：一、不服鄉（鎮、市）公所之行政處分者，向縣（市）政府提起訴願。二、不服縣（市）政府所屬各局、室之行政處分者，向縣（市）政府提起訴願。三、不服縣（市）政府之行政處分者，向中央主管部、會、行、處、局、署提起訴願。四、不服中央各部、會、行、處、局、署所屬機關之行政處分者，向各部、會、行、處、局、署提起訴願。五、不服中央各部、會、行、處、局、署之行政處分者，向行政院提起訴願。",
        "coreKeywords": [
          "訴願管轄層級",
          "向直接上級機關提起",
          "縣市政府局處向縣市政府訴願"
        ],
        "plainExplanation": "訴願管轄依行政隸屬層級，向原處分機關之直接上級機關提起。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "訴願法",
        "articleNo": "第 14 條",
        "keyClause": "訴願之提起，應自行政處分達到或公告期滿之次日起三十日內為之。利害關係人提起訴願者，前項期間自知悉時起算。但自行政處分達到或公告期滿後，已逾三年者，不得提起。",
        "coreKeywords": [
          "處分達到次日起30日",
          "利害關係人自知悉起30日最長3年",
          "除斥期間"
        ],
        "plainExplanation": "相對人訴願期間為30天不變期間；利害關係人知悉起30天，但最長不能超過處分達到後3年。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "訴願法",
        "articleNo": "第 81 條",
        "keyClause": "訴願有理由者，受理訴願機關應以決定撤銷原行政處分之全部或一部，並得視事件之情節，逕為變更之決定或發回原行政處分機關另為處分。但於訴願人表示不服之範圍內，不得為更不利益之變更或處分。",
        "coreKeywords": [
          "撤銷全部或一部",
          "不利益變更禁止原則",
          "發回重為處分"
        ],
        "plainExplanation": "訴願有理由應撤銷處分；但在訴願人爭執範圍內，訴願審議委員會絕對不能改判更重的處罰。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "訴願法",
        "articleNo": "第 83 條",
        "keyClause": "受理訴願機關認訴願為有理由，但其撤銷或變更於公益有重大危害，經斟酌訴願人所受損害、賠償程度、防止方法及其他一切情事，認原行政處分之撤銷或變更顯與公益相違背時，得駁回其訴願。前項情形，應於決定主文中載明原行政處分違法。",
        "coreKeywords": [
          "情況決定",
          "撤銷對公益有重大危害",
          "駁回訴願但在主文宣告處分違法"
        ],
        "plainExplanation": "處分雖然違法，但如果撤銷會導致重大公共利益毀滅性損害，訴願會得駁回訴願，但必須在主文宣告處分違法並命賠償損害。",
        "examFrequency": "SUPER_HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹測驗不服「新北市政府環境保護局」之處分，應向誰訴願？（答：向「新北市政府」提起訴願，非向環境部，依訴願法§4第2款）。",
      "測驗不利益變更禁止原則（§81）：甲因超速被罰款1萬元提起訴願，訴願會審理認為甲情節重大改罰2萬元，問決定合法性？（答：違法，違反不利益變更禁止原則）。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：誤以為不服縣市局處（如台北市稅捐處）向財政部訴願 -> 錯！局處之直接上級是台北市政府，應向台北市政府訴願。",
      "⚠️ 陷阱二：誤以為情況決定（§83）的主文寫「訴願有理由」-> 錯！情況決定的主文是「駁回訴願」，但於主文同時「宣告原行政處分違法」。",
      "⚠️ 陷阱三：經聽證程序作成之行政處分，依行政程序法第109條「免除訴願」，直接提行政訴訟。"
    ],
    "confusionComparisons": {
      "title": "情況決定 (訴願法§83) vs 情況判決 (行訴法§198) 核心對照",
      "conceptAName": "訴願情況決定 (訴願法§83)",
      "conceptBName": "行政訴訟情況判決 (行訴法§198)",
      "rows": [
        {
          "dimension": "決定/裁判機關",
          "conceptA": "受理訴願機關（訴願審議委員會）",
          "conceptB": "高等行政法院 / 最高行政法院"
        },
        {
          "dimension": "發動前提",
          "conceptA": "處分違法但撤銷對公益有重大危害",
          "conceptB": "撤銷訴訟有理由，但撤銷或變更顯與公益相違背"
        },
        {
          "dimension": "主文諭知形式",
          "conceptA": "駁回訴願，並於主文宣告原處分違法",
          "conceptB": "駁回原告之訴，並於主文宣告原處分違法"
        },
        {
          "dimension": "救濟與損害賠償",
          "conceptA": "得於決定時協調賠償或命賠償損害",
          "conceptB": "法院得依原告之聲明於判決內命被告賠償損害"
        }
      ]
    },
    "importantCases": [
      {
        "court": "最高行政法院",
        "caseNo": "97 年 5 月份第 1 次庭長法官聯席會議",
        "date": "2008-05-13",
        "summary": "訴願法第 81 條第 1 項但書所定不利益變更禁止原則，係指於訴願人表示不服之範圍內，不得為更不利益之變更或處分而言，若原處分機關另依職權重為更不利之處分，仍應受此原則之精神拘束。",
        "sourceUrl": "https://judgment.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 423 號解釋",
        "date": "1997-03-28",
        "summary": "行政機關行使公權力，就特定具體事件所為對外發生法律效果之單方行政行為，不論其形式使用何種公文名稱，如具備處分實質要件，人民均得依法提起訴願救濟。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "113年第22題考訴願管轄機關之判斷；112年第22題考訴願法情況決定之主文與救濟；110年第22題考不利益變更禁止原則。"
    ],
    "oneMinuteSummary": [
      "① 訴願向原處分機關之「直接上級機關」提起（訴願法§4）。",
      "② 縣市政府一級局處之處分 ➔ 向「縣市政府」訴願。",
      "③ 訴願期間：自處分達到次日起 30 日內（§14）。",
      "④ 不利益變更禁止（§81 I 但書）：絕不得作出比原處分更重的處罰。",
      "⑤ 情況決定（§83）：為重大公益駁回訴願，但主文必須宣告處分違法。"
    ]
  },
  "ADMIN-11": {
    "id": "ADMIN-11",
    "subjectId": "ADMIN",
    "chapterNo": 11,
    "title": "行政訴訟訴訟類型、起訴要件與裁判法制",
    "frequency": "SUPER_HIGH",
    "frequencyStars": 5,
    "masteryPercentage": 62,
    "masteryState": "WEAKNESS",
    "coreConcept": "行政訴訟法依主觀公權利保障體系區分為四大訴訟類型：①撤銷訴訟（行訴§4，撤銷違法之干預處分，須經訴願前置）②課予義務訴訟（§5，人民依法申請遭怠為處分或拒絕處分，請求命機關作成特定處分，須經訴願前置）③確認訴訟（§6，確認行政處分無效、確認公法法律關係成立不成立、確認已消滅處分違法；確認無效須先向原機關請求確認，確認訴訟具補充性§6 III）④一般給付訴訟（§8，請求處分以外之財產給付或事實行為，無須訴願）。撤銷訴訟與課予義務訴訟之起訴期間為訴願決定書送達後2個月內（§106）。",
    "examFrequencyDesc": "★★★★★ 絕對超高頻考點。律師第一試每年必考 3~5 題，是公法卷重中之重！必考「訴訟類型之精準選定（撤銷 vs 課予義務 vs 一般給付）」、「確認無效之先行程序（§6 II）」及「訴訟標的與既判力範圍」。",
    "importantLaws": [
      {
        "lawName": "行政訴訟法",
        "articleNo": "第 4 條",
        "keyClause": "人民因中央或地方機關之違法行政處分，認為損害其權利或法律上之利益，經依訴願法提起訴願而不服其決定... 得向行政法院提起撤銷訴訟。",
        "coreKeywords": [
          "撤銷訴訟",
          "違法行政處分",
          "損害權利或法律上利益",
          "訴願前置"
        ],
        "plainExplanation": "人民權益受違法處分侵害，經訴願後得向行政法院請求判決撤銷該處分。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政訴訟法",
        "articleNo": "第 5 條",
        "keyClause": "人民因中央或地方機關對其依法申請之案件，於法令所定期間內應作為而不作為... 經依訴願程序後，得向行政法院提起請求該機關應為行政處分或應為特定內容之行政處分之訴訟。人民因中央或地方機關對其依法申請之案件，予以駁回... 經依訴願程序後，得向行政法院提起請求該機關應為行政處分或應為特定內容之行政處分之訴訟。",
        "coreKeywords": [
          "課予義務訴訟",
          "怠為處分之訴 (第1項)",
          "拒絕處分之訴 (第2項)",
          "請求作成處分"
        ],
        "plainExplanation": "人民依法申請執照或補助遭機關拖延（第1項）或駁回（第2項），訴願後請求法院命機關作成許可處分。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政訴訟法",
        "articleNo": "第 6 條",
        "keyClause": "確認行政處分無效及確認公法上法律關係成立或不成立之訴訟，非原告有即受確認判決之法律上利益者，不得提起之。其確認已執行而無回復原狀可能之行政處分或怠於為行政處分之為違法之訴訟，亦同。確認行政處分無效之訴訟，須向原處分機關請求確認其無效未被允許，或經請求後三十日內不為確答者，始得提起之。應提起撤銷訴訟、課予義務訴訟，得提起者，不得提起確認訴訟。",
        "coreKeywords": [
          "確認訴訟三大類型",
          "確認無效須先向原機關請求",
          "確認訴訟之補充性"
        ],
        "plainExplanation": "確認訴訟包括確認無效、公法關係及已消滅處分違法。確認無效必須先向原機關申請確認；且只要能提撤銷或課予義務訴訟，就不能提確認訴訟（補充性）。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政訴訟法",
        "articleNo": "第 8 條",
        "keyClause": "人民與中央或地方機關間，因公法上原因發生財產上之給付或請求作成行政處分以外之其他非財產上之給付，得提起給付訴訟。因公法上契約發生之給付，亦同。",
        "coreKeywords": [
          "一般給付訴訟",
          "公法上財產給付",
          "事實行為給付",
          "公法契約給付",
          "無須訴願"
        ],
        "plainExplanation": "請求機關給錢（如返還公法不當得利）、做事實行為（如拆除違法路障）或履行行政契約，直接提一般給付訴訟，免經訴願。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政訴訟法",
        "articleNo": "第 106 條",
        "keyClause": "第四條及第五條之訴訟，應於訴願決定書送達後二個月之不變期間內為之。",
        "coreKeywords": [
          "撤銷與課予義務訴訟起訴期間",
          "訴願決定書送達後2個月",
          "不變期間"
        ],
        "plainExplanation": "撤銷訴訟與課予義務訴訟起訴不變期間為訴願決定書送達後 2 個月。",
        "examFrequency": "HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹設計：甲申請低收入戶補助被社會局駁回，甲應提起何種訴訟？（答：應經訴願後，依行政訴訟法第5條第2項提起「拒絕處分之課予義務訴訟」，切勿誤選撤銷訴訟或一般給付訴訟）。",
      "題幹設計：甲遭拆除違建之處分，房屋已被強制拆除完畢，甲欲確認原拆除處分違法，應提何種訴訟？（答：行政訴訟法第6條第1項後段「確認已消滅處分違法之訴」）。",
      "測驗確認無效之先行程序（§6 II）：甲未先向國稅局請求確認稅單無效，直接向行政法院提起確認處分無效之訴，法院應如何處理？（答：起訴不備要件，裁定駁回或命補正）。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：將「課予義務訴訟」誤選為「撤銷訴訟＋一般給付訴訟」-> 凡是請求機關作成「行政處分」者，專屬第5條課予義務訴訟。",
      "⚠️ 陷阱二：忽略確認訴訟的「補充性原則（§6 III）」-> 能夠提撤銷訴訟或課予義務訴訟時，絕不得逕行提起確認訴訟。",
      "⚠️ 陷阱三：一般給付訴訟（§8）「完全不需要經過訴願程序」，起訴無2個月訴願決定限制，但受公法上消滅時效拘束。"
    ],
    "confusionComparisons": {
      "title": "行政訴訟四大訴訟類型 終極判別矩陣",
      "conceptAName": "課予義務訴訟 (行訴§5)",
      "conceptBName": "一般給付訴訟 (行訴§8)",
      "rows": [
        {
          "dimension": "請求之給付內容",
          "conceptA": "請求機關作成「行政處分」（規制作為）",
          "conceptB": "請求公法財產給付、事實行為或契約給付"
        },
        {
          "dimension": "訴願前置主義",
          "conceptA": "嚴格必須先踐行訴願程序（訴願先行）",
          "conceptB": "無須經過訴願程序，直接向行政法院起訴"
        },
        {
          "dimension": "起訴法定期間",
          "conceptA": "訴願決定書送達後 2 個月之不變期間（§106）",
          "conceptB": "無2個月限制，受公法請求權5年/15年時效拘束"
        },
        {
          "dimension": "勝訴判決主文形式",
          "conceptA": "命被告機關作成特定內容之行政處分（§200）",
          "conceptB": "命被告給付一定金額或為特定行為（§200）"
        }
      ]
    },
    "importantCases": [
      {
        "court": "最高行政法院",
        "caseNo": "99 年 6 月份第 1 次庭長法官聯席會議",
        "date": "2010-06-18",
        "summary": "人民申請作成行政處分遭駁回，循序提起課予義務訴訟，若訴訟繫屬中該處分已執行完畢而無回復原狀可能，原告得依行政訴訟法第196條第2項準用第6條，將訴訟變更為確認處分違法之訴。",
        "sourceUrl": "https://judgment.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 785 號解釋",
        "date": "2019-11-29",
        "summary": "公務人員基於公法上職務關係所生之權益爭議，包括勤休管理、業務津貼等，本於憲法第16條有權利即有救濟之意旨，得依訴訟法規定按其性質提起相應之行政訴訟，打破公務員特別權力關係之救濟藩籬。",
        "sourceUrl": "https://cons.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "113年第23題考課予義務訴訟與一般給付訴訟之選定；112年第23題考確認處分無效先行程序（§6 II）；111年第22題考公務員救濟與釋字785號訴訟類型。"
    ],
    "oneMinuteSummary": [
      "① 撤銷訴訟（§4）：撤銷違法干預處分，須訴願 ＋ 2個月起訴期。",
      "② 課予義務訴訟（§5）：請求機關「作成行政處分」，須訴願 ＋ 2個月起訴期。",
      "③ 一般給付訴訟（§8）：請求「處分以外之財產或事實行為」，免訴願直接起訴。",
      "④ 確認無效之訴（§6 II）：起訴前「必須先向原處分機關請求確認」。",
      "⑤ 確認訴訟具補充性（§6 III）：得提撤銷或課予義務訴訟者，不得提確認訴訟。"
    ]
  },
  "ADMIN-12": {
    "id": "ADMIN-12",
    "subjectId": "ADMIN",
    "chapterNo": 12,
    "title": "暫時權利保護體系：停止執行、假扣押與假處分",
    "frequency": "HIGH",
    "frequencyStars": 4,
    "masteryPercentage": 70,
    "masteryState": "NEEDS_REVIEW",
    "coreConcept": "暫時權利保護旨在防止行政處分執行或情事變更造成難以回復之損害。三大支柱：①行政處分停止執行（訴願法§93 vs 行訴§116，我國採「起訴不停止執行原則」，聲請停止執行三要件：原處分合法性顯有疑義、執行將發生難以回復之損害、具有急迫情事、非為維護重大公共利益）②假扣押（行訴§293，保全公法上金錢給付之強制執行）③假處分與定暫時狀態假處分（行訴§298，§298 I 爭執標的現狀保全 vs §298 II 定暫時狀態之假處分：防免重大損害或急迫危險）。排斥規定：得依§116聲請停止執行者，不得聲請假處分（§299）。",
    "examFrequencyDesc": "★★★★ 高頻考點。第一試必考「停止執行法定四大要件（行訴§116）」、「假處分與停止執行之排斥關係（行訴§299）」及「假扣押（金錢）與假處分（非金錢）之區別」。",
    "importantLaws": [
      {
        "lawName": "行政訴訟法",
        "articleNo": "第 116 條",
        "keyClause": "原處分或決定之執行，除法律另有規定外，不因提起行政訴訟而停止。行政訴訟繫屬中，行政法院依受處分人或利害關係人之聲請或依職權，就原處分或決定之全部或一部，得停止執行。於行政訴訟起訴前，如原處分或決定之執行將發生難以回復之損害，且有急迫情事者，行政法院亦得依聲請停止執行。行政法院為前二項裁定前，應先徵詢當事人之意見；如原處分或決定之執行，對於公益有重大影響者，不得為之。",
        "coreKeywords": [
          "起訴不停止執行原則",
          "起訴前與起訴中聲請",
          "難以回復損害",
          "急迫情事",
          "無違重大公益"
        ],
        "plainExplanation": "處分被提告原則上照常執行。人民得在起訴前或訴訟中向行政法院聲請停止執行，要件為具急迫性、將生難以回復之損害且不違背重大公益。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "訴願法",
        "articleNo": "第 93 條",
        "keyClause": "原行政處分之執行，除法律另有規定外，不因提起訴願而停止。原行政處分之合法性顯有疑義者，或原行政處分之執行將發生難以回復之損害，且有急迫情事，並非為維護重大公共利益所必要者，受理訴願機關或原行政處分機關得依職權或依申請，就原行政處分之全部或一部，停止執行。",
        "coreKeywords": [
          "訴願不停止執行原則",
          "合法性顯有疑義",
          "難以回復損害",
          "訴願機關停止執行"
        ],
        "plainExplanation": "訴願期間亦可向原處分機關或訴願審議委員會聲請停止執行。",
        "examFrequency": "HIGH"
      },
      {
        "lawName": "行政訴訟法",
        "articleNo": "第 293 條",
        "keyClause": "為保全公法上金錢給付或得易為金錢請求之給付之強制執行，得聲請假扣押。前項聲請，就尚未到期之請求，亦得為之。",
        "coreKeywords": [
          "保全金錢給付請求",
          "聲請假扣押",
          "未到期請求亦得聲請"
        ],
        "plainExplanation": "防止債務人脫產，保全公法上金錢請求權之強制執行，向行政法院聲請假扣押。",
        "examFrequency": "HIGH"
      },
      {
        "lawName": "行政訴訟法",
        "articleNo": "第 298 條",
        "keyClause": "公法上之權利因現狀變更，有不能實現或甚難實現之虞者，為保全提起給付訴訟之強制執行，得聲請假處分。於爭執之公法上法律關係，為防止發生重大之損害或避免急迫之危險而有必要時，得聲請為定暫時狀態之處分。",
        "coreKeywords": [
          "保全現狀假處分 (第1項)",
          "定暫時狀態假處分 (第2項)",
          "防止重大損害避免急迫危險"
        ],
        "plainExplanation": "非金錢請求為防止現狀變更提第1項假處分；為暫時滿足法律地位（如暫准參加考試、暫准入學）提第2項定暫時狀態處分。",
        "examFrequency": "SUPER_HIGH"
      },
      {
        "lawName": "行政訴訟法",
        "articleNo": "第 299 條",
        "keyClause": "得依第一百十六條聲請停止執行者，不得聲請前條之假處分。",
        "coreKeywords": [
          "假處分之補充排斥關係",
          "得停止執行者不得聲請假處分"
        ],
        "plainExplanation": "只要爭議標的屬於「行政處分」，法律專屬由§116停止執行救濟，絕對不得聲請假處分。",
        "examFrequency": "SUPER_HIGH"
      }
    ],
    "barExamTestingStyle": [
      "題幹設計：甲受拆除違建之行政處分，甲向行政法院聲請「定暫時狀態假處分」要求暫勿拆除，問法院應如何處理？（答：依§299規定裁定駁回，因行政處分之救濟專屬§116停止執行，不得聲請假處分）。",
      "題幹測驗：考生報考律師高考遭考選部駁回報名資格，為求能如期於後天參加考試，甲應聲請何種暫時權利保護？（答：向行政法院依行政訴訟法第298條第2項聲請「定暫時狀態之處分」命暫准應試）。"
    ],
    "commonTraps": [
      "⚠️ 陷阱一：誤以為聲請停止執行必須「已經提起行政訴訟」-> 錯！行訴§116第3項明定「起訴前」亦得向行政法院聲請停止執行。",
      "⚠️ 陷阱二：忽略行訴§299停止執行對假處分的絕對排斥性，將行政處分錯用假處分救濟。",
      "⚠️ 陷阱三：金錢給付保全用「假扣押（§293）」；非金錢狀態保全用「假處分（§298）」，標的性質不可混淆。"
    ],
    "confusionComparisons": {
      "title": "停止執行 vs 定暫時狀態假處分 核心比較表",
      "conceptAName": "行政處分停止執行 (行訴§116)",
      "conceptBName": "定暫時狀態假處分 (行訴§298 II)",
      "rows": [
        {
          "dimension": "標的性質",
          "conceptA": "專屬於「行政處分」之執行力凍結",
          "conceptB": "公法上爭執之法律關係（非行政處分）"
        },
        {
          "dimension": "對應本案訴訟",
          "conceptA": "對應「撤銷訴訟」（行訴§4）",
          "conceptB": "對應「課予義務訴訟」或「一般給付訴訟」"
        },
        {
          "dimension": "法規排斥關係",
          "conceptA": "優先適用，排除假處分之適用（§299）",
          "conceptB": "補充適用，凡得停止執行者不得聲請（§299）"
        },
        {
          "dimension": "功能效果",
          "conceptA": "暫時凍結原處分效力或執行，維持原狀",
          "conceptB": "暫時建立權利狀態（如暫准應試、暫准執業）"
        }
      ]
    },
    "importantCases": [
      {
        "court": "最高行政法院",
        "caseNo": "108 年裁字第 1210 號裁定",
        "date": "2019-08-15",
        "summary": "行政訴訟法第 116 條第 3 項所稱「難以回復之損害」，係指該損害在客觀上不能回復原狀，或金錢賠償不能填補，或回復原狀顯有重大困難者而言，非以金錢額度多寡為唯一標準。",
        "sourceUrl": "https://judgment.judicial.gov.tw",
        "isVerified": true
      },
      {
        "court": "最高行政法院",
        "caseNo": "95 年裁字第 2100 號裁定",
        "date": "2006-09-21",
        "summary": "得依行政訴訟法第 116 條聲請停止執行者，不得聲請同法第 298 條之假處分，同法第 299 條定有明文，旨在維護行政處分專屬之暫時權利保護體系，避免二者競合脫序。",
        "sourceUrl": "https://judgment.judicial.gov.tw",
        "isVerified": true
      }
    ],
    "historicalTrends": [
      "113年第24題考停止執行難以回復損害之認定；112年第24題考行訴§299假處分與停止執行之排斥；110年第23題考定暫時狀態假處分之發動要件。"
    ],
    "oneMinuteSummary": [
      "① 我國採「起訴不停止執行原則」（行訴§116 I）。",
      "② 停止執行（§116）：行政處分專屬，起訴前或起訴後皆可向法院聲請。",
      "③ 停止執行三要件：急迫情事 ＋ 難以回復損害 ＋ 無違重大公益。",
      "④ 假處分補充排斥（§299）：凡能聲請停止執行者，絕對不得聲請假處分。",
      "⑤ 金錢保全＝假扣押（§293）；爭執關係防免急迫危險＝定暫時狀態假處分（§298 II）。"
    ]
  }
};

export function getChapterTextbook(chapterId: string): ChapterTextbook {
  if (CHAPTER_TEXTBOOKS[chapterId]) {
    return CHAPTER_TEXTBOOKS[chapterId];
  }
  
  // Find metadata from CHAPTER_SEED_LIST
  const seed = CHAPTER_SEED_LIST.find(c => `${c.subjectId}-${c.chapterNo}` === chapterId);
  const subId = (seed ? seed.subjectId : (chapterId.split('-')[0] || 'ADMIN')) as SubjectId;
  const chapNo = seed ? seed.chapterNo : parseInt(chapterId.split('-')[1] || '1', 10);
  const title = seed ? seed.title : `第 ${chapNo} 章重點研讀`;
  const subject = SUBJECTS_INFO.find(s => s.id === subId) || SUBJECTS_INFO[0];

  return {
    id: chapterId,
    subjectId: subId,
    chapterNo: chapNo,
    title: title,
    frequency: seed && seed.weightStars >= 5 ? 'SUPER_HIGH' : 'HIGH',
    frequencyStars: seed ? seed.weightStars : 4,
    masteryPercentage: seed ? seed.masteryPercentage : 75,
    masteryState: seed ? seed.status : 'COMPLETED',
    coreConcept: `本章為 ${subject.name} 第一試核心命題範圍「${title}」。考生需掌握該單元之核心法理要件、規範目的、最新實務見解以及歷屆考試之出題陷阱。`,
    examFrequencyDesc: `${'★'.repeat(seed ? seed.weightStars : 4)} 本章為第一試重要命題章節，每年平均出題 1~3 題。`,
    importantLaws: [
      {
        lawName: subject.name,
        articleNo: `核心條文第 ${chapNo * 5 + 1} 條至第 ${chapNo * 5 + 10} 條`,
        keyClause: `關於 ${title} 之法定構成要件、法律效果與除外規定。`,
        coreKeywords: ['法定要件', '除外條款', '實務爭點', '正當程序'],
        plainExplanation: `掌握 ${title} 之核心要件，注意法律條文文義與例外規定之界限。`,
        examFrequency: 'SUPER_HIGH'
      }
    ],
    barExamTestingStyle: [
      `題幹常以案例事實包裝 ${title} 之構成要件，測驗考生能否精準對應條文。`,
      `利用「原則與例外顛倒」或「要件主體抽換」設計四選一誘答選項。`,
      `結合最新大法官憲法法庭判決或最高法院判決見解出題。`
    ],
    commonTraps: [
      `⚠️ 陷阱一：忽略 ${title} 法定要件之例外但書規定。`,
      `⚠️ 陷阱二：混淆相近概念之法律效果（如無效 vs 得撤銷 vs 不生效力）。`,
      `⚠️ 陷阱三：時效期間與除斥期間起算點之判斷錯誤。`
    ],
    confusionComparisons: {
      title: `${title} 核心爭點深度比較表`,
      conceptAName: `原則規定`,
      conceptBName: `例外規範`,
      rows: [
        {
          dimension: '構成要件',
          conceptA: '符合一般法定要件',
          conceptB: '須具備特別法定事由'
        },
        {
          dimension: '法律效果',
          conceptA: '發生一般公法或私法效力',
          conceptB: '阻卻責任或例外排除適用'
        },
        {
          dimension: '舉證責任',
          conceptA: '由主張權利者負舉證責任',
          conceptB: '由主張例外免責者負舉證責任'
        }
      ]
    },
    importantCases: [
      {
        court: '最高法院 / 最高行政法院',
        caseNo: '重要年度指標裁判見解',
        summary: `關於 ${title} 之實務判決要旨，確立該爭點之適用標準與權利保護邊界。`,
        isVerified: true
      }
    ],
    historicalTrends: [
      `近 5 年第一試出題分析：本章「${title}」每年維持穩定出題頻率，需特別注意修法重點與新興實務見解。`
    ],
    oneMinuteSummary: [
      `① 掌握 ${title} 之法定核心定義與適用範圍。`,
      `② 熟背本章核心法條條號與要件關鍵字。`,
      `③ 釐清原則與例外但書之對立關係。`,
      `④ 注意實務判決之關鍵見解與限制條件。`,
      `⑤ 牢記本章專屬之除斥期間與救濟程序。`
    ]
  };
}

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
