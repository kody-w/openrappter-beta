import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { validateManifest } from '../scripts/validate-manifest.mjs';
const m = JSON.parse(readFileSync(new URL('../.ring/manifest.json', import.meta.url)));
test('current beta pointer validates', () => validateManifest(m, 'beta', new Date('2026-08-23T20:00:00Z')));
test('injection and future pointers fail closed', () => {
  assert.throws(() => validateManifest({ ...m, extra: true }, 'beta'));
  assert.throws(() => validateManifest({ ...m, source: { ...m.source, repository: 'evil/repo' } }, 'beta'));
  assert.throws(() => validateManifest({ ...m, promoted_at: '2999-01-01T00:00:00Z' }, 'beta'));
});
test('published pointer requires install URL', () => assert.throws(() => validateManifest({ ...m, status: 'published', reason: null }, 'beta')));
