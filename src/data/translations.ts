import { UITranslations } from '../types';

export const uiTranslations: Record<'pl' | 'en' | 'ar' | 'de' | 'es', UITranslations> = {
  pl: {
    title: "PMP Exam Quest",
    subtitle: "Przygotuj się do certyfikacji PMP z naszym zestawem 20 pytań symulacyjnych.",
    startBtn: "Rozpocznij Test",
    infoTitle: "Co musisz wiedzieć:",
    infoItems: [
      "20 pytań opartych na PMBOK Guide",
      "Natychmiastowe wyjaśnienia po każdym pytaniu",
      "Skupienie na procesach, ludziach i środowisku biznesowym"
    ],
    questionOf: "Pytanie {current} z {total}",
    explanation: "Wyjaśnienie",
    nextBtn: "Następne Pytanie",
    finishBtn: "Zakończ Test",
    resultsTitle: "Wynik Twojego Egzaminu",
    resultsSubtitle: "Symulacja zakończona sukcesem",
    correctLabel: "Poprawne",
    percentageLabel: "Procent",
    retryBtn: "Spróbuj Ponownie",
    editNote: "Możesz edytować te pytania w pliku src/data/questions.ts",
    footerText: "Dobre przygotowanie to klucz do sukcesu na egzaminie PMP."
  },
  en: {
    title: "PMP Exam Quest",
    subtitle: "Prepare for your PMP certification with our set of 20 simulation questions.",
    startBtn: "Start Test",
    infoTitle: "What you need to know:",
    infoItems: [
      "20 questions based on PMBOK Guide",
      "Instant explanations after each question",
      "Focus on processes, people, and business environment"
    ],
    questionOf: "Question {current} of {total}",
    explanation: "Explanation",
    nextBtn: "Next Question",
    finishBtn: "Finish Test",
    resultsTitle: "Your Exam Results",
    resultsSubtitle: "Simulation successfully completed",
    correctLabel: "Correct",
    percentageLabel: "Percentage",
    retryBtn: "Try Again",
    editNote: "You can edit these questions in src/data/questions.ts",
    footerText: "Good preparation is the key to PMP exam success."
  },
  ar: {
    title: "بحث امتحان PMP",
    subtitle: "استعد لشهادة PMP الخاصة بك من خلال مجموعتنا المكونة من 20 سؤالاً للمحاكاة.",
    startBtn: "بدء الاختبار",
    infoTitle: "ما تحتاج إلى معرفته:",
    infoItems: [
      "20 سؤالاً بناءً على دليل PMBOK",
      "تفسيرات فورية بعد كل سؤال",
      "التركيز على العمليات والأشخاص وبيئة العمل"
    ],
    questionOf: "السؤال {current} من {total}",
    explanation: "توضيح",
    nextBtn: "السؤال التالي",
    finishBtn: "إنهاء الاختبار",
    resultsTitle: "نتائج امتحانك",
    resultsSubtitle: "تم الانتهاء من المحاكاة بنجاح",
    correctLabel: "صحيح",
    percentageLabel: "نسبة مئوية",
    retryBtn: "حاول مرة أخرى",
    editNote: "يمكنك تعديل هذه الأسئلة في src/data/questions.ts",
    footerText: "الاستعداد الجيد هو مفتاح نجاح امتحان PMP."
  },
  de: {
    title: "PMP Exam Quest",
    subtitle: "Bereiten Sie sich mit unseren 20 Simulationsfragen auf Ihre PMP-Zertifizierung vor.",
    startBtn: "Test Starten",
    infoTitle: "Was Sie wissen müssen:",
    infoItems: [
      "20 Fragen basierend auf dem PMBOK Guide",
      "Sofortige Erklärungen nach jeder Frage",
      "Fokus auf Prozesse, Menschen und Geschäftsumfeld"
    ],
    questionOf: "Frage {current} von {total}",
    explanation: "Erklärung",
    nextBtn: "Nächste Frage",
    finishBtn: "Test Beenden",
    resultsTitle: "Ihre Prüfungsergebnisse",
    resultsSubtitle: "Simulation erfolgreich abgeschlossen",
    correctLabel: "Richtig",
    percentageLabel: "Prozentsatz",
    retryBtn: "Erneut Versuchen",
    editNote: "Sie können diese Fragen in src/data/questions.ts bearbeiten",
    footerText: "Gute Vorbereitung ist der Schlüssel zum PMP-Prüfungserfolg."
  },
  es: {
    title: "Búsqueda del Examen PMP",
    subtitle: "Prepárese para su certificación PMP con nuestro conjunto de 20 preguntas de simulación.",
    startBtn: "Iniciar Prueba",
    infoTitle: "Lo que necesitas saber:",
    infoItems: [
      "20 preguntas basadas en la Guía del PMBOK",
      "Explicaciones instantáneas después de cada pregunta",
      "Enfoque en procesos, personas y entorno empresarial"
    ],
    questionOf: "Pregunta {current} de {total}",
    explanation: "Explicación",
    nextBtn: "Siguiente Pregunta",
    finishBtn: "Finalizar Prueba",
    resultsTitle: "Tus Resultados del Examen",
    resultsSubtitle: "Simulación completada con éxito",
    correctLabel: "Correcto",
    percentageLabel: "Porcentaje",
    retryBtn: "Intentar de Nuevo",
    editNote: "Puedes editar estas preguntas en src/data/questions.ts",
    footerText: "Una buena preparación es la clave del éxito en el examen PMP."
  }
};
