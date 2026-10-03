/**
 * Espinas Teóricas Opcionales (Deep-Dive Drawers)
 * Curso: Gestión Estratégica y Evaluación del Desempeño por Competencias (360°/180°)
 * Fuentes:
 * - Martha Alles: "Desempeño por competencias: Evaluación de 360°"
 * - Martha Alles: "Dirección estratégica de Recursos Humanos. Gestión por competencias: Casos"
 *
 * Layer: DATA (Inmutable / Frozen DTOs)
 */

export const THEORY_DATA = Object.freeze({
  'mod-0-theory': Object.freeze({
    id: 'mod-0-theory',
    moduleId: 'mod-0',
    badgeId: 'badge-theory-mod-0',
    badgeName: 'Especialista en Arquitectura Sistémica de RRHH',
    tagline: 'Espina Teórica 0.E • Arquitectura Sistémica',
    title: 'El Modelo Integral de Recursos Humanos por Competencias',
    author: 'Martha Alicia Alles / Dave Ulrich',
    source: 'Dirección Estratégica de Recursos Humanos. Gestión por Competencias: Casos',
    year: '2006',
    citation: 'Alles, M. A. (2006). Dirección estratégica de Recursos Humanos. Gestión por competencias: Casos. Nueva edición actualizada. Ediciones Granica, Buenos Aires.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. La Prohibición Metodológica de "Hilos Sueltos"</h4>
        <p>
          En la metodología desarrollada por Martha Alles, la gestión por competencias no es un catálogo estático ni un formulario anual que se archiva en una carpeta de personal. Constituye un <strong>sistema de gestión integral y cerrado</strong>.
        </p>
        <div class="theory-callout" style="background: var(--mint-light); border-left: 4px solid var(--mint-primary); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600; color: var(--slate-900);">
            Regla de Oro Sistémica: "Los distintos subsistemas de Recursos Humanos y, en especial, la gestión por competencias constituyen un método de trabajo sistémico, por lo cual no deben quedar 'hilos sueltos'; es decir, no es posible implantar algunos subsistemas y otros no." (Alles, 2006).
          </p>
        </div>
        <p>
          Si una organización evalúa el desempeño basándose en competencias pero contrata candidatos con entrevistas tradicionales no estructuradas, o si remunera sin considerar las competencias requeridas para el puesto, el modelo pierde coherencia y degenera en cinismo organizacional.
        </p>

        <h4>2. Los Tres Pilares Operativos Indisolubles</h4>
        <p>Una vez definidos la Visión, la Misión y el Catálogo de Competencias organizacionales, el modelo se sostiene sobre tres pilares interconectados:</p>
        <ul>
          <li><strong>Pilar 1: Atracción, Selección e Incorporación:</strong> Identificar qué competencias y grados posee el postulante antes de su ingreso mediante entrevistas focalizadas e incidentes críticos pasados.</li>
          <li><strong>Pilar 2: Evaluación del Desempeño:</strong> Medir periódicamente el rendimiento cuantitativo (objetivos de negocio) y el comportamiento cualitativo (competencias observables graduadas y ponderadas por frecuencia).</li>
          <li><strong>Pilar 3: Desarrollo y Planes de Sucesión:</strong> Cerrar las brechas (Gaps) detectadas en la evaluación mediante planes de aprendizaje, codesarrollo y asignación en el puesto de trabajo.</li>
        </ul>

        <h4>3. La Responsabilidad de la Línea vs. el Rol de RRHH</h4>
        <p>
          Un error recurrente en empresas que fracasan al evaluar desempeño es creer que "la evaluación la hace Recursos Humanos". En la doctrina de Martha Alles y Dave Ulrich:
        </p>
        <ul>
          <li><strong>La Jefatura Directa (Línea):</strong> Es la única responsable de evaluar, brindar retroalimentación, reconocer logros y acordar los compromisos de desarrollo con su equipo diario.</li>
          <li><strong>Recursos Humanos:</strong> Cumple el rol de socio estratégico (HR Business Partner), custodio metodológico, diseñador de instrumentos y entrenador de evaluadores para garantizar la calibración homogénea en toda la empresa.</li>
        </ul>
      </div>
    `
  }),

  'mod-1-theory': Object.freeze({
    id: 'mod-1-theory',
    moduleId: 'mod-1',
    badgeId: 'badge-theory-mod-1',
    badgeName: 'Especialista en el Modelo del Iceberg',
    tagline: 'Espina Teórica 1.E • Fundamento Empírico',
    title: 'El Modelo del Iceberg y la Falacia de Evaluar Rasgos Morales',
    author: 'Lyle M. Spencer, Signe M. Spencer & Martha Alles',
    source: 'Competence at Work (1993) / Desempeño por competencias: Evaluación de 360° (2002)',
    year: '1993 / 2002',
    citation: 'Spencer, L. M., & Spencer, S. M. (1993). Competence at work: Models for superior performance. John Wiley & Sons. / Alles, M. A. (2002). Desempeño por competencias: Evaluación de 360°. Ediciones Granica.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. La Estructura del Iceberg de Competencias</h4>
        <p>
          Spencer & Spencer y Martha Alles grafican la personalidad humana en el trabajo como un iceberg dividido en dos niveles:
        </p>
        <div class="theory-callout" style="background: #F8FAFC; border-left: 4px solid var(--mint-primary); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <ul>
            <li><strong>Zona Visible (Sobre el agua):</strong> Destrezas técnicas (skills) y conocimientos formales. Son fáciles de observar, evaluar y desarrollar mediante capacitación convencional.</li>
            <li><strong>Zona Sumergida (Bajo el agua):</strong> Concepto de uno mismo, actitudes, rasgos de personalidad y motivos intrínsecos. Son profundos, difíciles de evaluar directamente y casi imposibles de cambiar mediante cursos tradicionales.</li>
          </ul>
        </div>

        <h4>2. La Definición Técnica de Competencia</h4>
        <p>
          Para Alles, una competencia no es un rasgo abstracto sumergido, sino:
          <em>"Una característica subyacente en el individuo que está causalmente relacionada con un estándar de efectividad y/o un desempeño superior en un trabajo o situación, manifestada a través de comportamientos observables."</em>
        </p>

        <h4>3. La Ilegalidad e Invalidez de Evaluar "Intenciones" o "Virtudes Morales"</h4>
        <p>
          Cuando un formulario de desempeño solicita calificar adjetivos como "buena persona", "leal", "entusiasta" o "comprometido", comete tres aberraciones técnicas:
        </p>
        <ul>
          <li><strong>Efecto Proyección:</strong> El evaluador premia a quien piensa o actúa como él y castiga la discrepancia constructiva.</li>
          <li><strong>Indefensión del Evaluado:</strong> Nadie puede defenderse de una acusación de "falta de lealtad" o "actitud regular" porque no refiere a hechos concretos.</li>
          <li><strong>Invalidez Jurídica y Psicométrica:</strong> Las sanciones laborales o denegaciones de promoción basadas en juicios morales no resisten auditorías ni arbitrajes laborales por carecer de evidencia fáctica.</li>
        </ul>
      </div>
    `
  }),

  'mod-2-theory': Object.freeze({
    id: 'mod-2-theory',
    moduleId: 'mod-2',
    badgeId: 'badge-theory-mod-2',
    badgeName: 'Especialista en Ontología de Perfiles',
    tagline: 'Espina Teórica 2.E • Ontología y Parsimonia',
    title: 'Ontología de Competencias, Perfiles de Puesto y la Ley de Parsimonia',
    author: 'David C. McClelland & Martha Alicia Alles',
    source: 'Testing for Competence Rather Than for "Intelligence" (1973) / Dirección Estratégica (2006)',
    year: '1973 / 2006',
    citation: 'McClelland, D. C. (1973). Testing for competence rather than for intelligence. American Psychologist, 28(1), 1-14. / Alles, M. A. (2006). Casos.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. El Principio de Parsimonia en la Descripción de Puestos</h4>
        <p>
          Un error infantil en la consultoría de recursos humanos es diseñar perfiles con 25 o 30 competencias por puesto. Cuando un puesto exige todo, no prioriza nada.
        </p>
        <p>
          Martha Alles establece la <strong>Ley de Parsimonia</strong>:
        </p>
        <ul>
          <li><strong>Competencias Cardinales (3 a 5):</strong> Ejes transversales compartidos por toda la organización (ej. Integridad, Calidad de Trabajo, Orientación a Resultados, Innovación).</li>
          <li><strong>Competencias Específicas (3 a 5):</strong> Ejes técnicos o funcionales específicos del área o nivel (ej. Liderazgo, Negociación, Pensamiento Analítico).</li>
          <li><strong>Total Máximo por Puesto:</strong> Jamás superar 8 a 10 competencias en una descripción de puesto operativa.</li>
        </ul>

        <h4>2. La Falacia del "Grado A para Todo"</h4>
        <p>
          En el caso real "Hijos de La María / Superdescuento" (Alles, 2006), la gerencia asignó Grado A (Máximo / Excelente) a todos los puestos bajo la lógica: <em>"Si mi empresa busca la excelencia, todos los colaboradores deben tener el nivel máximo"</em>.
        </p>
        <div class="theory-callout" style="background: #FFF1F2; border-left: 4px solid var(--alert-error); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <p style="margin: 0; color: #9F1239; font-weight: 600;">
            Consecuencias de la Sobre-exigencia de Grado A:
          </p>
          <ul style="margin: 0.5rem 0 0; color: #881337;">
            <li>Frustración y estrés por metas inalcanzables en puestos operativos y mandos medios.</li>
            <li>Costes salariales inflados por pagar perfiles sobrecalificados para tareas rutinarias.</li>
            <li>Destrucción del plan de carrera: quien ingresa en Grado A no tiene horizonte de crecimiento en esa competencia.</li>
          </ul>
        </div>

        <h4>3. La Graduación Objetiva BARS (A, B, C, D)</h4>
        <p>
          Los grados no representan "calificaciones escolares", sino niveles de autonomía y complejidad:
        </p>
        <ul>
          <li><strong>Grado D (25%):</strong> Ejecución supervisada de conductas básicas en situaciones previstas.</li>
          <li><strong>Grado C (50%):</strong> Estándar operativo autónomo en el día a día sin necesidad de guía constante.</li>
          <li><strong>Grado B (75%):</strong> Dominio superior, resolución de imprevistos y referente técnico para otros.</li>
          <li><strong>Grado A (100%):</strong> Fijación de doctrina, visión estratégica de largo plazo e impacto en toda la organización.</li>
        </ul>
      </div>
    `
  }),

  'mod-3-theory': Object.freeze({
    id: 'mod-3-theory',
    moduleId: 'mod-3',
    badgeId: 'badge-theory-mod-3',
    badgeName: 'Especialista en Corrección Descendente',
    tagline: 'Espina Teórica 3.E • Psicometría y Frecuencias',
    title: 'Psicometría BARS, Ponderación de Frecuencia y Corrección Descendente',
    author: 'Patricia Cain Smith, L. M. Kendall & Martha Alicia Alles',
    source: 'Journal of Applied Psychology (1963) / Desempeño por competencias: Evaluación de 360° (Cap. 4)',
    year: '1963 / 2002',
    citation: 'Smith, P. C., & Kendall, L. M. (1963). Retranslation of expectations: An approach to the construction of unambiguous anchors for rating scales. Journal of Applied Psychology, 47(2), 149-155. / Alles, M. A. (2002). Cap. 4.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. La Invalidez de las Escalas Numéricas sin Anclaje Conductual</h4>
        <p>
          Smith & Kendall demostraron en 1963 que calificar a las personas en escalas del 1 al 5 ("Deficiente" a "Sobresaliente") genera hasta un 65% de varianza atribuible al sesgo del evaluador. Lo que para un jefe exigente es un "3", para un jefe indulgente es un "5".
        </p>
        <p>
          Para resolver esto se crearon las <strong>Behaviorally Anchored Rating Scales (BARS)</strong>, donde cada peldaño describe una conducta observable verificable.
        </p>

        <h4>2. El Dilema del Evento Aislado</h4>
        <p>
          Aun con escalas BARS, los evaluadores cometen el error de calificar una conducta superior porque recordaron <em>un episodio brillante</em> del evaluado durante una crisis ocurrida el mes pasado, olvidando que durante el resto del año dicha conducta no estuvo presente.
        </p>

        <h4>3. El Método de Corrección Descendente de Martha Alles</h4>
        <p>
          Para blindar la evaluación contra el sesgo de recencia y los picos atípicos, Alles introdujo la <strong>ponderación de dos tiempos</strong>:
        </p>
        <div class="theory-callout" style="background: var(--mint-light); border-left: 4px solid var(--mint-primary); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <ol>
            <li><strong>Tiempo 1 (Selección del Grado BARS):</strong> El evaluador lee los grados A, B, C y D del diccionario y elige el que describe la conducta observada.</li>
            <li><strong>Tiempo 2 (Ponderación por Frecuencia):</strong> El evaluador responde: <em>¿Esa conducta se presenta Siempre (100%), Frecuentemente (75%), la Mitad del tiempo (50%) u Ocasionalmente (25%)?</em></li>
          </ol>
        </div>
        <p>
          <strong>El Algoritmo Descendente:</strong> Si el evaluador selecciona Grado A (100%) pero la frecuencia es "Ocasional" (25%) o "Mitad del tiempo" (50%), la calificación se corrige descendentemente al nivel inferior correspondiente, impidiendo que una golondrina aislada sea tomada por verano sostenido.
        </p>
      </div>
    `
  }),

  'mod-4-theory': Object.freeze({
    id: 'mod-4-theory',
    moduleId: 'mod-4',
    badgeId: 'badge-theory-mod-4',
    badgeName: 'Especialista en Feedback Multi-Fuente',
    tagline: 'Espina Teórica 4.E • 360° y Anonimato',
    title: 'Arquitectura de 360° Feedback, Confidencialidad y Curva de Madurez',
    author: 'Mark R. Edwards, Ann J. Ewen & Claude Levy-Leboyer',
    source: '360° Feedback (1996) / Feedback de 360 grados (1997) / Martha Alles (Caps. 5 y 6)',
    year: '1996 / 1997',
    citation: 'Edwards, M. R., & Ewen, A. J. (1996). 360° Feedback: The powerful new tool. American Management Association. / Levy-Leboyer, C. (1997). Feedback de 360 grados. Gestión 2000. / Alles, M. A. (2002).',
    html: `
      <div class="theory-deep-dive">
        <h4>1. La Anatomía del Feedback Multi-Fuente</h4>
        <p>
          La evaluación unidireccional (exclusivamente del jefe al empleado) genera puntos ciegos severos: jefes que no ven el trato de sus supervisores con los pares, o que son seducidos por subordinados con alta habilidad política pero pésima colaboración interna.
        </p>
        <p>
          La evaluación de 360° integra cuatro perspectivas cardinales:
        </p>
        <ul>
          <li><strong>Autoevaluación:</strong> Permite calibrar la auto-percepción del colaborador y detectar discrepancias de madurez.</li>
          <li><strong>Superior Directo:</strong> Perspectiva de alineación operativa y cumplimiento de objetivos.</li>
          <li><strong>Pares (Colaterales):</strong> Medición de trabajo en equipo transversal, negociación y empatía operativa.</li>
          <li><strong>Colaboradores (Subordinados):</strong> Medición del liderazgo real, delegación, empowerment y clima cotidiano.</li>
          <li><strong>Clientes Internos/Externos (Opcional):</strong> Calidad de servicio y cumplimiento de compromisos.</li>
        </ul>

        <h4>2. La Regla de Oro del Anonimato Estadístico</h4>
        <p>
          Para que los colaboradores y pares emitan juicios sinceros sin temor a represalias laborales:
        </p>
        <div class="theory-callout" style="background: #F8FAFC; border-left: 4px solid var(--slate-700); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600;">
            Regla de Muestra Mínima: En pares y colaboradores, las evaluaciones solo se consolidan y reportan como promedio agregado si participan al menos 3 evaluadores por colectivo (n &ge; 3). Si hay menos de 3 personas, el informe no se abre para resguardar la identidad.
          </p>
        </div>

        <h4>3. La Transición 180° a 360° según la Madurez Cultural</h4>
        <p>
          Martha Alles advierte enfáticamente que una empresa con clima tóxico, persecución política o desconfianza generalizada <strong>no debe iniciar con 360°</strong>, pues corre el riesgo de convertir el proceso en un ajuste de cuentas. En esos casos, la transición metodológica recomendada es iniciar con <strong>Evaluación de 180°</strong> (Superior + Autoevaluación + Clientes/Pares clave) y luego madurar hacia 360° pleno.
        </p>
      </div>
    `
  }),

  'mod-5-theory': Object.freeze({
    id: 'mod-5-theory',
    moduleId: 'mod-5',
    badgeId: 'badge-theory-mod-5',
    badgeName: 'Especialista en FORT y Calibración Inter-Jueces',
    tagline: 'Espina Teórica 5.E • Confiabilidad y FORT',
    title: 'Entrenamiento a Evaluadores (FORT), Sesgos Cognitivos y Confiabilidad',
    author: 'H. John Bernardin, Richard W. Beatty & Joseph L. Fleiss',
    source: 'Performance Appraisal: Assessing Human Behavior at Work (1984) / Fleiss Kappa (1971)',
    year: '1984 / 1971',
    citation: 'Bernardin, H. J., & Beatty, R. W. (1984). Performance appraisal: Assessing human behavior at work. Kent Publishing. / Fleiss, J. L. (1971). Measuring nominal scale agreement among many raters. Psychological Bulletin, 76(5), 378. / Alles, M. A. (2002). Cap. 7.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. Catálogo Sistemático de Sesgos del Evaluador</h4>
        <p>
          Bernardin & Beatty y Martha Alles identifican los cinco sesgos más dañinos en los comités de evaluación:
        </p>
        <ul>
          <li><strong>Efecto Halo / Horns:</strong> Generalizar una impresión favorable o desfavorable en una sola competencia hacia todas las demás.</li>
          <li><strong>Tendencia Central:</strong> Calificar a todos los colaboradores en el grado intermedio (C) para evitar confrontaciones o no justificar notas extremas.</li>
          <li><strong>Indulgencia vs. Severidad:</strong> El "jefe simpático" que evalúa en A a todo el mundo versus el "jefe ogro" que considera que nadie merece más de C.</li>
          <li><strong>Sesgo de Recencia:</strong> Otorgar peso desproporcionado a los eventos ocurridos en las últimas 3 o 4 semanas previas al cierre de la evaluación.</li>
          <li><strong>Sesgo de Similitud:</strong> Calificar más favorablemente a quienes comparten formación, pasatiempos o estilo personal con el evaluador.</li>
        </ul>

        <h4>2. Frame-of-Reference Training (FORT)</h4>
        <p>
          El entrenamiento teórico pasivo (leer el manual) apenas reduce el 10% del sesgo. El estándar científico con mayor validez demostrada es el <strong>Frame-of-Reference Training (FORT)</strong>:
        </p>
        <div class="theory-callout" style="background: var(--mint-light); border-left: 4px solid var(--mint-primary); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600;">Metodología FORT:</p>
          <ul style="margin: 0.5rem 0 0;">
            <li>Los evaluadores analizan casos reales estandarizados en video o texto.</li>
            <li>Emiten calificaciones individuales a ciegas.</li>
            <li>Discuten en comité las discrepancias hasta calibrar el marco de referencia común y consensuar la nota estándar.</li>
          </ul>
        </div>

        <h4>3. Confiabilidad Inter-Jueces (Kappa de Fleiss)</h4>
        <p>
          Para certificar la madurez de un sistema de evaluación corporativo se aplica el coeficiente de concordancia inter-jueces (Kappa de Fleiss):
        </p>
        <ul>
          <li><strong>&kappa; &lt; 0.40:</strong> Concordancia deficiente (evaluaciones guiadas por el azar o capricho subjetivo).</li>
          <li><strong>&kappa; = 0.40 - 0.75:</strong> Concordancia moderada a buena (estándar operativo aceptable).</li>
          <li><strong>&kappa; &gt; 0.75:</strong> Excelente calibración técnica (el marco de competencias opera con rigor científico y alta confiabilidad).</li>
        </ul>
      </div>
    `
  })
});



export const THEORY_DATA_EN = Object.freeze({
  'mod-0-theory': Object.freeze({
    id: 'mod-0-theory',
    moduleId: 'mod-0',
    badgeId: 'badge-theory-mod-0',
    badgeName: 'HR Systemic Architecture Specialist',
    tagline: 'Theoretical Fishbone 0.E • Systemic Architecture',
    title: 'The Comprehensive Competency-Based Human Resources Model',
    author: 'Martha Alicia Alles / Dave Ulrich',
    source: 'Dirección Estratégica de Recursos Humanos. Gestión por Competencias: Casos',
    year: '2006',
    citation: 'Alles, M. A. (2006). Dirección estratégica de Recursos Humanos. Gestión por competencias: Casos. Nueva edición actualizada. Ediciones Granica, Buenos Aires.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. The Methodological Prohibition of "Loose Ends"</h4>
        <p>
          In the methodology developed by Martha Alles, competency management is neither a static catalog nor an annual questionnaire filed away in an HR folder. It constitutes a <strong>comprehensive, closed-loop management system</strong>.
        </p>
        <div class="theory-callout" style="background: var(--mint-light); border-left: 4px solid var(--mint-primary); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600; color: var(--slate-900);">
            Golden Systemic Rule: "The various Human Resources subsystems and, specifically, competency management constitute a systemic methodology; therefore, no 'loose ends' must remain. That is, it is impossible to implement some subsystems while ignoring others." (Alles, 2006).
          </p>
        </div>
        <p>
          If an enterprise evaluates performance based on competencies but hires candidates through unstructured traditional interviews, or compensates without considering the required competency levels of each position, the model loses coherence and degenerates into organizational cynicism.
        </p>

        <h4>2. The Three Inseparable Operational Pillars</h4>
        <p>Once Vision, Mission, and the Organizational Competency Catalog are defined, the system rests on three interconnected pillars:</p>
        <ul>
          <li><strong>Pillar 1: Attraction, Selection & Onboarding:</strong> Identify which competencies and grades a candidate possesses prior to hiring via targeted behavioral event interviews and past critical incidents.</li>
          <li><strong>Pillar 2: Performance Evaluation:</strong> Periodically measure quantitative output (business KPIs) and qualitative behaviors (observable competencies graduated and weighted by frequency).</li>
          <li><strong>Pillar 3: Development & Succession Planning:</strong> Close diagnosed gaps through on-the-job action plans, co-development, and targeted developmental assignments.</li>
        </ul>

        <h4>3. Line Accountability vs. the HR Partner Role</h4>
        <p>
          A frequent mistake in failing appraisal systems is the assumption that "evaluations are done by Human Resources". In the doctrine of Martha Alles and Dave Ulrich:
        </p>
        <ul>
          <li><strong>Direct Line Leadership:</strong> Solely accountable for evaluating, delivering feedback, recognizing achievements, and agreeing on growth commitments with their daily teams.</li>
          <li><strong>Human Resources:</strong> Serves as strategic partner (HRBP), methodological custodian, instrument architect, and evaluator trainer to ensure uniform calibration across the entire enterprise.</li>
        </ul>
      </div>
    `
  }),

  'mod-1-theory': Object.freeze({
    id: 'mod-1-theory',
    moduleId: 'mod-1',
    badgeId: 'badge-theory-mod-1',
    badgeName: 'Iceberg Model Specialist',
    tagline: 'Theoretical Fishbone 1.E • Empirical Foundations',
    title: 'The Iceberg Model and the Fallacy of Evaluating Moral Traits',
    author: 'Lyle M. Spencer, Signe M. Spencer & Martha Alles',
    source: 'Competence at Work (1993) / Desempeño por competencias: Evaluación de 360° (2002)',
    year: '1993 / 2002',
    citation: 'Spencer, L. M., & Spencer, S. M. (1993). Competence at work: Models for superior performance. John Wiley & Sons. / Alles, M. A. (2002). Desempeño por competencias: Evaluación de 360°. Ediciones Granica.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. The Structure of the Competency Iceberg</h4>
        <p>
          Spencer & Spencer and Martha Alles illustrate workplace human personality as an iceberg divided into two distinct strata:
        </p>
        <div class="theory-callout" style="background: #F8FAFC; border-left: 4px solid var(--mint-primary); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <ul>
            <li><strong>Visible Surface (Above Water):</strong> Technical skills and formal knowledge. Readily observed, evaluated, and developed through conventional training courses.</li>
            <li><strong>Submerged Zone (Under Water):</strong> Self-concept, attitudes, personality traits, and intrinsic motives. Deep-seated, difficult to evaluate directly, and virtually impossible to alter through passive classroom lectures.</li>
          </ul>
        </div>

        <h4>2. The Technical Definition of Competency</h4>
        <p>
          For Alles, a competency is not an abstract submerged trait, but:
          <em>"An underlying characteristic of an individual that is causally related to criterion-referenced effective and/or superior performance in a job or situation, manifested through observable behaviors."</em>
        </p>

        <h4>3. The Illegality and Invalidity of Evaluating "Intentions" or "Moral Virtues"</h4>
        <p>
          When an appraisal instrument asks managers to rate labels such as "good person", "loyal", "enthusiastic", or "committed", it incurs three technical aberrations:
        </p>
        <ul>
          <li><strong>Projection Bias:</strong> The evaluator rewards those who think or act like them and penalizes constructive dissent.</li>
          <li><strong>Defenselessness of the Evaluee:</strong> No employee can defend against an accusation of "lack of loyalty" or "lukewarm attitude" because it lacks concrete factual evidence.</li>
          <li><strong>Legal & Psychometric Vulnerability:</strong> Disciplinary actions or denied promotions based on moral judgments fail labor arbitrations and audits due to absence of verifiable behavioral facts.</li>
        </ul>
      </div>
    `
  }),

  'mod-2-theory': Object.freeze({
    id: 'mod-2-theory',
    moduleId: 'mod-2',
    badgeId: 'badge-theory-mod-2',
    badgeName: 'Profile Ontology Specialist',
    tagline: 'Theoretical Fishbone 2.E • Ontology & Parsimony',
    title: 'Competency Ontology, Job Profiles, and the Law of Parsimony',
    author: 'David C. McClelland & Martha Alicia Alles',
    source: 'Testing for Competence Rather Than for "Intelligence" (1973) / Dirección Estratégica (2006)',
    year: '1973 / 2006',
    citation: 'McClelland, D. C. (1973). Testing for competence rather than for intelligence. American Psychologist, 28(1), 1-14. / Alles, M. A. (2006). Casos.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. The Principle of Parsimony in Job Descriptions</h4>
        <p>
          A rookie mistake in HR consulting is designing profiles with 25 or 30 competencies per role. When a job demands everything, it prioritizes nothing.
        </p>
        <p>
          Martha Alles establishes the <strong>Law of Parsimony</strong>:
        </p>
        <ul>
          <li><strong>Cardinal Competencies (3 to 5):</strong> Core values shared enterprise-wide (e.g., Integrity, Work Quality, Results Orientation, Innovation).</li>
          <li><strong>Specific Competencies (3 to 5):</strong> Technical or functional competencies specific to an area or hierarchy level (e.g., Leadership, Negotiation, Analytical Thinking).</li>
          <li><strong>Maximum Total per Position:</strong> Never exceed 8 to 10 competencies in an operational job specification.</li>
        </ul>

        <h4>2. The Fallacy of "Grade A for Everything"</h4>
        <p>
          In the actual corporate case "Hijos de La María / Superdescuento" (Alles, 2006), executive management assigned Grade A (Maximum / Excellent) to every job under the flawed assumption: <em>"If our enterprise strives for excellence, every collaborator must have the top level"</em>.
        </p>
        <div class="theory-callout" style="background: #FFF1F2; border-left: 4px solid var(--alert-error); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <p style="margin: 0; color: #9F1239; font-weight: 600;">
            Consequences of Generalized Grade A Over-Requirement:
          </p>
          <ul style="margin: 0.5rem 0 0; color: #881337;">
            <li>Frustration and burnout due to unachievable standards in operational and middle-management roles.</li>
            <li>Inflated payroll costs resulting from paying overqualified profiles for routine tasks.</li>
            <li>Destruction of career pathways: whoever enters at Grade A has zero developmental horizon remaining.</li>
          </ul>
        </div>

        <h4>3. BARS Objective Graduation (A, B, C, D)</h4>
        <p>
          Grades do not represent "academic grades", but tiers of operational autonomy and complexity:
        </p>
        <ul>
          <li><strong>Grade D (25%):</strong> Supervised execution of basic behaviors in standardized situations.</li>
          <li><strong>Grade C (50%):</strong> Daily autonomous operational standard without need for constant guidance.</li>
          <li><strong>Grade B (75%):</strong> Superior mastery, autonomous contingency resolution, and technical benchmark for peers.</li>
          <li><strong>Grade A (100%):</strong> Doctrine setting, long-term strategic vision, and systemic enterprise-wide impact.</li>
        </ul>
      </div>
    `
  }),

  'mod-3-theory': Object.freeze({
    id: 'mod-3-theory',
    moduleId: 'mod-3',
    badgeId: 'badge-theory-mod-3',
    badgeName: 'Descending Correction Specialist',
    tagline: 'Theoretical Fishbone 3.E • Psychometrics & Frequencies',
    title: 'BARS Psychometrics, Frequency Weighting, and Descending Correction',
    author: 'Patricia Cain Smith, L. M. Kendall & Martha Alicia Alles',
    source: 'Journal of Applied Psychology (1963) / Desempeño por competencias: Evaluación de 360° (Ch. 4)',
    year: '1963 / 2002',
    citation: 'Smith, P. C., & Kendall, L. M. (1963). Retranslation of expectations: An approach to the construction of unambiguous anchors for rating scales. Journal of Applied Psychology, 47(2), 149-155. / Alles, M. A. (2002). Cap. 4.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. The Invalidity of Numerical Scales without Behavioral Anchors</h4>
        <p>
          Smith & Kendall proved in 1963 that rating individuals on generic 1-to-5 scales ("Poor" to "Outstanding") generates up to 65% variance attributable solely to evaluator subjectivity. What a strict manager rates as a "3", a lenient manager rates as a "5".
        </p>
        <p>
          To eliminate this flaw, <strong>Behaviorally Anchored Rating Scales (BARS)</strong> were developed, anchoring each tier to verifiable observable actions.
        </p>

        <h4>2. The Dilemma of the Isolated Incident</h4>
        <p>
          Even with BARS scales, evaluators often overrate a subordinate because they recall <em>one heroic episode</em> during a crisis last month, forgetting that throughout the remaining 11 months that behavior was absent.
        </p>

        <h4>3. Martha Alles' Descending Correction Method</h4>
        <p>
          To safeguard evaluation from recency bias and atypical peaks, Alles introduced <strong>two-stage weighting</strong>:
        </p>
        <div class="theory-callout" style="background: var(--mint-light); border-left: 4px solid var(--mint-primary); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <ol>
            <li><strong>Stage 1 (BARS Grade Identification):</strong> The evaluator reviews levels A, B, C, and D in the catalog and selects the descriptor matching the demonstrated behavior.</li>
            <li><strong>Stage 2 (Frequency Weighting):</strong> The evaluator answers: <em>Is this behavior exhibited Always (100%), Frequently (75%), Half the time (50%), or Occasionally (25%)?</em></li>
          </ol>
        </div>
        <p>
          <strong>The Descending Algorithm:</strong> If Grade A (100%) is selected but frequency is "Occasional" (25%) or "Half the time" (50%), the score is automatically corrected descendent to the lower corresponding tier, preventing an isolated high from distorting the permanent rating.
        </p>
      </div>
    `
  }),

  'mod-4-theory': Object.freeze({
    id: 'mod-4-theory',
    moduleId: 'mod-4',
    badgeId: 'badge-theory-mod-4',
    badgeName: 'Multi-Source Feedback Specialist',
    tagline: 'Theoretical Fishbone 4.E • 360° & Anonymity',
    title: '360° Feedback Architecture, Confidentiality, and Cultural Maturity',
    author: 'Mark R. Edwards, Ann J. Ewen & Claude Levy-Leboyer',
    source: '360° Feedback (1996) / Feedback de 360 grados (1997) / Martha Alles (Chs. 5 & 6)',
    year: '1996 / 1997',
    citation: 'Edwards, M. R., & Ewen, A. J. (1996). 360° Feedback: The powerful new tool. American Management Association. / Levy-Leboyer, C. (1997). Feedback de 360 grados. Gestión 2000. / Alles, M. A. (2002).',
    html: `
      <div class="theory-deep-dive">
        <h4>1. The Anatomy of Multi-Source Feedback</h4>
        <p>
          Unidirectional appraisal (manager-to-subordinate only) generates severe blind spots: superiors who never witness how a supervisor treats peers, or who are charmed by politically adept workers with poor cross-functional collaboration.
        </p>
        <p>
          A 360° evaluation integrates four cardinal perspectives:
        </p>
        <ul>
          <li><strong>Self-Evaluation:</strong> Calibrates the employee's self-awareness and highlights perception discrepancies.</li>
          <li><strong>Direct Superior:</strong> Operational alignment and goal attainment viewpoint.</li>
          <li><strong>Peers (Collaterals):</strong> Cross-functional collaboration, internal negotiation, and operational empathy.</li>
          <li><strong>Direct Reports (Subordinates):</strong> Daily leadership, delegation, empowerment, and workplace climate.</li>
          <li><strong>Internal/External Customers (Optional):</strong> Service quality and commitment fulfillment.</li>
        </ul>

        <h4>2. The Golden Rule of Statistical Anonymity</h4>
        <p>
          For subordinates and peers to evaluate truthfully without fear of workplace reprisal:
        </p>
        <div class="theory-callout" style="background: #F8FAFC; border-left: 4px solid var(--slate-700); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600;">
            Minimum Sample Rule: In peer and subordinate groups, evaluations are consolidated and reported as an aggregated average only if at least 3 evaluators participate per group (n &ge; 3). If fewer than 3 responses exist, the report remains closed to protect anonymity.
          </p>
        </div>

        <h4>3. The 180° to 360° Transition based on Cultural Maturity</h4>
        <p>
          Martha Alles explicitly warns that organizations with toxic climates, political persecution, or widespread distrust <strong>must not start with 360°</strong>, as it risks becoming a settling of personal scores. In such cultures, the recommended methodology is starting with <strong>180° Evaluation</strong> (Supervisor + Self-Evaluation + Key Peers/Customers) before maturing into full 360°.
        </p>
      </div>
    `
  }),

  'mod-5-theory': Object.freeze({
    id: 'mod-5-theory',
    moduleId: 'mod-5',
    badgeId: 'badge-theory-mod-5',
    badgeName: 'FORT & Inter-Rater Reliability Specialist',
    tagline: 'Theoretical Fishbone 5.E • Reliability & FORT',
    title: 'Rater Training (FORT), Cognitive Biases, and Inter-Rater Reliability',
    author: 'H. John Bernardin, Richard W. Beatty & Joseph L. Fleiss',
    source: 'Performance Appraisal: Assessing Human Behavior at Work (1984) / Fleiss Kappa (1971)',
    year: '1984 / 1971',
    citation: 'Bernardin, H. J., & Beatty, R. W. (1984). Performance appraisal: Assessing human behavior at work. Kent Publishing. / Fleiss, J. L. (1971). Measuring nominal scale agreement among many raters. Psychological Bulletin, 76(5), 378. / Alles, M. A. (2002). Cap. 7.',
    html: `
      <div class="theory-deep-dive">
        <h4>1. Systematic Catalog of Evaluator Biases</h4>
        <p>
          Bernardin & Beatty and Martha Alles identify the five most damaging evaluator biases in appraisal committees:
        </p>
        <ul>
          <li><strong>Halo / Horns Effect:</strong> Generalizing a favorable or unfavorable impression in one competency across all other dimensions.</li>
          <li><strong>Central Tendency:</strong> Clustering all ratings around the middle tier (Grade C) to avoid conflict or having to justify extreme scores.</li>
          <li><strong>Leniency vs. Severity:</strong> The "friendly manager" who gives everyone Grade A versus the "strict manager" who believes no one deserves more than C.</li>
          <li><strong>Recency Bias:</strong> Giving disproportionate weight to events that occurred in the last 3 or 4 weeks prior to the evaluation deadline.</li>
          <li><strong>Similarity Bias:</strong> Rating more favorably individuals who share educational backgrounds, hobbies, or personality traits with the rater.</li>
        </ul>

        <h4>2. Frame-of-Reference Training (FORT)</h4>
        <p>
          Passive theoretical training (reading manuals) barely reduces 10% of rating bias. The scientific standard with highest demonstrated validity is <strong>Frame-of-Reference Training (FORT)</strong>:
        </p>
        <div class="theory-callout" style="background: var(--mint-light); border-left: 4px solid var(--mint-primary); padding: 1rem; margin: 1rem 0; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600;">FORT Methodology:</p>
          <ul style="margin: 0.5rem 0 0;">
            <li>Evaluators analyze standardized real-world case vignettes in video or text.</li>
            <li>They independently issue blind performance ratings.</li>
            <li>In committee, they debate discrepancies until calibrating a common behavioral benchmark and reaching consensus.</li>
          </ul>
        </div>

        <h4>3. Inter-Rater Reliability (Fleiss' Kappa)</h4>
        <p>
          To certify the scientific maturity of a corporate evaluation system, Fleiss' Kappa coefficient of inter-rater concordance is calculated:
        </p>
        <ul>
          <li><strong>&kappa; &lt; 0.40:</strong> Poor agreement (evaluations driven by chance or subjective caprice).</li>
          <li><strong>&kappa; = 0.40 - 0.75:</strong> Moderate to good agreement (acceptable operational standard).</li>
          <li><strong>&kappa; &gt; 0.75:</strong> Outstanding technical calibration (the competency framework operates with scientific rigor and high reliability).</li>
        </ul>
      </div>
    `
  })
});


export function getTheoryData(lang = 'es') {
  return lang === 'en' ? THEORY_DATA_EN : THEORY_DATA;
}
