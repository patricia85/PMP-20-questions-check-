export interface QuestionContent {
  question: string;
  options: string[];
  explanation: string;
  category: string;
}

export interface Question {
  id: string;
  correctAnswer: number;
  translations: {
    [key: string]: QuestionContent;
  };
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: (number | null)[];
  isFinished: boolean;
  score: number;
  language: 'pl' | 'en' | 'ar' | 'de' | 'es';
  leadCaptured: boolean;
  userData?: {
    name: string;
    email: string;
  };
  startTime?: number;
  endTime?: number;
  isAuthenticated: boolean;
  authPassword?: string;
}

export interface UITranslations {
  // ... existing fields
  title: string;
  subtitle: string;
  startBtn: string;
  infoTitle: string;
  infoItems: string[];
  questionOf: string;
  explanation: string;
  nextBtn: string;
  finishBtn: string;
  resultsTitle: string;
  resultsSubtitle: string;
  correctLabel: string;
  percentageLabel: string;
  retryBtn: string;
  editNote: string;
  footerText: string;
  // New fields
  leadTitle: string;
  leadSubtitle: string;
  nameLabel: string;
  emailLabel: string;
  downloadBtn: string;
  skipBtn: string;
  performanceReport: string;
  domainAnalysis: string;
  coachInstruction: string;
  startTimeLabel: string;
  endTimeLabel: string;
  durationLabel: string;
  licenseText: string;
}
