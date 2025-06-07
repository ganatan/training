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
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

function mockExplain(line) {
  if (line.includes('import')) return 'On importe des modules nécessaires au projet.';
  if (line.includes('express')) return 'Initialisation de l\'application Express.';
  if (line.includes('cors')) return 'Activation de CORS pour permettre les requêtes cross-origin.';
  if (line.includes('app.use')) return 'Ajout de middleware à l\'application Express.';
  if (line.includes('listen')) return 'Démarrage du serveur sur le port défini.';
  return 'Traitement logique de l\'application.';
}

async function explainWithGPT(line) {
  const prompt = `Explique en une phrase claire et concise le rôle de cette ligne de code Node.js :\n${line}`;
  const payload = {
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.4
  };

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    console.error('❌ OpenAI API error:', res.status, await res.text());
    return '[Erreur GPT]';
  }

  const data = await res.json();
  return data.choices[0].message.content.trim();
}

async function processMarkdownFile(filePath) {
  const filename = path.basename(filePath);
  console.log(`📄 Traitement de : ${filename}`);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const explanations = [];

  let count = 0;
  for (const line of lines) {
    if (line.trim().startsWith('```') || line.trim().startsWith('#') || line.trim() === '') continue;
    if (line.trim().startsWith('//')) continue;

    count++;
    const explanation = USE_MOCK
      ? mockExplain(line)
      : await explainWithGPT(line);

    console.log(`   → Ligne ${count} : ${explanation}`);
    explanations.push(`<voice name="Senior">\n${explanation}\n</voice>\n`);
  }

  const outFile = path.join(OUT_DIR, filename.replace('.md', '.txt'));
  fs.writeFileSync(outFile, explanations.join('\n'));
  console.log(`✅ Fichier généré : ${outFile}\n`);
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  console.log(`📁 Lecture des fichiers depuis : ${DOCS_DIR}`);
  const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
  console.log(`📝 ${files.length} fichier(s) à traiter (USE_MOCK=${USE_MOCK})\n`);

  for (const file of files) {
    const fullPath = path.join(DOCS_DIR, file);
    await processMarkdownFile(fullPath);
  }

  console.log(`🏁 Terminé. Fichiers disponibles dans : ${OUT_DIR}`);
}

main();

// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const DOCS_DIR = path.join(__dirname, '../../docs');
// const OUT_DIR = path.join(__dirname, '../../scripts');

// const USE_MOCK = process.env.USE_MOCK === 'true';
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// function mockExplain(line) {
//   if (line.includes('import')) return 'On importe des modules nécessaires au projet.';
//   if (line.includes('express')) return 'Initialisation de l\'application Express.';
//   if (line.includes('cors')) return 'Activation de CORS pour permettre les requêtes cross-origin.';
//   if (line.includes('app.use')) return 'Ajout de middleware à l\'application Express.';
//   if (line.includes('listen')) return 'Démarrage du serveur sur le port défini.';
//   return 'Traitement logique de l\'application.';
// }

// async function explainWithGPT(line) {
//   const prompt = `Explique en une phrase claire et concise le rôle de cette ligne de code Node.js :\n${line}`;
//   const payload = {
//     model: 'gpt-4',
//     messages: [{ role: 'user', content: prompt }],
//     temperature: 0.4
//   };

//   const res = await fetch('https://api.openai.com/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${OPENAI_API_KEY}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(payload)
//   });

//   if (!res.ok) {
//     console.error('❌ OpenAI API error:', res.status, await res.text());
//     return '[Erreur GPT]';
//   }

//   const data = await res.json();
//   return data.choices[0].message.content.trim();
// }

// async function processMarkdownFile(filePath) {
//   const content = fs.readFileSync(filePath, 'utf8');
//   const lines = content.split('\n');
//   const explanations = [];

//   for (const line of lines) {
//     if (line.trim().startsWith('```') || line.trim().startsWith('#') || line.trim() === '') continue;
//     if (line.trim().startsWith('//')) continue;

//     const explanation = USE_MOCK
//       ? mockExplain(line)
//       : await explainWithGPT(line);

//     explanations.push(`<voice name="Senior">\n${explanation}\n</voice>\n`);
//   }

//   const outFile = path.join(OUT_DIR, path.basename(filePath).replace('.md', '.txt'));
//   fs.writeFileSync(outFile, explanations.join('\n'));
// }

// async function main() {
//   if (!fs.existsSync(OUT_DIR)) {
//     fs.mkdirSync(OUT_DIR, { recursive: true });
//   }

//   const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
//   for (const file of files) {
//     const fullPath = path.join(DOCS_DIR, file);
//     await processMarkdownFile(fullPath);
//   }

//   console.log(`✅ Voice scripts generated in: ${OUT_DIR} (USE_MOCK=${USE_MOCK})`);
// }

// main();
