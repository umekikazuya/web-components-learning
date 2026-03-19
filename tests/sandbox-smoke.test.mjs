import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'examples/05-forms-and-element-internals/01-associated-control/index.html',
  'examples/05-forms-and-element-internals/05-rating-input/index.html',
  'examples/06-advanced-shadow-dom/01-constructable-sheet/index.html',
  'examples/06-advanced-shadow-dom/04-declarative-shadow-dom/index.html',
  'examples/07-ui-patterns/01-dialog-basics/index.html',
  'examples/07-ui-patterns/03-popover-basics/index.html',
  'examples/07-ui-patterns/05-tabs/index.html',
  'examples/07-ui-patterns/06-menu-button/index.html',
  'docs/compatibility.md',
  'docs/testing.md',
];

test('expanded tracks and docs exist', () => {
  for (const filePath of requiredFiles) {
    assert.equal(existsSync(filePath), true, `${filePath} should exist`);
  }
});

test('forms track covers ElementInternals flow', () => {
  const associated = readFileSync('examples/05-forms-and-element-internals/01-associated-control/index.html', 'utf8');
  const validation = readFileSync('examples/05-forms-and-element-internals/03-validation/index.html', 'utf8');
  const disabled = readFileSync('examples/05-forms-and-element-internals/04-disabled-callback/index.html', 'utf8');

  assert.match(associated, /formAssociated\s*=\s*true/);
  assert.match(associated, /attachInternals/);
  assert.match(validation, /setValidity/);
  assert.match(disabled, /formDisabledCallback/);
});

test('advanced shadow track covers modern shadow APIs', () => {
  const constructable = readFileSync('examples/06-advanced-shadow-dom/01-constructable-sheet/index.html', 'utf8');
  const updating = readFileSync('examples/06-advanced-shadow-dom/03-updating-sheet/index.html', 'utf8');
  const declarative = readFileSync('examples/06-advanced-shadow-dom/04-declarative-shadow-dom/index.html', 'utf8');

  assert.match(constructable, /adoptedStyleSheets/);
  assert.match(updating, /replaceSync/);
  assert.match(declarative, /shadowrootmode/);
});

test('ui patterns track covers dialog popover tabs and menu button', () => {
  const dialog = readFileSync('examples/07-ui-patterns/01-dialog-basics/index.html', 'utf8');
  const popover = readFileSync('examples/07-ui-patterns/03-popover-basics/index.html', 'utf8');
  const tabs = readFileSync('examples/07-ui-patterns/05-tabs/index.html', 'utf8');
  const menuButton = readFileSync('examples/07-ui-patterns/06-menu-button/index.html', 'utf8');

  assert.match(dialog, /showModal/);
  assert.match(popover, /popover/);
  assert.match(tabs, /role="tablist"/);
  assert.match(menuButton, /aria-haspopup="menu"/);
  assert.match(menuButton, /role="menuitem"/);
});

test('support docs mention compatibility and testing workflow', () => {
  const compatibility = readFileSync('docs/compatibility.md', 'utf8');
  const testing = readFileSync('docs/testing.md', 'utf8');

  assert.match(compatibility, /ElementInternals/);
  assert.match(compatibility, /Declarative Shadow DOM/);
  assert.match(testing, /npm test/);
  assert.match(testing, /npm run build/);
});
