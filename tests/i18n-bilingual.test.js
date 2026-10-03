import test from 'node:test';
import assert from 'node:assert/strict';

import { getModulesData, MODULES_DATA, MODULES_DATA_EN } from '../js/data/modules-content.js';
import { getTheoryData, THEORY_DATA, THEORY_DATA_EN } from '../js/data/theory-drawers.js';
import { RubricEvaluator } from '../js/services/rubric-evaluator.js';
import { CourseRouter, UI_TRANSLATIONS } from '../js/ui/router.js';
import { CourseStore } from '../js/core/store.js';

test('i18n - Paridad y Completitud de Datasets ES y EN (Desempeño 360°)', () => {
  const modulesEs = getModulesData('es');
  const modulesEn = getModulesData('en');

  assert.equal(modulesEs.length, 6, 'Módulos ES debe tener exactamente 6 elementos');
  assert.equal(modulesEn.length, 6, 'Módulos EN debe tener exactamente 6 elementos');

  const theoryEs = getTheoryData('es');
  const theoryEn = getTheoryData('en');

  const expectedTheoryKeys = ['mod-0-theory', 'mod-1-theory', 'mod-2-theory', 'mod-3-theory', 'mod-4-theory', 'mod-5-theory'];
  for (const key of expectedTheoryKeys) {
    assert.ok(theoryEs[key], `Theory ES debe contener ${key}`);
    assert.ok(theoryEn[key], `Theory EN debe contener ${key}`);
    assert.ok(theoryEn[key].title.length > 5, `Theory EN ${key} debe tener título`);
    assert.ok(theoryEn[key].html.length > 50, `Theory EN ${key} debe tener contenido html`);
  }

  for (let i = 0; i < 6; i++) {
    const modEs = modulesEs[i];
    const modEn = modulesEn[i];

    assert.equal(modEn.id, modEs.id, `Módulo ${i} debe tener el mismo ID`);
    assert.ok(modEn.title.length > 5, `Módulo ${i} EN debe tener título`);
    assert.ok(modEn.subtitle.length > 5, `Módulo ${i} EN debe tener subtítulo`);
    assert.ok(modEn.leadIntro.length > 10, `Módulo ${i} EN debe tener leadIntro`);
    assert.ok(modEn.objective.length > 10, `Módulo ${i} EN debe tener objective`);

    if (modEs.challenge) {
      assert.ok(modEn.challenge, `Módulo ${i} EN debe tener challenge`);
      assert.equal(modEn.challenge.choices.length, modEs.challenge.choices.length);
      assert.ok(modEn.challenge.jitPill, `Módulo ${i} EN challenge debe tener jitPill`);
    }
  }

  // Módulo 0
  assert.equal(modulesEn[0].introData.questions.length, modulesEs[0].introData.questions.length, 'Intro EN debe tener la misma cantidad de preguntas que ES');
  assert.equal(modulesEn[0].introData.questions.length, 4, 'Intro EN debe tener 4 preguntas');
  assert.ok(modulesEn[0].introData.pathways.practiceChoice.title, 'Intro EN debe tener opción de práctica');
  assert.ok(modulesEn[0].introData.pathways.theoryChoice.title, 'Intro EN debe tener opción de teoría');

  // Módulo 2
  assert.ok(modulesEn[2].practiceBuilder, 'Módulo 2 EN debe tener practiceBuilder');
  assert.equal(modulesEn[2].practiceBuilder.sections.length, 3, 'Practice Builder EN debe tener 3 secciones');

  // Módulo 3
  assert.ok(modulesEn[3].sortingActivity, 'Módulo 3 EN debe tener sortingActivity');
  assert.equal(modulesEn[3].sortingActivity.slots.length, 2, 'Sorting Activity EN debe tener 2 slots');
  assert.equal(modulesEn[3].sortingActivity.slots[0].title, 'Direct Full Grade (Frequent or Always)');
  assert.equal(modulesEn[3].sortingActivity.slots[1].title, 'Descending Corrected Grade (Half or Occasional)');
  assert.equal(modulesEn[3].sortingActivity.items.length, 8, 'Sorting Activity EN debe tener 8 items');
  modulesEn[3].sortingActivity.items.forEach((item, idx) => {
    assert.match(item.text, /^Evaluated at Grade [A-D]/, `Item ${idx} en EN debe iniciar con 'Evaluated at Grade X'`);
    assert.match(item.text, /\(Frequency: (Always|Frequent|Half of the time|Occasional)\)/, `Item ${idx} en EN debe incluir frecuencia`);
    assert.ok(item.feedback && item.feedback.length > 5, `Item ${idx} en EN debe tener feedback`);
    assert.ok(['slot-a', 'slot-b'].includes(item.targetSlot), `Item ${idx} en EN debe apuntar a slot-a o slot-b`);
  });

  // Módulo 4
  assert.ok(modulesEn[4].chatSimulator, 'Módulo 4 EN debe tener chatSimulator');
  assert.equal(modulesEn[4].chatSimulator.turns.length, 3, 'Chat Simulator EN debe tener 3 turnos');

  // Módulo 5
  assert.ok(modulesEn[5].capstoneCase, 'Módulo 5 EN debe tener capstoneCase');
  assert.ok(modulesEn[5].submissionBlueprint, 'Módulo 5 EN debe tener submissionBlueprint');
  assert.equal(modulesEn[5].submissionBlueprint.bbiQuestions.length, 3, 'Capstone Blueprint EN debe tener 3 preguntas BBI');
});

