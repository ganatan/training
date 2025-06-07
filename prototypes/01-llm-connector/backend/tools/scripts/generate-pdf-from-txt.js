import markdownpdf from 'markdown-pdf';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '../../scripts');
const CSS_PATH = path.join(__dirname, 'style.css');

const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const input = path.join(SOURCE_DIR, file);
  const output = input.replace(/\.md$/, '.pdf');

  markdownpdf({ cssPath: CSS_PATH })
    .from(input)
    .to(output, () => {
      console.log(`📄 PDF généré : ${output}`);
    });
});
