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
}

export interface UITranslations {
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
}