test('i18n - Paridad Biunívoca y Corrección de Opciones de Reactivos entre ES y EN', () => {
  const modulesEs = getModulesData('es');
  const modulesEn = getModulesData('en');

  for (let i = 1; i <= 4; i++) {
    const chEs = modulesEs[i].challenge;
    const chEn = modulesEn[i].challenge;
    assert.equal(chEn.choices.length, chEs.choices.length, `Módulo ${i} debe tener igual cantidad de opciones`);
    for (let j = 0; j < chEs.choices.length; j++) {
      assert.equal(chEn.choices[j].id, chEs.choices[j].id, `Módulo ${i} opción ${j} ID debe coincidir`);
      assert.equal(chEn.choices[j].key, chEs.choices[j].key, `Módulo ${i} opción ${j} key debe coincidir`);
      assert.equal(chEn.choices[j].isCorrect, chEs.choices[j].isCorrect, `Módulo ${i} opción ${j} isCorrect debe coincidir`);
    }
  }
});

test('i18n - Simetría Psicométrica de Reactivos en Español (Ratio <= 1.25)', () => {
  const modulesEs = getModulesData('es');

  for (let i = 1; i <= 4; i++) {
    const mod = modulesEs[i];
    assert.ok(mod.challenge, `Módulo ${i} debe tener challenge`);
    const lengths = mod.challenge.choices.map(c => c.text.length);
    const maxLen = Math.max(...lengths);
    const minLen = Math.min(...lengths);
    const ratio = maxLen / minLen;

    assert.ok(
      ratio <= 1.25,
      `Módulo ${i} ES excede ratio de longitud psicométrica (1.25): ratio=${ratio.toFixed(3)} [${lengths.join(', ')}]`
    );
  }
});

test('i18n - Simetría Psicométrica de Reactivos en Inglés (Ratio <= 1.25)', () => {
  const modulesEn = getModulesData('en');

  for (let i = 1; i <= 4; i++) {
    const mod = modulesEn[i];
    assert.ok(mod.challenge, `Módulo ${i} debe tener challenge`);
    const lengths = mod.challenge.choices.map(c => c.text.length);
    const maxLen = Math.max(...lengths);
    const minLen = Math.min(...lengths);
    const ratio = maxLen / minLen;

    assert.ok(
      ratio <= 1.25,
      `Módulo ${i} EN excede ratio de longitud psicométrica (1.25): ratio=${ratio.toFixed(3)} [${lengths.join(', ')}]`
    );
  }
});

