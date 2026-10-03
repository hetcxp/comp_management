import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MODULES_DATA } from '../js/data/modules-content.js';
import { THEORY_DATA } from '../js/data/theory-drawers.js';

test('MODULES_DATA - Invariante de 6 módulos y estructura congelada (Frozen)', () => {
  assert.strictEqual(Array.isArray(MODULES_DATA), true);
  assert.strictEqual(MODULES_DATA.length, 6);
  assert.strictEqual(Object.isFrozen(MODULES_DATA), true);

  MODULES_DATA.forEach((mod, idx) => {
    assert.strictEqual(mod.number, idx);
    assert.strictEqual(mod.id, `mod-${idx}`);
    assert.strictEqual(Object.isFrozen(mod), true);
    assert.strictEqual(typeof mod.title, 'string');
    assert.strictEqual(typeof mod.objective, 'string');
  });
});

test('MODULES_DATA - Módulo 0: Contrato Andragógico y 4 Preguntas Clave', () => {
  const mod0 = MODULES_DATA[0];
  assert.ok(mod0.introData);
  assert.strictEqual(mod0.introData.questions.length, 4);
  assert.ok(mod0.introData.pathways);
  assert.ok(mod0.introData.pathways.practiceChoice);
  assert.ok(mod0.introData.pathways.theoryChoice);
});

test('MODULES_DATA - Módulo 1: Caso Superdescuento y Quiebre Cognitivo', () => {
  const mod1 = MODULES_DATA[1];
  assert.ok(mod1.challenge);
  assert.strictEqual(mod1.challenge.choices.length, 3);
  const correctChoice = mod1.challenge.choices.find(c => c.isCorrect);
  assert.ok(correctChoice);
  assert.match(correctChoice.text, /diccionario copiado/i);
  assert.ok(mod1.challenge.jitPill);
});

test('MODULES_DATA - Módulo 2: Perfiles de Puesto y PracticeBuilder', () => {
  const mod2 = MODULES_DATA[2];
  assert.ok(mod2.challenge);
  assert.ok(mod2.practiceBuilder);
  assert.strictEqual(mod2.practiceBuilder.sections.length, 3);
  assert.strictEqual(typeof mod2.practiceBuilder.goldenDefinition, 'string');
});

test('MODULES_DATA - Módulo 3: Frecuencia y SortingActivity', () => {
  const mod3 = MODULES_DATA[3];
  assert.ok(mod3.challenge);
  assert.ok(mod3.sortingActivity);
  assert.strictEqual(mod3.sortingActivity.slots.length, 2);
  assert.strictEqual(mod3.sortingActivity.items.length, 8);
});

test('MODULES_DATA - Módulo 4: Simulación 360° y ChatSimulator', () => {
  const mod4 = MODULES_DATA[4];
  assert.ok(mod4.challenge);
  assert.ok(mod4.chatSimulator);
  assert.strictEqual(mod4.chatSimulator.turns.length, 3);
  mod4.chatSimulator.turns.forEach(t => {
    assert.strictEqual(t.options.length, 3);
    const effective = t.options.filter(o => o.isEffective);
    assert.strictEqual(effective.length, 1);
  });
});

test('MODULES_DATA - Módulo 5: Capstone Studio y Rúbrica Binaria', () => {
  const mod5 = MODULES_DATA[5];
  assert.ok(mod5.capstoneCase);
  assert.strictEqual(mod5.rubricCriteria.length, 4);
  assert.ok(mod5.submissionBlueprint);
  assert.ok(mod5.referenceModel);
});

test('THEORY_DATA - 6 Espinas Teóricas con Citas Seminales Rigurosas', () => {
  const expectedKeys = ['mod-0-theory', 'mod-1-theory', 'mod-2-theory', 'mod-3-theory', 'mod-4-theory', 'mod-5-theory'];
  expectedKeys.forEach(k => {
    const th = THEORY_DATA[k];
    assert.ok(th, `Debe existir ${k}`);
    assert.strictEqual(Object.isFrozen(th), true);
    assert.strictEqual(typeof th.title, 'string');
    assert.strictEqual(typeof th.author, 'string');
    assert.strictEqual(typeof th.citation, 'string');
    assert.strictEqual(typeof th.html, 'string');
    assert.ok(th.html.length > 200);
  });
});

test('MODULES_DATA_EN y THEORY_DATA_EN - Traducciones al inglés completas y congeladas', async () => {
  const { MODULES_DATA_EN, getModulesData } = await import('../js/data/modules-content.js');
  const { THEORY_DATA_EN, getTheoryData } = await import('../js/data/theory-drawers.js');

  // 1. Verificación de getModulesData('en')
  const enModules = getModulesData('en');
  assert.strictEqual(Array.isArray(enModules), true);
  assert.strictEqual(enModules.length, 6);
  assert.strictEqual(Object.isFrozen(enModules), true);
  assert.notStrictEqual(enModules, MODULES_DATA, 'MODULES_DATA_EN debe ser un objeto independiente, no un alias de MODULES_DATA');

  // Módulo 0
  assert.strictEqual(enModules[0].title, 'Strategic Alignment and Andragogical Contract');
  assert.strictEqual(enModules[0].introData.questions.length, 4);
  assert.strictEqual(enModules[0].introData.questions[0].question, 'Why are you here?');

  // Módulo 1
  assert.strictEqual(enModules[1].title, 'The Copied Dictionary Crisis and Adjective-Based Evaluation');
  assert.ok(enModules[1].challenge.choices.find(c => c.isCorrect).text.includes('copied dictionary'));

  // Módulo 2
  assert.strictEqual(enModules[2].title, 'Job Profile Engineering & Objective Grade Matrix');
  assert.ok(enModules[2].practiceBuilder.title.includes('Assembly Workshop'));

  // Módulo 3
  assert.strictEqual(enModules[3].title, 'Frequency Weighting & Descending Correction');
  assert.strictEqual(enModules[3].sortingActivity.items.length, 8);

  // Módulo 4
  assert.strictEqual(enModules[4].title, '360° Multi-Source Feedback & Bias Neutralization');
  assert.strictEqual(enModules[4].chatSimulator.turns.length, 3);

  // Módulo 5
  assert.strictEqual(enModules[5].title, 'Capstone Studio: Comprehensive 360° Evaluation Sheet');
  assert.strictEqual(enModules[5].rubricCriteria.length, 4);

  // 2. Verificación de getTheoryData('en')
  const enTheory = getTheoryData('en');
  assert.strictEqual(typeof enTheory, 'object');
  assert.strictEqual(Object.isFrozen(enTheory), true);
  assert.notStrictEqual(enTheory, THEORY_DATA, 'THEORY_DATA_EN debe ser independiente');

  const expectedTheoryKeys = ['mod-0-theory', 'mod-1-theory', 'mod-2-theory', 'mod-3-theory', 'mod-4-theory', 'mod-5-theory'];
  expectedTheoryKeys.forEach(k => {
    const th = enTheory[k];
    assert.ok(th, `Debe existir ${k} en inglés`);
    assert.strictEqual(Object.isFrozen(th), true);
    assert.strictEqual(typeof th.title, 'string');
    assert.ok(th.html.length > 200);
    assert.ok(!th.html.includes('¿Por qué'), `No debe contener texto en español residual en ${k}`);
  });
});
