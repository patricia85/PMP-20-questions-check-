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
  },
  {
    id: "pmp-11",
    correctAnswer: 0,
    translations: {
      pl: {
        category: "Ludzie",
        question: "Interesariusz jest wrogo nastawiony do projektu. Co powinien zrobić kierownik projektu?",
        options: ["Zrozumieć powody oporu", "Zignorować go", "Poinformować sponsora", "Usunąć go z listy"],
        explanation: "Zrozumienie przyczyn oporu pozwala na opracowanie strategii angażowania interesariusza."
      },
      en: {
        category: "People",
        question: "A stakeholder is resistant to the project. What should the project manager do?",
        options: ["Understand the root cause of resistance", "Ignore them", "Inform the sponsor", "Remove them from the list"],
        explanation: "Understanding resistance helps in developing tailored engagement strategies."
      },
      ar: {
        category: "الأشخاص",
        question: "أحد أعضاء الفريق مثقل بالعمل باستمرار. ماذا يجب أن يفعل القائد؟",
        options: ["فهم السبب الجذري للمقاومة", "تجاهله", "إبلاغ الراعي", "حذفه من القائمة"],
        explanation: "يساعد فهم المقاومة في تطوير استراتيجيات مشاركة مخصصة."
      },
      de: {
        category: "Menschen",
        question: "Ein Stakeholder leistet Widerstand gegen das Projekt. Was sollte der Projektmanager tun?",
        options: ["Die Kernursache des Widerstands verstehen", "Ihn ignorieren", "Den Sponsor informieren", "Ihn von der Liste entfernen"],
        explanation: "Das Verständnis von Widerstand hilft bei der Entwicklung maßgeschneiderter Engagement-Strategien."
      },
      es: {
        category: "Personas",
        question: "Un interesado se resiste al proyecto. ¿Qué debe hacer el director del proyecto?",
        options: ["Comprender la causa raíz de la resistencia", "Ignorarlos", "Informar al patrocinador", "Eliminarlos de la lista"],
        explanation: "Comprender la resistencia ayuda a desarrollar estrategias de participación personalizadas."
      }
    }
  },
  {
    id: "pmp-12",
    correctAnswer: 2,
    translations: {
      pl: {
        category: "Proces",
        question: "Projektant kończy pracę, ale nie podpisał dokumentacji. Co należy zrobić?",
        options: ["Zatrzymać płatność", "Poprosić o podpis później", "Zapewnić formalną akceptację", "Zignorować to"],
        explanation: "Formalna akceptacja jest kluczowa dla zamknięcia etapu lub projektu."
      },
      en: {
        category: "Process",
        question: "A designer finishes the work but hasn't signed off. What should be done?",
        options: ["Withhold payment", "Ask for signature later", "Ensure formal acceptance and sign-off", "Ignore it"],
        explanation: "Formal acceptance is essential for closing a phase or the project."
      },
      ar: {
        category: "العملية",
        question: "أنهى المصمم العمل ولكنه لم يوقع عليه. ماذا ينبغي أن يفعل؟",
        options: ["حجب الدفع", "طلب التوقيع لاحقاً", "ضمان القبول الرسمي والتوقيع", "تجاهل الأمر"],
        explanation: "القبول الرسمي ضروري لإغلاق المرحلة أو المشروع."
      },
      de: {
        category: "Prozess",
        question: "Ein Designer schließt die Arbeit ab, hat aber noch nicht unterschrieben. Was sollte getan werden?",
        options: ["Zahlung zurückhalten", "Später um Unterschrift bitten", "Formale Abnahme und Freigabe sicherstellen", "Ignorieren"],
        explanation: "Die formale Abnahme ist für den Abschluss einer Phase oder des Projekts unerlässlich."
      },
      es: {
        category: "Proceso",
        question: "Un diseñador termina el trabajo pero no ha firmado la aprobación. ¿Qué se debe hacer?",
        options: ["Retener el pago", "Pedir la firma más tarde", "Asegurar la aceptación formal y la firma", "Ignorarlo"],
        explanation: "La aceptación formal es esencial para cerrar una fase o el proyecto."
      }
    }
  },
  {
    id: "pmp-13",
    correctAnswer: 1,
    translations: {
      pl: {
        category: "Środowisko Biznesowe",
        question: "Zmieniają się przepisy prawne wpływające na projekt. Co zrobić najpierw?",
        options: ["Zatrzymać projekt", "Zaktualizować rejestr ryzyk", "Zignorować to", "Zmienić zespół"],
        explanation: "Zmiany legislacyjne to ryzyko zewnętrzne, które musi być natychmiast odnotowane."
      },
      en: {
        category: "Business Environment",
        question: "Legal regulations affecting the project change. What to do first?",
        options: ["Stop the project", "Update the risk register", "Ignore it", "Change the team"],
        explanation: "Legislative changes are external risks that must be recorded immediately."
      },
      ar: {
        category: "بيئة العمل",
        question: "تغيرت اللوائح القانونية التي تؤثر على المشروع. ما العمل أولاً؟",
        options: ["إيقاف المشروع", "تحديث سجل المخاطر", "تجاهل الأمر", "تغيير الفريق"],
        explanation: "التغييرات التشريعية هي مخاطر خارجية يجب تسجيلها على الفور."
      },
      de: {
        category: "Geschäftsumfeld",
        question: "Rechtliche Vorschriften, die das Projekt beeinflussen, ändern sich. Was ist zuerst zu tun?",
        options: ["Das Projekt stoppen", "Das Risikoregister aktualisieren", "Ignorieren", "Das Team wechseln"],
        explanation: "Gesetzesänderungen sind externe Risiken, die sofort erfasst werden müssen."
      },
      es: {
        category: "Entorno Empresarial",
        question: "Cambian las regulaciones legales que afectan al proyecto. ¿Qué hacer primero?",
        options: ["Detener el proyecto", "Actualizar el registro de riesgos", "Ignorarlo", "Cambiar el equipo"],
        explanation: "Los cambios legislativos son riesgos externos que deben registrarse inmediatamente."
      }
    }
  },
  {
    id: "pmp-14",
    correctAnswer: 3,
    translations: {
      pl: {
        category: "Ludzie",
        question: "Członek zespołu jest stale przeciążony pracą. Co powinien zrobić lider?",
        options: ["Kazać mu pracować ciężej", "Zatrudnić nową osobę", "Zignorować to", "Przeanalizować obciążenie i wyrównać zasoby"],
        explanation: "Wyrównywanie zasobów zapobiega wypaleniu i optymalizuje pracę zespołu."
      },
      en: {
        category: "People",
        question: "A team member is constantly overloaded. What should the leader do?",
        options: ["Tell them to work harder", "Hire someone new", "Ignore it", "Analyze workload and perform resource leveling"],
        explanation: "Resource leveling prevents burnout and optimizes team performance."
      },
      ar: {
        category: "الأشخاص",
        question: "أحد أعضاء الفريق مثقل بالعمل باستمرار. ماذا يجب أن يفعل القائد؟",
        options: ["أخبره أن يعمل بجدية أكبر", "توظيف شخص جديد", "تجاهل الأمر", "تحليل عبء العمل وإجراء تسوية للموارد"],
        explanation: "تسوية الموارد تمنع الاحتراق الوظيفي وتحسن أداء الفريق."
      },
      de: {
        category: "Menschen",
        question: "Ein Teammitglied ist ständig überlastet. Was sollte die Führungskraft tun?",
        options: ["Ihnen sagen, sie sollen härter arbeiten", "Jemanden neu einstellen", "Ignorieren", "Arbeitsbelastung analysieren und Ressourcen abgleichen"],
        explanation: "Ressourcenabgleich verhindert Burnout und optimiert die Teamleistung."
      },
      es: {
        category: "Personas",
        question: "Un miembro del equipo está constantemente sobrecargado. ¿Qué debe hacer el líder?",
        options: ["Decirles que trabajen más duro", "Contratar a alguien nuevo", "Ignorarlo", "Analizar la carga de trabajo y realizar la nivelación de recursos"],
        explanation: "La nivelación de recursos previene el agotamiento y optimiza el desempeño del equipo."
      }
    }
  },
  {
    id: "pmp-15",
    correctAnswer: 0,
    translations: {
      pl: {
        category: "Proces",
        question: "Podczas Planning Poker zespół ma dużą rozbieżność w szacunkach. Co robi Scrum Master?",
        options: ["Zachęca do dyskusji najbardziej skrajne osoby", "Wybiera średnią", "Sam decyduje", "Zignoruje to"],
        explanation: "Dyskusja pozwala zrozumieć różne perspektywy i osiągnąć konsensus."
      },
      en: {
        category: "Process",
        question: "During Planning Poker, there's a large divergence in estimates. What does the Scrum Master do?",
        options: ["Encourages discussion between outliers", "Sets the average", "Decides themselves", "Ignores it"],
        explanation: "Discussion helps understand different perspectives and leads to consensus."
      },
      ar: {
        category: "العملية",
        question: "أثناء لعبة Planning Poker، كان هناك اختلاف كبير في التقديرات. ماذا يفعل سكروم ماستر؟",
        options: ["يشجع النقاش بين القيم المتطرفة", "يحدد المتوسط", "يقرر بنفسه", "يتجاهل الأمر"],
        explanation: "يساعد النقاش في فهم وجهات النظر المختلفة ويؤدي إلى الإجماع."
      },
      de: {
        category: "Prozess",
        question: "Beim Planning Poker gibt es große Abweichungen bei den Schätzungen. Was tut der Scrum Master?",
        options: ["Ermutigt zur Diskussion zwischen den Ausreißern", "Legt den Durchschnitt fest", "Entscheidet selbst", "Ignoriert es"],
        explanation: "Diskussionen helfen, verschiedene Perspektiven zu verstehen und führen zu einem Konsens."
      },
      es: {
        category: "Proceso",
        question: "Durante el Planning Poker, hay una gran divergencia en las estimaciones. ¿Qué hace el Scrum Master?",
        options: ["Fomentar la discusión entre los valores atípicos", "Establecer el promedio", "Decidir ellos mismos", "Ignorarlo"],
        explanation: "La discusión ayuda a comprender diferentes perspectivas y conduce al consenso."
      }
    }
  },
  {
    id: "pmp-16",
    correctAnswer: 2,
    translations: {
      pl: {
        category: "Środowisko Biznesowe",
        question: "Wykryto, że projekt nie dostarcza zakładanej wartości biznesowej. Co zrobić?",
        options: ["Kontynuować", "Zwiększyć budżet", "Zrobić przegląd z Product Ownerem", "Zakończyć projekt od razu"],
        explanation: "Przegląd pozwala na walidację wartości i ewentualną zmianę kursu (pivot)."
      },
      en: {
        category: "Business Environment",
        question: "The project is found to not be delivering expected business value. What to do?",
        options: ["Continue anyway", "Increase the budget", "Perform a review with the Product Owner", "Terminate immediately"],
        explanation: "A review allows for value validation and a potential pivot."
      },
      ar: {
        category: "بيئة العمل",
        question: "تبين أن المشروع لا يقدم القيمة التجارية المتوقعة. ما العمل؟",
        options: ["الاستمرار على أي حال", "زيادة الميزانية", "إجراء مراجعة مع مالك المنتج", "إنهاء المشروع فوراً"],
        explanation: "تسمح المراجعة بالتحقق من القيمة والتحول المحتمل."
      },
      de: {
        category: "Geschäftsumfeld",
        question: "Es stellt sich heraus, dass das Projekt nicht den erwarteten Geschäftswert liefert. Was ist zu tun?",
        options: ["Trotzdem weitermachen", "Das Budget erhöhen", "Eine Überprüfung mit dem Product Owner durchführen", "Sofort abbrechen"],
        explanation: "Eine Überprüfung ermöglicht die Wertvalidierung und einen potenziellen Pivot."
      },
      es: {
        category: "Entorno Empresarial",
        question: "Se descubre que el proyecto no está entregando el valor comercial esperado. ¿Qué hacer?",
        options: ["Continuar de todos modos", "Aumentar el presupuesto", "Realizar una revisión con el Product Owner", "Terminar inmediatamente"],
        explanation: "Una revisión permite la validación del valor y un posible giro."
      }
    }
  },
  {
    id: "pmp-17",
    correctAnswer: 1,
    translations: {
      pl: {
        category: "Ludzie",
        question: "Dwa kluczowe zespoły mają konflikt o priorytety. Co robi kierownik projektu?",
        options: ["Sam narzuca priorytety", "Facylituje spotkanie liderów zespołów", "Czeka aż sami rozwiążą", "Zgłasza to do zarządu"],
        explanation: "Facylitacja pozwala na wypracowanie wspólnego rozwiązania i zadowolenie obu stron."
      },
      en: {
        category: "People",
        question: "Two key teams have a conflict over priorities. What does the project manager do?",
        options: ["Imposes priorities themselves", "Facilitates a meeting between team leaders", "Waits for them to solve it", "Reports to senior management"],
        explanation: "Facilitation helps in working out a mutual solution that satisfies both parties."
      },
      ar: {
        category: "الأشخاص",
        question: "هناك صراع بين فريقين رئيسيين حول الأولويات. ماذا يفعل مدير المشروع؟",
        options: ["يفرض الأولويات بنفسه", "يسهل عقد اجتماع بين قادة الفريق", "ينتظرهم لحلها", "يرفع تقريراً إلى الإدارة العليا"],
        explanation: "تساعد التسهيلات في التوصل إلى حل متبادل يرضي الطرفين."
      },
      de: {
        category: "Menschen",
        question: "Zwei wichtige Teams haben einen Konflikt über Prioritäten. Was tut der Projektmanager?",
        options: ["Setzt selbst Prioritäten", "Moderiert ein Treffen zwischen den Teamleitern", "Wartet, bis sie es selbst lösen", "Berichtet an das obere Management"],
        explanation: "Moderation hilft dabei, eine gemeinsame Lösung zu erarbeiten, die beide Parteien zufriedenstellt."
      },
      es: {
        category: "Personas",
        question: "Dos equipos clave tienen un conflicto sobre las prioridades. ¿Qué hace el director del proyecto?",
        options: ["Imponer las prioridades ellos mismos", "Facilitar una reunión entre los líderes de equipo", "Esperar a que ellos lo resuelvan", "Informar a la alta dirección"],
        explanation: "La facilitación ayuda a elaborar una solución mutua que satisfaga a ambas partes."
      }
    }
  },
  {
    id: "pmp-18",
    correctAnswer: 0,
    translations: {
      pl: {
        category: "Proces",
        question: "Projekt wykazuje opóźnienie, ale jakość jest zbyt niska. Co zrobić?",
        options: ["Przeprowadzić analizę przyczyn", "Zwiększyć tempo pracy", "Zatrudnić juniorów", "Zignorować opóźnienie"],
        explanation: "Zwiększenie tempa przy niskiej jakości tylko pogorszy sytuację. Najpierw analiza."
      },
      en: {
        category: "Process",
        question: "The project shows delay, but quality is too low. What to do?",
        options: ["Perform a root cause analysis", "Increase work pace", "Hire juniors", "Ignore the delay"],
        explanation: "Increasing pace with low quality will only worsen the situation. Perform analysis first."
      },
      ar: {
        category: "العملية",
        question: "يظهر المشروع تأخراً، لكن الجودة منخفضة جداً. ما العمل؟",
        options: ["إجراء تحليل للسبب الجذري", "زيادة وتيرة العمل", "توظيف مبتدئين", "تجاهل التأخير"],
        explanation: "زيادة الوتيرة مع الجودة المنخفضة لن تؤدي إلا إلى تفاقم الوضع. قم بإجراء التحليل أولاً."
      },
      de: {
        category: "Prozess",
        question: "Das Projekt zeigt eine Verzögerung, aber die Qualität ist zu niedrig. Was ist zu tun?",
        options: ["Eine Ursachenanalyse durchführen", "Arbeitstempo erhöhen", "Junioren einstellen", "Verzögerung ignorieren"],
        explanation: "Das Erhöhen des Tempos bei niedriger Qualität wird die Situation nur verschlimmern. Zuerst analysieren."
      },
      es: {
        category: "Proceso",
        question: "El proyecto muestra retraso, pero la calidad es demasiado baja. ¿Qué hacer?",
        options: ["Realizar un análisis de causa raíz", "Aumentar el ritmo de trabajo", "Contratar juniors", "Ignorar el retraso"],
        explanation: "Aumentar el ritmo con baja calidad solo empeorará la situación. Realice primero el análisis."
      }
    }
  },
  {
    id: "pmp-19",
    correctAnswer: 3,
    translations: {
      pl: {
        category: "Środowisko Biznesowe",
        question: "Wybuchła wojna handlowa wpływająca na łańcuch dostaw. Co robi PM?",
        options: ["Zamyka projekt", "Płacze", "Nic nie robi", "Ocenia wpływ na cele projektu i aktualizuje rejestr ryzyk"],
        explanation: "Wydarzenia makroekonomiczne wymagają oceny wpływu i zarządzania ryzykiem."
      },
      en: {
        category: "Business Environment",
        question: "A trade war breaks out affecting the supply chain. What does the PM do?",
        options: ["Close the project", "Cry", "Do nothing", "Assess impact on project goals and update risk register"],
        explanation: "Macro-environmental events require impact assessment and risk management."
      },
      ar: {
        category: "بيئة العمل",
        question: "اندلعت حرب تجارية تؤثر على سلاسل الإمداد. ماذا يفعل مدير المشروع؟",
        options: ["إغلاق المشروع", "البكاء", "لا يفعل شيئاً", "تقييم التأثير على أهداف المشروع وتحديث سجل المخاطر"],
        explanation: "تتطلب الأحداث البيئية الكلية تقييم التأثير وإدارة المخاطر."
      },
      de: {
        category: "Geschäftsumfeld",
        question: "Ein Handelskrieg bricht aus und beeinträchtigt die Lieferkette. Was tut der PM?",
        options: ["Das Projekt beenden", "Weinen", "Nichts tun", "Auswirkungen auf Projektziele bewerten und Risikoregister aktualisieren"],
        explanation: "Makroökonomische Ereignisse erfordern eine Folgenabschätzung und Risikomanagement."
      },
      es: {
        category: "Entorno Empresarial",
        question: "Se desata una guerra comercial que afecta a la cadena de suministro. ¿Qué hace el PM?",
        options: ["Cerrar el proyecto", "Llorar", "No hacer nada", "Evaluar el impacto en los objetivos del proyecto y actualizar el registro de riesgos"],
        explanation: "Los eventos macroambientales requieren evaluación de impacto y gestión de riesgos."
      }
    }
  },
  {
    id: "pmp-20",
    correctAnswer: 1,
    translations: {
      pl: {
        category: "Ludzie",
        question: "Zespół sformułował zestaw zasad współpracy (Team Charter). Członek zespołu łamie te zasady. Co robisz?",
        options: ["Zwalniasz go", "Rozmawiasz z nim w cztery oczy", "Publicznie go upominasz", "Ignorujesz to"],
        explanation: "Prywatna rozmowa pozwala wyjaśnić przyczyny zachowania i przypomnieć o zobowiązaniach."
      },
      en: {
        category: "People",
        question: "The team formulated a Team Charter. A member is breaking the rules. What do you do?",
        options: ["Fire them", "Talk to them privately", "Reprimand them publicly", "Ignore it"],
        explanation: "A private conversation clarifies the reasons and reminds them of their commitments."
      },
      ar: {
        category: "الأشخاص",
        question: "صاغ الفريق ميثاق الفريق (Team Charter). أحد الأعضاء يخالف القواعد. ماذا تفعل؟",
        options: ["طرده من العمل", "التحدث معه على انفراد", "توبيخه علناً", "تجاهل الأمر"],
        explanation: "تسمح المحادثة الخاصة بتوضيح أسباب السلوك وتذكيرهم بالتزاماتهم."
      },
      de: {
        category: "Menschen",
        question: "Das Team hat eine Team-Charta erstellt. Ein Mitglied verstößt gegen die Regeln. Was tun Sie?",
        options: ["Ihn entlassen", "Privat mit ihm sprechen", "Ihn öffentlich rügen", "Ignorieren"],
        explanation: "Ein privates Gespräch klärt die Gründe und erinnert an die Verpflichtungen."
      },
      es: {
        category: "Personas",
        question: "El equipo formuló un Acta de Equipo (Team Charter). Un miembro está rompiendo las reglas. ¿Qué haces?",
        options: ["Despedirlos", "Hablar con ellos en privado", "Reprenderlos públicamente", "Ignorarlo"],
        explanation: "Una conversación privada aclara los motivos y les recuerda sus compromisos."
      }
    }
  }
];
