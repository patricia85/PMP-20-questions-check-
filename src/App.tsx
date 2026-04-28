import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { pmpQuestions } from './data/questions';
import { uiTranslations } from './data/translations';
import { Question, QuizState } from './types';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  Award, 
  BookOpen,
  Info,
  Trophy,
  ArrowRight,
  Globe,
  Download,
  Mail,
  User,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: Array(pmpQuestions.length).fill(null),
    isFinished: false,
    score: 0,
    language: 'pl',
    leadCaptured: false,
    userData: { name: '', email: '' },
    isAuthenticated: false,
    authPassword: ''
  });

  const [hasStarted, setHasStarted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCapturingLead, setIsCapturingLead] = useState(false);

  const t = uiTranslations[state.language];
  const currentQuestion = pmpQuestions[state.currentQuestionIndex];
  const qContent = currentQuestion?.translations[state.language];
  const progress = ((state.answers.filter(a => a !== null).length) / pmpQuestions.length) * 100;

  const startQuiz = () => {
    setHasStarted(true);
    setState(prev => ({ ...prev, startTime: Date.now() }));
  };

  const handleAnswer = (optionIndex: number) => {
    if (state.answers[state.currentQuestionIndex] !== null) return;

    const newAnswers = [...state.answers];
    newAnswers[state.currentQuestionIndex] = optionIndex;

    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    const newScore = isCorrect ? state.score + 1 : state.score;

    setState({
      ...state,
      answers: newAnswers,
      score: newScore,
    });
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex < pmpQuestions.length - 1) {
      setState({
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      });
      setShowExplanation(false);
    } else {
      setState(prev => ({ ...prev, endTime: Date.now() }));
      setIsCapturingLead(true);
    }
  };

  const skipLead = () => {
    setIsCapturingLead(false);
    setState(prev => ({ ...prev, isFinished: true }));
  };

  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsCapturingLead(false);
    setState(prev => ({ ...prev, isFinished: true, leadCaptured: true }));
  };

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (state.authPassword === '54321') {
      setState(prev => ({ ...prev, isAuthenticated: true }));
    } else {
      alert('Incorrect Password');
      setState(prev => ({ ...prev, authPassword: '' }));
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add content to PDF
    doc.setFontSize(22);
    doc.text(t.performanceReport, 105, 20, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text(`${t.nameLabel}: ${state.userData?.name || 'User'}`, 20, 40);
    doc.text(`${t.emailLabel}: ${state.userData?.email || 'N/A'}`, 20, 50);
    doc.text(`${t.correctLabel}: ${state.score} / ${pmpQuestions.length}`, 20, 60);

    // Time Tracking
    if (state.startTime && state.endTime) {
      const startStr = new Date(state.startTime).toLocaleTimeString();
      const endStr = new Date(state.endTime).toLocaleTimeString();
      const durationMs = state.endTime - state.startTime;
      const minutes = Math.floor(durationMs / 60000);
      const seconds = Math.floor((durationMs % 60000) / 1000);
      const durationStr = `${minutes}m ${seconds}s`;

      doc.setFontSize(11);
      doc.text(`${t.startTimeLabel}: ${startStr}`, 140, 40);
      doc.text(`${t.endTimeLabel}: ${endStr}`, 140, 50);
      doc.text(`${t.durationLabel}: ${durationStr}`, 140, 60);
    }

    doc.setFontSize(16);
    doc.text(t.domainAnalysis, 20, 80);

    // Grouping by category
    const categories: Record<string, { total: number; correct: number }> = {};
    pmpQuestions.forEach((q, i) => {
      const cat = q.translations[state.language].category;
      if (!categories[cat]) categories[cat] = { total: 0, correct: 0 };
      categories[cat].total++;
      if (state.answers[i] === q.correctAnswer) categories[cat].correct++;
    });

    const tableBody = Object.entries(categories).map(([name, stats]) => [
      name,
      `${Math.round((stats.correct / stats.total) * 100)}%`,
      `${stats.correct} / ${stats.total}`
    ]);

    autoTable(doc, {
      startY: 90,
      head: [['Category', 'Score', 'Details']],
      body: tableBody,
      didDrawPage: (data) => {
        const pageSize = doc.internal.pageSize;
        const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        doc.setFontSize(9);
        doc.setTextColor(100);
        doc.text(t.licenseText, 105, pageHeight - 10, { align: 'center' });
      }
    });

    const finalY = (doc as any).lastAutoTable?.finalY || 150;
    
    doc.setFontSize(12);
    doc.setTextColor(100);
    const splitText = doc.splitTextToSize(t.coachInstruction, 170);
    doc.text(splitText, 20, finalY + 20);

    doc.save(`PMP_Result_${state.userData?.name || 'App'}.pdf`);
  };

  const restartQuiz = () => {
    setState(prev => ({
      ...prev,
      currentQuestionIndex: 0,
      answers: Array(pmpQuestions.length).fill(null),
      isFinished: false,
      score: 0,
      leadCaptured: false,
      userData: { name: '', email: '' },
      startTime: undefined,
      endTime: undefined
    }));
    setHasStarted(false);
    setShowExplanation(false);
    setIsCapturingLead(false);
  };

  const getScoreColor = () => {
    const percentage = (state.score / pmpQuestions.length) * 100;
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div dir={state.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mesh-bg" />
      
      {/* Floating Language Switcher */}
      <div className={`fixed top-6 ${state.language === 'ar' ? 'left-6' : 'right-6'} z-50 flex gap-2`}>
        {(['pl', 'en', 'ar', 'de', 'es'] as const).map((lang) => (
          <button 
            key={lang}
            onClick={() => setState(prev => ({ ...prev, language: lang }))}
            className={`glass px-3 py-2 flex items-center gap-2 hover:bg-white/20 transition-all font-bold text-xs ${state.language === lang ? 'bg-indigo-500/30 border-indigo-500/50' : ''}`}
          >
            <span className="uppercase">{lang}</span>
          </button>
        ))}
      </div>

      {!state.isAuthenticated ? (
        <div className="min-h-screen flex items-center justify-center p-6 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full glass p-8 md:p-12 text-center"
          >
            <div className="mb-8 inline-flex p-4 glass bg-indigo-500/20 border-indigo-400/30 rounded-3xl">
              <ShieldCheck className="w-12 h-12 text-indigo-400" />
            </div>
            <h2 className="text-3xl font-black mb-6 tracking-tight">Access Restricted</h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <input 
                  type="password"
                  value={state.authPassword}
                  onChange={(e) => setState(prev => ({ ...prev, authPassword: e.target.value }))}
                  className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 px-6 focus:border-indigo-500 focus:bg-white/10 transition-all outline-none font-bold text-center text-2xl tracking-[0.5em]"
                  placeholder="•••••"
                  autoFocus
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/30"
              >
                Unlock
              </button>
            </form>
            <div className="mt-10 pt-6 border-t border-white/10 text-[11px] text-indigo-200/50 uppercase tracking-[0.15em] font-medium leading-relaxed">
              {t.licenseText}
            </div>
          </motion.div>
        </div>
      ) : state.isFinished ? (
        <div className="min-h-screen text-white font-sans selection:bg-indigo-500/30 p-4 md:p-8 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full glass p-8 md:p-12 text-center"
          >
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-indigo-500/20 rounded-full border border-indigo-500/30">
              <Trophy className="w-12 h-12 text-indigo-400" />
            </div>
            
            <h2 className="text-4xl font-bold mb-2 tracking-tight">{t.resultsTitle}</h2>
            <p className="text-indigo-200/60 mb-8 font-medium">{t.resultsSubtitle}</p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="glass bg-white/5 p-6 border-white/10">
                <span className="block text-xs text-white/50 uppercase tracking-widest font-bold mb-1">{t.correctLabel}</span>
                <span className={`text-4xl font-bold ${getScoreColor()}`}>{state.score} / {pmpQuestions.length}</span>
              </div>
              <div className="glass bg-white/5 p-6 border-white/10">
                <span className="block text-xs text-white/50 uppercase tracking-widest font-bold mb-1">{t.percentageLabel}</span>
                <span className={`text-4xl font-bold ${getScoreColor()}`}>
                  {Math.round((state.score / pmpQuestions.length) * 100)}%
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {state.leadCaptured && (
                <button 
                  onClick={generatePDF}
                  className="w-full bg-white text-indigo-900 py-5 px-6 rounded-2xl font-bold hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 shadow-2xl border-4 border-indigo-500/20 mb-4 group"
                >
                  <Download className="w-6 h-6 group-hover:bounce" />
                  {t.downloadBtn}
                </button>
              )}
              
              <button 
                onClick={restartQuiz}
                className="w-full border-2 border-white/20 text-white py-4 px-6 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                {t.retryBtn}
              </button>
              <p className="text-xs text-white/40 mt-4 italic">
                {t.editNote}
              </p>
              <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-indigo-200/60 uppercase tracking-[0.2em] font-medium leading-relaxed">
                {t.licenseText}
              </div>
            </div>
          </motion.div>
        </div>
      ) : isCapturingLead ? (
        <div className="min-h-screen flex items-center justify-center p-6 text-white overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full glass p-8 md:p-10 border-white/10 shadow-2xl"
          >
            <div className="mb-8 text-center">
              <div className="inline-flex p-4 glass bg-indigo-500/20 border-indigo-400/30 mb-4 rounded-3xl">
                <ShieldCheck className="w-10 h-10 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-black tracking-tight mb-2">{t.leadTitle}</h2>
              <p className="text-indigo-200/60 font-medium">{t.leadSubtitle}</p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 px-1">{t.nameLabel}</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-300/50" />
                  <input 
                    required
                    type="text"
                    value={state.userData?.name}
                    onChange={(e) => setState(prev => ({ ...prev, userData: { ...prev.userData!, name: e.target.value } }))}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-indigo-500 focus:bg-white/10 transition-all outline-none font-medium"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 px-1">{t.emailLabel}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-300/50" />
                  <input 
                    required
                    type="email"
                    value={state.userData?.email}
                    onChange={(e) => setState(prev => ({ ...prev, userData: { ...prev.userData!, email: e.target.value } }))}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-indigo-500 focus:bg-white/10 transition-all outline-none font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  {t.downloadBtn}
                </button>
                <button 
                  type="button"
                  onClick={skipLead}
                  className="w-full text-indigo-200/50 hover:text-white transition-colors py-2 text-sm font-bold"
                >
                  {t.skipBtn}
                </button>
              </div>
            </form>
            <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-indigo-200/50 uppercase tracking-[0.15em] font-medium text-center leading-relaxed">
              {t.licenseText}
            </div>
          </motion.div>
        </div>
      ) : !hasStarted ? (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-white text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl w-full"
          >
            <div className="mb-6 inline-flex p-4 glass bg-white/5 border-white/10 shadow-xl">
              <BookOpen className="w-10 h-10 text-indigo-400" />
            </div>
            <h1 className="text-5xl font-black mb-4 tracking-tighter text-white">{t.title}</h1>
            <p className="text-xl text-indigo-100/70 mb-10 leading-relaxed max-w-md mx-auto">
              {t.subtitle}
            </p>
            
            <div className="glass bg-white/5 p-6 mb-8 text-left border-white/10">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-indigo-400" /> {t.infoTitle}
              </h3>
              <ul className="space-y-2 text-indigo-100/60 text-sm">
                {t.infoItems.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>

            <button 
              onClick={startQuiz}
              className="group w-full bg-indigo-600 text-white py-5 px-8 rounded-3xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 mb-12"
            >
              {t.startBtn}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-[11px] text-indigo-200/50 uppercase tracking-[0.15em] font-medium">
              {t.licenseText}
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="min-h-screen text-white p-4 md:p-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div>
                  <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-0.5">{qContent?.category}</h2>
                  <div className="text-xl font-bold tracking-tight">
                    {t.questionOf.replace('{current}', (state.currentQuestionIndex + 1).toString()).replace('{total}', pmpQuestions.length.toString())}
                  </div>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full glass border-2 border-white/10 flex items-center justify-center relative">
                <svg className="absolute inset-0 transform -rotate-90">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="transparent"
                    className="text-indigo-500"
                    style={{
                      strokeDasharray: '125.6',
                      strokeDashoffset: (125.6 * (100 - progress)) / 100,
                      transition: 'stroke-dashoffset 0.5s ease'
                    }}
                  />
                </svg>
                <span className="text-[10px] font-bold text-indigo-200">{Math.round(progress)}%</span>
              </div>
            </div>

            {/* Question Area */}
            <div className="space-y-6">
              <motion.div 
                key={`${state.currentQuestionIndex}-${state.language}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass p-8 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <BookOpen className="w-24 h-24" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold leading-relaxed mb-10 text-white relative z-10">
                  {qContent?.question}
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {qContent?.options.map((option, idx) => {
                    const isSelected = state.answers[state.currentQuestionIndex] === idx;
                    const isCorrect = idx === currentQuestion.correctAnswer;
                    const showResult = state.answers[state.currentQuestionIndex] !== null;

                    let stateClasses = "hover:bg-white/10 border-white/10";
                    if (showResult) {
                      if (isCorrect) stateClasses = "bg-indigo-500/20 border-indigo-500/50 text-white border-l-4";
                      else if (isSelected) stateClasses = "bg-red-500/20 border-red-500/50 text-white border-l-4";
                      else stateClasses = "opacity-40 border-white/5";
                    } else if (isSelected) {
                      stateClasses = "bg-white/20 border-white/30 text-white";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={showResult}
                        onClick={() => handleAnswer(idx)}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group ${stateClasses}`}
                      >
                        <div className="flex items-center">
                          <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${
                            showResult && isCorrect ? 'border-indigo-400' : 'border-white/20'
                          }`}>
                            {(isSelected || (showResult && isCorrect)) && (
                              <div className={`w-2.5 h-2.5 rounded-full ${showResult && isCorrect ? 'bg-indigo-400' : 'bg-white'}`} />
                            )}
                          </div>
                          <span className="font-semibold text-lg">{option}</span>
                        </div>
                        {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass bg-indigo-500/5 p-6 md:p-8 border-indigo-500/20"
                  >
                    <div className="flex gap-4">
                      <div className="bg-indigo-500/20 text-indigo-400 p-2 h-fit rounded-xl border border-indigo-400/20">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-indigo-300 mb-2">{t.explanation}</h4>
                        <p className="text-white/80 leading-relaxed font-medium">
                          {qContent?.explanation}
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={nextQuestion}
                      className="mt-6 w-full bg-white text-indigo-900 py-4 px-6 rounded-2xl font-bold hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 group shadow-xl"
                    >
                      {state.currentQuestionIndex === pmpQuestions.length - 1 ? t.finishBtn : t.nextBtn}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 text-center text-white/30 text-xs font-medium uppercase tracking-widest italic">
              {t.footerText}
            </div>
            <div className="mt-4 text-[11px] text-indigo-200/50 uppercase tracking-[0.15em] font-medium max-w-sm mx-auto">
              {t.licenseText}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
