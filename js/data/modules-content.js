/**
 * Contenido Pedagógico Modular del Curso SCORM
 * Gestión Estratégica y Evaluación del Desempeño por Competencias (360° / 180°)
 * Metodología Martha Alles
 *
 * Fuentes Seminales:
 * - Martha Alles: "Desempeño por competencias: Evaluación de 360°"
 * - Martha Alles: "Dirección estratégica de Recursos Humanos. Gestión por competencias: Casos"
 *
 * Módulos:
 * - Módulo 0: Introducción y Alineación Sistémica (4 Preguntas Clave & Dinámica Dual-Track)
 * - Módulo 1: La Crisis del Diccionario Copiado y la Evaluación Adjetiva (Onboarding Invertido)
 * - Módulo 2: Ingeniería de Perfiles de Puesto & Matriz de Grados Objetivos (Reglas Técnicas)
 * - Módulo 3: Ponderación de Frecuencia & Corrección Descendente (Taxonomía BARS)
 * - Módulo 4: Simulación de Feedback 360° & Neutralización de Sesgos (Chat Simulator)
 * - Módulo 5: Capstone Studio — Ficha Integral de Evaluación 360° y Plan de Desarrollo
 *
 * Layer: DATA (Inmutable / Frozen DTOs)
 */

export const MODULES_DATA = Object.freeze([
  // =========================================================================
  // MÓDULO 0: INTRODUCCIÓN Y ORIENTACIÓN ANDRAGÓGICA
  // =========================================================================
  Object.freeze({
    id: 'mod-0',
    number: 0,
    title: 'Alineación Estratégica y Contrato Andragógico',
    subtitle: 'Propósito del curso, mapa de competencias terminales y dinámica dual-track',
    leadIntro: 'La evaluación del desempeño fracasa cuando se reduce a un trámite anual de adjetivos abstractos. Este espacio define las reglas de calibración, el fundamento científico y el modelo de autogestión para transformar la evaluación en una palanca de desarrollo real.',
    badge: 'Módulo 0 • Alineación Estratégica',
    duration: '5 min',
    theoryId: 'mod-0-theory',
    objective: 'Comprender el propósito estratégico del curso, el compendio de objetivos de desempeño de los módulos 1 a 5 y autogestionar el recorrido dual-track (práctica o teoría).',
    overview: `
      Bienvenido al programa especializado en Gestión Estratégica y Evaluación del Desempeño por Competencias (360°/180°) bajo la metodología Martha Alles.
      Este módulo introductorio establece las bases del contrato andragógico, presenta las 5 capacidades operativas que certificarás
      y explica cómo navegar la arquitectura dual-track.
    `,
    introData: Object.freeze({
      questions: Object.freeze([
        Object.freeze({
          id: 'q1-purpose',
          number: 1,
          question: '¿Por qué estás aquí?',
          title: 'El Dolor Real del Negocio',
          icon: '🎯',
          summary: 'Erradicar la inflación de calificaciones y el sesgo subjetivo en comités de evaluación.',
          details: `
            <p>
              En el 73% de las empresas se repite un escenario frustrante: áreas de RRHH que copian formularios genéricos
              o califican con escalas adjetivas ("Excelente", "Bueno", "Regular").
            </p>
            <p>
              El resultado es la <strong>inflación artificial de calificaciones</strong>: evaluaciones donde el
              <strong>90% de los colaboradores resulta "Excelente"</strong>, mientras la productividad se estanca,
              los clientes reportan errores y el personal calificado renuncia por falta de reconocimiento diferenciado.
            </p>
            <div class="rise-callout-metric" style="background: var(--mint-light); border-left: 4px solid var(--mint-dark); padding: 0.85rem 1.15rem; margin: 0.75rem 0; border-radius: 6px;">
              <strong>Misión formativa:</strong> Capacitarte como <strong>Evaluador y Calibrador Senior de Desempeño</strong>,
              capaz de construir perfiles sin sobre-exigencia, ponderar conductas por frecuencia mediante el
              <strong>Método de Corrección Descendente</strong> de Martha Alles, conducir entrevistas de feedback 360° y emitir planes de desarrollo certificados.
            </div>
          `
        }),
        Object.freeze({
          id: 'q2-objectives',
          number: 2,
          question: '¿Qué lograrás al terminar?',
          title: 'Compendio de Objetivos de Desempeño',
          icon: '🏆',
          summary: 'Cinco competencias operativas listas para implementar en tu organización.',
          details: `
            <p>Al culminar los 5 módulos prácticos habrás certificado las siguientes capacidades técnicas:</p>
            <div class="rise-roadmap-grid" style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem;">
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Módulo 1 • Diagnóstico Invertido:</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Identificar la causa raíz del colapso en evaluaciones de desempeño: distinguir la trampa del diccionario copiado y el vicio del adjetivismo moral.</p>
              </div>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Módulo 2 • Ingeniería de Perfiles de Puesto:</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Diseñar perfiles de puesto aplicando la Ley de Parsimonia (cardinales vs. específicas) y calibrar grados objetivos BARS (A, B, C, D) erradicando la exigencia generalizada de Grado A.</p>
              </div>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Módulo 3 • Calibración por Frecuencia:</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Aplicar el algoritmo de Corrección Descendente de Martha Alles para neutralizar el sesgo de recencia y ponderar conductas según su habitualidad (Siempre, Frecuente, Mitad del tiempo, Ocasional).</p>
              </div>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Módulo 4 • Feedback Multi-Fuente (180° / 360°):</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Liderar entrevistas de retroalimentación 360° desarmando actitudes defensivas, garantizando el anonimato estadístico (n &ge; 3) y neutralizando los sesgos de halo y severidad.</p>
              </div>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Módulo 5 • Capstone Studio Terminal:</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Completar y certificar la Ficha Integral de Evaluación 360°, calcular brechas de desarrollo y emitir el informe ejecutivo en Word (.docx) y Markdown (.md).</p>
              </div>
            </div>
          `
        }),
        Object.freeze({
          id: 'q3-reto-invertido',
          number: 3,
          question: '¿Por qué aprendemos mediante Reto Invertido?',
          title: 'El Principio del Fallo Productivo',
          icon: '🔄',
          summary: 'Aprender desde la crisis operativa antes de ver la regla técnica formal.',
          details: `
            <p>
              En la formación tradicional te obligan a leer diapositivas pasivas antes de interactuar. En el modelo andragógico de este curso, la secuencia es inversa:
            </p>
            <ul>
              <li><strong>Inicias en la crisis:</strong> Enfrentas un dilema real de gestión humana (casos de empresas reales documentados por Alles).</li>
              <li><strong>Fallo productivo:</strong> Compruebas por qué las soluciones intuitivas o convencionales fallan.</li>
              <li><strong>Desbloqueo JIT:</strong> Recibes la fórmula metodológica en el momento exacto en que tu mente la necesita para resolver el problema.</li>
            </ul>
          `
        }),
        Object.freeze({
          id: 'q4-dual-track',
          number: 4,
          question: '¿Cómo funciona la dinámica Dual-Track?',
          title: 'Ruta Práctica vs. Espinas Teóricas On-Demand',
          icon: '⚡',
          summary: 'Avanza 100% en la práctica o consulta el rigor científico sin bloqueos.',
          details: `
            <p>
              El curso cuenta con dos capas simultáneas:
            </p>
            <ol>
              <li><strong>Columna Vertebral (Spine):</strong> Ruta de acción pura. Resolviendo los retos prácticos, clasificadores y simulaciones completas el curso sin necesidad de abrir la teoría.</li>
              <li><strong>Espinas Teóricas (Fishbone):</strong> Paneles laterales (accesibles con el botón "Consultar Espina Teórica" o el atajo <code>Alt + T</code>) con papers seminales (Spencer & Spencer, McClelland, Smith & Kendall, Levy-Leboyer, Bernardin). Consultarlas te otorga insignias de maestría sin frenar tu avance.</li>
            </ol>
          `
        })
      ]),
      pathways: Object.freeze({
        title: 'Selecciona tu Ruta de Entrada',
        description: 'En este programa eres el protagonista de tu aprendizaje. Puedes lanzarte a resolver los casos o estudiar primero los fundamentos metodológicos.',
        practiceChoice: Object.freeze({
          title: 'Comenzar con la Práctica →',
          description: 'Sumérgete de inmediato en el Reto del Módulo 1 (Caso "Superdescuento").'
        }),
        theoryChoice: Object.freeze({
          title: 'Consultar Fundamento Metodológico 0.E',
          description: 'Abre la espina teórica para revisar la arquitectura sistémica antes de actuar.'
        })
      })
    })
  }),

  // =========================================================================
  // MÓDULO 1: LA CRISIS DEL DICCIONARIO COPIADO Y LA EVALUACIÓN ADJETIVA
  // =========================================================================
  Object.freeze({
    id: 'mod-1',
    number: 1,
    title: 'La Crisis del Diccionario Copiado y la Evaluación Adjetiva',
    subtitle: 'Diagnóstico de causas raíz en el colapso de evaluaciones de desempeño',
    leadIntro: 'El 80% de los fracasos en evaluación de desempeño no se deben a mala voluntad de los líderes, sino a instrumentos viciados de origen. Analiza la crisis real de Superdescuento y diagnostica la causa técnica.',
    badge: 'Módulo 1 • Diagnóstico Invertido',
    duration: '10 min',
    theoryId: 'mod-1-theory',
    objective: 'Identificar los vicios estructurales en instrumentos de evaluación (diccionarios copiados y escalas adjetivales) y reconocer la competencia como comportamiento observable orientado a resultados.',
    challenge: Object.freeze({
      id: 'challenge-1',
      moduleId: 'mod-1',
      badge: 'Reto Invertido • Diagnóstico Raíz',
      title: 'El Colapso Evaluativo en "Superdescuento"',
      context: `
        <div class="rise-scenario-briefing">
          <p>
            El holding "Hijos de La María" opera la cadena de tiendas "Superdescuento" y dos plantas agroindustriales.
            Hace un año implementaron su primer sistema de evaluación de desempeño. Para ahorrar tiempo y costes de consultoría,
            adoptaron sin cambios el modelo de competencias diseñado por una universidad para una empresa aceitunera extranjera.
          </p>
          <div class="rise-dialogue-box" style="background: var(--slate-100); padding: 1rem; border-radius: 6px; margin: 0.75rem 0;">
            <p><strong>Escala utilizada:</strong> <em>Excelente o Superlativo</em>, <em>Muy Bueno</em>, <em>Regular o Medio</em> y <em>Debe Mejorar</em>.</p>
            <p><strong>Criterio de la Gerencia:</strong> <em>"Si un puesto requiere una competencia, debe exigírsele el nivel mayor (Excelente)."</em></p>
          </div>
          <p>
            <strong>BALANCE AL CABO DE 12 MESES:</strong> El 94% de la plantilla obtuvo "Excelente". Sin embargo, las pérdidas por mermas aumentaron 19%,
            los clientes reclaman pésima atención en cajas y la rotación en plantas industriales se disparó.
            Recursos Humanos no tiene criterio objetivo para decidir promociones ni aumentos salariales.
          </p>
        </div>
      `,
      question: 'Como consultor experto en metodología Alles, ¿cuál es el diagnóstico técnico de la causa raíz de este colapso?',
      choices: Object.freeze([
        Object.freeze({
          id: 'c1-a',
          key: 'A',
          text: 'Falta de severidad evaluadora: implantar de inmediato una distribución forzada obligando a calificar en el tercio inferior al 10% de la nómina.',
          isCorrect: false,
          consequence: 'Simulación a 6 meses: Forzar una curva estadística sin corregir las anclas conductuales desató una guerra interna entre líderes. Renunciaron profesionales clave y la subjetividad siguió intacta.',
          feedback: 'Antipatrón de la Fuerza Bruta. La curva forzada sin descriptores objetivos solo añade injusticia y miedo, destruyendo el clima laboral.'
        }),
        Object.freeze({
          id: 'c1-b',
          key: 'B',
          text: 'El error radicó en permitir que las jefaturas evalúen; el proceso debe centralizarse en Recursos Humanos mediante inventarios de personalidad.',
          isCorrect: false,
          consequence: 'Simulación a 6 meses: Los jefes de línea se desentendieron del desempeño de sus equipos. RRHH colapsó procesando inventarios psicológicos desconectados de la operación diaria.',
          feedback: 'Antipatrón de la Estatización de RRHH. Spencer & Spencer y Martha Alles demuestran que la evaluación es responsabilidad indelegable de la jefatura de línea.'
        }),
        Object.freeze({
          id: 'c1-c',
          key: 'C',
          text: 'Falla estructural del instrumento: diccionario copiado desanclado de la estrategia, escalas adjetivales subjetivas y sesgo inflacionario de Grado A.',
          isCorrect: true,
          consequence: '¡Diagnóstico impecable! Has detectado la combinación letal documentada por Martha Alles: copiar competencias ajenas y medir con adjetivos vacíos ("Excelente") garantiza la inflación artificial de calificaciones.',
          feedback: 'Excelente. Las competencias deben nacer de la estrategia propia y graduarse en conductas BARS observables (A-D) sin exigir Grado A uniforme.'
        })
      ]),
      jitPill: Object.freeze({
        title: 'Los 3 Pecados Capitales de la Evaluación según Martha Alles',
        content: `
          El caso real de "Hijos de La María / Superdescuento" ilustra las tres aberraciones que destruyen un sistema de talento:
        `,
        takeaways: Object.freeze([
          '1. El Pecado de la Copia: Importar catálogos ajenos sin calibrar la misión y cultura de la organización propia.',
          '2. El Pecado del Adjetivismo: Medir con palabras ambiguas ("Excelente", "Muy bueno") en vez de conductas observables.',
          '3. El Pecado de la Uniformidad Máxima: Exigir Grado A para todos los roles, confundiendo suficiencia operativa con maestría de doctrina.'
        ])
      })
    })
  }),

  // =========================================================================
  // MÓDULO 2: INGENIERÍA DE PERFILES DE PUESTO & MATRIZ DE GRADOS OBJETIVOS
  // =========================================================================
  Object.freeze({
    id: 'mod-2',
    number: 2,
    title: 'Ingeniería de Perfiles de Puesto & Matriz de Grados Objetivos',
    subtitle: 'Reglas sintácticas de redacción y aplicación de la Ley de Parsimonia',
    leadIntro: 'Un perfil de puesto no es una lista de deseos morales ni una descripción de tareas rutinarias. Aprende a aplicar la fórmula técnica de Martha Alles para ensamblar perfiles calibrados y evitar la sobre-exigencia de Grado A.',
    badge: 'Módulo 2 • Perfiles y Grados Objetivos',
    duration: '15 min',
    theoryId: 'mod-2-theory',
    objective: 'Construir descripciones de puesto con rigor metodológico: diferenciar competencias cardinales de específicas y asignar grados BARS (A-D) basados en el alcance e impacto real del rol.',
    challenge: Object.freeze({
      id: 'challenge-2',
      moduleId: 'mod-2',
      badge: 'Reto Invertido • Detección de Antipatrones',
      title: 'Auditoría del Perfil Roto: Jefe de Sucursal en Superdescuento',
      context: `
        <div class="rise-scenario-briefing">
          <p>
            La gerencia de operaciones te entrega la ficha de descripción de puesto que se usó en Superdescuento para evaluar a los Jefes de Sucursal:
          </p>
          <div class="rise-broken-artifact" style="background: var(--danger-bg, #FEF2F2); border: 2px dashed var(--danger-border, #DC2626); padding: 1rem; border-radius: 6px; margin: 1rem 0; font-family: monospace;">
            <strong>PUESTO:</strong> Jefe de Sucursal<br><br>
            <strong>COMPETENCIAS EXIGIDAS (22 en total):</strong> Liderazgo carismático, Lealtad incondicional, Ser una excelente persona, Amor por la camiseta, Cero quejas ante la presión, Dominio de matemática borrosa y estadística no paramétrica.<br><br>
            <strong>GRADO EXIGIDO:</strong> Grado A (100%) en las 22 competencias.
          </div>
          <p>
            Tu misión antes de rediseñar el perfil es auditar técnicamente este artefacto defectuoso.
          </p>
        </div>
      `,
      question: '¿Cuáles son los defectos críticos que invalidan técnicamente este perfil según la metodología Martha Alles?',
      choices: Object.freeze([
        Object.freeze({
          id: 'c2-a',
          key: 'A',
          text: 'Omite incorporar competencias técnicas de informática para que el jefe repare servidores locales si el sistema colapsa en horas pico.',
          isCorrect: false,
          consequence: 'Confundes competencias de gestión con tareas de soporte técnico. Saturar el perfil con 30 requerimientos hace imposible la evaluación.',
          feedback: 'Error. La Ley de Parsimonia prohíbe sobrecargar el perfil con tareas que corresponden a especialistas de mantenimiento.'
        }),
        Object.freeze({
          id: 'c2-b',
          key: 'B',
          text: 'Viola la Ley de Parsimonia (22 competencias), exige virtudes morales inobservables y fija Grado A indiscriminado en todas las áreas.',
          isCorrect: true,
          consequence: '¡Auditoría impecable! Has identificado la sobre-exigencia absurda de Grado A, la mezcla de moralina axiológica ("lealtad", "buena persona") y la ausencia de parsimonia.',
          feedback: 'Exacto. Martha Alles establece: máximo 3 a 5 cardinales y 3 a 5 específicas por puesto, ancladas en grados BARS realistas.'
        }),
        Object.freeze({
          id: 'c2-c',
          key: 'C',
          text: 'El error central radica en que la definición de lealtad omitió una cláusula de exclusividad laboral frente a cadenas competidoras.',
          isCorrect: false,
          consequence: 'Insistir en cláusulas legales o emocionales mantiene el perfil en la subjetividad sin definir comportamientos observables.',
          feedback: 'Los valores éticos se operacionalizan en conductas observables (Integridad operativa), no en exigencias emocionales.'
        })
      ]),
      jitPill: Object.freeze({
        title: 'La Regla de Parsimonia y la Fórmula de Perfiles Martha Alles',
        content: `
          Un perfil de puesto calibrado articula competencias cardinales y específicas sin exceder el límite operativo:
        `,
        takeaways: Object.freeze([
          'Ley de Parsimonia: Máximo 6 a 8 competencias por puesto (3-4 cardinales + 3-4 específicas).',
          'Cero Grado A Uniforme: El Grado A se reserva para impacto sistémico y doctrina; la mayoría de roles operativos operan en Grado C o B.',
          'Conducta Observable: Verbo de acción + contexto de complejidad + resultado esperado.'
        ])
      })
    }),
    exerciseTransition: Object.freeze({
      badge: 'Fase 2 • Taller Práctico de Aplicación',
      title: 'De la Auditoría Crítica al Ensamblado Técnico',
      lead: 'Has detectado la sobrecarga de competencias y la trampa de exigir Grado A en todas las casillas.',
      description: 'Aplica la fórmula de Martha Alles para ensamblar un perfil calibrado para el puesto de Supervisor de Operaciones de Tienda.',
      focus: 'Misión: Selecciona los fragmentos correctos en cada bloque para estructurar un perfil realista, parsimonioso y medible.'
    }),
    practiceBuilder: Object.freeze({
      title: 'Taller de Ensamblado: Perfil de Supervisor de Operaciones de Tienda',
      instructions: 'Construye la especificación del puesto combinando los componentes metodológicos correctos:',
      sections: Object.freeze([
        Object.freeze({
          id: 'sec-catalog',
          name: '1. Selección y Clasificación de Competencias',
          options: Object.freeze([
            Object.freeze({ id: 'cat-1', text: '3 a 4 Competencias Cardinales + 3 a 4 Específicas de Operaciones (Ley de Parsimonia)', isCorrect: true }),
            Object.freeze({ id: 'cat-2', text: '18 competencias específicas detallando cada micro-tarea de tienda', isCorrect: false }),
            Object.freeze({ id: 'cat-3', text: '5 virtudes morales: Lealtad, Amor al trabajo, Bondad, Paciencia y Entusiasmo', isCorrect: false })
          ])
        }),
        Object.freeze({
          id: 'sec-grade',
          name: '2. Asignación del Grado Requerido (Target)',
          options: Object.freeze([
            Object.freeze({ id: 'grd-1', text: 'Grado B (75%): Autonomía plena en contingencias de tienda y resolución de imprevistos', isCorrect: true }),
            Object.freeze({ id: 'grd-2', text: 'Grado A (100%): Creación de doctrina estratégica corporativa para todo el holding', isCorrect: false }),
            Object.freeze({ id: 'grd-3', text: 'Grado D (25%): Ejecución mecánica dependiente de supervisión continua', isCorrect: false })
          ])
        }),
        Object.freeze({
          id: 'sec-syntax',
          name: '3. Redacción del Descriptor Conductual Requerido',
          options: Object.freeze([
            Object.freeze({ id: 'syn-1', text: 'Interviene en reclamos complejos de clientes negociando soluciones inmediatas en piso sin frenar las cajas', isCorrect: true }),
            Object.freeze({ id: 'syn-2', text: 'Demuestra muy buena actitud y predisposición positiva con una sonrisa permanente', isCorrect: false }),
            Object.freeze({ id: 'syn-3', text: 'Firmar las notas de devolución que el cajero le alcance según el manual administrativo', isCorrect: false })
          ])
        })
      ]),
      goldenDefinition: '3-4 Cardinales + 3-4 Específicas con Grado B (75%) autónomo para Supervisor de Operaciones y conductas observables de piso sin adjetivos vacíos.'
    })
  }),

  // =========================================================================
  // MÓDULO 3: PONDERACIÓN DE FRECUENCIA & CORRECCIÓN DESCENDENTE
  // =========================================================================
  Object.freeze({
    id: 'mod-3',
    number: 3,
    title: 'Ponderación de Frecuencia & Corrección Descendente',
    subtitle: 'El algoritmo matemático de Martha Alles para neutralizar el sesgo de recencia',
    leadIntro: 'Un colaborador no posee un Grado A porque tuvo un acierto brillante el mes pasado. En la metodología Martha Alles, la conducta requiere dos tiempos de análisis: la identificación del grado y su ponderación por frecuencia.',
    badge: 'Módulo 3 • Calibración por Frecuencia',
    duration: '20 min',
    theoryId: 'mod-3-theory',
    objective: 'Aplicar el Método de Corrección Descendente: ponderar la frecuencia de aparición de las conductas observables (Siempre, Frecuente, Mitad, Ocasional) y recalibrar el puntaje evitando el sesgo de recencia.',
    challenge: Object.freeze({
      id: 'challenge-3',
      moduleId: 'mod-3',
      badge: 'Reto Invertido • Comité de Calibración',
      title: 'El Dilema del "Pico Heroico Aislado"',
      context: `
        <div class="rise-scenario-briefing">
          <p>
            En el comité de evaluación anual, el Gerente de Logística propone calificar a Juan (Supervisor de Despacho) con
            <strong>Grado A (100%)</strong> en la competencia <em>"Liderazgo Operativo"</em>:
          </p>
          <div class="rise-dialogue-box" style="background: var(--slate-100); padding: 1rem; border-radius: 6px; margin: 0.75rem 0;">
            <p><strong>Gerente de Logística:</strong> <em>"En la huelga de transporte de octubre, Juan se puso al frente del equipo y logró despachar todos los camiones sin retrasos. ¡Eso es Grado A indiscutible!"</em></p>
            <p><strong>Auditor de Talento:</strong> <em>"Sin embargo, en los 11 meses restantes del año, Juan eludió sistemáticamente las reuniones de coordinación y delegó las disputas de choferes en sus supervisores auxiliares."</em></p>
          </div>
          <p>
            La discusión lleva 40 minutos. El gerente insiste en que el evento de octubre demuestra que Juan "tiene el Grado A adentro".
          </p>
        </div>
      `,
      question: '¿Cómo resuelve la metodología de Martha Alles esta controversia de forma matemática e incontestable?',
      choices: Object.freeze([
        Object.freeze({
          id: 'c3-a',
          key: 'A',
          text: 'Otorgar Grado A (100%) pues el Black Friday demuestra su competencia en crisis críticas de alto impacto, ignorando fallas cotidianas.',
          isCorrect: false,
          consequence: 'Sesgo de recencia y halo extremo: Premiar un hecho aislado generó reclamos inmediatos del resto del equipo, que convive con el desentendimiento diario del supervisor.',
          feedback: 'Antipatrón del Hecho Destacado. Alles advierte que calificar por un suceso heroico aislado invalida la representatividad de la evaluación.'
        }),
        Object.freeze({
          id: 'c3-b',
          key: 'B',
          text: 'Calificar a Julián en Grado D (25%) desestimando su logro del Black Friday, como sanción punitiva por sus desbordes diarios en depósito.',
          isCorrect: false,
          consequence: 'Confusión de antigüedad con desempeño conductual. La antigüedad mide tiempo de permanencia, no calidad observable de la competencia.',
          feedback: 'Error. La antigüedad no altera la naturaleza de la conducta evaluada.'
        }),
        Object.freeze({
          id: 'c3-c',
          key: 'C',
          text: 'Aplicar análisis en dos tiempos: se observó conducta A, pero al tener frecuencia del 50%, la corrección descendente degrada la nota a B.',
          isCorrect: true,
          consequence: '¡Calibración científica perfecta! Al ingresar frecuencia "Ocasional", el algoritmo corrige la nota descendentemente, reconociendo el hecho pero reflejando la realidad habitual del puesto.',
          feedback: 'Brillante. El Método de Corrección Descendente de Martha Alles obliga a evaluar en dos momentos: grado y frecuencia, eliminando picos no habituales.'
        })
      ]),
      jitPill: Object.freeze({
        title: 'El Método de Corrección Descendente (Martha Alles, Cap. 4)',
        content: `
          Para evitar que los evaluadores califiquen con base en recuerdos emotivos recientes, el análisis se divide en dos momentos:
        `,
        takeaways: Object.freeze([
          'Momento 1: Ubicar la conducta en el Diccionario de Competencias (Grado A, B, C o D).',
          'Momento 2: Ponderar la frecuencia: Siempre (100%), Frecuente (75%), Mitad del tiempo (50%) u Ocasional (25%).',
          'Regla Descendente: Si la conducta es Grado A pero su frecuencia es Ocasional o Mitad del tiempo, desciende matemáticamente al nivel inferior.'
        ])
      })
    }),
    exerciseTransition: Object.freeze({
      badge: 'Fase 2 • Laboratorio de Calibración Taxonómica',
      title: 'Del Dilema de Calibración al Clasificador de Frecuencias',
      lead: 'Has comprobado cómo un hecho destacado aislado distorsiona la evaluación si no se pondera la frecuencia.',
      description: 'Aplica el algoritmo de Martha Alles clasificando 8 registros reales entre conductas habituales (Grado Pleno Directo) y conductas esporádicas (Grado Corregido Descendente).',
      focus: 'Misión: Clasifica cada caso evaluado en el destino metodológico correspondiente.'
    }),
    sortingActivity: Object.freeze({
      competencyName: 'Ponderación por Frecuencia y Corrección Descendente',
      instructions: 'Clasifica los 8 registros de evaluación entre "Grado Pleno Directo" y "Grado Corregido Descendente":',
      slots: Object.freeze([
        Object.freeze({ id: 'slot-a', level: 'A', title: 'Grado Pleno Directo (Frecuente o Siempre)', badgeClass: 'rise-level-badge--a' }),
        Object.freeze({ id: 'slot-b', level: 'B', title: 'Grado Corregido Descendente (Mitad o Ocasional)', badgeClass: 'rise-level-badge--b' })
      ]),
      items: Object.freeze([
        Object.freeze({
          id: 'sort-1',
          level: 'B',
          targetSlot: 'slot-b',
          text: 'Evaluado en Grado A por liderar una contingencia inédita en mayo, pero elude el liderazgo en la rutina cotidiana (Frecuencia: Ocasional).',
          feedback: 'Correcto. La frecuencia ocasional activa la corrección descendente.'
        }),
        Object.freeze({
          id: 'sort-2',
          level: 'A',
          targetSlot: 'slot-a',
          text: 'Evaluado en Grado C: Aplica los procedimientos de atención al cliente de forma constante en el 90% de los turnos (Frecuencia: Frecuente).',
          feedback: 'Correcto. Frecuencia habitual suficiente para sostener Grado C pleno.'
        }),
        Object.freeze({
          id: 'sort-3',
          level: 'B',
          targetSlot: 'slot-b',
          text: 'Evaluado en Grado B: Facilita consensos en proyectos especiales únicamente cuando la gerencia supervisa (Frecuencia: Mitad del tiempo).',
          feedback: 'Correcto. Frecuencia del 50% exige ajuste descendente por falta de autonomía consistente.'
        }),
        Object.freeze({
          id: 'sort-4',
          level: 'A',
          targetSlot: 'slot-a',
          text: 'Evaluado en Grado B: Propone mejoras de procesos y capacita a sus compañeros en cada ciclo operativo mensual (Frecuencia: Siempre).',
          feedback: 'Correcto. Conducta plenamente habitual que sostiene el Grado B sin degradación.'
        }),
        Object.freeze({
          id: 'sort-5',
          level: 'B',
          targetSlot: 'slot-b',
          text: 'Evaluado en Grado A: Formuló una política brillante de almacén en una ocasión, pero no modela la conducta a diario (Frecuencia: Ocasional).',
          feedback: 'Correcto. Conducta de Grado A ocasional se corrige descendentemente.'
        }),
        Object.freeze({
          id: 'sort-6',
          level: 'A',
          targetSlot: 'slot-a',
          text: 'Evaluado en Grado C: Cumple el protocolo de seguridad en almacén en todos sus turnos sin registrar faltas (Frecuencia: Siempre).',
          feedback: 'Correcto. Estándar operativo cumplido en el 100% de los casos (Grado C directo).'
        }),
        Object.freeze({
          id: 'sort-7',
          level: 'B',
          targetSlot: 'slot-b',
          text: 'Evaluado en Grado B: Asume decisiones autónomas bajo presión en algunas ocasiones, pero en otras requiere auxilio (Frecuencia: Mitad del tiempo).',
          feedback: 'Correcto. Mitad del tiempo exige corrección hacia Grado C.'
        }),
        Object.freeze({
          id: 'sort-8',
          level: 'A',
          targetSlot: 'slot-a',
          text: 'Evaluado en Grado B: Resuelve discrepancias operativas en tienda y asesora a los cajeros en casi todas las jornadas (Frecuencia: Frecuente).',
          feedback: 'Correcto. Frecuencia del 75% confirma el Grado B pleno.'
        })
      ])
    })
  }),

  // =========================================================================
  // MÓDULO 4: SIMULACIÓN DE FEEDBACK 360° & NEUTRALIZACIÓN DE SESGOS
  // =========================================================================
  Object.freeze({
    id: 'mod-4',
    number: 4,
    title: 'Simulación de Feedback 360° & Neutralización de Sesgos',
    subtitle: 'Conducción de la entrevista de evaluación ante discrepancias multi-fuente',
    leadIntro: 'En la evaluación 360°, las discrepancias entre autoevaluación, jefes, pares y colaboradores son la regla, no la excepción. Aprende a liderar la reunión de feedback desarmando la reactividad defensiva con técnica STAR.',
    badge: 'Módulo 4 • Simulación Crítica 360°',
    duration: '20 min',
    theoryId: 'mod-4-theory',
    objective: 'Gestionar la entrevista de feedback 360°: confrontar brechas de percepción con evidencias fácticas pasadas (incidentes críticos) y neutralizar los sesgos de halo, recencia y reactividad defensiva.',
    challenge: Object.freeze({
      id: 'challenge-4',
      moduleId: 'mod-4',
      badge: 'Reto Invertido • Discrepancia Multi-Fuente',
      title: 'El Informe Discrepante de Marcos R.',
      context: `
        <div class="rise-scenario-briefing">
          <p>
            Llega el informe consolidado de evaluación 360° de Marcos R. (Jefe de Almacenes):
          </p>
          <div class="rise-dialogue-box" style="background: var(--slate-100); padding: 1rem; border-radius: 6px; margin: 0.75rem 0;">
            <p><strong>Autoevaluación:</strong> Grado A (100%) en Liderazgo y Trabajo en Equipo.</p>
            <p><strong>Superior Directo:</strong> Grado B (75%) — "Buen ejecutor, cumple despachos".</p>
            <p><strong>Pares (n=3):</strong> Grado C (50%) — "Poca flexibilidad para coordinar entregas".</p>
            <p><strong>Colaboradores (n=4):</strong> Grado D (25%) — "Estilo autoritario, desbordes de carácter y nula escucha".</p>
          </div>
          <p>
            Marcos entra a la reunión indignado afirmando que sus subordinados se pusieron de acuerdo para perjudicarlo y exige que RRHH anule la evaluación de los colaboradores.
          </p>
        </div>
      `,
      question: '¿Cuál es la conducta metodológica que debe adoptar el evaluador en esta entrevista según Martha Alles?',
      choices: Object.freeze([
        Object.freeze({
          id: 'c4-a',
          key: 'A',
          text: 'Descartar los puntajes de colaboradores porque las metas de despacho rigen el negocio; ajustar su nota general de liderazgo a Grado A.',
          isCorrect: false,
          consequence: 'Destrucción de la credibilidad del 360°: Los colaboradores comprueban que su voz es silenciada y se desata una ola de desconfianza en toda la planta.',
          feedback: 'Antipatrón de Condescendencia. Si se elimina la fuente subordinada, el 360° se destruye y se vulnera el anonimato.'
        }),
        Object.freeze({
          id: 'c4-b',
          key: 'B',
          text: 'Revelar en privado los nombres de los colaboradores más críticos para que Marcos convoque una reunión y aclare discrepancias del área.',
          isCorrect: false,
          consequence: 'Violación grave de confidencialidad y represalias inmediatas contra el personal operativo.',
          feedback: 'Aberración técnica: Revelar identidades viola el secreto estadístico (n >= 3) y destruye la seguridad psicológica.'
        }),
        Object.freeze({
          id: 'c4-c',
          key: 'C',
          text: 'Validar su éxito en KPIs, resguardar el anonimato muestral y reorientar el foco a brechas de percepción mediante la indagación STAR.',
          isCorrect: true,
          consequence: '¡Maestría en Entrevista de Devolución! Marcos comprende que el 360° no juzga su moral sino el impacto de sus conductas en el equipo, aceptando compromisos de desarrollo.',
          feedback: 'Exacto. La entrevista de evaluación no es un juicio de culpabilidad sino una sesión de coaching metodológico basada en evidencias.'
        })
      ]),
      jitPill: Object.freeze({
        title: 'La Entrevista de Devolución 360° (Martha Alles, Caps. 5 y 7)',
        content: `
          Claves para una entrevista de feedback constructiva ante discrepancias severas:
        `,
        takeaways: Object.freeze([
          '1. Separar Rendimiento de Competencias: Validar el logro cuantitativo antes de abordar la conducta.',
          '2. Resguardo del Anonimato: Mantener la regla de muestra mínima agregada (n >= 3).',
          '3. Indagación STAR: Enfocar la conversación en situaciones pasadas concretas, no en juicios abstractos.',
          '4. Orientación al Plan de Acción: Toda brecha detectada debe traducirse en un compromiso de desarrollo.'
        ])
      })
    }),
    exerciseTransition: Object.freeze({
      badge: 'Fase 2 • Simulación Conversacional en Vivo',
      title: 'Del Diagnóstico de Sesgos a la Entrevista en Vivo',
      lead: 'Has identificado cómo abordar la reactividad defensiva sin ceder en el rigor metodológico.',
      description: 'Conduce los 3 turnos de la reunión de feedback con Marcos R., seleccionando las intervenciones que desarmen su enojo y lo orienten a la acción constructiva.',
      focus: 'Misión: Completa los 3 turnos con preguntas de sondeo STAR y feedback formativo.'
    }),
    chatSimulator: Object.freeze({
      candidate: Object.freeze({
        name: 'Marcos R.',
        role: 'Jefe de Almacenes y Despacho',
        avatarText: 'MR'
      }),
      initialDialogue: Object.freeze({
        text: 'Revisé los resultados y esto es inaceptable. Yo tengo todos los despachos a tiempo y mis colaboradores me ponen Grado D en Liderazgo. Es una conspiración de gente poco comprometida.'
      }),
      turns: Object.freeze([
        Object.freeze({
          id: 'turn-1',
          prompt: 'Turno 1: Marcos descalifica la evaluación de sus colaboradores. ¿Qué intervención formulas?',
          options: Object.freeze([
            Object.freeze({
              id: 'opt-1a',
              key: 'A',
              text: 'Marcos, debes asumir la realidad del informe. Si tu equipo te calificó en Grado D es evidencia de liderazgo deficiente que exige corrección inmediata.',
              isEffective: false,
              feedback: 'Ataque personal que provoca cierre total y hostilidad.',
              candidateResponse: '¡Pues si creen que soy un mal líder, que busquen a otro que les aguante las quejas!'
            }),
            Object.freeze({
              id: 'opt-1b',
              key: 'B',
              text: 'Comprendo tu malestar, Marcos. Tus metas de despacho son impecables, pero el 360° mide la percepción del equipo. Analicemos juntos las conductas observadas.',
              isEffective: true,
              feedback: '¡Excelente apertura! Reconoces su rendimiento cuantitativo y circunscribes el tema a la percepción conductual.',
              candidateResponse: 'Bueno... es verdad que con los números no hay discusión. Pero es que a veces la presión del turno te hace perder la paciencia.'
            }),
            Object.freeze({
              id: 'opt-1c',
              key: 'C',
              text: 'No te preocupes por el informe, Marcos. Desestimemos los reclamos de los operarios; lo verdaderamente trascendente es asegurar los despachos a tiempo.',
              isEffective: false,
              feedback: 'Condescendencia que anula la validez del 360°.',
              candidateResponse: 'Sabía que RRHH me daría la razón, esos operarios no saben lo que dicen.'
            })
          ])
        }),
        Object.freeze({
          id: 'turn-2',
          prompt: 'Turno 2: Marcos menciona la presión de los turnos. ¿Cómo profundizas con técnica STAR?',
          options: Object.freeze([
            Object.freeze({
              id: 'opt-2a',
              key: 'A',
              text: 'Relátame un incidente crítico reciente: en el cuello de botella del último viernes, ¿qué ocurrió exactamente y cómo te comunicaste con el equipo de embalaje?',
              isEffective: true,
              feedback: 'Pregunta STAR impecable: anclada en un hecho real pasado para examinar la conducta.',
              candidateResponse: 'El viernes falló el montacargas principal y se nos acumulaban 40 pallets. Reconozco que me alteré, les grité a los operarios frente a los transportistas y no los dejé explicarse.'
            }),
            Object.freeze({
              id: 'opt-2b',
              key: 'B',
              text: '¿Qué medidas preventivas adoptarías a futuro si mañana por la tarde volviera a presentarse un colapso operativo de semejante magnitud en tu área de despacho?',
              isEffective: false,
              feedback: 'Pregunta hipotética condicional ("¿qué harías?") prohibida en indagación de competencias.',
              candidateResponse: 'Obviamente mantendría la calma absoluta y hablaría con serenidad pedagógica.'
            }),
            Object.freeze({
              id: 'opt-2c',
              key: 'C',
              text: '¿Consideras que pautas de crianza familiar o rasgos de personalidad heredados influyen en tu escasa tolerancia a la frustración ante demoras operativas?',
              isEffective: false,
              feedback: 'Incursión en psicoanálisis silvestre prohibida en el ámbito laboral.',
              candidateResponse: 'No entiendo qué tiene que ver mi familia con el despacho de mercadería.'
            })
          ])
        }),
        Object.freeze({
          id: 'turn-3',
          prompt: 'Turno 3: Marcos reconoció el desborde conductual del viernes. ¿Cómo cierras la entrevista?',
          options: Object.freeze([
            Object.freeze({
              id: 'opt-3a',
              key: 'A',
              text: 'Por ese desborde colocaremos una sanción formal en tu legajo laboral, cancelando el bono de productividad semestral hasta verificar un cambio de actitud.',
              isEffective: false,
              feedback: 'Punitivismo que destruye la confianza formativa.',
              candidateResponse: 'En esta empresa no se puede ser honesto. La próxima vez no diré nada.'
            }),
            Object.freeze({
              id: 'opt-3b',
              key: 'B',
              text: 'Reconocer ese desborde es el gran paso, Marcos. Acordemos un Plan de Desarrollo: reuniones quincenales estructuradas y coaching en comunicación bajo presión.',
              isEffective: true,
              feedback: '¡Cierre de Oro Metodológico! Conectas la toma de conciencia con un compromiso de acción verificable.',
              candidateResponse: 'Me parece justo. Quiero mejorar ese aspecto para que el equipo trabaje con confianza y no con miedo.'
            }),
            Object.freeze({
              id: 'opt-3c',
              key: 'C',
              text: 'Tranquilízate, Marcos; cualquier supervisor pierde los estribos ante la urgencia de entrega. Archivaremos este informe para no perjudicar tu legajo laboral.',
              isEffective: false,
              feedback: 'Indulgencia estéril que perpetúa la mala práctica.',
              candidateResponse: 'Menos mal, pensé que se iban a poner estrictos.'
            })
          ])
        })
      ])
    })
  }),

  // =========================================================================
  // MÓDULO 5: CAPSTONE STUDIO — FICHA INTEGRAL Y PLAN DE DESARROLLO
  // =========================================================================
  Object.freeze({
    id: 'mod-5',
    number: 5,
    title: 'Capstone Studio: Ficha Integral de Evaluación 360°',
    subtitle: 'Construcción, calibración y certificación de la entrega terminal',
    leadIntro: 'Llegó el momento de transferir todo lo aprendido al artefacto definitivo. Diseña la Ficha Integral de Evaluación 360° para "Distribuidora Logística S.A.", calcula las brechas con corrección descendente y formula el plan de desarrollo bajo una rúbrica binaria de 4 criterios.',
    badge: 'Módulo 5 • Certificación Terminal',
    duration: '25 min',
    theoryId: 'mod-5-theory',
    objective: 'Construir la Ficha Integral de Evaluación 360°: calibrar perfil de puesto, aplicar algoritmo descendente, computar gaps multi-fuente, redactar plan de desarrollo y certificar el 100% de la rúbrica binaria para exportación en Word (.docx) y Markdown (.md).',
    capstoneCase: Object.freeze({
      company: 'Distribuidora Logística S.A.',
      position: 'Jefe de Almacenes y Despacho',
      businessContext: `
        Empresa de logística y distribución de consumo masivo con 8 centros de distribución y 1,400 colaboradores.
        Ha implementado un sistema integral de Evaluación del Desempeño 360° bajo la metodología Martha Alles.
        Tu misión como Auditor de Talento es calibrar la Ficha Técnica Integral del puesto <strong>Jefe de Almacenes y Despacho</strong>,
        analizar los resultados multi-fuente, aplicar la corrección descendente por frecuencia y certificar el Plan de Desarrollo.
      `,
      competencyName: 'Evaluación 360° y Plan de Desarrollo Conductual',
      type: 'Caso Integrador de Auditoría y Certificación (100% Pass)'
    }),
    rubricCriteria: Object.freeze([
      Object.freeze({
        id: 'c1',
        name: 'Criterio 1: Alineación de Perfil sin Inflación',
        question: '¿El perfil define competencias con grados BARS realistas (Grado B/C) sin exigir Grado A generalizado?',
        requirement: 'Debe justificar grados objetivos basados en autonomía e impacto operativo en tienda/almacén.'
      }),
      Object.freeze({
        id: 'c2',
        name: 'Criterio 2: Corrección Descendente por Frecuencia',
        question: '¿Aplica la degradación matemática al evaluar conductas con frecuencia Ocasional o Mitad del tiempo?',
        requirement: 'Debe castigar la autoevaluación o evaluaciones aisladas ante frecuencias parciales (25% o 50%).'
      }),
      Object.freeze({
        id: 'c3',
        name: 'Criterio 3: Análisis de Brecha Multi-Fuente (Gaps)',
        question: '¿Calcula las brechas netas y coteja las discrepancias entre Autoevaluación, Pares, Colaboradores y Superior?',
        requirement: 'Debe calcular la brecha en porcentaje e identificar discrepancias críticas entre fuentes.'
      }),
      Object.freeze({
        id: 'c4',
        name: 'Criterio 4: Plan de Desarrollo Conductual Accionable',
        question: '¿Formula acciones prácticas en el puesto (codesarrollo, mentoring) vinculadas a las brechas detectadas?',
        requirement: 'Prohibido limitarse a cursos teóricos de aula; debe incluir prácticas conductuales en el puesto.'
      })
    ]),
    submissionBlueprint: Object.freeze({
      definition: 'Competencias calibradas para Jefe de Almacenes: Integridad y Ética Operativa (Cardinal) + Liderazgo y Desarrollo de Colaboradores (Específica), con Grado Requerido B (75%).',
      levels: Object.freeze({
        A: 'Grado A (100%): Modela doctrina corporativa de despacho y crea protocolos de seguridad con impacto en todos los centros de distribución.',
        B: 'Grado B (75% - Requerido): Resuelve contingencias complejas de almacenamiento con autonomía y lidera a su equipo en piso.',
        C: 'Grado C (50%): Cumple los estándares operativos regulares de inventario y despacho en condiciones normales de trabajo.',
        D: 'Grado D (25%): Desvíos frecuentes en control de stock o desbordes de carácter con subordinados bajo presión.'
      }),
      bbiQuestions: Object.freeze([
        'Cálculo de Frecuencia: Autoevaluación en Grado A corregida descendentemente a Grado B por frecuencia del 50% bajo presión.',
        'Brecha Multi-Fuente: En Liderazgo, Autoevaluación (A) vs Colaboradores (D al 50%) genera brecha crítica de -37.5% respecto a Grado B.',
        'Plan de Acción: 1) Reuniones quincenales de planificación con formato STAR. 2) Mentoring interno con Gerente de Operaciones.'
      ])
    }),
    referenceModel: Object.freeze({
      positionTitle: 'Jefe de Almacenes y Despacho',
      profileGrades: 'Competencia 1: Integridad y Ética Operativa (Cardinal, Grado B - 75%). Competencia 2: Liderazgo y Desarrollo de Colaboradores (Específica, Grado B - 75%). Grados calibrados para impacto operativo autónomo en contingencias, sin sobre-exigir Grado A.',
      frequencyAdjustment: 'Autoevaluación de Integridad degradada descendentemente de Grado A a Grado B por frecuencia de control bajo presión del 50% (Mitad del tiempo). Liderazgo evaluado en Grado D por colaboradores con frecuencia del 50%.',
      gapAnalysis: 'Integridad: Nivel evaluado Grado B (75%) vs Requerido Grado B (75%). Brecha = 0%. Liderazgo: Nivel evaluado Grado C-/D corregido (37.5%) vs Requerido Grado B (75%). Brecha crítica = -37.5% generada por discrepancia severa entre autoevaluación (A) y colaboradores (D).',
      actionPlan: '1. Codesarrollo en el puesto: Implementar reuniones quincenales estructuradas de planificación de almacén con formato STAR de escucha activa. 2. Mentoring interno: Acompañamiento con el Gerente de Operaciones para modelar técnicas de delegación y gestión emocional ante cuellos de botella de despacho.'
    })
  })
]);


