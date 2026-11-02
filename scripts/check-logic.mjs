// The two pieces of real logic on the site: the office clock, and a form that may never fake a success.
import assert from 'node:assert/strict';
import { officeStatus } from '../src/lib/hours.ts';
import { fieldError, serviceFromUrl, submitTo } from '../src/lib/form-logic.ts';

// All times are San Antonio in standard time, UTC-6.
const at = (iso) => officeStatus(new Date(`${iso}-06:00`));
assert.equal(at('2026-11-04T10:00'), 'Open now, until 6:00 p.m. Central');
assert.equal(at('2026-11-02T07:00'), 'Opens today at 8:30 a.m. Central');
assert.equal(at('2026-11-03T19:00'), 'Back tomorrow at 8:30 a.m. Central');
assert.equal(at('2026-11-06T19:00'), 'Back Monday at 8:30 a.m. Central');
assert.equal(at('2026-11-07T12:00'), 'Back Monday at 8:30 a.m. Central');
assert.equal(officeStatus(new Date('2026-11-04T10:00-06:00'), 'es'), 'Abierto ahora, hasta las 6:00 p.m., hora del centro');

let calls = 0;
const send = (answer) => async () => {
  calls++;
  if (answer === 'throw') throw new Error('offline');
  return { ok: answer };
};
assert.equal(await submitTo('', new FormData(), send(true)), 'pending');
assert.equal(calls, 0, 'with no endpoint nothing is sent');
assert.equal(await submitTo('https://x.test', new FormData(), send(false)), 'failure');
assert.equal(await submitTo('https://x.test', new FormData(), send('throw')), 'failure');
assert.equal(await submitTo('https://x.test', new FormData(), send(true)), 'success');

assert.ok(fieldError('phone', '210-982'));
assert.equal(fieldError('phone', '(210) 982-2312'), '');
assert.ok(fieldError('email', 'nobody@'));
assert.equal(fieldError('email', 'name@example.com'), '');
assert.ok(fieldError('name', '   '));
assert.match(fieldError('phone', '210', 'es'), /teléfono/);
assert.equal(fieldError('notes', ''), '');
assert.equal(serviceFromUrl('?service=carpet', ['carpet']), 'carpet');
assert.equal(serviceFromUrl('?service=<script>', ['carpet']), '');
console.log('logic checks pass');
