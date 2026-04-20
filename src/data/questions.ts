import { Question } from '../types';

export const pmpQuestions: Question[] = [
  {
    id: "pmp-1",
    correctAnswer: 0,
    translations: {
      pl: {
        category: "Integracja",
        question: "Kierownik projektu zauważa, że interesariusz ma wpływ na projekt, którego wcześniej nie zidentyfikowano. Co powinien zrobić kierownik projektu w pierwszej kolejności?",
        options: [
          "Zaktualizować rejestr interesariuszy",
          "Poinformować sponsora o nowym interesariuszu",
          "Dodać interesariusza do planu komunikacji",
          "Ignorować interesariusza do czasu oficjalnego zgłoszenia"
        ],
        explanation: "Pierwszym krokiem jest zawsze udokumentowanie nowego interesariusza w rejestrze interesariuszy."
      },
      en: {
        category: "Integration",
        question: "A project manager notices that a stakeholder has an influence on the project that was not previously identified. What should the project manager do first?",
        options: [
          "Update the stakeholder register",
          "Inform the sponsor about the new stakeholder",
          "Add the stakeholder to the communications plan",
          "Ignore the stakeholder until official reporting"
        ],
        explanation: "The first step is always to document the new stakeholder in the stakeholder register."
      },
      ar: {
        category: "تكامل",
        question: "لاحظ مدير المشروع أن أحد أصحاب المصلحة له تأثير على المشروع لم يتم تحديده من قبل. ماذا يجب على مدير المشروع أن يفعل أولاً؟",
        options: [
          "تحديث سجل أصحاب المصلحة",
          "إبلاغ الراعي بصاحب المصلحة الجديد",
          "إضافة صاحب المصلحة إلى خطة الاتصالات",
          "تجاهل صاحب المصلحة حتى يقدم تقريراً رسمياً"
        ],
        explanation: "الخطوة الأولى هي دائماً توثيق صاحب المصلحة الجديد في سجل أصحاب المصلحة."
      },
      de: {
        category: "Integration",
        question: "Ein Projektmanager stellt fest, dass ein Stakeholder einen Einfluss auf das Projekt hat, der zuvor nicht identifiziert wurde. Was sollte der Projektmanager zuerst tun?",
        options: [
          "Das Stakeholder-Register aktualisieren",
          "Den Sponsor über den neuen Stakeholder informieren",
          "Den Stakeholder in den Kommunikationsplan aufnehmen",
          "Den Stakeholder bis zur offiziellen Berichterstattung ignorieren"
        ],
        explanation: "Der erste Schritt besteht immer darin, den neuen Stakeholder im Stakeholder-Register zu dokumentieren."
      },
      es: {
        category: "Integración",
        question: "Un director de proyecto nota que un interesado tiene una influencia en el proyecto que no fue identificada previamente. ¿Qué debe hacer el director del proyecto primero?",
        options: [
          "Actualizar el registro de interesados",
          "Informar al patrocinador sobre el nuevo interesado",
          "Agregar al interesado al plan de comunicaciones",
          "Ignorar al interesado hasta que haya un informe oficial"
        ],
        explanation: "El primer paso siempre es documentar al nuevo interesado en el registro de interesados."
      }
    }
  },
  {
    id: "pmp-2",
    correctAnswer: 1,
    translations: {
      pl: {
        category: "Harmonogram",
        question: "Projekt jest opóźniony o dwa tygodnie. Ścieżka krytyczna wykazuje negatywną rezerwę. Kierownik projektu decyduje się na dodanie dodatkowych zasobów do zadań na ścieżce krytycznej. Jak nazywa się ta technika?",
        options: [
          "Fast Tracking",
          "Crashing",
          "Resource Leveling",
          "Scope Creep"
        ],
        explanation: "Crashing (kompresja harmonogramu) polega na dodawaniu zasobów w celu skrócenia czasu trwania zadań na ścieżce krytycznej przy minimalnym wzroście kosztów."
      },
      en: {
        category: "Schedule",
        question: "The project is two weeks behind schedule. The critical path shows a negative float. The project manager decides to add additional resources to tasks on the critical path. What is this technique called?",
        options: [
          "Fast Tracking",
          "Crashing",
          "Resource Leveling",
          "Scope Creep"
        ],
        explanation: "Crashing (schedule compression) involves adding resources to shorten fixed-duration tasks on the critical path with minimal cost increase."
      },
      ar: {
        category: "الجدول الزمني",
        question: "المشروع متأخر عن الجدول الزمني بأسبوعين. يظهر المسار الحرج فلوت (float) سالباً. يقرر مدير المشروع إضافة موارد إضافية للمهام في المسار الحرج. ماذا تسمى هذه التقنية؟",
        options: [
          "المسار السريع (Fast Tracking)",
          "الضغط (Crashing)",
          "تسوية الموارد (Resource Leveling)",
          "زحف النطاق (Scope Creep)"
        ],
        explanation: "الضغط (Crashing) يتضمن إضافة موارد لتقصير مدة المهام في المسار الحرج مع تقليل زيادة التكاليف."
      },
      de: {
        category: "Terminplan",
        question: "Das Projekt liegt zwei Wochen hinter dem Zeitplan zurück. Der kritische Pfad zeigt einen negativen Puffer. Der Projektmanager beschließt, zusätzliche Ressourcen für Aufgaben auf dem kritischen Pfad hinzuzufügen. Wie nennt man diese Technik?",
        options: [
          "Fast Tracking",
          "Crashing",
          "Ressourcenausgleich (Resource Leveling)",
          "Scope Creep"
        ],
        explanation: "Crashing (Terminplanverdichtung) beinhaltet das Hinzufügen von Ressourcen, um die Dauer von Aufgaben auf dem kritischen Pfad bei minimaler Kostenerhöhung zu verkürzen."
      },
      es: {
        category: "Calendario",
        question: "El proyecto tiene dos semanas de retraso. La ruta crítica muestra una holgura negativa. El director del proyecto decide agregar recursos adicionales a las tareas en la ruta crítica. ¿Cómo se llama esta técnica?",
        options: [
          "Vía rápida (Fast Tracking)",
          "Compresión (Crashing)",
          "Nivelación de recursos",
          "Corrupción del alcance (Scope Creep)"
        ],
        explanation: "La compresión (Crashing) consiste en añadir recursos para acortar la duración de las tareas en la ruta crítica con el mínimo incremento de costes."
      }
    }
  },
  {
    id: "pmp-3",
    correctAnswer: 2,
    translations: {
      pl: {
        category: "Ryzyko",
        question: "Podczas identyfikacji ryzyka zespół znajduje zagrożenie, które ma niskie prawdopodobieństwo, ale bardzo wysoki wpływ. Decydują się nie podejmować żadnych działań, dopóki ryzyko nie wystąpi. Jaką strategię reakcji wybrano?",
        options: ["Unikanie", "Przeniesienie", "Akceptacja", "Łagodzenie"],
        explanation: "Akceptacja ryzyka polega na uznaniu jego istnienia i niepodejmowaniu proaktywnych działań."
      },
      en: {
        category: "Risk",
        question: "During risk identification, the team finds a threat that has a low probability but very high impact. They decide to take no action until the risk occurs. What response strategy was chosen?",
        options: ["Avoidance", "Transfer", "Acceptance", "Mitigation"],
        explanation: "Risk acceptance involves acknowledging the risk and choosing not to take proactive action."
      },
      ar: {
        category: "المخاطر",
        question: "أثناء تحديد المخاطر، يجد الفريق تهديداً له احتمالية منخفضة ولكن تأثيره كبير جداً. يقررون عدم اتخاذ أي إجراء حتى يتم وقوع الخطر. ما هي استراتيجية الاستجابة المختارة؟",
        options: ["تجنب", "تحويل", "قبول", "تخفيف"],
        explanation: "قبول المخاطر يتضمن الاعتراف بالخطر واختيار عدم اتخاذ إجراء استباقي."
      },
      de: {
        category: "Risiko",
        question: "Während der Risikoidentifizierung findet das Team eine Bedrohung, die eine geringe Wahrscheinlichkeit, aber eine sehr hohe Auswirkung hat. Sie entscheiden sich, keine Maßnahmen zu ergreifen, bis das Risiko eintritt. Welche Reaktionsstrategie wurde gewählt?",
        options: ["Vermeidung", "Übertragung", "Akzeptanz", "Minderung"],
        explanation: "Risikoakzeptanz beinhaltet das Anerkennen des Risikos und die Entscheidung, keine proaktiven Maßnahmen zu ergreifen."
      },
      es: {
        category: "Riesgo",
        question: "Durante la identificación de riesgos, el equipo encuentra una amenaza que tiene una probabilidad baja pero un impacto muy alto. Deciden no tomar ninguna medida hasta que ocurra el riesgo. ¿Qué estrategia de respuesta se eligió?",
        options: ["Evitar", "Transferir", "Aceptar", "Mitigar"],
        explanation: "La aceptación del riesgo consiste en reconocer el riesgo y elegir no tomar medidas proactivas."
      }
    }
  },
  {
    id: "pmp-4",
    correctAnswer: 1,
    translations: {
      pl: {
        category: "Zamówienia",
        question: "Który typ kontraktu wiąże się z największym ryzykiem dla kupującego?",
        options: [
          "Fixed Price (Cena stała)",
          "Cost Plus Fixed Fee (Koszt plus stała opłata)",
          "Time and Material (Czas i materiał)",
          "Fixed Price Incentive Fee"
        ],
        explanation: "W kontraktach typu Cost Reimbursable (w tym CPFF) kupujący ponosi ryzyko wzrostu kosztów."
      },
      en: {
        category: "Procurement",
        question: "Which contract type carries the highest risk for the buyer?",
        options: [
          "Fixed Price",
          "Cost Plus Fixed Fee (CPFF)",
          "Time and Material",
          "Fixed Price Incentive Fee"
        ],
        explanation: "In Cost Reimbursable contracts (including CPFF), the buyer bears the risk of cost increases."
      },
      ar: {
        category: "المشتريات",
        question: "أي نوع من العقود يحمل أعلى مخاطر على المشتري؟",
        options: [
          "سعر ثابت (Fixed Price)",
          "التكلفة زائد رسوم ثابتة (CPFF)",
          "الوقت والمواد (Time and Material)",
          "سعر ثابت مع رسوم تحفيزية"
        ],
        explanation: "في عقود استرداد التكاليف (بما في ذلك CPFF)، يتحمل المشتري مخاطر زيادة التكاليف."
      },
      de: {
        category: "Beschaffung",
        question: "Welche Vertragsart birgt das höchste Risiko für den Käufer?",
        options: [
          "Festpreis (Fixed Price)",
          "Kostenerstattung plus feste Gebühr (CPFF)",
          "Zeit und Material",
          "Festpreis mit Anreizgebühr"
        ],
        explanation: "Bei Kostenerstattungsverträgen (einschließlich CPFF) trägt der Käufer das Risiko von Kostensteigerungen."
      },
      es: {
        category: "Adquisiciones",
        question: "¿Qué tipo de contrato conlleva el mayor riesgo para el comprador?",
        options: [
          "Precio fijo",
          "Costo más honorarios fijos (CPFF)",
          "Tiempo y materiales",
          "Precio fijo con honorarios con incentivos"
        ],
        explanation: "En los contratos de reembolso de costes (incluido el CPFF), el comprador asume el riesgo de aumento de los costes."
      }
    }
  },
  {
    id: "pmp-5",
    correctAnswer: 1,
    translations: {
      pl: {
        category: "Zasoby",
        question: "Zespół przechodzi przez fazę, w której pojawiają się konflikty. W jakiej fazie rozwoju zespołu według Tuckmana się znajdują?",
        options: ["Forming", "Storming", "Norming", "Performing"],
        explanation: "Storming to faza, w której zespół zaczyna konfrontować się z problemami, co często prowadzi do konfliktów."
      },
      en: {
        category: "Resources",
        question: "The team is going through a phase where conflicts arise. Which phase of Tuckman's team development are they in?",
        options: ["Forming", "Storming", "Norming", "Performing"],
        explanation: "Storming is the stage where the team starts to confront problems, which often leads to conflict."
      },
      ar: {
        category: "الموارد",
        question: "يمر الفريق بمرحلة تنشأ فيها الصراعات. في أي مرحلة من مراحل تطوير فريق تاكمان (Tuckman) هم فيها؟",
        options: ["تكوين (Forming)", "اقتحام (Storming)", "تطبيع (Norming)", "أداء (Performing)"],
        explanation: "الاقتحام (Storming) هو المرحلة التي يبدأ فيها الفريق في مواجهة المشاكل، مما يؤدي غالباً إلى الصراع."
      },
      de: {
        category: "Ressourcen",
        question: "Das Team durchläuft eine Phase, in der Konflikte auftreten. In welcher Phase der Teamentwicklung nach Tuckman befinden sie sich?",
        options: ["Forming", "Storming", "Norming", "Performing"],
        explanation: "Storming ist die Phase, in der das Team beginnt, Probleme anzugehen, was oft zu Konflikten führt."
      },
      es: {
        category: "Recursos",
        question: "El equipo está pasando por una fase en la que surgen conflictos. ¿En qué fase del desarrollo de equipos de Tuckman se encuentran?",
        options: ["Formación", "Tormenta", "Normalización", "Desempeño"],
        explanation: "La tormenta (Storming) es la etapa en la que el equipo empieza a confrontar problemas, lo que a menudo lleva al conflicto."
      }
    }
  },
  {
    id: "pmp-6",
    correctAnswer: 2,
    translations: {
      pl: {
        category: "Zakres",
        question: "Klient prosi o zmianę, która nie jest uwzględniona w planie bazowym. Co powinien zrobić kierownik projektu?",
        options: [
          "Zaimplementować zmianę od razu",
          "Odmówić",
          "Złożyć wniosek o zmianę (Change Request)",
          "Zapytać zespół"
        ],
        explanation: "Wszelkie zmiany w planach bazowych muszą przejść przez formalny proces kontroli zmian."
      },
      en: {
        category: "Scope",
        question: "A client requests a change not included in the baseline scope. What should the project manager do?",
        options: [
          "Implement the change immediately",
          "Refuse the change",
          "Submit a formal Change Request",
          "Ask the team"
        ],
        explanation: "Any changes to baseline plans must go through a formal change control process."
      },
      ar: {
        category: "النطاق",
        question: "يطلب العميل تغييراً غير مدرج في نطاق الأساس. ماذا يجب أن يفعل مدير المشروع؟",
        options: [
          "تنفيذ التغيير على الفور",
          "رفض التغيير",
          "تقديم طلب تغيير رسمي (Change Request)",
          "سؤال الفريق"
        ],
        explanation: "يجب أن تمر أي تغييرات على خطط الأساس بعملية رسمية للتحكم في التغيير."
      },
      de: {
        category: "Inhalt und Umfang",
        question: "Ein Kunde beantragt eine Änderung, die nicht im Basisplan enthalten ist. Was sollte der Projektmanager tun?",
        options: [
          "Die Änderung sofort umsetzen",
          "Die Änderung ablehnen",
          "Einen formalen Änderungsantrag (Change Request) einreichen",
          "Das Team fragen"
        ],
        explanation: "Alle Änderungen an den Basisplänen müssen einen formalen Änderungskontrollprozess durchlaufen."
      },
      es: {
        category: "Alcance",
        question: "Un cliente solicita un cambio que no está incluido en el alcance base. ¿Qué debe hacer el director del proyecto?",
        options: [
          "Implementar el cambio de inmediato",
          "Rechazar el cambio",
          "Presentar una solicitud de cambio formal (Change Request)",
          "Preguntar al equipo"
        ],
        explanation: "Cualquier cambio en los planes base debe pasar por un proceso formal de control de cambios."
      }
    }
  },
  {
    id: "pmp-7",
    correctAnswer: 1,
    translations: {
      pl: {
        category: "Jakość",
        question: "Które narzędzie służy do identyfikacji głównej przyczyny problemu (Root Cause Analysis)?",
        options: ["Pareto", "Ishikawa (Rybia kość)", "Checksheet", "Control Chart"],
        explanation: "Diagram Ishikawy jest klasycznym narzędziem do analizy przyczyn i skutków."
      },
      en: {
        category: "Quality",
        question: "Which tool is used for Root Cause Analysis?",
        options: ["Pareto Chart", "Ishikawa (Fishbone) Diagram", "Checksheet", "Control Chart"],
        explanation: "The Ishikawa diagram is a classic tool for cause-and-effect analysis."
      },
      ar: {
        category: "الجودة",
        question: "أي أداة تستخدم لتحليل السبب الجذري (Root Cause Analysis)؟",
        options: ["مخطط باريتو (Pareto)", "إيشيكاوا (عظمة السمكة)", "ورقة التحقق (Checksheet)", "مخطط التحكم"],
        explanation: "مخطط إيشيكاوا هو أداة كلاسيكية لتحليل السبب والنتيجة."
      },
      de: {
        category: "Qualität",
        question: "Welches Tool wird für die Ursachenanalyse (Root Cause Analysis) verwendet?",
        options: ["Pareto-Diagramm", "Ishikawa-Diagramm (Fischgräte)", "Checkliste", "Regelkarte (Control Chart)"],
        explanation: "Das Ishikawa-Diagramm ist ein klassisches Werkzeug zur Ursache-Wirkungs-Analyse."
      },
      es: {
        category: "Calidad",
        question: "¿Qué herramienta se utiliza para el análisis de causa raíz (Root Cause Analysis)?",
        options: ["Diagrama de Pareto", "Ishikawa (espina de pescado)", "Hoja de verificación", "Gráfico de control"],
        explanation: "El diagrama de Ishikawa es una herramienta clásica para el análisis de causa y efecto."
      }
    }
  },
  {
    id: "pmp-8",
    correctAnswer: 2,
    translations: {
      pl: {
        category: "Komunikacja",
        question: "Jeśli w projekcie jest 10 interesariuszy, ile jest kanałów komunikacji?",
        options: ["10", "20", "45", "90"],
        explanation: "Wzór to n(n-1)/2. Dla 10 osób: 10*(10-1)/2 = 45."
      },
      en: {
        category: "Communication",
        question: "If there are 10 stakeholders in a project, how many communication channels are there?",
        options: ["10", "20", "45", "90"],
        explanation: "The formula is n(n-1)/2. For 10 people: 10*(10-1)/2 = 45."
      },
      ar: {
        category: "الاتصالات",
        question: "إذا كان هناك 10 من أصحاب المصلحة في المشروع، فكم عدد قنوات الاتصال؟",
        options: ["10", "20", "45", "90"],
        explanation: "الصيغة هي n(n-1)/2. لـ 10 أشخاص: 10*(10-1)/2 = 45."
      },
      de: {
        category: "Kommunikation",
        question: "Wenn es in einem Projekt 10 Stakeholder gibt, wie viele Kommunikationskanäle gibt es?",
        options: ["10", "20", "45", "90"],
        explanation: "Die Formel lautet n(n-1)/2. Für 10 Personen: 10*(10-1)/2 = 45."
      },
      es: {
        category: "Comunicación",
        question: "Si hay 10 interesados en un proyecto, ¿cuántos canales de comunicación hay?",
        options: ["10", "20", "45", "90"],
        explanation: "La fórmula es n(n-1)/2. Para 10 personas: 10*(10-1)/2 = 45."
      }
    }
  },
  {
    id: "pmp-9",
    correctAnswer: 1,
    translations: {
      pl: {
        category: "Koszty",
        question: "Wskaźnik CPI wynosi 0,85. Co to oznacza dla projektu?",
        options: [
          "Projekt jest poniżej budżetu",
          "Projekt jest powyżej budżetu",
          "Projekt jest zgodnie z harmonogramem",
          "Projekt jest opóźniony"
        ],
        explanation: "CPI < 1 oznacza, że projekt wydaje więcej niż zaplanowano (przekroczenie budżetu)."
      },
      en: {
        category: "Cost",
        question: "The CPI index is 0.85. What does this mean for the project?",
        options: [
          "The project is under budget",
          "The project is over budget",
          "The project is on schedule",
          "The project is delayed"
        ],
        explanation: "CPI < 1 means the project is spending more than planned (over budget)."
      },
      ar: {
        category: "التكلفة",
        question: "مؤشر CPI هو 0.85. ماذا يعني هذا بالنسبة للمشروع؟",
        options: [
          "المشروع تحت الميزانية",
          "المشروع فوق الميزانية",
          "المشروع حسب الجدول الزمني",
          "المشروع متأخر"
        ],
        explanation: "CPI < 1 يعني أن المشروع ينفق أكثر مما هو مخطط له (تجاوز الميزانية)."
      },
      de: {
        category: "Kosten",
        question: "Der CPI-Index liegt bei 0,85. Was bedeutet das für das Projekt?",
        options: [
          "Das Projekt liegt unter dem Budget",
          "Das Projekt liegt über dem Budget",
          "Das Projekt liegt im Zeitplan",
          "Das Projekt ist verzögert"
        ],
        explanation: "CPI < 1 bedeutet, dass das Projekt mehr ausgibt als geplant (Budgetüberschreitung)."
      },
      es: {
        category: "Costo",
        question: "El índice CPI es 0,85. ¿Qué significa esto para el proyecto?",
        options: [
          "El proyecto está por debajo del presupuesto",
          "El proyecto está por encima del presupuesto",
          "El proyecto está según el cronograma",
          "El proyecto está retrasado"
        ],
        explanation: "Un CPI < 1 significa que el proyecto está gastando más de lo planeado (sobrecoste)."
      }
    }
  },
  {
    id: "pmp-10",
    correctAnswer: 2,
    translations: {
      pl: {
        category: "Agile",
        question: "W Scrumie, kto jest odpowiedzialny za priorytetyzację Backlogu Produktu?",
        options: ["Scrum Master", "Zespół", "Product Owner", "Project Manager"],
        explanation: "Product Owner jest odpowiedzialny za zarządzanie Backlogiem Produktu."
      },
      en: {
        category: "Agile",
        question: "In Scrum, who is responsible for Product Backlog prioritization?",
        options: ["Scrum Master", "Development Team", "Product Owner", "Project Manager"],
        explanation: "The Product Owner is solely responsible for managing the Product Backlog."
      },
      ar: {
        category: "أجايل (Agile)",
        question: "في سكروم (Scrum)، من المسؤول عن تحديد أولويات متأخرات المنتج (Product Backlog)؟",
        options: ["سكروم ماستر (Scrum Master)", "فريق التطوير", "مالك المنتج (Product Owner)", "مدير المشروع"],
        explanation: "مالك المنتج هو المسؤول الوحيد عن إدارة متأخرات المنتج."
      },
      de: {
        category: "Agile",
        question: "Wer ist in Scrum für die Priorisierung des Product Backlogs verantwortlich?",
        options: ["Scrum Master", "Entwicklungsteam", "Product Owner", "Projektmanager"],
        explanation: "Der Product Owner ist allein für die Verwaltung des Product Backlogs verantwortlich."
      },
      es: {
        category: "Agile",
        question: "¿Quién es el responsable de priorizar el Product Backlog en Scrum?",
        options: ["Scrum Master", "Equipo de desarrollo", "Product Owner", "Director de Proyecto"],
        explanation: "El Product Owner es el único responsable de gestionar el Product Backlog."
      }
    }
  }
  // Simplified to 10 for brevity in the sample, but keeping the structure ready
];