test('i18n - Simetría Psicométrica de Simulador de Feedback y Clasificador Conductual (Ratio <= 1.25)', () => {
  const modulesEs = getModulesData('es');
  const modulesEn = getModulesData('en');

  // Clasificador Conductual (Módulo 3)
  const sortLensEs = modulesEs[3].sortingActivity.items.map(it => it.text.length);
  const sortLensEn = modulesEn[3].sortingActivity.items.map(it => it.text.length);
  const sortRatioEs = Math.max(...sortLensEs) / Math.min(...sortLensEs);
  const sortRatioEn = Math.max(...sortLensEn) / Math.min(...sortLensEn);
  assert.ok(sortRatioEs <= 1.25, `Sorting Activity ES ratio=${sortRatioEs.toFixed(3)} debe ser <= 1.25`);
  assert.ok(sortRatioEn <= 1.25, `Sorting Activity EN ratio=${sortRatioEn.toFixed(3)} debe ser <= 1.25`);

  // Chat Simulator (Módulo 4)
  for (let t = 0; t < 3; t++) {
    const turnEs = modulesEs[4].chatSimulator.turns[t];
    const turnEn = modulesEn[4].chatSimulator.turns[t];

    const lensEs = turnEs.options.map(o => o.text.length);
    const lensEn = turnEn.options.map(o => o.text.length);
    const ratioEs = Math.max(...lensEs) / Math.min(...lensEs);
    const ratioEn = Math.max(...lensEn) / Math.min(...lensEn);

    assert.ok(ratioEs <= 1.25, `Chat Simulator Turno ${t} ES ratio=${ratioEs.toFixed(3)} debe ser <= 1.25`);
    assert.ok(ratioEn <= 1.25, `Chat Simulator Turno ${t} EN ratio=${ratioEn.toFixed(3)} debe ser <= 1.25`);

    for (let o = 0; o < turnEs.options.length; o++) {
      assert.equal(turnEn.options[o].id, turnEs.options[o].id, `Turno ${t} opción ${o} ID debe coincidir`);
      assert.equal(turnEn.options[o].isEffective, turnEs.options[o].isEffective, `Turno ${t} opción ${o} isEffective debe coincidir`);
    }
  }
});

test('i18n - Ausencia Absoluta de Términos Prohibidos y Marca Moodle en EN y ES', () => {
  const modulesEs = getModulesData('es');
  const modulesEn = getModulesData('en');
  const theoryEs = getTheoryData('es');
  const theoryEn = getTheoryData('en');

  const checkNoMoodle = (obj, context) => {
    const jsonStr = JSON.stringify(obj).toLowerCase();
    assert.ok(!jsonStr.includes('moodle'), `${context} contiene la palabra prohibida "moodle"`);
  };

  checkNoMoodle(modulesEs[5], 'Módulo 5 ES');
  checkNoMoodle(modulesEn[5], 'Módulo 5 EN');
  checkNoMoodle(theoryEs['mod-5-theory'], 'Espina Teórica 5.E ES');
  checkNoMoodle(theoryEn['mod-5-theory'], 'Espina Teórica 5.E EN');
});

test('i18n - Aislamiento Estricto de Idioma (Zero String Mixing)', () => {
  const modulesEs = getModulesData('es');
  const modulesEn = getModulesData('en');

  // Marcadores exclusivos de inglés no deben aparecer en ES
  const enOnlyPhrases = [
    'Strategic Alignment and Andragogical Contract',
    'The Copied Dictionary Crisis',
    'Job Profile Engineering & Objective Grade Matrix',
    'Frequency Weighting & Descending Correction',
    '360° Multi-Source Feedback & Bias Neutralization',
    'Capstone Studio: Comprehensive 360° Evaluation Sheet'
  ];

  const jsonEs = JSON.stringify(modulesEs);
  for (const phrase of enOnlyPhrases) {
    assert.ok(!jsonEs.includes(phrase), `El dataset ES contiene frase inglesa no traducida: "${phrase}"`);
  }

  // Marcadores exclusivos de español no deben aparecer en EN
  const esOnlyPhrases = [
    'Alineación Estratégica y Contrato Andragógico',
    'La Crisis del Diccionario Copiado y la Evaluación Adjetiva',
    'Ingeniería de Perfiles de Puesto & Matriz de Grados Objetivos',
    'Ponderación de Frecuencia & Corrección Descendente',
    'Simulación de Feedback 360° & Neutralización de Sesgos',
    'Capstone Studio: Ficha Integral de Evaluación 360°'
  ];

  const jsonEn = JSON.stringify(modulesEn);
  for (const phrase of esOnlyPhrases) {
    assert.ok(!jsonEn.includes(phrase), `El dataset EN contiene frase española residual: "${phrase}"`);
  }
});

