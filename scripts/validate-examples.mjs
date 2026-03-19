import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const examplesRoot = 'examples';
const scriptPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const sourceAttributePattern = /\bsrc\s*=/i;

function collectHtmlFiles(directory) {
  const files = [];

  for (const name of readdirSync(directory)) {
    const fullPath = join(directory, name);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...collectHtmlFiles(fullPath));
      continue;
    }

    if (name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

const htmlFiles = collectHtmlFiles(examplesRoot);
let validatedInlineScripts = 0;

for (const filePath of htmlFiles) {
  const source = readFileSync(filePath, 'utf8');
  let match;

  while ((match = scriptPattern.exec(source)) !== null) {
    const attributes = match[1] ?? '';
    const script = match[2] ?? '';

    if (sourceAttributePattern.test(attributes)) {
      continue;
    }

    try {
      new Function(script);
      validatedInlineScripts += 1;
    } catch (error) {
      console.error(`Invalid inline script in ${relative('.', filePath)}`);
      throw error;
    }
  }
}

console.log(`Validated ${htmlFiles.length} HTML files and ${validatedInlineScripts} inline scripts.`);
