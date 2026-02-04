import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

// GitHub Pages serves 404.html for unknown paths.
// For SPAs (React Router BrowserRouter), we copy the built index.html to 404.html
// so routes like /privacy and /terms work on refresh/direct access.

const distDir = process.argv[2] || 'dist';
const src = path.join(distDir, 'index.html');
const dst = path.join(distDir, '404.html');

const html = await readFile(src, 'utf8');
await writeFile(dst, html, 'utf8');
console.log(`Copied ${src} -> ${dst}`);