test('i18n - RubricEvaluator Soporte Bilingüe y Validación de Antipatrones en Inglés', () => {
  const evaluator = new RubricEvaluator({ lang: 'en' });

  const modulesEn = getModulesData('en');
  const blueprintEn = modulesEn[5].submissionBlueprint;

  // Blueprint calibrado en inglés debe pasar al 100%
  const resultPass = evaluator.evaluateSubmission({
    definition: blueprintEn.definition,
    levels: blueprintEn.levels,
    bbiQuestions: blueprintEn.bbiQuestions
  });

  assert.equal(resultPass.passed, true, 'El blueprint de referencia en EN debe aprobar la rúbrica');
  assert.equal(resultPass.score, 100, 'El score debe ser 100 en EN');
  assert.equal(resultPass.checklist.length, 4, 'Checklist debe tener 4 criterios evaluados');
  for (const item of resultPass.checklist) {
    assert.equal(item.passed, true, `Criterio ${item.name} debe estar aprobado`);
  }

  // Criterio 1: Rechazo de términos morales en inglés (good, loyal, love)
  const resultMoral = evaluator.evaluateSubmission({
    definition: 'Promote loyal and good behavior when facing difficult company transitions.',
    levels: blueprintEn.levels,
    bbiQuestions: blueprintEn.bbiQuestions
  });
  assert.equal(resultMoral.checklist[0].passed, false, 'Debe fallar Criterio 1 ante moral terms en inglés');

  // Criterio 2: Rechazo de escala adjetival en inglés (communicates well / very well / excellent)
  const badLevelsEn = {
    A: 'Communicates excellent all strategic directives across the enterprise.',
    B: 'Communicates very well with departmental leaders.',
    C: 'Communicates well within immediate work team.',
    D: 'Communicates with difficulty or frequent errors.'
  };
  const resultAdj = evaluator.evaluateSubmission({
    definition: blueprintEn.definition,
    levels: badLevelsEn,
    bbiQuestions: blueprintEn.bbiQuestions
  });
  assert.equal(resultAdj.checklist[1].passed, false, 'Debe fallar Criterio 2 ante adjetivos intensificadores en inglés');
});

test('i18n - CourseRouter Cambio Dinámico de Idioma y Renderizado Seguro', () => {
  const store = new CourseStore();
  const router = new CourseRouter({ store, lang: 'es' });

  assert.equal(router.currentLanguage, 'es');
  assert.equal(router.modules[0].title, 'Alineación Estratégica y Contrato Andragógico');
  assert.equal(router.theoryData['mod-0-theory'].title, 'El Modelo Integral de Recursos Humanos por Competencias');

  // Cambio a inglés
  router.setLanguage('en');
  assert.equal(router.currentLanguage, 'en');
  assert.equal(router.modules[0].title, 'Strategic Alignment and Andragogical Contract');
  assert.equal(router.theoryData['mod-0-theory'].title, 'The Comprehensive Competency-Based Human Resources Model');

  // Retorno a español
  router.setLanguage('es');
  assert.equal(router.currentLanguage, 'es');
  assert.equal(router.modules[0].title, 'Alineación Estratégica y Contrato Andragógico');
});
