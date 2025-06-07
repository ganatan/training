import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../../docs');
const OUT_DIR = path.join(__dirname, '../../scripts');

const USE_MOCK = process.env.USE_MOCK === 'true';

function mockExplain(line) {
  if (line.includes('import')) return 'On importe des modules nécessaires au projet.';
  if (line.includes('express')) return 'Initialisation de l\'application Express.';
  if (line.includes('cors')) return 'Activation de CORS pour permettre les requêtes cross-origin.';
  if (line.includes('app.use')) return 'Ajout de middleware à l\'application Express.';
  if (line.includes('listen')) return 'Démarrage du serveur sur le port défini.';
  return 'Traitement logique de l\'application.';
}

function processMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const explanations = [];

  lines.forEach(line => {
    if (line.trim().startsWith('```') || line.trim().startsWith('#') || line.trim() === '') return;
    if (line.trim().startsWith('//')) return;

    const explanation = USE_MOCK
      ? mockExplain(line)
      : `[GPT] Analyse réelle à implémenter ici pour : ${line.trim()}`;

    explanations.push(`<voice name="Senior">\n${explanation}\n</voice>\n`);
  });

  const outFile = path.join(OUT_DIR, path.basename(filePath).replace('.md', '.txt'));
  fs.writeFileSync(outFile, explanations.join('\n'));
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
  files.forEach(file => {
    const fullPath = path.join(DOCS_DIR, file);
    processMarkdownFile(fullPath);
  });

  console.log(`✅ Voice script files generated in: ${OUT_DIR} (USE_MOCK=${USE_MOCK})`);
}

main();


// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const DOCS_DIR = path.join(__dirname, '../../docs');
// const OUT_DIR = path.join(__dirname, '../../scripts');

// function mockExplain(line) {
//   if (line.includes('import')) return 'On importe des modules nécessaires au projet.';
//   if (line.includes('express')) return 'Initialisation de l\'application Express.';
//   if (line.includes('cors')) return 'Activation de CORS pour permettre les requêtes cross-origin.';
//   if (line.includes('app.use')) return 'Ajout de middleware à l\'application Express.';
//   if (line.includes('listen')) return 'Démarrage du serveur sur le port défini.';
//   return 'Traitement logique de l\'application.';
// }

// function processMarkdownFile(filePath) {
//   const content = fs.readFileSync(filePath, 'utf8');
//   const lines = content.split('\n');
//   const explanations = [];

//   lines.forEach(line => {
//     if (line.trim().startsWith('```') || line.trim().startsWith('#') || line.trim() === '') return;
//     if (line.trim().startsWith('//')) return;

//     const explanation = mockExplain(line);
//     explanations.push(`<voice name="Senior">\n${explanation}\n</voice>\n`);
//   });

//   const outFile = path.join(OUT_DIR, path.basename(filePath).replace('.md', '.txt'));
//   fs.writeFileSync(outFile, explanations.join('\n'));
// }

// function main() {
//   if (!fs.existsSync(OUT_DIR)) {
//     fs.mkdirSync(OUT_DIR, { recursive: true });
//   }

//   const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
//   files.forEach(file => {
//     const fullPath = path.join(DOCS_DIR, file);
//     processMarkdownFile(fullPath);
//   });

//   console.log('✅ Voice script files generated in:', OUT_DIR);
// }

// main();
