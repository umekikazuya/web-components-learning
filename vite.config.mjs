import { readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

function collectHtmlFiles(directory) {
  const entries = [];

  for (const name of readdirSync(directory)) {
    const fullPath = join(directory, name);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      entries.push(...collectHtmlFiles(fullPath));
      continue;
    }

    if (name.endsWith('.html')) {
      entries.push(fullPath);
    }
  }

  return entries;
}

const rootDirectory = resolve('.');
const htmlFiles = collectHtmlFiles(resolve(rootDirectory, 'examples'));

const input = Object.fromEntries(
  htmlFiles.map((filePath) => {
    const key = relative(rootDirectory, filePath)
      .replaceAll('\\', '/')
      .replace(/\.html$/, '');

    return [key, filePath];
  }),
);

export default {
  appType: 'mpa',
  server: {
    open: '/examples/index.html',
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input,
    },
  },
};
