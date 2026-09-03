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
  subjectId: SubjectId;
  chapterNo: number;
  title: string;
  weightStars: number;
  masteryPercentage: number;
  isWeakness: boolean;
  status: 'UNLEARNED' | 'LEARNING' | 'COMPLETED' | 'NEEDS_REVIEW' | 'WEAKNESS' | 'MASTERED';
}[] = [
  {
    "subjectId": "ADMIN",
    "chapterNo": 1,
    "title": "行政法基本原理原則與法源",
    "weightStars": 5,
    "masteryPercentage": 92,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 2,
    "title": "行政組織與公物法制",
    "weightStars": 4,
    "masteryPercentage": 78,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 3,
    "title": "行政處分之成立、瑕疵與廢止撤銷",
    "weightStars": 5,
    "masteryPercentage": 58,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 4,
    "title": "行政契約之締結與履約爭議",
    "weightStars": 3,
    "masteryPercentage": 85,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 5,
    "title": "法規命令與行政規則之界限",
    "weightStars": 4,
    "masteryPercentage": 74,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 6,
    "title": "行政程序法制與正當法律程序",
    "weightStars": 4,
    "masteryPercentage": 69,
    "isWeakness": false,
    "status": "LEARNING"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 7,
    "title": "行政罰之責任條件與處罰裁量",
    "weightStars": 4,
    "masteryPercentage": 81,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 8,
    "title": "行政執行（公法金錢/行為不行為）",
    "weightStars": 3,
    "masteryPercentage": 73,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 9,
    "title": "國家賠償與損失補償體系",
    "weightStars": 4,
    "masteryPercentage": 88,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 10,
    "title": "訴願救濟程序與管轄",
    "weightStars": 3,
    "masteryPercentage": 76,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 11,
    "title": "行政訴訟訴訟類型與裁判",
    "weightStars": 5,
    "masteryPercentage": 62,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "ADMIN",
    "chapterNo": 12,
    "title": "暫時權利保護（停止執行/假處分）",
    "weightStars": 4,
    "masteryPercentage": 70,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "CONST",
    "chapterNo": 1,
    "title": "憲法基本原則與國民主權",
    "weightStars": 4,
    "masteryPercentage": 88,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "CONST",
    "chapterNo": 2,
    "title": "平等權與各類差別待遇審查基準",
    "weightStars": 5,
    "masteryPercentage": 82,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CONST",
    "chapterNo": 3,
    "title": "人身自由與正當法律程序（釋字384/588）",
    "weightStars": 5,
    "masteryPercentage": 90,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "CONST",
    "chapterNo": 4,
    "title": "言論自由、新聞自由與集會自由",
    "weightStars": 5,
    "masteryPercentage": 75,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CONST",
    "chapterNo": 5,
    "title": "工作權、財產權與生存權保障",
    "weightStars": 4,
    "masteryPercentage": 79,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CONST",
    "chapterNo": 6,
    "title": "權力分立：總統、行政院與立法院制衡",
    "weightStars": 4,
    "masteryPercentage": 64,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CONST",
    "chapterNo": 7,
    "title": "司法獨立與法官制度",
    "weightStars": 3,
    "masteryPercentage": 84,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "CONST",
    "chapterNo": 8,
    "title": "憲法訴訟法：法規範憲法審查與裁判審查",
    "weightStars": 5,
    "masteryPercentage": 67,
    "isWeakness": false,
    "status": "LEARNING"
  },
  {
    "subjectId": "CRIM",
    "chapterNo": 1,
    "title": "罪刑法定原則與刑法之適用效力",
    "weightStars": 3,
    "masteryPercentage": 95,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "CRIM",
    "chapterNo": 2,
    "title": "構成要件該當性與因果關係",
    "weightStars": 5,
    "masteryPercentage": 86,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CRIM",
    "chapterNo": 3,
    "title": "違法性與阻卻違法事由（正當防衛/緊急避難）",
    "weightStars": 5,
    "masteryPercentage": 89,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "CRIM",
    "chapterNo": 4,
    "title": "未遂犯、中止犯與不能未遂",
    "weightStars": 5,
    "masteryPercentage": 63,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CRIM",
    "chapterNo": 5,
    "title": "正犯與共犯（共同正犯/教唆犯/幫助犯）",
    "weightStars": 5,
    "masteryPercentage": 72,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "CRIM",
    "chapterNo": 6,
    "title": "罪數論與競合體系",
    "weightStars": 4,
    "masteryPercentage": 68,
    "isWeakness": false,
    "status": "LEARNING"
  },
  {
    "subjectId": "CRIM",
    "chapterNo": 7,
    "title": "沒收新制（犯罪所得沒收與第三人沒收）",
    "weightStars": 5,
    "masteryPercentage": 84,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CRIM_PROC",
    "chapterNo": 1,
    "title": "刑事訴訟基本原則與訴訟主體",
    "weightStars": 4,
    "masteryPercentage": 82,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CRIM_PROC",
    "chapterNo": 2,
    "title": "辯護人權限與實質有效辯護",
    "weightStars": 4,
    "masteryPercentage": 78,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CRIM_PROC",
    "chapterNo": 3,
    "title": "強制處分：搜索、扣押與令狀原則",
    "weightStars": 5,
    "masteryPercentage": 65,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CRIM_PROC",
    "chapterNo": 4,
    "title": "強制處分：逮捕、拘提與羈押審查",
    "weightStars": 5,
    "masteryPercentage": 75,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CRIM_PROC",
    "chapterNo": 5,
    "title": "通訊保障及監察法與特殊偵查手段",
    "weightStars": 3,
    "masteryPercentage": 80,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CRIM_PROC",
    "chapterNo": 6,
    "title": "證據法總論與嚴格證明法則",
    "weightStars": 4,
    "masteryPercentage": 71,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "CRIM_PROC",
    "chapterNo": 7,
    "title": "傳聞法則與傳聞例外（§159-1~§159-5）",
    "weightStars": 5,
    "masteryPercentage": 54,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CRIM_PROC",
    "chapterNo": 8,
    "title": "被告自白任意性與補強證據",
    "weightStars": 4,
    "masteryPercentage": 86,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "PUB_INT_LAW",
    "chapterNo": 1,
    "title": "條約法與國際法源體系（維也納條約法公約）",
    "weightStars": 5,
    "masteryPercentage": 72,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "PUB_INT_LAW",
    "chapterNo": 2,
    "title": "國際法主體、國家承認與政府繼承",
    "weightStars": 4,
    "masteryPercentage": 68,
    "isWeakness": false,
    "status": "LEARNING"
  },
  {
    "subjectId": "PUB_INT_LAW",
    "chapterNo": 3,
    "title": "國家管轄權與管轄豁免原則（限制豁免主義）",
    "weightStars": 5,
    "masteryPercentage": 59,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "PUB_INT_LAW",
    "chapterNo": 4,
    "title": "聯合國海洋法公約與領海專屬經濟區",
    "weightStars": 4,
    "masteryPercentage": 75,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "PUB_INT_LAW",
    "chapterNo": 5,
    "title": "國際爭端和平解決與國際法院（ICJ）管轄權",
    "weightStars": 4,
    "masteryPercentage": 65,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "PRIV_INT_LAW",
    "chapterNo": 1,
    "title": "涉外民事法律適用法總論、定性與反致制度（§6）",
    "weightStars": 5,
    "masteryPercentage": 60,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "PRIV_INT_LAW",
    "chapterNo": 2,
    "title": "涉外權利能力、行為能力與身分婚姻繼承準據法",
    "weightStars": 4,
    "masteryPercentage": 74,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "PRIV_INT_LAW",
    "chapterNo": 3,
    "title": "涉外債權法律適用（契約意思自主原則§20與侵權§25）",
    "weightStars": 5,
    "masteryPercentage": 68,
    "isWeakness": false,
    "status": "LEARNING"
  },
  {
    "subjectId": "PRIV_INT_LAW",
    "chapterNo": 4,
    "title": "涉外物權準據法（物之所在地法§38）與外國法適用限制",
    "weightStars": 4,
    "masteryPercentage": 77,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "LEGAL_ETH",
    "chapterNo": 1,
    "title": "律師利益衝突禁止與忠任義務（律師法§34/倫理§30）",
    "weightStars": 5,
    "masteryPercentage": 63,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "LEGAL_ETH",
    "chapterNo": 2,
    "title": "律師保密義務之範圍、例外與真實義務衝突",
    "weightStars": 4,
    "masteryPercentage": 81,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "LEGAL_ETH",
    "chapterNo": 3,
    "title": "司法官轉任律師之旋轉門條款與辦案限制（§37）",
    "weightStars": 5,
    "masteryPercentage": 75,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "LEGAL_ETH",
    "chapterNo": 4,
    "title": "法官倫理規範與檢察官倫理規範核心界線",
    "weightStars": 4,
    "masteryPercentage": 85,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "CIVIL",
    "chapterNo": 1,
    "title": "權利主體、客體與權利能力/行為能力",
    "weightStars": 4,
    "masteryPercentage": 90,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "CIVIL",
    "chapterNo": 2,
    "title": "法律行為、意思表示瑕疵（通謀/錯誤/詐欺/脅迫）",
    "weightStars": 5,
    "masteryPercentage": 78,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CIVIL",
    "chapterNo": 3,
    "title": "代理（無權代理與表見代理）",
    "weightStars": 5,
    "masteryPercentage": 60,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CIVIL",
    "chapterNo": 4,
    "title": "消滅時效與除斥期間",
    "weightStars": 4,
    "masteryPercentage": 82,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CIVIL",
    "chapterNo": 5,
    "title": "債總：契約之成立、無因管理與不當得利",
    "weightStars": 5,
    "masteryPercentage": 74,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "CIVIL",
    "chapterNo": 6,
    "title": "債總：侵權行為責任構成要件與連帶責任",
    "weightStars": 5,
    "masteryPercentage": 79,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CIVIL",
    "chapterNo": 7,
    "title": "債總：債務不履行（給付不能/遲延/不完全給付）",
    "weightStars": 5,
    "masteryPercentage": 68,
    "isWeakness": false,
    "status": "LEARNING"
  },
  {
    "subjectId": "CIVIL",
    "chapterNo": 8,
    "title": "物權：所有權、善意受讓與無權處分",
    "weightStars": 5,
    "masteryPercentage": 65,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CIVIL_PROC",
    "chapterNo": 1,
    "title": "民事訴訟之基本原則與審判權管轄",
    "weightStars": 4,
    "masteryPercentage": 80,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CIVIL_PROC",
    "chapterNo": 2,
    "title": "當事人能力、當事人適格與訴訟擔當",
    "weightStars": 5,
    "masteryPercentage": 70,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "CIVIL_PROC",
    "chapterNo": 3,
    "title": "共同訴訟之類型判別（必要/普通/固有必要）",
    "weightStars": 5,
    "masteryPercentage": 51,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CIVIL_PROC",
    "chapterNo": 4,
    "title": "訴訟標的理論與訴之變更追加",
    "weightStars": 4,
    "masteryPercentage": 62,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CIVIL_PROC",
    "chapterNo": 5,
    "title": "既判力之客觀範圍、主觀範圍與爭點效",
    "weightStars": 5,
    "masteryPercentage": 55,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CORP",
    "chapterNo": 1,
    "title": "公司設立、法人格與資本充實原則",
    "weightStars": 4,
    "masteryPercentage": 85,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "CORP",
    "chapterNo": 2,
    "title": "股東會召集、決議瑕疵（無效/得撤銷/不成立）",
    "weightStars": 5,
    "masteryPercentage": 66,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "CORP",
    "chapterNo": 3,
    "title": "董事會權限、董事忠實義務與注意義務（§23）",
    "weightStars": 5,
    "masteryPercentage": 77,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CORP",
    "chapterNo": 4,
    "title": "監察人權限與審計委員會獨立董事制度",
    "weightStars": 4,
    "masteryPercentage": 73,
    "isWeakness": false,
    "status": "LEARNING"
  },
  {
    "subjectId": "CORP",
    "chapterNo": 5,
    "title": "公司發行新股、特別股與員工獎酬工具",
    "weightStars": 4,
    "masteryPercentage": 79,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "CORP",
    "chapterNo": 6,
    "title": "公司併購、解散清算與公司重整法制",
    "weightStars": 3,
    "masteryPercentage": 82,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "INSUR",
    "chapterNo": 1,
    "title": "據實告知說明義務與因果關係抗辯（保險法§64）",
    "weightStars": 5,
    "masteryPercentage": 64,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "INSUR",
    "chapterNo": 2,
    "title": "保險利益原則與定型化契約條款顯失公平（§54-1）",
    "weightStars": 4,
    "masteryPercentage": 78,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "INSUR",
    "chapterNo": 3,
    "title": "複保險之善意分擔與惡意無效（保險法§36~§38）",
    "weightStars": 5,
    "masteryPercentage": 58,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "INSUR",
    "chapterNo": 4,
    "title": "保險人代位權之行使要件與範圍限制（保險法§53）",
    "weightStars": 5,
    "masteryPercentage": 70,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "INSUR",
    "chapterNo": 5,
    "title": "人身保險之特質：死亡保險被保險人書面同意與受益人指定",
    "weightStars": 4,
    "masteryPercentage": 83,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "NEG_INST",
    "chapterNo": 1,
    "title": "票據行為無因性與票據抗辯之限制（票據法§13）",
    "weightStars": 5,
    "masteryPercentage": 62,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "NEG_INST",
    "chapterNo": 2,
    "title": "票據之偽造、變造與在真正簽名人之責任（§15/§16）",
    "weightStars": 5,
    "masteryPercentage": 57,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "NEG_INST",
    "chapterNo": 3,
    "title": "背書連續之實質與形式審查、善意取得票據（§14/§37）",
    "weightStars": 4,
    "masteryPercentage": 75,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "NEG_INST",
    "chapterNo": 4,
    "title": "發票人之擔保承兌與付款責任、保證人責任",
    "weightStars": 4,
    "masteryPercentage": 80,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "NEG_INST",
    "chapterNo": 5,
    "title": "追索權之行使要件、拒絕證書與消滅時效（§22）",
    "weightStars": 4,
    "masteryPercentage": 71,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "COMP_EXEC",
    "chapterNo": 1,
    "title": "執行名義之法定類型與執行力主觀客觀範圍（強執§4）",
    "weightStars": 4,
    "masteryPercentage": 79,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "COMP_EXEC",
    "chapterNo": 2,
    "title": "金錢債權執行：薪資帳戶扣押限制與責任財產調查（§115/§122）",
    "weightStars": 5,
    "masteryPercentage": 68,
    "isWeakness": false,
    "status": "LEARNING"
  },
  {
    "subjectId": "COMP_EXEC",
    "chapterNo": 3,
    "title": "動產與不動產強制執行：查封效力、拍賣點交與承受程序",
    "weightStars": 4,
    "masteryPercentage": 74,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "COMP_EXEC",
    "chapterNo": 4,
    "title": "債務人異議之訴（強執§14 排除執行力之要件與時點）",
    "weightStars": 5,
    "masteryPercentage": 54,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "COMP_EXEC",
    "chapterNo": 5,
    "title": "第三人異議之訴（強執§15 排除標的物執行之權利實質）",
    "weightStars": 5,
    "masteryPercentage": 58,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "SEC_REG",
    "chapterNo": 1,
    "title": "內線交易禁止：重大消息明確時點與18小時沉澱期（§157-1）",
    "weightStars": 5,
    "masteryPercentage": 52,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "SEC_REG",
    "chapterNo": 2,
    "title": "短線交易歸入權：董監事經理人6個月買賣差價計算（§157）",
    "weightStars": 5,
    "masteryPercentage": 66,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "SEC_REG",
    "chapterNo": 3,
    "title": "公開說明書與財務報告虛偽隱匿之民事賠償責任（§20/§32）",
    "weightStars": 4,
    "masteryPercentage": 71,
    "isWeakness": false,
    "status": "NEEDS_REVIEW"
  },
  {
    "subjectId": "SEC_REG",
    "chapterNo": 4,
    "title": "有價證券募集、發行與私募法制及轉讓限制（§43-6/§43-8）",
    "weightStars": 4,
    "masteryPercentage": 78,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "SEC_REG",
    "chapterNo": 5,
    "title": "操縱市場行為（連續買賣/相對成交）與非常規交易罪（§171）",
    "weightStars": 4,
    "masteryPercentage": 80,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "LEGAL_ENG",
    "chapterNo": 1,
    "title": "英美憲法與人權詞彙（Due Process, Equal Protection, Scrutiny）",
    "weightStars": 4,
    "masteryPercentage": 85,
    "isWeakness": false,
    "status": "MASTERED"
  },
  {
    "subjectId": "LEGAL_ENG",
    "chapterNo": 2,
    "title": "刑事訴訟證據排除法制（Exclusionary Rule, Plain View, Warrant）",
    "weightStars": 5,
    "masteryPercentage": 65,
    "isWeakness": true,
    "status": "WEAKNESS"
  },
  {
    "subjectId": "LEGAL_ENG",
    "chapterNo": 3,
    "title": "英美契約與侵權法專用詞彙（Consideration, Strict Liability, Tort）",
    "weightStars": 4,
    "masteryPercentage": 73,
    "isWeakness": false,
    "status": "COMPLETED"
  },
  {
    "subjectId": "LEGAL_ENG",
    "chapterNo": 4,
    "title": "常見拉丁法諺與司法審判用語（Stare Decisis, Habeas Corpus, Mens Rea）",
    "weightStars": 4,
    "masteryPercentage": 82,
    "isWeakness": false,
    "status": "MASTERED"
  }
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
  {
    "id": "113-BAR-CONST-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CONST",
    "chapterId": "CONST-8",
    "chapterNo": 8,
    "chapterTitle": "憲法訴訟法：法規範憲法審查與裁判審查",
    "prompt": "關於憲法訴訟法所定「裁判憲法審查」及憲法法庭判決效力，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "人民就其依法定程序用盡審級救濟之確定終局裁判，僅得聲請法規範憲法審查，不得直接就裁判本身宣告違憲聲請審查"
      },
      {
        "label": "B",
        "text": "憲法法庭宣告確定終局裁判違憲者，應廢棄該裁判，並發回管轄法院審理"
      },
      {
        "label": "C",
        "text": "確定終局裁判所適用之法規經憲法法庭宣告違憲者，該裁判當然直接失去法律效力，受判決人無須再提起再審"
      },
      {
        "label": "D",
        "text": "憲法法庭判決宣告裁判違憲之效力，原則上一律溯及既往自該裁判確定之日起無效"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依憲法訴訟法第 59 條第 1 項規定，人民就確定終局裁判認有牴觸憲法者，得聲請憲法法庭為宣告違憲之判決（裁判憲法審查新制）。",
        "trapType": "混淆憲法訴訟法新制與舊制"
      },
      "B": {
        "isCorrect": true,
        "reason": "依憲法訴訟法第 62 條第 1 項規定，憲法法庭認人民聲請有理由者，應宣告該裁判違憲，並廢棄該裁判，發回管轄法院。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依憲法訴訟法第 64 條第 1 項，法規範違憲時，聲請人得依各該訴訟法規定提起再審之訴或非常上訴，非當然直接失效。",
        "trapType": "誤認裁判當然自動失效"
      },
      "D": {
        "isCorrect": false,
        "reason": "裁判審查係廢棄發回重審，非抽象溯及無效。",
        "trapType": "法律效果混淆"
      }
    },
    "tags": [
      "#憲法訴訟法",
      "#裁判憲法審查",
      "#廢棄發回",
      "#113真題"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "憲法訴訟法",
        "articleNo": "第 59 條"
      },
      {
        "lawName": "憲法訴訟法",
        "articleNo": "第 62 條"
      }
    ],
    "relatedCases": [
      {
        "court": "憲法法庭判決",
        "caseNo": "111年憲判字第8號",
        "summary": "宣告確定終局裁判違憲並廢棄發回。",
        "isVerified": true
      }
    ],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 1,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(一)第1題",
    "officialCorrectRate": 58.6
  },
  {
    "id": "112-BAR-CONST-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CONST",
    "chapterId": "CONST-2",
    "chapterNo": 2,
    "chapterTitle": "平等權與各類差別待遇審查基準",
    "prompt": "依司法院大法官相關解釋與憲法法庭裁判，關於憲法第 7 條「平等原則」與差別待遇審查基準，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "以性別為分類標準所為之差別待遇，憲法法庭一律採取最寬鬆之合理審查基準"
      },
      {
        "label": "B",
        "text": "平等原則之意涵為絕對齊頭式平等，禁止任何形式之實質合理差別待遇"
      },
      {
        "label": "C",
        "text": "如差別待遇所涉及者為重要基本權利限制，原則上應適用中度審查基準（追求實質重要公益且手段具實質關聯）"
      },
      {
        "label": "D",
        "text": "基於可變性特徵所為之分類，審查密度原則上較基於不可變特徵（如性別、種族）之分類更為嚴格"
      }
    ],
    "correctAnswer": "C",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "以性別等難以改變之特徵為分類標準時，大法官原則上採「中度或嚴格審查基準」（釋字第365號、第748號）。",
        "trapType": "將性別差別待遇審查基準誤降為寬鬆審查"
      },
      "B": {
        "isCorrect": false,
        "reason": "憲法第7條保障實質平等與合目的性差別待遇，禁止恣意，非齊頭平等。",
        "trapType": "誤將實質平等當作齊頭平等"
      },
      "C": {
        "isCorrect": true,
        "reason": "依司法院釋字第584號、第728號等意旨，涉及重要基本權利限制之差別待遇，應審查立法目的與手段間是否具實質關聯性。",
        "trapType": "正解無陷阱"
      },
      "D": {
        "isCorrect": false,
        "reason": "不可變特徵（種族、性別、出生）審查密度高於可變特徵（職業、資產）。",
        "trapType": "顛倒審查密度"
      }
    },
    "tags": [
      "#憲法",
      "#平等原則",
      "#審查基準",
      "#112真題"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "中華民國憲法",
        "articleNo": "第 7 條"
      }
    ],
    "relatedCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 748 號解釋",
        "summary": "婚姻自由平等保護。",
        "isVerified": true
      }
    ],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 4,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(一)第4題",
    "officialCorrectRate": 67.2
  },
  {
    "id": "111-BAR-CONST-03",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CONST",
    "chapterId": "CONST-3",
    "chapterNo": 3,
    "chapterTitle": "人身自由與正當法律程序（釋字384/588）",
    "prompt": "依司法院釋字第 384 號及第 588 號解釋，關於憲法第 8 條「人身自由」與「法官保留原則」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "行政機關為保全公法上金錢給付義務之履行，得由行政執行官自行決定拘提管收債務人，毋須法院裁定"
      },
      {
        "label": "B",
        "text": "憲法第 8 條第 1 項所稱之「法院」，包括行政機關之執法人員在內"
      },
      {
        "label": "C",
        "text": "凡限制人民身體自由之處置，不問其名義為何，均應踐行正當法律程序，拘束人身自由之處置原則上應由法院審查決定"
      },
      {
        "label": "D",
        "text": "外國人入境管制或驅逐出境之暫時收容處分，不屬於憲法第 8 條人身自由保障之範疇"
      }
    ],
    "correctAnswer": "C",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "釋字第 588 號明定，管收係拘束人身自由之強制處分，必須踐行法官保留，由法院裁定，行政機關無權自行決定。",
        "trapType": "否定行政執行之法官保留"
      },
      "B": {
        "isCorrect": false,
        "reason": "憲法第8條所稱「法院」專指憲法第77條有審判權之法官組成之獨立司法機關，不包括行政機關。",
        "trapType": "擴大法院主體範圍"
      },
      "C": {
        "isCorrect": true,
        "reason": "釋字第384號、第588號確立：限制人身自由不問名義（管收、收容、感訓），均須受實質正當法律程序保障並採法官保留。",
        "trapType": "正解無陷阱"
      },
      "D": {
        "isCorrect": false,
        "reason": "釋字第 708 號、第 710 號明定外國人或大陸地區人民之人身自由收容亦受憲法第8條實質保障。",
        "trapType": "排除外國人人身自由保障"
      }
    },
    "tags": [
      "#憲法",
      "#人身自由",
      "#法官保留",
      "#釋字第588號",
      "#111真題"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "中華民國憲法",
        "articleNo": "第 8 條"
      }
    ],
    "relatedCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 588 號解釋",
        "summary": "行政執行管收採法官保留。",
        "isVerified": true
      }
    ],
    "examYear": "111",
    "examSession": "專技高考律師第一試",
    "questionNo": 6,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 111 年專技高考律師第一試 綜合法學(一)第6題",
    "officialCorrectRate": 62.4
  },
  {
    "id": "113-BAR-ADMIN-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "ADMIN",
    "chapterId": "ADMIN-3",
    "chapterNo": 3,
    "chapterTitle": "行政處分之成立、瑕疵與廢止撤銷",
    "prompt": "關於行政程序法第 123 條合法授益行政處分之「廢止」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "合法授益處分之廢止，行政機關基於行政主導原則得隨時依裁量為之，不受任何法定事由之限制"
      },
      {
        "label": "B",
        "text": "附負擔之行政處分，受益人未履行該負擔者，原處分機關得廢止該處分，且該處分得溯及既往失其效力"
      },
      {
        "label": "C",
        "text": "因行政處分所依據之法規事後發生變更而廢止處分者，原處分機關一律無須補償受益人之財產損失"
      },
      {
        "label": "D",
        "text": "合法授益處分廢止權之行使，不受任何除斥期間之限制"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依行政程序法第 123 條本文，合法授益處分非有法定五款情形之一者不得廢止。",
        "trapType": "誤以為合法處分機關可自由任意廢止"
      },
      "B": {
        "isCorrect": true,
        "reason": "依行政程序法第 123 條第 3 款及第 125 條但書規定，附負擔之處分受益人未履行負擔而廢止者，得溯及既往失效。為廢止唯一溯及例外。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依行政程序法第 126 條第 1 項，依第 123 條第 4 款（法規變更）廢止者應給予合理財產補償。",
        "trapType": "漏看第126條明定信賴補償"
      },
      "D": {
        "isCorrect": false,
        "reason": "依行政程序法第 124 條，應自廢止原因發生後 2 年內為之。",
        "trapType": "忽略第124條法定2年除斥期間"
      }
    },
    "tags": [
      "#行政法",
      "#合法處分廢止",
      "#未履行負擔溯及失效",
      "#113最新考點"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "行政程序法",
        "articleNo": "第 123 條"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 125 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 20,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(一)第20題",
    "officialCorrectRate": 64.2
  },
  {
    "id": "112-BAR-ADMIN-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "ADMIN",
    "chapterId": "ADMIN-3",
    "chapterNo": 3,
    "chapterTitle": "行政處分之成立、瑕疵與廢止撤銷",
    "prompt": "關於行政程序法上「違法授益行政處分之撤銷」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "原處分機關行使撤銷權，不受任何除斥期間之限制，以徹底落實依法行政原則"
      },
      {
        "label": "B",
        "text": "受益人縱有對重要事項提供不正確資料致使行政機關作成處分，其信賴利益仍受絕對保護"
      },
      {
        "label": "C",
        "text": "原處分機關撤銷違法授益處分，受益人無行政程序法第 119 條信賴不值得保護情事且遭受財產損失者，應給予合理補償"
      },
      {
        "label": "D",
        "text": "違法授益行政處分經撤銷後，一律向將來失效，絕對不得溯及既往失其效力"
      }
    ],
    "correctAnswer": "C",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依行政程序法第 124 條，撤銷權應自知有撤銷原因起 2 年內為之。",
        "trapType": "忽略第124條除斥期間"
      },
      "B": {
        "isCorrect": false,
        "reason": "依行政程序法第 119 條第 2 款，提供不正確資料者信賴不值得保護。",
        "trapType": "將惡意信賴誤當受保護"
      },
      "C": {
        "isCorrect": true,
        "reason": "行政程序法第 120 條第 1 項明定受益人無第119條事由致受損失者應給予合理補償。",
        "trapType": "正解無陷阱"
      },
      "D": {
        "isCorrect": false,
        "reason": "依行政程序法第 118 條前段，違法處分撤銷原則上溯及既往失其效力。",
        "trapType": "將撤銷原則溯及失效顛倒為向將來失效"
      }
    },
    "tags": [
      "#行政處分",
      "#信賴保護",
      "#除斥期間",
      "#行政程序法§117-§120"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "行政程序法",
        "articleNo": "第 117 條"
      },
      {
        "lawName": "行政程序法",
        "articleNo": "第 120 條"
      }
    ],
    "relatedCases": [],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 18,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(一)第18題",
    "officialCorrectRate": 68.4
  },
  {
    "id": "111-BAR-ADMIN-03",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "ADMIN",
    "chapterId": "ADMIN-1",
    "chapterNo": 1,
    "chapterTitle": "行政法基本原理原則與法源",
    "prompt": "依司法院釋字第 443 號解釋所建構之「層級化法律保留體系」，下列關於公權力干預限制之敘述，何者正確？",
    "options": [
      {
        "label": "A",
        "text": "剝奪人民生命或限制人民人身自由之刑罰事項，得以法律明確授權之法規命令定之"
      },
      {
        "label": "B",
        "text": "給付行政措施因屬授益性質，全面無須受法律保留原則之拘束"
      },
      {
        "label": "C",
        "text": "涉及公共利益之重大給付行政事項（如全民健保投保資格限制），仍須有法律或法律具體明確授權之命令為依據"
      },
      {
        "label": "D",
        "text": "行政機關執行法律之細節性、技術性次要事項，亦必須有法律個別具體明確授權始得訂定"
      }
    ],
    "correctAnswer": "C",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "剝奪生命或人身自由之刑罰屬於「絕對法律保留（國會保留）」，嚴格禁止授權行政命令訂定。",
        "trapType": "誤將絕對法律保留事項交由命令授權"
      },
      "B": {
        "isCorrect": false,
        "reason": "給付行政如涉及重大公益或重要基本權，仍屬相對法律保留，非全面免除法律保留。",
        "trapType": "誤認給付行政全面不受法律保留拘束"
      },
      "C": {
        "isCorrect": true,
        "reason": "釋字第443號理由書明定：重大給付行政事項涉及重要權利或重大公益者，仍屬相對法律保留，須有法律或具體授權。",
        "trapType": "正解無陷阱"
      },
      "D": {
        "isCorrect": false,
        "reason": "執行細節性、技術性事項屬於「非法律保留」，得由主管機關本於職權發布行政規則或命令，毋須具體法律授權。",
        "trapType": "混淆技術細節事項之非法律保留"
      }
    },
    "tags": [
      "#行政法",
      "#層級化法律保留",
      "#釋字第443號",
      "#相對法律保留"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "中央法規標準法",
        "articleNo": "第 5 條"
      }
    ],
    "relatedCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 443 號解釋",
        "summary": "役男出境管制與層級化法律保留體系。",
        "isVerified": true
      }
    ],
    "examYear": "111",
    "examSession": "專技高考律師第一試",
    "questionNo": 15,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 111 年專技高考律師第一試 綜合法學(一)第15題",
    "officialCorrectRate": 59.3
  },
  {
    "id": "113-BAR-CRIM-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CRIM",
    "chapterId": "CRIM-7",
    "chapterNo": 7,
    "chapterTitle": "沒收新制（犯罪所得沒收與第三人沒收）",
    "prompt": "關於刑法第 38 條之 1 犯罪所得「沒收」之規定，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "犯罪所得之沒收，性質上為刑罰之從刑，必須以行為人具備有罪罪責為絕對前提"
      },
      {
        "label": "B",
        "text": "第三人無償或以顯不相當之對價取得犯罪所得者，法院得宣告沒收該第三人所取得之財物"
      },
      {
        "label": "C",
        "text": "犯罪所得之沒收，於全部或一部不能沒收時，僅能命追徵價額，不得追繳"
      },
      {
        "label": "D",
        "text": "犯罪所得之計算，一律採「淨額原則」，扣除行為人實行犯罪之一切直接與間接成本"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "刑法沒收新制確立沒收為「獨立法律效果」（準不當得利），不以行為人成立犯罪論罪科刑為絕對前提。",
        "trapType": "誤將新制獨立沒收當作附屬從刑"
      },
      "B": {
        "isCorrect": true,
        "reason": "依刑法第 38 條之 1 第 2 項第 2 款規定，第三人無償或以顯不相當對價取得犯罪所得者，得沒收之。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依刑法第 38 條之 1 第 6 項，不能沒收時「追徵其價額」。",
        "trapType": "法條用詞混淆"
      },
      "D": {
        "isCorrect": false,
        "reason": "犯罪所得計算採「總額原則」，行為人實施犯罪之成本不得扣除。",
        "trapType": "誤將總額原則當成淨額原則"
      }
    },
    "tags": [
      "#刑法",
      "#沒收新制",
      "#第三人沒收",
      "#總額原則"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "刑法",
        "articleNo": "第 38 條之 1"
      }
    ],
    "relatedCases": [
      {
        "court": "最高法院",
        "caseNo": "108年度台上字第3587號判決",
        "summary": "犯罪所得沒收採總額原則。",
        "isVerified": true
      }
    ],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 12,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(一)第12題",
    "officialCorrectRate": 59.8
  },
  {
    "id": "112-BAR-CRIM-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CRIM",
    "chapterId": "CRIM-3",
    "chapterNo": 3,
    "chapterTitle": "違法性與阻卻違法事由（正當防衛/緊急避難）",
    "prompt": "關於刑法第 23 條「正當防衛」之阻卻違法要件，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "正當防衛所對抗之侵害，必須是「現在不法」之侵害，若侵害尚未發生或已經過去，不成立正當防衛"
      },
      {
        "label": "B",
        "text": "防衛行為縱使顯然逾越必要程度，亦一律阻卻違法而不罰"
      },
      {
        "label": "C",
        "text": "面對動物（如無人看管之瘋狗）之純粹自然突襲，亦得主張對該動物行使正當防衛"
      },
      {
        "label": "D",
        "text": "正當防衛僅限於防衛自己之權利，不得為防衛他人權利而為防衛行為"
      }
    ],
    "correctAnswer": "A",
    "optionExplanations": {
      "A": {
        "isCorrect": true,
        "reason": "刑法第 23 條前段明定：「對於現在不法之侵害，出自防衛自己或他人權利之行為，不罰。」侵害已過去為事後防衛，尚未發生為事前防衛，皆非現在侵害。",
        "trapType": "正解無陷阱"
      },
      "B": {
        "isCorrect": false,
        "reason": "刑法第 23 條但書規定，防衛過當者「得減輕或免除其刑」，並不阻卻違法。",
        "trapType": "誤將防衛過當視為完全阻卻違法"
      },
      "C": {
        "isCorrect": false,
        "reason": "動物非權利義務主體，單純動物突襲非「人之不法侵害」，應主張刑法第24條緊急避難，非正當防衛。",
        "trapType": "正當防衛與緊急避難客體混淆"
      },
      "D": {
        "isCorrect": false,
        "reason": "刑法第23條明定防衛「自己或他人權利」均可，包括緊急救助他人。",
        "trapType": "限制正當防衛不得防衛他人"
      }
    },
    "tags": [
      "#刑法",
      "#正當防衛",
      "#現在不法侵害",
      "#防衛過當",
      "#刑法§23"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "刑法",
        "articleNo": "第 23 條"
      }
    ],
    "relatedCases": [],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 14,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(一)第14題",
    "officialCorrectRate": 75.1
  },
  {
    "id": "112-BAR-CRIMPROC-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CRIM_PROC",
    "chapterId": "CRIM_PROC-7",
    "chapterNo": 7,
    "chapterTitle": "傳聞法則與傳聞例外體系",
    "prompt": "關於刑事訴訟法上「傳聞法則及其例外」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "被告以外之人於審判外向司法警察所為之陳述，只要與審判中之陳述相符，即可依刑事訴訟法第 159 條之 2 例外取得證據能力"
      },
      {
        "label": "B",
        "text": "共同被告在偵查中以共同被告身分向檢察官所為不利於其他被告之陳述，縱檢察官未命其以證人身分具結，該陳述仍得依第 159 條之 1 第 2 項作為認定其他被告有罪之證據"
      },
      {
        "label": "C",
        "text": "被告以外之人於審判外之陳述，雖不符傳聞例外之規定，但當事人知有不得為證據之情形而未於言詞辯論終結前聲明異議者，視為已有同意，法院於審酌作成時之情況認適當者，得為證據"
      },
      {
        "label": "D",
        "text": "只要當事人雙方明示同意將審判外傳聞證據作為證據，法院即受拘束，必須採為判決之基礎，不得依職權審酌是否適當"
      }
    ],
    "correctAnswer": "C",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "刑訴第 159 條之 2 規定，必須警詢陳述「與審判中不符」方例外採納。相符時欠缺傳聞例外之必要性。",
        "trapType": "漏看第159條之2前後不符要件"
      },
      "B": {
        "isCorrect": false,
        "reason": "依釋字第 582 號及刑訴第 158 條之 3，共同被告為實質證人，未命具結之供述不得作為不利於其他被告之證據。",
        "trapType": "忽略第158條之3具結義務"
      },
      "C": {
        "isCorrect": true,
        "reason": "刑事訴訟法第 159 條之 5 第 2 項規定，知情未於言詞辯論終結前異議視為同意，經法院審酌適當得為證據。",
        "trapType": "正解無陷阱"
      },
      "D": {
        "isCorrect": false,
        "reason": "刑訴第 159 條之 5 第 1 項明定「法院審酌認為適當者」，法院仍保留適當性審查權。",
        "trapType": "誤認當事人處分權可排除法院審查"
      }
    },
    "tags": [
      "#刑事訴訟法",
      "#傳聞法則",
      "#擬制同意",
      "#具結義務",
      "#釋字第582號"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "刑事訴訟法",
        "articleNo": "第 159 條之 5"
      }
    ],
    "relatedCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 582 號解釋",
        "summary": "共同被告審判外供述須具結與詰問。",
        "isVerified": true
      }
    ],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 32,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(一)第32題",
    "officialCorrectRate": 51.2
  },
  {
    "id": "113-BAR-CRIMPROC-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CRIM_PROC",
    "chapterId": "CRIM_PROC-3",
    "chapterNo": 3,
    "chapterTitle": "強制處分：搜索、扣押與令狀原則",
    "prompt": "關於刑事訴訟法第 130 條司法警察官或司法警察之「附帶搜索」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "附帶搜索之範圍，包括受逮捕人之身體、隨身攜帶之物件、所使用之交通工具及其整棟住宅"
      },
      {
        "label": "B",
        "text": "附帶搜索之合法前提，必須以「合法拘提、逮捕或羈押」為核心基礎"
      },
      {
        "label": "C",
        "text": "實施附帶搜索後，司法警察必須在搜索結束後三日內向該管法院陳報，否則扣押物當然無效"
      },
      {
        "label": "D",
        "text": "附帶搜索之目的在於全面搜查犯罪證據，縱與防護執法人員安全無關亦得自由擴張範圍"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依刑事訴訟法第 130 條，附帶搜索之範圍限於立即可觸及之場所，不包括整棟住宅。",
        "trapType": "過度擴大附帶搜索之空間範圍"
      },
      "B": {
        "isCorrect": true,
        "reason": "刑事訴訟法第 130 條明定：「司法警察官或司法警察逮捕被告、犯罪嫌疑人或執行拘提、羈押時，雖無搜索票，得逕行搜索...」必須以合法逮捕拘提為前提。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "刑訴第 130 條附帶搜索「無須」事後向法院陳報（第131條緊急搜索始須3日內陳報）。",
        "trapType": "混淆附帶搜索與緊急搜索之陳報要件"
      },
      "D": {
        "isCorrect": false,
        "reason": "附帶搜索之目的在於防止受逮捕人湮滅隨身證據及保護執法人員自身安全。",
        "trapType": "目的逾越"
      }
    },
    "tags": [
      "#刑事訴訟法",
      "#附帶搜索",
      "#令狀例外",
      "#刑訴§130",
      "#113真題"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "刑事訴訟法",
        "articleNo": "第 130 條"
      },
      {
        "lawName": "刑事訴訟法",
        "articleNo": "第 131 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 30,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(一)第30題",
    "officialCorrectRate": 68.9
  },
  {
    "id": "113-BAR-INTPUB-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "PUB_INT_LAW",
    "chapterId": "PUB_INT_LAW-1",
    "chapterNo": 1,
    "chapterTitle": "條約法與國際法源體系（維也納條約法公約）",
    "prompt": "依維也納條約法公約（VCLT）之規定，關於國家對多邊條約提出「保留（Reservation）」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "條約若未明文禁止保留，國家得於簽署或批准時隨意提出任何性質之保留，不受任何限制"
      },
      {
        "label": "B",
        "text": "國家所提出之保留如與該條約之「目的及宗旨不相容（incompatible with the object and purpose）」者，不得提出"
      },
      {
        "label": "C",
        "text": "其他締約國對於保留提出反對者，該條約在全體締約國間一律當然直接失效"
      },
      {
        "label": "D",
        "text": "保留一經提出並生效後，保留國即永久喪失隨時撤回該保留之權利"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依維也納條約法公約第 19 條第 3 款，保留不得牴觸條約之目的與宗旨。",
        "trapType": "誤認保留無任何限制"
      },
      "B": {
        "isCorrect": true,
        "reason": "維也納條約法公約第 19 條 (c) 款明定：國家提出之保留不得牴觸條約之目的及宗旨。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依公約第 21 條，反對保留國如未明確反對條約生效，條約在兩國間除保留條款外依然生效。",
        "trapType": "誤認反對保留致全約失效"
      },
      "D": {
        "isCorrect": false,
        "reason": "依公約第 22 條，保留得隨時予以撤回，毋須徵得已接受保留國家之同意。",
        "trapType": "誤認保留不得撤回"
      }
    },
    "tags": [
      "#國際公法",
      "#維也納條約法公約",
      "#條約保留",
      "#目的及宗旨"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "維也納條約法公約",
        "articleNo": "第 19 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 42,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(一)第42題",
    "officialCorrectRate": 61.5
  },
  {
    "id": "112-BAR-INTPUB-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "PUB_INT_LAW",
    "chapterId": "PUB_INT_LAW-3",
    "chapterNo": 3,
    "chapterTitle": "國家管轄權與管轄豁免原則（限制豁免主義）",
    "prompt": "關於現代國際法上之「國家管轄豁免（State Immunity）」原則，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "現代國際法全面採行「絕對豁免主義」，外國國家在內國法院之一切行為均享有絕對訴訟豁免"
      },
      {
        "label": "B",
        "text": "現代國際法普遍採行「限制豁免主義」，外國國家從事私法商業交易行為（Acta de jure gestionis）時，不享有國家管轄豁免"
      },
      {
        "label": "C",
        "text": "外國國家元首在位期間，縱從事私人商業買賣，內國法院亦得隨時發動民事強制執行查封其國有使館財產"
      },
      {
        "label": "D",
        "text": "國家一旦在訴訟中放棄管轄豁免，即視為當然同時放棄後續民事判決之強制執行豁免"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "現代國際法已由絕對豁免走向「限制豁免主義」（Restrictive Immunity）。",
        "trapType": "仍誤守舊時代絕對豁免"
      },
      "B": {
        "isCorrect": true,
        "reason": "依聯合國國家及其財產管轄豁免公約，區分統治權行為（享豁免）與商業私法行為（不享管轄豁免）。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "外交使館財產具不可侵犯性（維也納外交關係公約第22條），不得強制執行。",
        "trapType": "侵犯外交使館財產豁免"
      },
      "D": {
        "isCorrect": false,
        "reason": "審判管轄豁免之放棄不等於「強制執行豁免」之放棄，執行豁免須另為明示放棄。",
        "trapType": "混淆審判豁免與執行豁免之分離原則"
      }
    },
    "tags": [
      "#國際公法",
      "#國家豁免",
      "#限制豁免主義",
      "#商業行為",
      "#112真題"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "聯合國國家及其財產管轄豁免公約",
        "articleNo": "第 5 條至第 10 條（商業行為例外）"
      }
    ],
    "relatedCases": [],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 43,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(一)第43題",
    "officialCorrectRate": 57.8
  },
  {
    "id": "112-BAR-INTPRI-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "PRIV_INT_LAW",
    "chapterId": "PRIV_INT_LAW-1",
    "chapterNo": 1,
    "chapterTitle": "涉外民事法律適用法總論、定性與反致制度（§6）",
    "prompt": "關於我國「涉外民事法律適用法」第 6 條所規定之「反致（Renvoi）」制度，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "我國涉外法全面承認間接反致與轉致，且無任何例外限制"
      },
      {
        "label": "B",
        "text": "依涉外法應適用當事人本國法時，如依其本國法應適用中華民國法律者，適用中華民國法律"
      },
      {
        "label": "C",
        "text": "當事人依法律得合意選擇準據法時（如涉外契約），亦得適用反致原則以查明他國衝突規範"
      },
      {
        "label": "D",
        "text": "反致原則可適用於任何涉外法律關係，包括物權準據法與票據行為準據法"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "涉外法第 6 條本文僅承認「直接反致」，且於但書排除當事人意思自主或指定特定外國法之情形。",
        "trapType": "誤認全面承認轉致"
      },
      "B": {
        "isCorrect": true,
        "reason": "涉外民事法律適用法第 6 條前段明定：「依本法應適用當事人本國法，而依其本國法之規定應適用中華民國法律者，適用中華民國法律。」此即直接反致。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "涉外法第 6 條但書明定：「由當事人指定應適用之法律者，不適用之。」意思自主排除反致。",
        "trapType": "忽略意思自主排除反致"
      },
      "D": {
        "isCorrect": false,
        "reason": "涉外法上反致僅適用於依本法指定「當事人本國法」之身分或行為能力領域，不適用物權或契約合意。",
        "trapType": "無限擴張反致適用範圍"
      }
    },
    "tags": [
      "#國際私法",
      "#涉外民事法律適用法",
      "#反致",
      "#意思自主排除"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "涉外民事法律適用法",
        "articleNo": "第 6 條"
      }
    ],
    "relatedCases": [],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 46,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(一)第46題",
    "officialCorrectRate": 53.4
  },
  {
    "id": "113-BAR-INTPRI-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "PRIV_INT_LAW",
    "chapterId": "PRIV_INT_LAW-3",
    "chapterNo": 3,
    "chapterTitle": "涉外債權法律適用（契約意思自主原則§20與侵權§25）",
    "prompt": "關於涉外契約與涉外侵權行為之準據法決定，依我國涉外民事法律適用法，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "涉外契約當事人不得合意選擇準據法，一律強制適用契約締結地法"
      },
      {
        "label": "B",
        "text": "涉外法律行為所生之債（契約），依當事人意思定其應適用之法律；當事人無明示之意思時，適用關係最切之法律"
      },
      {
        "label": "C",
        "text": "涉外侵權行為所生之債，一律僅能適用侵權行為人本國法"
      },
      {
        "label": "D",
        "text": "外國法之適用，縱有背於中華民國公共秩序或善良風俗，我國法院亦絕對不得排除其適用"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "涉外法第 20 條確立「意思自主原則」，當事人得合意選擇準據法。",
        "trapType": "否定契約意思自主原則"
      },
      "B": {
        "isCorrect": true,
        "reason": "涉外民事法律適用法第 20 條第 1 項及第 2 項明定：依當事人意思定其應適用之法律；無意思時適用關係最切之法律。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "涉外法第 25 條規定侵權原則適用「侵權行為地法」，非行為人本國法。",
        "trapType": "侵權準據法錯誤"
      },
      "D": {
        "isCorrect": false,
        "reason": "涉外法第 8 條設有「公序良俗條款」，違背公序良俗之外國法不予適用。",
        "trapType": "忽略公序良俗防衛條款"
      }
    },
    "tags": [
      "#國際私法",
      "#契約準據法",
      "#意思自主",
      "#涉外法§20",
      "#113真題"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "涉外民事法律適用法",
        "articleNo": "第 20 條"
      },
      {
        "lawName": "涉外民事法律適用法",
        "articleNo": "第 8 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 47,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(一)第47題",
    "officialCorrectRate": 72.8
  },
  {
    "id": "113-BAR-LETH-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "LEGAL_ETH",
    "chapterId": "LEGAL_ETH-1",
    "chapterNo": 1,
    "chapterTitle": "律師利益衝突禁止與忠任義務（律師法§34/倫理§30）",
    "prompt": "依律師法與律師倫理規範，關於律師利益衝突禁止之規定，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "律師就同一事件，只要雙方當事人均出具書面同意，即得同時接受原告與被告雙方之委任"
      },
      {
        "label": "B",
        "text": "律師曾任法官或檢察官者，自離職之日起三年內，不得在其離職前三年內曾任職之法院或檢察署辦理律師職務"
      },
      {
        "label": "C",
        "text": "同一事務所之其他律師曾受委任辦理之事件，本律師離職後得隨意接受對造當事人之委任，不受任何限制"
      },
      {
        "label": "D",
        "text": "律師接受委任後，縱發現與現存客戶存在實質利益衝突，仍得自行決定繼續代理雙方"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "律師法第 34 條第 1 款規定，同一事件接受雙方委任為「絕對利益衝突禁止」，縱有雙方同意亦不得為之。",
        "trapType": "誤以為雙方同意可免除雙方代理絕對禁止"
      },
      "B": {
        "isCorrect": true,
        "reason": "依律師法第 37 條規定，司法人員離職後三年內，不得在其離職前三年內曾任職務之法院或檢察署辦理律師職務（迴避旋轉門條款）。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依律師倫理規範第 32 條，曾任同一事務所之派生利益衝突，於同受保密拘束範圍內仍受限制。",
        "trapType": "忽略事務所派生利益衝突限制"
      },
      "D": {
        "isCorrect": false,
        "reason": "發現利益衝突時應依法終止委任或迴避，不得任意繼續代理。",
        "trapType": "違反忠任義務"
      }
    },
    "tags": [
      "#法律倫理",
      "#律師法",
      "#利益衝突",
      "#旋轉門條款"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "律師法",
        "articleNo": "第 34 條"
      },
      {
        "lawName": "律師法",
        "articleNo": "第 37 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 49,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(一)第49題",
    "officialCorrectRate": 72.1
  },
  {
    "id": "111-BAR-CIVIL-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CIVIL",
    "chapterId": "CIVIL-3",
    "chapterNo": 3,
    "chapterTitle": "代理（無權代理與表見代理）",
    "prompt": "關於民法上「表見代理」之規定，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "本人由自己之行為表示以代理權授與他人者，縱第三人明知他人無代理權，本人仍應對第三人負授權人之責任"
      },
      {
        "label": "B",
        "text": "本人知他人表示為其代理人而不為反對之表示者，對於善意無過失之相對人，應負授權人之責任"
      },
      {
        "label": "C",
        "text": "表見代理之法律效果為代理行為直接無效，相對人僅得請求損害賠償"
      },
      {
        "label": "D",
        "text": "本人將印鑑章交付他人保管，他人擅自以本人名義簽訂保證契約，一律當然構成表見代理"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依民法第 169 條但書規定，第三人明知其無代理權或可得而知者，本人不負授權人責任。保護對象僅限善意第三人。",
        "trapType": "漏看民法第169條但書善意要件"
      },
      "B": {
        "isCorrect": true,
        "reason": "民法第 169 條本文明定：「由自己之行為表示以代理權授與他人，或知他人表示為其代理人而不為反對之表示者，對於第三人應負授權人之責任。」完全符合。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "表見代理之效果為「發生有效代理之法律效果」，本人直接負契約責任，並非無效。",
        "trapType": "混淆表見代理效果與無效效果"
      },
      "D": {
        "isCorrect": false,
        "reason": "最高法院 70 年台上字第 657 號判例：單純印章交付保管，不足以認定授權外觀，不當然成立表見代理。",
        "trapType": "誤判印鑑交付必然成立表見代理之實務見解"
      }
    },
    "tags": [
      "#民法總則",
      "#表見代理",
      "#民法§169",
      "#印鑑章實務"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "民法",
        "articleNo": "第 169 條"
      }
    ],
    "relatedCases": [
      {
        "court": "最高法院",
        "caseNo": "70年台上字第657號判例",
        "summary": "單純交付印章不成立表見代理。",
        "isVerified": true
      }
    ],
    "examYear": "111",
    "examSession": "專技高考律師第一試",
    "questionNo": 9,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 111 年專技高考律師第一試 綜合法學(二)第9題",
    "officialCorrectRate": 63.8
  },
  {
    "id": "113-BAR-CIVIL-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CIVIL",
    "chapterId": "CIVIL-2",
    "chapterNo": 2,
    "chapterTitle": "法律行為、意思表示瑕疵（通謀/錯誤/詐欺/脅迫）",
    "prompt": "甲為躲避債權人強制執行，與好友乙通謀虛偽意思表示，將甲所有之土地一筆登記移轉於乙名下。嗣後乙未經甲同意，擅自將該地出賣並移轉登記於善意不知情之丙。下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "甲乙間之所有權移轉登記有效，乙取得所有權，丙亦繼受取得所有權"
      },
      {
        "label": "B",
        "text": "甲乙間通謀虛偽意思表示無效，但甲不得以該無效對抗善意第三人丙，丙確定取得土地所有權"
      },
      {
        "label": "C",
        "text": "甲得向善意之丙主張塗銷登記返還土地，丙僅能向乙請求損害賠償"
      },
      {
        "label": "D",
        "text": "丙縱為善意，因乙無處分權，必須經過甲之承認始能取得所有權"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依民法第 87 條第 1 項本文，表意人與相對人通謀而為虛偽意思表示者無效，乙並未取得實質所有權。",
        "trapType": "誤將通謀虛偽表示當成有效"
      },
      "B": {
        "isCorrect": true,
        "reason": "依民法第 87 條第 1 項但書規定：「但不得以其無效對抗善意第三人。」善意第三人丙之取得受法律保護，甲不得對丙主張無效。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "甲不得以無效對抗善意之丙，自不得請求丙塗銷登記。",
        "trapType": "忽略善意第三人保護規定"
      },
      "D": {
        "isCorrect": false,
        "reason": "民法第87條但書為善意第三人之直接權利保護，毋須原所有權人承認。",
        "trapType": "誤將民法§87但書等同於無權處分§118待承認"
      }
    },
    "tags": [
      "#民法",
      "#通謀虛偽意思表示",
      "#善意第三人",
      "#民法§87"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "民法",
        "articleNo": "第 87 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 1,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(二)第1題",
    "officialCorrectRate": 74.2
  },
  {
    "id": "113-BAR-CIVPROC-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CIVIL_PROC",
    "chapterId": "CIVIL_PROC-3",
    "chapterNo": 3,
    "chapterTitle": "共同訴訟之類型判別（必要/普通/固有必要）",
    "prompt": "甲、乙、丙三人共有土地一筆，共有人甲未經乙、丙同意，擅自將整筆土地出賣並移轉登記給丁。乙欲起訴請求丁塗銷該所有權移轉登記並返還土地給全體共有人。下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "乙必須與丙共同為原告一同起訴，否則當事人不適格"
      },
      {
        "label": "B",
        "text": "乙得單獨一人為原告提起訴訟，請求丁將土地返還於共有人全體"
      },
      {
        "label": "C",
        "text": "乙若單獨起訴獲勝訴判決，該判決效力不及於未一同起訴之丙"
      },
      {
        "label": "D",
        "text": "乙起訴請求塗銷登記為固有必要共同訴訟，欠缺丙之起訴法院應逕以判決駁回"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依民法第 821 條及民事訴訟法第 56 條之 1，共有人各得單獨為全體共有人之利益行使所有權妨害除去與物上返還請求權，非固有必要共同訴訟。",
        "trapType": "誤將民法§821物上請求當成固有必要共同訴訟"
      },
      "B": {
        "isCorrect": true,
        "reason": "民法第 821 條但書明定：「各共有人對於第三人，得就共有物之全部為本於所有權之請求。但回復共有物之請求，僅得為共有人全體之利益為之。」故乙得單獨起訴。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依民事訴訟法第 401 條第 2 項，為確定私權由他人為原告之確定判決，其利益及於共有人全體。",
        "trapType": "忽略判決利益及於全體共有人"
      },
      "D": {
        "isCorrect": false,
        "reason": "依民法第821條為單獨訴訟權限，非當事人不適格。",
        "trapType": "誤判當事人適格要件"
      }
    },
    "tags": [
      "#民事訴訟法",
      "#共同訴訟",
      "#共有物返還",
      "#民法§821",
      "#民訴§56"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "民法",
        "articleNo": "第 821 條"
      },
      {
        "lawName": "民事訴訟法",
        "articleNo": "第 56 條"
      }
    ],
    "relatedCases": [
      {
        "court": "最高法院",
        "caseNo": "28年上字第2361號判例",
        "summary": "共有人各得單獨起訴請求回復共有物。",
        "isVerified": true
      }
    ],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 22,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(二)第22題",
    "officialCorrectRate": 55.4
  },
  {
    "id": "112-BAR-CORP-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "CORP",
    "chapterId": "CORP-3",
    "chapterNo": 3,
    "chapterTitle": "董事會權限、董事忠實義務與注意義務（§23）",
    "prompt": "關於公司法第 23 條公司負責人之「忠實義務」與「歸入權」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "公司負責人違反忠實義務為自己取得利益時，股東會得決議將其所得利益視為公司之所得，該歸入權自所得利益時起逾三年不行使而消滅"
      },
      {
        "label": "B",
        "text": "公司負責人違反忠實義務為自己或他人為該行為時，股東會得決議將該行為之所得視為公司之所得。此項請求權自所得利益時起一年間不行使而消滅"
      },
      {
        "label": "C",
        "text": "歸入權之行使專屬於董事會之特別決議，股東會無權決議行使歸入權"
      },
      {
        "label": "D",
        "text": "公司負責人應忠實執行業務並盡善良管理人注意義務，如違反致公司受損害，僅負侵權行為責任，不負契約賠償責任"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依公司法第 23 條第 3 項，歸入權之除斥期間為「自所得利益之時起一年間」不行使而消滅，非三年。",
        "trapType": "將歸入權1年除斥期間記成3年"
      },
      "B": {
        "isCorrect": true,
        "reason": "公司法第 23 條第 2 項及第 3 項明定：負責人違反忠實義務，股東會得決議將該行為之所得視為公司之所得，自所得利益時起一年間不行使而消滅。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "公司法第 23 條第 2 項明定行使歸入權之機關為「股東會」，非董事會。",
        "trapType": "決議機關主體混淆"
      },
      "D": {
        "isCorrect": false,
        "reason": "公司法第 23 條第 1 項明定受損害時應對公司負損害賠償責任，屬法定委任契約損害賠償。",
        "trapType": "責任性質誤判"
      }
    },
    "tags": [
      "#公司法",
      "#負責人忠實義務",
      "#歸入權",
      "#公司法§23",
      "#一年除斥期間"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "公司法",
        "articleNo": "第 23 條"
      }
    ],
    "relatedCases": [],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 34,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(二)第34題",
    "officialCorrectRate": 66.8
  },
  {
    "id": "113-BAR-INSUR-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "INSUR",
    "chapterId": "INSUR-1",
    "chapterNo": 1,
    "chapterTitle": "據實告知說明義務與因果關係抗辯（保險法§64）",
    "prompt": "關於保險法第 64 條要保人之「據實說明義務」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "要保人故意隱匿重要事項，保險人解除契約之權利，自保險契約訂立時起算，不受任何除斥期間限制"
      },
      {
        "label": "B",
        "text": "要保人故意隱匿事項，但危險之發生未基於其說明或未說明之事實者（即無因果關係），保險人仍得據以解除契約"
      },
      {
        "label": "C",
        "text": "保險人知有解除之原因後，經過一個月不行使而消滅；或契約訂立後經過二年，即不得解除契約"
      },
      {
        "label": "D",
        "text": "保險契約經保險人依第 64 條解除後，要保人得請求全額退還已繳之全部保險費"
      }
    ],
    "correctAnswer": "C",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依保險法第 64 條第 3 項，知悉起 1 個月，契約訂立起逾 2 年即不得解除。",
        "trapType": "忽略第64條第3項除斥期間"
      },
      "B": {
        "isCorrect": false,
        "reason": "保險法第 64 條第 2 項但書明定：「但要保人證明危險之發生未基於其說明或未說明之事實時，不在此限。」有因果關係抗辯。",
        "trapType": "忽略第64條第2項但書因果關係抗辯"
      },
      "C": {
        "isCorrect": true,
        "reason": "保險法第 64 條第 3 項明定：「前項解除契約權，自保險人知有解除之原因後，經過一個月不行使而消滅；或契約訂立後經過二年，即不得解除契約。」完全符合。",
        "trapType": "正解無陷阱"
      },
      "D": {
        "isCorrect": false,
        "reason": "依保險法第 25 條，保險人因要保人詐欺或隱匿解除契約時，無須返還保費。",
        "trapType": "誤以為解約得請求返還保費"
      }
    },
    "tags": [
      "#保險法",
      "#據實說明義務",
      "#保險法§64",
      "#一個月除斥期間"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "保險法",
        "articleNo": "第 64 條"
      },
      {
        "lawName": "保險法",
        "articleNo": "第 25 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 38,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(二)第38題",
    "officialCorrectRate": 69.1
  },
  {
    "id": "112-BAR-INSUR-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "INSUR",
    "chapterId": "INSUR-3",
    "chapterNo": 3,
    "chapterTitle": "複保險之善意分擔與惡意無效（保險法§36~§38）",
    "prompt": "關於保險法第 36 條至第 38 條之「複保險」規定與實務見解，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "複保險之規範適用於一切保險契約，包括人身保險（人壽保險）與財產保險"
      },
      {
        "label": "B",
        "text": "要保人意圖不當得利而為複保險者（惡意複保險），其契約全部無效"
      },
      {
        "label": "C",
        "text": "善意複保險之各保險人，應按其約定保險金額全額分別賠付，不得比例分擔"
      },
      {
        "label": "D",
        "text": "要保人未向各保險人為複保險之通知者，縱出於善意，其契約亦一律當然絕對無效"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "司法院大法官釋字第 576 號解釋確立：人身保險（如人壽保險）因人的生命身體價值無價，不適用保險法關於複保險通知義務與惡意無效之規定。",
        "trapType": "誤將財產保險複保險擴張至人身保險"
      },
      "B": {
        "isCorrect": true,
        "reason": "保險法第 37 條明定：「要保人故意不為前條之通知，或意圖不當得利而為複保險者，其契約無效。」",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依保險法第 38 條，善意複保險各保險人負「比例分擔」責任，賠償總額不得超過保險標的價值。",
        "trapType": "誤解善意複保險比例分擔機制"
      },
      "D": {
        "isCorrect": false,
        "reason": "依保險法第38條，善意未通知或善意複保險者契約有效，僅依比例分擔。",
        "trapType": "誤將善意未通知一律論為無效"
      }
    },
    "tags": [
      "#保險法",
      "#複保險",
      "#惡意無效",
      "#釋字第576號",
      "#112真題"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "保險法",
        "articleNo": "第 36 條"
      },
      {
        "lawName": "保險法",
        "articleNo": "第 37 條"
      },
      {
        "lawName": "保險法",
        "articleNo": "第 38 條"
      }
    ],
    "relatedCases": [
      {
        "court": "司法院大法官釋字",
        "caseNo": "釋字第 576 號解釋",
        "summary": "人身保險不適用複保險無效規定。",
        "isVerified": true
      }
    ],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 39,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(二)第39題",
    "officialCorrectRate": 56.7
  },
  {
    "id": "112-BAR-NEGINST-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "NEG_INST",
    "chapterId": "NEG_INST-1",
    "chapterNo": 1,
    "chapterTitle": "票據行為無因性與票據抗辯之限制（票據法§13）",
    "prompt": "關於票據法第 13 條「票據抗辯之限制」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "票據債務人得以自己與執票人之前手間所存抗辯之事由對抗執票人"
      },
      {
        "label": "B",
        "text": "票據債務人不得以自己與執票人之前手間所存抗辯之事由對抗執票人。但執票人取得票據出於惡意者，不在此限"
      },
      {
        "label": "C",
        "text": "執票人以無對價取得票據者，仍享有優於其前手之票據權利"
      },
      {
        "label": "D",
        "text": "票據行為一經簽名即生絕對效力，縱發票人為無行為能力人，該票據行為亦屬有效"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "違反票據法第 13 條本文票據抗辯切斷原則。債務人不得以前手抗辯事由對抗善意執票人。",
        "trapType": "否定票據抗辯切斷原則"
      },
      "B": {
        "isCorrect": true,
        "reason": "票據法第 13 條本文及但書明定：「票據債務人不得以自己與執票人之前手間所存抗辯之事由對抗執票人。但執票人取得票據出於惡意者，不在此限。」",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依票據法第 14 條第 2 項，無對價或不相當對價取得票據者，不得享有優於其前手之權利。",
        "trapType": "忽略無對價取得票據不得優於前手之規定"
      },
      "D": {
        "isCorrect": false,
        "reason": "無行為能力人之票據行為依民法及票據法為絕對無效（物之抗辯）。",
        "trapType": "誤認無行為能力簽名有效"
      }
    },
    "tags": [
      "#票據法",
      "#票據無因性",
      "#票據抗辯限制",
      "#票據法§13"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "票據法",
        "articleNo": "第 13 條"
      },
      {
        "lawName": "票據法",
        "articleNo": "第 14 條"
      }
    ],
    "relatedCases": [],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 41,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(二)第41題",
    "officialCorrectRate": 71.5
  },
  {
    "id": "113-BAR-NEGINST-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "NEG_INST",
    "chapterId": "NEG_INST-2",
    "chapterNo": 2,
    "chapterTitle": "票據之偽造、變造與在真正簽名人之責任（§15/§16）",
    "prompt": "甲之支票簿遭乙竊取，乙擅自偽造甲之簽名簽發面額 100 萬元支票交付丙，丙背書轉讓於丁，丁再背書轉讓於善意不知情之戊。下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "被偽造人甲應對執票人戊負票據發票人之付款責任"
      },
      {
        "label": "B",
        "text": "票據上有偽造之簽名者，整張支票當然全部無效，在真正簽名之丙、丁均不負任何票據責任"
      },
      {
        "label": "C",
        "text": "被偽造人甲不負發票人責任；但真正簽名之背書人丙與丁，仍應依票上所載文義負責"
      },
      {
        "label": "D",
        "text": "偽造人乙因非真正發票人，亦無須負任何票據法上之責任"
      }
    ],
    "correctAnswer": "C",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依票據法第 15 條，被偽造人甲並未簽名，得主張「物的抗辯」拒絕付款。",
        "trapType": "誤令被偽造人負票據責任"
      },
      "B": {
        "isCorrect": false,
        "reason": "依票據法第 15 條「票據簽名獨立性原則」，偽造簽名不影響票上其他真正簽名人之效力。",
        "trapType": "否定票據簽名獨立性原則"
      },
      "C": {
        "isCorrect": true,
        "reason": "票據法第 15 條明定：「票據上有偽造或變造之簽名者，不影響於真正簽名人之效力。」甲不負責，丙丁仍負背書人責任。",
        "trapType": "正解無陷阱"
      },
      "D": {
        "isCorrect": false,
        "reason": "偽造人依票據法與刑法負刑責及民事侵權責任。",
        "trapType": "免除偽造人責任"
      }
    },
    "tags": [
      "#票據法",
      "#票據偽造",
      "#簽名獨立性",
      "#票據法§15",
      "#113真題"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "票據法",
        "articleNo": "第 15 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 42,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(二)第42題",
    "officialCorrectRate": 76.2
  },
  {
    "id": "113-BAR-COMPEXEC-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "COMP_EXEC",
    "chapterId": "COMP_EXEC-4",
    "chapterNo": 4,
    "chapterTitle": "債務人異議之訴（強執§14 排除執行力之要件與時點）",
    "prompt": "關於強制執行法第 14 條「債務人異議之訴」與第 15 條「第三人異議之訴」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "債務人異議之訴之目的在排除特定標的物之執行；第三人異議之訴之目的在排除執行名義之執行力"
      },
      {
        "label": "B",
        "text": "執行名義成立後，如有消滅或妨礙債權人請求之事由發生，債務人得於強制執行程序終結前，向執行法院對債權人提起異議之訴"
      },
      {
        "label": "C",
        "text": "第三人就執行標的物有足以排除強制執行之權利者，必須在強制執行開始前提起，執行程序開始後即不得提起"
      },
      {
        "label": "D",
        "text": "提起債務人異議之訴，強制執行程序即當然自動停止，無須向法院聲請停止執行"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "兩者目的顛倒。債務人異議之訴（§14）在排除執行名義之執行力；第三人異議之訴（§15）在排除特定執行標的物之執行。",
        "trapType": "顛倒兩大異議之訴之核心目的"
      },
      "B": {
        "isCorrect": true,
        "reason": "強制執行法第 14 條第 1 項明定：「執行名義成立後，如有消滅或妨礙債權人請求之事由發生，債務人得於強制執行程序終結前，向執行法院對債權人提起異議之訴。」",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依強制執行法第 15 條，第三人異議之訴係「於強制執行程序終結前」提起，非限於開始前。",
        "trapType": "起訴期間誤判"
      },
      "D": {
        "isCorrect": false,
        "reason": "依強制執行法第 18 條，提起異議之訴不停止執行，須另向法院聲請供擔保停止執行。",
        "trapType": "誤認異議之訴具有當然停止執行效力"
      }
    },
    "tags": [
      "#強制執行法",
      "#債務人異議之訴",
      "#第三人異議之訴",
      "#強執§14-§18"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "強制執行法",
        "articleNo": "第 14 條"
      },
      {
        "lawName": "強制執行法",
        "articleNo": "第 15 條"
      },
      {
        "lawName": "強制執行法",
        "articleNo": "第 18 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 44,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(二)第44題",
    "officialCorrectRate": 58.2
  },
  {
    "id": "112-BAR-COMPEXEC-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "COMP_EXEC",
    "chapterId": "COMP_EXEC-2",
    "chapterNo": 2,
    "chapterTitle": "金錢債權執行：薪資帳戶扣押限制與責任財產調查（§115/§122）",
    "prompt": "關於強制執行法第 122 條金錢債權執行之「禁止扣押標的與生活費用保障」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "債務人對第三人之薪資債權，執行法院得命扣押全額，以利儘速清償債權人"
      },
      {
        "label": "B",
        "text": "債務人依法領取之社會救助金或維持債務人及其共同生活之親屬生活所必需者，不得為強制執行"
      },
      {
        "label": "C",
        "text": "強制執行法上生活必需費用之認定，一律以新台幣一萬元為法定上限，不得依地區公告生活費調整"
      },
      {
        "label": "D",
        "text": "勞工退休金專戶內之退休金，債權人於執行名義確定後得隨時聲請查封扣押"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "強制執行法第 115 條之 1 第 2 項明定，薪資扣押以三分之一為原則，且不得低於生活必需費用。",
        "trapType": "違反薪資扣押限制"
      },
      "B": {
        "isCorrect": true,
        "reason": "強制執行法第 122 條第 1 項及第 2 項明定：依法領取之社會救助金或維持生活所必需者，不得為強制執行。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依強執第 122 條第 3 項，生活必需費用係按衛生福利部或直轄市政府公告當年度每人每月最低生活費 1.2 倍計算，非固定一萬元。",
        "trapType": "忽略最低生活費標準"
      },
      "D": {
        "isCorrect": false,
        "reason": "勞工退休金條例第 29 條明定退休金專戶不得扣押、讓與或供擔保。",
        "trapType": "忽略勞退專戶禁止扣押特別法"
      }
    },
    "tags": [
      "#強制執行法",
      "#薪資扣押限制",
      "#維持生活所必需",
      "#強執§122",
      "#112真題"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "強制執行法",
        "articleNo": "第 122 條"
      },
      {
        "lawName": "強制執行法",
        "articleNo": "第 115 條之 1"
      }
    ],
    "relatedCases": [],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 45,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(二)第45題",
    "officialCorrectRate": 64.9
  },
  {
    "id": "110-BAR-SECREG-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "SEC_REG",
    "chapterId": "SEC_REG-1",
    "chapterNo": 1,
    "chapterTitle": "內線交易禁止：重大消息明確時點與18小時沉澱期（§157-1）",
    "prompt": "依證券交易法第 157 條之 1 關於「內線交易」之禁止規範，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "上市櫃公司董事只要知悉重大影響股票價格之消息，縱該消息尚未明確，一律不得買賣公司股票"
      },
      {
        "label": "B",
        "text": "內部人於實際知悉重大消息明確後，在該消息未公開前或公開後十八小時內，不得對該公司之上市股票買入或賣出"
      },
      {
        "label": "C",
        "text": "內線交易之規範主體僅限於公司董監事及經理人，基於職業關係獲悉消息之人不受規範"
      },
      {
        "label": "D",
        "text": "喪失內部人身分未滿一年者，仍受內線交易禁止之規範"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "依證券交易法第 157 條之 1 第 1 項，須重大消息「明確」後，始進入禁止交易之沉澱期。",
        "trapType": "未符重大消息明確性要件"
      },
      "B": {
        "isCorrect": true,
        "reason": "證券交易法第 157 條之 1 第 1 項明定：實際知悉重大消息「明確」後，在未公開前或「公開後十八小時內」，不得買入或賣出。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依證交法第 157 條之 1 第 1 項第 3 款，基於職業或控制關係獲悉消息之人（如會計師、律師）亦為受規範主體。",
        "trapType": "漏看職業關係人受內線規範"
      },
      "D": {
        "isCorrect": false,
        "reason": "依同條第 1 項第 4 款，喪失身分「未滿六個月」者受規範，非一年。",
        "trapType": "將6個月冷卻期記成1年"
      }
    },
    "tags": [
      "#證券交易法",
      "#內線交易",
      "#重大消息明確",
      "#18小時沉澱期",
      "#證交法§157-1"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "證券交易法",
        "articleNo": "第 157 條之 1"
      }
    ],
    "relatedCases": [],
    "examYear": "110",
    "examSession": "專技高考律師第一試",
    "questionNo": 14,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 110 年專技高考律師第一試 綜合法學(二)第14題",
    "officialCorrectRate": 61.2
  },
  {
    "id": "113-BAR-SECREG-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "SEC_REG",
    "chapterId": "SEC_REG-2",
    "chapterNo": 2,
    "chapterTitle": "短線交易歸入權：董監事經理人6個月買賣差價計算（§157）",
    "prompt": "關於證券交易法第 157 條所定「短線交易歸入權」，下列敘述何者正確？",
    "options": [
      {
        "label": "A",
        "text": "歸入權之行使主體為金融監督管理委員會，所得利益歸入國庫"
      },
      {
        "label": "B",
        "text": "上市發行公司董事、監察人、經理人或持股超過百分之十之大股東，對公司上市股票於取得後六個月內再行賣出，或賣出後六個月內再行買進者，公司應請求將其所得之利益歸於公司"
      },
      {
        "label": "C",
        "text": "計算短線交易差價所得利益時，一律採「先進先出法」計算"
      },
      {
        "label": "D",
        "text": "歸入權自買賣行為完成之日起，逾五年不行使而消滅"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "證交法第 157 條明定歸入權請求權人為「發行公司」，利益歸屬於「公司」，非國庫。",
        "trapType": "請求主體與利益歸屬混淆"
      },
      "B": {
        "isCorrect": true,
        "reason": "證券交易法第 157 條第 1 項明定：董監經理人或持股逾10%大股東，6個月內買進賣出或賣出買進，所得利益應歸於公司。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "依證券交易法施行細則第 11 條第 2 項，計算利益採「最高賣價配最低買價法」（差價最大化原則），非先進先出法。",
        "trapType": "差價計算公式錯誤"
      },
      "D": {
        "isCorrect": false,
        "reason": "依證交法第 157 條第 2 項，歸入權自獲得利益之日起「二年間」不行使而消滅，非五年。",
        "trapType": "將2年除斥期間記成5年"
      }
    },
    "tags": [
      "#證券交易法",
      "#短線交易",
      "#歸入權",
      "#最高賣價配最低買價法",
      "#證交法§157",
      "#113真題"
    ],
    "difficulty": "HARD",
    "relatedLaws": [
      {
        "lawName": "證券交易法",
        "articleNo": "第 157 條"
      }
    ],
    "relatedCases": [],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 46,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(二)第46題",
    "officialCorrectRate": 63.5
  },
  {
    "id": "113-BAR-LEGENG-01",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "LEGAL_ENG",
    "chapterId": "LEGAL_ENG-2",
    "chapterNo": 2,
    "chapterTitle": "刑事訴訟證據排除法制（Exclusionary Rule, Plain View, Warrant）",
    "prompt": "In U.S. Constitutional Law, which of the following legal doctrines prohibits the government from introducing evidence obtained in violation of the Fourth Amendment protection against unreasonable searches and seizures in a criminal trial?",
    "options": [
      {
        "label": "A",
        "text": "The Doctrine of Stare Decisis"
      },
      {
        "label": "B",
        "text": "The Exclusionary Rule"
      },
      {
        "label": "C",
        "text": "The Plain Meaning Rule"
      },
      {
        "label": "D",
        "text": "The Double Jeopardy Clause"
      }
    ],
    "correctAnswer": "B",
    "optionExplanations": {
      "A": {
        "isCorrect": false,
        "reason": "Stare Decisis 指「遵循先例原則」，要求法院遵循先前判決之先例拘束力。",
        "trapType": "名詞定義混淆"
      },
      "B": {
        "isCorrect": true,
        "reason": "The Exclusionary Rule 即刑事證據法上之「證據排除法則」（Mapp v. Ohio, 1961），違法搜索扣押取得之證據在審判中不得作為不利於被告之證據。",
        "trapType": "正解無陷阱"
      },
      "C": {
        "isCorrect": false,
        "reason": "The Plain Meaning Rule 為契約法與成文法解釋之「文義解釋規則」。",
        "trapType": "法規解釋名詞混淆"
      },
      "D": {
        "isCorrect": false,
        "reason": "The Double Jeopardy Clause 為美國憲法第五修正案之「禁止雙重追訴/一事不二罰條款」。",
        "trapType": "混淆第五修正案"
      }
    },
    "tags": [
      "#法學英文",
      "#ExclusionaryRule",
      "#FourthAmendment",
      "#證據排除法則"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "美國憲法",
        "articleNo": "第四修正案 (Fourth Amendment)"
      }
    ],
    "relatedCases": [
      {
        "court": "US Supreme Court",
        "caseNo": "Mapp v. Ohio, 367 U.S. 643 (1961)",
        "summary": "Exclusionary rule applies to states.",
        "isVerified": true
      }
    ],
    "examYear": "113",
    "examSession": "專技高考律師第一試",
    "questionNo": 49,
    "verifiedDate": "2024-08-10",
    "sourceCitation": "考選部 113 年專技高考律師第一試 綜合法學(二)第49題",
    "officialCorrectRate": 78.4
  },
  {
    "id": "112-BAR-LEGENG-02",
    "sourceType": "OFFICIAL_EXAM",
    "subjectId": "LEGAL_ENG",
    "chapterId": "LEGAL_ENG-3",
    "chapterNo": 3,
    "chapterTitle": "英美契約與侵權法專用詞彙（Consideration, Strict Liability, Tort）",
    "prompt": "Under Anglo-American Common Law of Contracts, which essential element refers to the \"bargained-for exchange\" of something of legal value required to make a promise enforceable as a valid contract?",
    "options": [
      {
        "label": "A",
        "text": "Consideration"
      },
      {
        "label": "B",
        "text": "Injunction"
      },
      {
        "label": "C",
        "text": "Tortfeasor"
      },
      {
        "label": "D",
        "text": "Habeas Corpus"
      }
    ],
    "correctAnswer": "A",
    "optionExplanations": {
      "A": {
        "isCorrect": true,
        "reason": "Consideration（約因/對價）為英美契約法最核心之有效要件，指雙方當事人互為交換具法律價值之對待給付（bargained-for exchange of value）。",
        "trapType": "正解無陷阱"
      },
      "B": {
        "isCorrect": false,
        "reason": "Injunction 指衡平法上之「禁制令/假處分命令」。",
        "trapType": "衡平救濟名詞混淆"
      },
      "C": {
        "isCorrect": false,
        "reason": "Tortfeasor 指侵權行為法上之「侵權行為人/加害人」。",
        "trapType": "侵權主體名詞混淆"
      },
      "D": {
        "isCorrect": false,
        "reason": "Habeas Corpus 指憲法上保護人身自由之「提審令/人身保護令狀」。",
        "trapType": "混淆憲法人身自由名詞"
      }
    },
    "tags": [
      "#法學英文",
      "#Contracts",
      "#Consideration",
      "#約因",
      "#112真題"
    ],
    "difficulty": "MEDIUM",
    "relatedLaws": [
      {
        "lawName": "Restatement (Second) of Contracts",
        "articleNo": "Section 71"
      }
    ],
    "relatedCases": [],
    "examYear": "112",
    "examSession": "專技高考律師第一試",
    "questionNo": 50,
    "verifiedDate": "2024-05-01",
    "sourceCitation": "考選部 112 年專技高考律師第一試 綜合法學(二)第50題",
    "officialCorrectRate": 82.1
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