export const MODULES_DATA_EN = Object.freeze([
  // =========================================================================
  // MODULE 0: INTRODUCTION AND ANDRAGOGICAL ALIGNMENT
  // =========================================================================
  Object.freeze({
    id: 'mod-0',
    number: 0,
    title: 'Strategic Alignment and Andragogical Contract',
    subtitle: 'Course purpose, terminal competency roadmap, and dual-track dynamics',
    leadIntro: 'Performance appraisal collapses when reduced to an annual formality of abstract adjectives. This space establishes the calibration rules, scientific foundations, and self-direction model to turn performance evaluation into a real development lever.',
    badge: 'Module 0 • Strategic Alignment',
    duration: '5 min',
    theoryId: 'mod-0-theory',
    objective: 'Understand the strategic purpose of the course, master the compendium of performance objectives for modules 1 to 5, and self-manage the dual-track learning journey (practice or theory).',
    overview: `
      Welcome to the specialized program in Strategic Management and Performance Evaluation by Competencies (360°/180°) under the Martha Alles methodology.
      This introductory module establishes the foundation of the andragogical contract, presents the 5 operational capabilities you will certify,
      and explains how to navigate the dual-track architecture.
    `,
    introData: Object.freeze({
      questions: Object.freeze([
        Object.freeze({
          id: 'q1-purpose',
          number: 1,
          question: 'Why are you here?',
          title: 'The Real Business Pain',
          icon: '🎯',
          summary: 'Eradicate rating inflation and subjective bias in evaluation committees.',
          details: `
            <p>
              In 73% of organizations, a frustrating scenario repeats itself: HR departments copy generic forms
              or evaluate using vague adjective scales ("Excellent", "Good", "Average").
            </p>
            <p>
              The result is <strong>artificial rating inflation</strong>: evaluations where
              <strong>90% of staff are rated "Excellent"</strong>, while operational productivity stagnates,
              customers complain about poor service, and high performers resign due to lack of differentiated recognition.
            </p>
            <div class="rise-callout-metric" style="background: var(--mint-light); border-left: 4px solid var(--mint-dark); padding: 0.85rem 1.15rem; margin: 0.75rem 0; border-radius: 6px;">
              <strong>Training Mission:</strong> Qualify you as a <strong>Senior Performance Evaluator and Calibration Auditor</strong>,
              capable of building job profiles without grade inflation, weighting behaviors by frequency using Martha Alles'
              <strong>Descending Correction Method</strong>, conducting 360° feedback debriefs, and delivering certified development plans.
            </div>
          `
        }),
        Object.freeze({
          id: 'q2-objectives',
          number: 2,
          question: 'What will you achieve upon completion?',
          title: 'Compendium of Performance Objectives',
          icon: '🏆',
          summary: 'Five operational capabilities ready to implement in your organization.',
          details: `
            <p>Upon completing the 5 practical modules, you will have certified the following technical capabilities:</p>
            <div class="rise-roadmap-grid" style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem;">
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Module 1 • Inverted Diagnosis:</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Identify the root cause of performance appraisal breakdown: diagnose the trap of borrowed dictionaries and subjective adjective-based ratings.</p>
              </div>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Module 2 • Job Profile Engineering:</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Design job profiles applying the Law of Parsimony (cardinal vs. specific competencies) and calibrate objective BARS benchmark grades (A, B, C, D), eliminating generalized Grade A inflation.</p>
              </div>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Module 3 • Frequency Calibration:</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Apply Martha Alles' Descending Correction algorithm to neutralize recency bias and weight behaviors according to habitual frequency (Always, Frequent, Half the time, Occasional).</p>
              </div>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Module 4 • Multi-Source Feedback (180° / 360°):</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Lead 360° feedback interviews defusing defensive reactions, enforcing statistical anonymity (n &ge; 3), and neutralizing halo and severity biases.</p>
              </div>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 0.75rem 1rem;">
                <strong style="color: var(--mint-dark);">Module 5 • Terminal Capstone Studio:</strong>
                <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: var(--slate-700);">Complete and certify the Comprehensive 360° Evaluation Specification, calculate development gaps, and export the executive report in Word (.docx) and Markdown (.md).</p>
              </div>
            </div>
          `
        }),
        Object.freeze({
          id: 'q3-reto-invertido',
          number: 3,
          question: 'Why do we learn through Inverted Challenges?',
          title: 'The Productive Failure Principle',
          icon: '🔄',
          summary: 'Learn from operational crisis before studying the formal technical rule.',
          details: `
            <p>
              In traditional training you are forced to sit through passive slides before interacting. In this course's andragogical model, the sequence is inverted:
            </p>
            <ul>
              <li><strong>You start in crisis:</strong> You confront real management dilemmas documented by Martha Alles in actual corporate cases.</li>
              <li><strong>Productive failure:</strong> You discover firsthand why intuitive or conventional shortcuts collapse.</li>
              <li><strong>Just-In-Time unlocking:</strong> You receive the methodological formula at the precise moment your mind needs it to resolve the breakdown.</li>
            </ul>
          `
        }),
        Object.freeze({
          id: 'q4-dual-track',
          number: 4,
          question: 'How does the Dual-Track architecture work?',
          title: 'Action Spine vs. On-Demand Theoretical Fishbone',
          icon: '⚡',
          summary: 'Advance 100% through hands-on practice or explore scientific rigor without roadblocks.',
          details: `
            <p>
              The course features two simultaneous layers:
            </p>
            <ol>
              <li><strong>Action Spine:</strong> Pure action pathway. By solving practical challenges, sorting activities, and simulations, you complete the course without needing to open theory drawers.</li>
              <li><strong>Theoretical Fishbone:</strong> Side drawers (accessible via the "Methodological Foundation" button or <code>Alt + T</code>) featuring seminal research (Spencer & Spencer, McClelland, Smith & Kendall, Levy-Leboyer, Bernardin). Exploring them awards mastery badges without halting your forward momentum.</li>
            </ol>
          `
        })
      ]),
      pathways: Object.freeze({
        title: 'Choose Your Starting Pathway',
        description: 'In this program you drive your own learning journey. You can dive straight into crisis cases or study the methodological foundations first.',
        practiceChoice: Object.freeze({
          title: 'Start with Practice →',
          description: 'Dive immediately into Module 1 Challenge (The "Superdescuento" Case).'
        }),
        theoryChoice: Object.freeze({
          title: 'Consult Methodological Foundation 0.E',
          description: 'Open the theoretical drawer to review the systemic architecture before acting.'
        })
      })
    })
  }),

  // =========================================================================
  // MODULE 1: THE COPIED DICTIONARY CRISIS AND ADJECTIVE-BASED EVALUATION
  // =========================================================================
  Object.freeze({
    id: 'mod-1',
    number: 1,
    title: 'The Copied Dictionary Crisis and Adjective-Based Evaluation',
    subtitle: 'Root cause diagnosis of systemic failures in performance appraisals',
    leadIntro: 'Eighty percent of failures in performance evaluation stem not from poor leadership intent, but from flawed instruments. Analyze the real-world crisis at Superdescuento and diagnose the underlying technical cause.',
    badge: 'Module 1 • Inverted Diagnosis',
    duration: '10 min',
    theoryId: 'mod-1-theory',
    objective: 'Identify structural flaws in appraisal instruments (copied generic dictionaries and subjective adjective rating scales) and conceptualize competencies as observable, results-oriented workplace behaviors.',
    challenge: Object.freeze({
      id: 'challenge-1',
      moduleId: 'mod-1',
      badge: 'Inverted Challenge • Root Cause Diagnosis',
      title: 'The Evaluation Breakdown at "Superdescuento"',
      context: `
        <div class="rise-scenario-briefing">
          <p>
            The holding company "Hijos de La María" operates the retail supermarket chain "Superdescuento" and two agro-industrial packing plants.
            A year ago they implemented their first performance evaluation system. To cut consulting costs and expedite roll-out,
            they adopted without changes a competency framework originally developed by a university for a foreign olive-growing company.
          </p>
          <div class="rise-dialogue-box" style="background: var(--slate-100); padding: 1rem; border-radius: 6px; margin: 0.75rem 0;">
            <p><strong>Rating Scale Used:</strong> <em>Excellent or Superlative</em>, <em>Very Good</em>, <em>Average or Regular</em>, and <em>Needs Improvement</em>.</p>
            <p><strong>Executive Directive:</strong> <em>"If a role requires a competency, we must demand the highest grade (Excellent)."</em></p>
          </div>
          <p>
            <strong>OUTCOME AFTER 12 MONTHS:</strong> 94% of the entire workforce received "Excellent". However, inventory shrinkage losses surged 19%,
            customers flooded social media with complaints about checkout delays, and plant turnover escalated.
            Human Resources has no objective data to substantiate promotions, salary reviews, or retention decisions.
          </p>
        </div>
      `,
      question: 'As a senior consultant in Martha Alles methodology, what is the technical diagnosis of the root cause of this breakdown?',
      choices: Object.freeze([
        Object.freeze({
          id: 'c1-a',
          key: 'A',
          text: 'Lack of evaluator severity: immediately impose a forced distribution (bell curve) mandating that 10% of personnel must be rated in the bottom tier.',
          isCorrect: false,
          consequence: '6-Month Simulation: Forcing a statistical curve without objective behavioral anchors triggered internal warfare among store managers. Key technical staff resigned and subjective favoritism remained intact.',
          feedback: 'Brute Force Anti-pattern. Forced distribution without objective behavioral descriptors merely injects injustice and fear, destroying workplace morale.'
        }),
        Object.freeze({
          id: 'c1-b',
          key: 'B',
          text: 'The mistake was letting line supervisors evaluate; performance appraisal should be centralized in HR using psychological personality inventories.',
          isCorrect: false,
          consequence: '6-Month Simulation: Line managers abdicated all accountability for their teams. HR collapsed processing psychometric tests totally disconnected from day-to-day warehouse and retail floor operations.',
          feedback: 'HR Monopolization Anti-pattern. Spencer & Spencer and Martha Alles prove that evaluation is an undelegable duty of line leadership.'
        }),
        Object.freeze({
          id: 'c1-c',
          key: 'C',
          text: 'Structural instrument failure: a copied dictionary unanchored from organizational strategy, subjective adjective scales, and Grade A inflation.',
          isCorrect: true,
          consequence: 'Flawless diagnosis! You identified the lethal combination documented by Martha Alles: importing external catalogs and evaluating with ambiguous adjectives ("Excellent") guarantees artificial rating inflation.',
          feedback: 'Spot on. Competencies must originate from internal strategy and be graduated into observable BARS behaviors (A-D) without uniform Grade A over-exacting.'
        })
      ]),
      jitPill: Object.freeze({
        title: 'The 3 Cardinal Sins of Performance Evaluation according to Martha Alles',
        content: `
          The real-world case of "Hijos de La María / Superdescuento" demonstrates the three deadly errors that destroy talent systems:
        `,
        takeaways: Object.freeze([
          '1. The Sin of Copying: Importing third-party catalogs without calibrating the specific mission and operating reality of the organization.',
          '2. The Sin of Adjectivism: Measuring with ambiguous labels ("Excellent", "Very Good") instead of observable workplace behaviors.',
          '3. The Sin of Uniform Maximum: Demanding Grade A for every role, confusing basic operational proficiency with enterprise-level mastery.'
        ])
      })
    })
  }),

  // =========================================================================
  // MODULE 2: JOB PROFILE ENGINEERING & OBJECTIVE GRADE MATRIX
  // =========================================================================
  Object.freeze({
    id: 'mod-2',
    number: 2,
    title: 'Job Profile Engineering & Objective Grade Matrix',
    subtitle: 'Syntactic drafting rules and application of the Law of Parsimony',
    leadIntro: 'A job profile is neither a moral wishlist nor a routine task list. Master Martha Alles\' technical formula to assemble calibrated profiles and eliminate Grade A inflation.',
    badge: 'Module 2 • Profiles and Objective Grades',
    duration: '15 min',
    theoryId: 'mod-2-theory',
    objective: 'Engineer job profiles with methodological rigor: distinguish cardinal from specific competencies and assign realistic BARS benchmark grades (A-D) based on role scope and organizational impact.',
    challenge: Object.freeze({
      id: 'challenge-2',
      moduleId: 'mod-2',
      badge: 'Inverted Challenge • Flaw Detection',
      title: 'Audit of the Broken Profile: Branch Manager at Superdescuento',
      context: `
        <div class="rise-scenario-briefing">
          <p>
            The retail operations division hands you the job description sheet used at Superdescuento to evaluate Branch Managers:
          </p>
          <div class="rise-broken-artifact" style="background: var(--danger-bg, #FEF2F2); border: 2px dashed var(--danger-border, #DC2626); padding: 1rem; border-radius: 6px; margin: 1rem 0; font-family: monospace;">
            <strong>POSITION:</strong> Branch Manager<br><br>
            <strong>REQUIRED COMPETENCIES (22 in total):</strong> Charismatic leadership, Unconditional loyalty, Be an excellent person, Corporate passion, Zero complaints under stress, Mastery of fuzzy logic and non-parametric statistics.<br><br>
            <strong>REQUIRED LEVEL:</strong> Level A (100%) across all 22 competencies.
          </div>
          <p>
            Your assignment prior to redesigning the profile is to audit the technical flaws in this defective instrument.
          </p>
        </div>
      `,
      question: 'Which critical flaws technically invalidate this profile under the Martha Alles methodology?',
      choices: Object.freeze([
        Object.freeze({
          id: 'c2-a',
          key: 'A',
          text: 'It lacks technical IT competencies so that the branch manager can fix store network servers if daily systems crash during rush hours.',
          isCorrect: false,
          consequence: 'You confuse management competencies with technical IT support tasks. Overloading a managerial profile with 30 tasks makes appraisal impossible.',
          feedback: 'Error. The Law of Parsimony prohibits burdening managerial profiles with tasks reserved for technical support specialists.'
        }),
        Object.freeze({
          id: 'c2-b',
          key: 'B',
          text: 'It violates the Law of Parsimony (22 competencies), demands unobservable moral virtues, and enforces indiscriminate Grade A on all dimensions.',
          isCorrect: true,
          consequence: 'Impeccable audit! You diagnosed the absurd over-exaction of Grade A, the inclusion of subjective moral judgments ("loyalty", "good person"), and the lack of parsimony.',
          feedback: 'Exact. Martha Alles establishes: maximum 3 to 5 cardinal and 3 to 5 specific competencies per position, anchored in realistic BARS levels.'
        }),
        Object.freeze({
          id: 'c2-c',
          key: 'C',
          text: 'The core error is that the loyalty definition lacked an employee non-compete clause to prevent personnel from switching to competitor stores.',
          isCorrect: false,
          consequence: 'Focusing on contractual or emotional clauses keeps the profile subjective without establishing observable workplace behaviors.',
          feedback: 'Ethical values are operationalized into observable behaviors (Operational Integrity), not subjective emotional mandates.'
        })
      ]),
      jitPill: Object.freeze({
        title: 'The Law of Parsimony and the Martha Alles Profile Formula',
        content: `
          A calibrated job profile balances cardinal and specific competencies without exceeding operational limits:
        `,
        takeaways: Object.freeze([
          'Law of Parsimony: Maximum 6 to 8 competencies per role (3-4 cardinal + 3-4 specific).',
          'No Uniform Grade A: Level A is reserved for systemic impact and doctrine creation; most operational roles operate at Level C or B.',
          'Observable Behavior: Action verb + operational context + intended outcome.'
        ])
      })
    }),
    exerciseTransition: Object.freeze({
      badge: 'Phase 2 • Practical Application Workshop',
      title: 'From Critical Audit to Technical Assembly',
      lead: 'You detected competency overload and the trap of demanding Grade A across all boxes.',
      description: 'Apply Martha Alles\' formula to assemble a calibrated profile for the Store Operations Supervisor position.',
      focus: 'Mission: Select the correct snippets in each block to structure a realistic, parsimonious, and measurable profile.'
    }),
    practiceBuilder: Object.freeze({
      title: 'Assembly Workshop: Store Operations Supervisor Profile',
      instructions: 'Construct the job specification by combining the correct methodological components:',
      sections: Object.freeze([
        Object.freeze({
          id: 'sec-catalog',
          name: '1. Competency Selection and Scoping',
          options: Object.freeze([
            Object.freeze({ id: 'cat-1', text: '3 to 4 Cardinal Competencies + 3 to 4 Specific Operations Competencies (Law of Parsimony)', isCorrect: true }),
            Object.freeze({ id: 'cat-2', text: '18 specific competencies detailing every minor store routine', isCorrect: false }),
            Object.freeze({ id: 'cat-3', text: '5 moral virtues: Loyalty, Love of work, Kindness, Patience, and Enthusiasm', isCorrect: false })
          ])
        }),
        Object.freeze({
          id: 'sec-grade',
          name: '2. Required Benchmark Grade Target',
          options: Object.freeze([
            Object.freeze({ id: 'grd-1', text: 'Grade B (75%): Autonomous issue resolution and store contingency management', isCorrect: true }),
            Object.freeze({ id: 'grd-2', text: 'Grade A (100%): Corporate strategic doctrine creation for the entire holding company', isCorrect: false }),
            Object.freeze({ id: 'grd-3', text: 'Grade D (25%): Mechanical task execution entirely dependent on constant supervision', isCorrect: false })
          ])
        }),
        Object.freeze({
          id: 'sec-syntax',
          name: '3. Behavioral Anchor Descriptor Drafting',
          options: Object.freeze([
            Object.freeze({ id: 'syn-1', text: 'Intervenes in complex customer escalations on the retail floor, negotiating immediate resolutions without disrupting checkout lines', isCorrect: true }),
            Object.freeze({ id: 'syn-2', text: 'Demonstrates a very good attitude and cheerful disposition with a permanent smile', isCorrect: false }),
            Object.freeze({ id: 'syn-3', text: 'Sign return slips handed by the cashier as per the administrative manual', isCorrect: false })
          ])
        })
      ]),
      goldenDefinition: '3-4 Cardinal + 3-4 Specific with Grade B (75%) autonomy for Store Operations Supervisor and observable floor behaviors without empty adjectives.'
    })
  }),

  // =========================================================================
  // MODULE 3: FREQUENCY WEIGHTING & DESCENDING CORRECTION
  // =========================================================================
  Object.freeze({
    id: 'mod-3',
    number: 3,
    title: 'Frequency Weighting & Descending Correction',
    subtitle: 'Martha Alles\' mathematical algorithm to neutralize recency bias',
    leadIntro: 'An employee does not hold Grade A simply because of a brilliant achievement last month. In the Martha Alles methodology, behavior requires two-stage analysis: identifying the exhibited grade and weighting it by frequency.',
    badge: 'Module 3 • Frequency Calibration',
    duration: '15 min',
    theoryId: 'mod-3-theory',
    objective: 'Apply the 2-step Descending Correction algorithm: calibrate behaviors against BARS scales (A-D) and adjust the evaluated grade according to observed frequency (Always 100%, Frequent 75%, Half the time 50%, Occasional 25%).',
    challenge: Object.freeze({
      id: 'challenge-3',
      moduleId: 'mod-3',
      badge: 'Inverted Challenge • Algorithmic Calibration',
      title: 'The Dilemma of the Isolated Incident: Julian M. in Store Logistics',
      context: `
        <div class="rise-scenario-briefing">
          <p>
            Julian M. is a Logistics Coordinator at Superdescuento. During the annual Black Friday peak, he personally resolved a server outage
            by restructuring cross-docking routes in 2 hours, saving $80,000 in perishable inventory.
          </p>
          <div class="rise-dialogue-box" style="background: var(--slate-100); padding: 1rem; border-radius: 6px; margin: 0.75rem 0;">
            <p><strong>The Incident:</strong> A Level A behavior (systemic impact and autonomous crisis management).</p>
            <p><strong>The Reality over 12 Months:</strong> In daily operations under moderate pressure, Julian frequently loses patience,
            fails to delegate, and yells at warehouse workers roughly 50% of the time (Mitad del tiempo).</p>
            <p><strong>Store Manager Stance:</strong> <em>"He saved the company on Black Friday; he deserves Level A (100%) in Leadership."</em></p>
          </div>
          <p>
            As a Calibration Committee Auditor, you must apply Martha Alles' Descending Correction algorithm to resolve this rating.
          </p>
        </div>
      `,
      question: 'How should this evaluation be calculated according to Martha Alles\' descending correction method?',
      choices: Object.freeze([
        Object.freeze({
          id: 'c3-a',
          key: 'A',
          text: 'Award Level A (100%) because Black Friday proves he possesses the competence in high-impact crisis situations, disregarding daily lapses.',
          isCorrect: false,
          consequence: 'Recency and Halo Bias Confirmed: Other team members perceive that one heroic event justifies 364 days of poor leadership. Warehouse turnover increases.',
          feedback: 'Recency Trap. Spencer & Spencer and Alles prove that an isolated incident does not constitute an integrated competence if it lacks regular frequency.'
        }),
        Object.freeze({
          id: 'c3-b',
          key: 'B',
          text: 'Rate Julian at Level D (25%) without considering his Black Friday performance, as a punitive sanction for daily warehouse floor outbursts.',
          isCorrect: false,
          consequence: 'Severity Bias: Julian feels unappreciated, loses motivation, and decides not to intervene in future logistics crises.',
          feedback: 'Excessive Severity. Competencies must measure demonstrated behavioral capability objectively, not serve as punitive reprisals.'
        }),
        Object.freeze({
          id: 'c3-c',
          key: 'C',
          text: 'Apply two-stage analysis: Grade A behavior was observed, but with 50% frequency, descending correction degrades the score to Level B or C.',
          isCorrect: true,
          consequence: 'Exact Methodological Application! Alles establishes that demonstrated behavior must be adjusted downward by frequency: Grade A at 50% frequency is corrected descendent to Grade B or C.',
          feedback: 'Masterful. Two-stage analysis distinguishes behavioral peak from habitual consistency through frequency correction (Always, Frequent, Half-time, Occasional).'
        })
      ]),
      jitPill: Object.freeze({
        title: 'Martha Alles\' Descending Correction Algorithm',
        content: `
          Evaluating competencies requires two sequential analysis stages:
        `,
        takeaways: Object.freeze([
          'Stage 1 (Behavior Identification): Match the demonstrated behavior against the BARS taxonomy (A, B, C, or D).',
          'Stage 2 (Frequency Calibration): Evaluate frequency: Always (100%), Frequent (75%), Half the time (50%), Occasional (25%).',
          'Descending Rule: If frequency is not "Always/Frequent", the evaluated rating drops descendent to the lower operational tier.'
        ])
      })
    }),
    exerciseTransition: Object.freeze({
      badge: 'Phase 2 • Taxonomic Calibration Lab',
      title: 'From Calibration Dilemma to Frequency Classifier',
      lead: 'You verified how an isolated standout event distorts evaluation when frequency is not factored in.',
      description: 'Apply the Martha Alles algorithm by sorting 8 actual records between habitual behaviors (Direct Full Grade) and sporadic behaviors (Descending Corrected Grade).',
      focus: 'Mission: Classify each evaluated case into its corresponding methodological destination.'
    }),
    sortingActivity: Object.freeze({
      competencyName: 'Frequency Weighting and Descending Correction',
      instructions: 'Classify the 8 evaluation records between "Direct Full Grade" and "Descending Corrected Grade":',
      slots: Object.freeze([
        Object.freeze({ id: 'slot-a', level: 'A', title: 'Direct Full Grade (Frequent or Always)', badgeClass: 'rise-level-badge--a' }),
        Object.freeze({ id: 'slot-b', level: 'B', title: 'Descending Corrected Grade (Half or Occasional)', badgeClass: 'rise-level-badge--b' })
      ]),
      items: Object.freeze([
        Object.freeze({
          id: 'sort-1',
          level: 'B',
          targetSlot: 'slot-b',
          text: 'Evaluated at Grade A for leading an unprecedented contingency in May, but eludes leadership in daily routine (Frequency: Occasional).',
          feedback: 'Correct. Occasional frequency triggers descending correction.'
        }),
        Object.freeze({
          id: 'sort-2',
          level: 'A',
          targetSlot: 'slot-a',
          text: 'Evaluated at Grade C: Consistently applies store customer service procedures across 90% of regular work shifts (Frequency: Frequent).',
          feedback: 'Correct. Habitual frequency is sufficient to maintain full Grade C.'
        }),
        Object.freeze({
          id: 'sort-3',
          level: 'B',
          targetSlot: 'slot-b',
          text: 'Evaluated at Grade B: Facilitates consensus in special projects only when upper management directly supervises (Frequency: Half of the time).',
          feedback: 'Correct. 50% frequency requires downward adjustment due to lack of consistent autonomy.'
        }),
        Object.freeze({
          id: 'sort-4',
          level: 'A',
          targetSlot: 'slot-a',
          text: 'Evaluated at Grade B: Proposes process improvements and trains peers in every monthly operational review cycle (Frequency: Always).',
          feedback: 'Correct. Fully habitual behavior that sustains Grade B without degradation.'
        }),
        Object.freeze({
          id: 'sort-5',
          level: 'B',
          targetSlot: 'slot-b',
          text: 'Evaluated at Grade A: Formulated an outstanding warehouse policy on one occasion, but does not model behavior daily (Frequency: Occasional).',
          feedback: 'Correct. An occasional Grade A behavior is adjusted downward.'
        }),
        Object.freeze({
          id: 'sort-6',
          level: 'A',
          targetSlot: 'slot-a',
          text: 'Evaluated at Grade C: Follows warehouse safety protocols across all assigned shifts without incurring infractions (Frequency: Always).',
          feedback: 'Correct. Operating standard satisfied in 100% of cases (direct Grade C).'
        }),
        Object.freeze({
          id: 'sort-7',
          level: 'B',
          targetSlot: 'slot-b',
          text: 'Evaluated at Grade B: Assumes autonomous decisions under operational pressure sometimes, requiring assistance others (Frequency: Half of the time).',
          feedback: 'Correct. Low frequency prevents validating full Grade B; descending adjustment applies.'
        }),
        Object.freeze({
          id: 'sort-8',
          level: 'A',
          targetSlot: 'slot-a',
          text: 'Evaluated at Grade B: Resolves retail store discrepancies and coaches cashiers during the vast majority of shifts (Frequency: Frequent).',
          feedback: 'Correct. Strategic behavior is consolidated and habitual (direct Grade A).'
        })
      ])
    })
  }),

  // =========================================================================
  // MODULE 4: 360° MULTI-SOURCE FEEDBACK & BIAS NEUTRALIZATION
  // =========================================================================
  Object.freeze({
    id: 'mod-4',
    number: 4,
    title: '360° Multi-Source Feedback & Bias Neutralization',
    subtitle: 'Managing evaluation discrepancies, statistical anonymity, and constructive feedback',
    leadIntro: 'Receiving feedback from multiple angles (supervisor, peers, subordinates, self) often triggers defensiveness. Learn how to lead 360° feedback sessions, preserve aggregated anonymity (n >= 3), and turn resistance into actionable growth.',
    badge: 'Module 4 • Critical 360° Simulation',
    duration: '20 min',
    theoryId: 'mod-4-theory',
    objective: 'Conduct 360° feedback debriefs using the STAR inquiry model, maintain statistical confidentiality rules, neutralize halo/leniency evaluator biases, and negotiate developmental action plans.',
    challenge: Object.freeze({
      id: 'challenge-4',
      moduleId: 'mod-4',
      badge: 'Inverted Challenge • Discrepancy Debrief',
      title: 'The Reactivity Dilemma: Marcos R., Warehouse & Dispatch Head',
      context: `
        <div class="rise-scenario-briefing">
          <p>
            Marcos R. is the Warehouse & Dispatch Head at Superdescuento. His quantitative performance metrics are outstanding:
            99.2% on-time dispatch and zero inventory losses over the past 12 months.
          </p>
          <div class="rise-dialogue-box" style="background: var(--slate-100); padding: 1rem; border-radius: 6px; margin: 0.75rem 0;">
            <p><strong>360° Results in "Leadership & Team Development":</strong></p>
            <ul>
              <li><strong>Self-Evaluation:</strong> Level A (100% - Superior).</li>
              <li><strong>Direct Superior:</strong> Level B (75% - Autonomous).</li>
              <li><strong>Direct Subordinates (6 team members, pooled anonymity):</strong> Level D (25% - Frequent character outbursts, unapproachable under pressure).</li>
            </ul>
          </div>
          <p>
            Marcos enters the feedback meeting visibly enraged, holding the report:
            <em>"This is treason. I ensure everyone gets paid overtime and our warehouse is the best in the company. Who rated me D? I demand names!"</em>
          </p>
        </div>
      `,
      question: 'How should the HR specialist and evaluator handle this critical moment under Martha Alles methodology?',
      choices: Object.freeze([
        Object.freeze({
          id: 'c4-a',
          key: 'A',
          text: 'Discard subordinate scores because dispatch KPIs drive profitability; adjust his overall leadership rating to Level A immediately.',
          isCorrect: false,
          consequence: 'Evaluation Collapse: Subordinates realized their input was worthless, cynicism spread across departments, and warehouse morale plummeted.',
          feedback: 'Anti-pattern of Discarding Multi-Source Input. Performance is holistic: quantitative results define business output, but competencies govern sustainability.'
        }),
        Object.freeze({
          id: 'c4-b',
          key: 'B',
          text: 'Disclose the names of the most critical subordinates in private so Marcos can hold a team meeting and clarify personal misunderstandings.',
          isCorrect: false,
          consequence: 'Violation of Anonymity: Destroying the n >= 3 rule unleashed workplace retaliation, 3 subordinates resigned, and future 360° evaluations were compromised.',
          feedback: 'Grave Ethical & Methodological Breach. Martha Alles mandates strict anonymity protection: individual ratings must never be disclosed to the evaluee.'
        }),
        Object.freeze({
          id: 'c4-c',
          key: 'C',
          text: 'Acknowledge his KPI success, validate his emotion while preserving anonymity, and redirect focus to perception gaps with STAR inquiry.',
          isCorrect: true,
          consequence: 'Gold Standard Debrief! You acknowledged his operational success, protected statistical confidentiality, and framed the subordinate feedback as a developmental perception gap.',
          feedback: 'Superb. Alles establishes: validate quantitative achievements first, uphold aggregated anonymity, and examine behavior gaps with STAR inquiry.'
        })
      ]),
      jitPill: Object.freeze({
        title: 'The 360° Feedback Debrief Session (Martha Alles, Chs. 5 & 7)',
        content: `
          Key principles for a constructive feedback session amidst severe multi-source discrepancies:
        `,
        takeaways: Object.freeze([
          '1. Separate Output from Competencies: Validate quantitative KPI achievement before addressing behavioral feedback.',
          '2. Safeguard Anonymity: Strictly uphold the minimum aggregated sample rule (n >= 3).',
          '3. STAR Behavioral Inquiry: Focus discussion on past concrete incidents, never on abstract character labels.',
          '4. Orient toward Action: Every identified gap must translate into a verifiable on-the-job development plan.'
        ])
      })
    }),
    exerciseTransition: Object.freeze({
      badge: 'Phase 2 • Live Conversational Simulation',
      title: 'From Bias Diagnosis to Live Debrief',
      lead: 'You know how to address defensive reactivity without sacrificing methodological rigor.',
      description: 'Lead the 3 dialogue turns in the feedback meeting with Marcos R., selecting responses that defuse anger and channel effort toward constructive action.',
      focus: 'Mission: Complete all 3 turns with STAR probing and formative feedback.'
    }),
    chatSimulator: Object.freeze({
      candidate: Object.freeze({
        name: 'Marcos R.',
        role: 'Warehouse & Dispatch Head',
        avatarText: 'MR'
      }),
      initialDialogue: Object.freeze({
        text: 'I reviewed the results and this is unacceptable. All my shipments are on time and my workers gave me Grade D in Leadership. This is a conspiracy by disengaged employees.'
      }),
      turns: Object.freeze([
        Object.freeze({
          id: 'turn-1',
          prompt: 'Turn 1: Marcos dismisses his subordinates\' evaluations. What intervention do you formulate?',
          options: Object.freeze([
            Object.freeze({
              id: 'opt-1a',
              key: 'A',
              text: 'Marcos, you must accept reality. If your team rated you at Grade D it proves deficient leadership that requires immediate and unnegotiable correction.',
              isEffective: false,
              feedback: 'Personal confrontation that causes total shutdown and defensive hostility.',
              candidateResponse: 'Well, if you think I am a bad leader, find someone else to put up with the warehouse!'
            }),
            Object.freeze({
              id: 'opt-1b',
              key: 'B',
              text: 'I understand your frustration, Marcos. Your dispatch KPIs are flawless, but 360° assesses team perception. Let us examine the observed behaviors together.',
              isEffective: true,
              feedback: 'Superb opening! You validate his quantitative performance while framing the issue around behavioral perception.',
              candidateResponse: 'Well... it is true that numbers speak for themselves. But sometimes the pressure of the shift makes you lose patience.'
            }),
            Object.freeze({
              id: 'opt-1c',
              key: 'C',
              text: 'Do not worry about this report, Marcos. Let us ignore the complaints of the warehouse crew; the only priority is ensuring deliveries are on schedule.',
              isEffective: false,
              feedback: 'Patronizing dismissal that invalidates the entire 360° process.',
              candidateResponse: 'I knew HR would see reason, those warehouse guys do not know what they are talking about.'
            })
          ])
        }),
        Object.freeze({
          id: 'turn-2',
          prompt: 'Turn 2: Marcos acknowledges shift pressure. How do you probe using the STAR technique?',
          options: Object.freeze([
            Object.freeze({
              id: 'opt-2a',
              key: 'A',
              text: 'Walk me through a recent critical incident: during last Friday\'s dispatch bottleneck, what happened exactly and how did you communicate with the packing crew?',
              isEffective: true,
              feedback: 'Flawless STAR question: anchored in a past concrete event to examine actual behavior.',
              candidateResponse: 'On Friday the main forklift broke down with 40 pallets backed up. I admit I lost my temper, yelled at workers in front of the truck drivers, and refused to listen.'
            }),
            Object.freeze({
              id: 'opt-2b',
              key: 'B',
              text: 'What preventive actions would you take in the future if a comparable operational collapse occurs tomorrow afternoon within your warehouse dispatch area?',
              isEffective: false,
              feedback: 'Hypothetical question ("what would you do?") prohibited in competency behavioral inquiry.',
              candidateResponse: 'Obviously I would remain totally calm and speak with pedagogical composure.'
            }),
            Object.freeze({
              id: 'opt-2c',
              key: 'C',
              text: 'Do you believe that family upbringing or inherited personality traits influence your limited tolerance for frustration during acute operational delays?',
              isEffective: false,
              feedback: 'Unprofessional foray into amateur psychoanalysis prohibited in organizational talent management.',
              candidateResponse: 'I fail to see what my family has to do with loading trucks.'
            })
          ])
        }),
        Object.freeze({
          id: 'turn-3',
          prompt: 'Turn 3: Marcos acknowledged his emotional outburst on Friday. How do you close the session?',
          options: Object.freeze([
            Object.freeze({
              id: 'opt-3a',
              key: 'A',
              text: 'Due to that outburst we will enter a formal disciplinary warning into your file and suspend your semiannual bonus until we verify behavioral improvement.',
              isEffective: false,
              feedback: 'Punitive approach that destroys formative trust and future transparency.',
              candidateResponse: 'Honesty gets you punished in this company. Next time I will say nothing.'
            }),
            Object.freeze({
              id: 'opt-3b',
              key: 'B',
              text: 'Recognizing that episode is key, Marcos. Let us agree on a Development Plan: biweekly structured meetings and active coaching in high-pressure communication.',
              isEffective: true,
              feedback: 'Golden Methodological Closure! You link behavioral self-awareness to a verifiable, actionable growth plan.',
              candidateResponse: 'That sounds fair. I want to improve that area so the team works with trust rather than anxiety.'
            }),
            Object.freeze({
              id: 'opt-3c',
              key: 'C',
              text: 'Do not worry, Marcos; any supervisor loses their temper under tight delivery deadlines. We will archive this 360 report to protect your personnel file.',
              isEffective: false,
              feedback: 'Sterile indulgence that perpetuates flawed workplace behaviors.',
              candidateResponse: 'Great, I was worried you would make a big deal out of it.'
            })
          ])
        })
      ])
    })
  }),

  // =========================================================================
  // MODULE 5: CAPSTONE STUDIO — COMPREHENSIVE 360° EVALUATION SHEET
  // =========================================================================
  Object.freeze({
    id: 'mod-5',
    number: 5,
    title: 'Capstone Studio: Comprehensive 360° Evaluation Sheet',
    subtitle: 'Construction, calibration, and certification of the terminal deliverable',
    leadIntro: 'Transfer everything you have learned to the ultimate deliverable. Engineer the Comprehensive 360° Evaluation Sheet for "Distribuidora Logística S.A.", calculate gaps using descending correction, and formulate an actionable development plan under a 4-criteria binary rubric.',
    badge: 'Module 5 • Terminal Certification',
    duration: '25 min',
    theoryId: 'mod-5-theory',
    objective: 'Build the Comprehensive 360° Evaluation Specification: calibrate job profile, apply descending algorithm, compute multi-source gaps, formulate development commitments, and pass 100% of the binary rubric for export to Word (.docx) and Markdown (.md).',
    capstoneCase: Object.freeze({
      company: 'Distribuidora Logística S.A.',
      position: 'Warehouse & Dispatch Head',
      businessContext: `
        Fast-moving consumer goods logistics enterprise with 8 distribution centers and 1,400 employees.
        It has rolled out a Comprehensive 360° Performance Evaluation system under the Martha Alles methodology.
        Your assignment as Talent Calibration Auditor is to calibrate the Job Specification for <strong>Warehouse & Dispatch Head</strong>,
        analyze multi-source feedback discrepancies, apply frequency descending correction, and certify the Development Plan.
      `,
      competencyName: '360° Evaluation & Behavioral Development Plan',
      type: 'Integrative Audit and Certification Case (100% Pass)'
    }),
    rubricCriteria: Object.freeze([
      Object.freeze({
        id: 'c1',
        name: 'Criterion 1: Profile Alignment without Inflation',
        question: 'Does the profile define competencies with realistic BARS benchmarks (Level B/C) without demanding generalized Level A?',
        requirement: 'Must justify benchmark grades based on autonomy and operational floor/warehouse impact.'
      }),
      Object.freeze({
        id: 'c2',
        name: 'Criterion 2: Frequency Descending Correction',
        question: 'Does it apply mathematical degradation when evaluating behaviors observed with Occasional or Half-time frequency?',
        requirement: 'Must adjust self-ratings or isolated peak evaluations downward for partial frequencies (25% or 50%).'
      }),
      Object.freeze({
        id: 'c3',
        name: 'Criterion 3: Multi-Source Gap Analysis',
        question: 'Does it compute net gaps and examine discrepancies across Self-Evaluation, Peers, Subordinates, and Supervisor?',
        requirement: 'Must compute percentage gap and flag critical perception discrepancies across rater groups.'
      }),
      Object.freeze({
        id: 'c4',
        name: 'Criterion 4: Actionable Behavioral Development Plan',
        question: 'Does it formulate practical workplace actions (peer coaching, mentoring) directly tied to diagnosed gaps?',
        requirement: 'Prohibited from relying solely on passive classroom lectures; must mandate on-the-job behavioral practice.'
      })
    ]),
    submissionBlueprint: Object.freeze({
      definition: 'Calibrated competencies for Warehouse Head: Operational Integrity & Ethics (Cardinal) + Leadership & Team Development (Specific), with Required Benchmark Grade B (75%).',
      levels: Object.freeze({
        A: 'Grade A (100%): Establishes corporate dispatch doctrine and designs safety protocols deployed across all regional logistics hubs.',
        B: 'Grade B (75% - Required): Resolves complex storage contingencies autonomously and leads floor teams with composure.',
        C: 'Grade C (50%): Fulfills standard operational inventory and dispatch protocols under normal working conditions.',
        D: 'Grade D (25%): Frequent stock reconciliation discrepancies or emotional outbursts with subordinates under pressure.'
      }),
      bbiQuestions: Object.freeze([
        'Frequency Calculation: Self-evaluation at Grade A adjusted descendent to Grade B due to 50% frequency under operational pressure.',
        'Multi-Source Gap: In Leadership, Self-evaluation (A) vs Subordinates (D at 50%) yields a critical gap of -37.5% against required Grade B.',
        'Development Action Plan: 1) Biweekly structured operational planning sessions using STAR format. 2) Internal mentoring with Operations VP.'
      ])
    }),
    referenceModel: Object.freeze({
      positionTitle: 'Warehouse & Dispatch Head',
      profileGrades: 'Competency 1: Operational Integrity & Ethics (Cardinal, Grade B - 75%). Competency 2: Leadership & Team Development (Specific, Grade B - 75%). Benchmark grades calibrated for autonomous operational contingency resolution without demanding Grade A.',
      frequencyAdjustment: 'Integrity self-evaluation degraded descendent from Level A to Level B due to 50% frequency under peak pressure. Leadership evaluated at Level D by subordinates at 50% frequency.',
      gapAnalysis: 'Integrity: Evaluated Grade B (75%) vs Required Grade B (75%). Gap = 0%. Leadership: Evaluated Grade C-/D corrected (37.5%) vs Required Grade B (75%). Critical Gap = -37.5% driven by severe discrepancy between self-evaluation (A) and subordinates (D).',
      actionPlan: '1. On-the-job peer coaching: Implement biweekly structured warehouse planning sessions with active listening STAR protocol. 2. Internal mentoring: Guided shadowing with Operations VP to model delegation techniques and emotional composure during peak shipping bottlenecks.'
    })
  })
]);


export function getModulesData(lang = 'es') {
  return lang === 'en' ? MODULES_DATA_EN : MODULES_DATA;
}
