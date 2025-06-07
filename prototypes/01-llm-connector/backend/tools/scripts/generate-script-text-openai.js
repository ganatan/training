import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../../docs');
const OUT_DIR = path.join(__dirname, '../../scripts');

const USE_MOCK = process.env.USE_MOCK === 'true';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

function mockExplainBlock(code) {
  console.log('🧪 Mode mock activé : génération d\'une réponse simulée');
  return `# Fichier : app.js

\`\`\`js
${code}
\`\`\`

## Explication

Ce fichier initialise un serveur Express avec gestion de routes et configuration d’API.
Il permet de connecter un frontend Angular avec des services IA comme ChatGPT ou Claude.`;
}

async function explainWithGPTBlock(code) {
  console.log('🚀 Envoi à OpenAI pour explication...');

  const prompt = `Tu es un expert pédagogue. Génère un fichier Markdown très lisible pour un tutoriel.
Voici un bloc de code Node.js :

${code}

Tu dois :
- afficher le code (avec \`\`\`js)
- lister les explications sous chaque bloc ou section
- structurer avec des titres si possible
- ne pas expliquer ligne par ligne mais plutôt par concept ou bloc fonctionnel
- le ton est technique, direct, précis

Génère uniquement le contenu Markdown.`;

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
    console.error('❌ Erreur OpenAI :', res.status, await res.text());
    return '[Erreur GPT]';
  }

  const data = await res.json();
  console.log('✅ Réponse OpenAI reçue');
  return data.choices[0].message.content.trim();
}

async function processMarkdownFile(filePath) {
  const fileName = path.basename(filePath);
  console.log(`\n📂 Traitement du fichier : ${fileName}`);
  const content = fs.readFileSync(filePath, 'utf8');

  let codeBlock = '';
  const match = content.match(/```js\s*([\s\S]*?)\s*```/);
  if (match) {
    codeBlock = match[1].trim();
    console.log(`🔎 Bloc \`\`\`js\`\`\` extrait (${codeBlock.length} caractères)`);
  } else {
    console.warn('⚠️ Aucun bloc ```js``` trouvé. Utilisation du contenu brut.');
    codeBlock = content.trim();
  }

  const explanation = USE_MOCK
    ? mockExplainBlock(codeBlock)
    : await explainWithGPTBlock(codeBlock);

  const outFile = path.join(OUT_DIR, fileName);
  fs.writeFileSync(outFile, explanation);
  console.log(`💾 Fichier Markdown généré : ${outFile}`);
}

async function main() {
  console.log(`📁 Source : ${DOCS_DIR}`);
  console.log(`📁 Destination : ${OUT_DIR}`);
  console.log(`⚙️ Mode : ${USE_MOCK ? 'MOCK' : 'REAL GPT'}\n`);

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    console.log('📁 Dossier de sortie créé.');
  }

  const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
  console.log(`📄 Fichiers détectés : ${files.length}`);

  for (const file of files) {
    await processMarkdownFile(path.join(DOCS_DIR, file));
  }

  console.log('\n🏁 Tous les fichiers ont été traités.');
}

main();



// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';
// import fetch from 'node-fetch';

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const DOCS_DIR = path.join(__dirname, '../../docs');
// const OUT_DIR = path.join(__dirname, '../../scripts');
// const USE_MOCK = process.env.USE_MOCK === 'true';
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// function mockExplainBlock(code) {
//   return 'Ce bloc de code initialise une application Express, configure les middlewares CORS et JSON, monte des routes, et démarre un serveur sur un port donné.';
// }

// async function explainWithGPTBlock(code) {
//   const prompt = `Explique de manière concise et pédagogique ce que fait ce bloc de code Node.js :\n\n${code}`;
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
//   console.log(`🔍 Analyse du fichier : ${path.basename(filePath)}`);
//   const content = fs.readFileSync(filePath, 'utf8');

//   let codeBlock = '';
//   const match = content.match(/```js\s*([\s\S]*?)\s*```/);
//   if (match) {
//     codeBlock = match[1].trim();
//   } else {
//     console.warn('⚠️ Aucun bloc ```js trouvé, prise du contenu brut');
//     codeBlock = content.trim();
//   }

//   const explanation = USE_MOCK
//     ? mockExplainBlock(codeBlock)
//     : await explainWithGPTBlock(codeBlock);

//   const outMarkdown = `# Explication du fichier ${path.basename(filePath)}\n\n` +
//                       '```js\n' +
//                       codeBlock + '\n' +
//                       '```\n\n' +
//                       explanation + '\n';

//   const outFile = path.join(OUT_DIR, path.basename(filePath).replace('.md', '.md'));
//   fs.writeFileSync(outFile, outMarkdown);
//   console.log(`✅ Fichier généré : ${outFile}`);
// }

// async function main() {
//   if (!fs.existsSync(OUT_DIR)) {
//     fs.mkdirSync(OUT_DIR, { recursive: true });
//   }

//   const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
//   for (const file of files) {
//     await processMarkdownFile(path.join(DOCS_DIR, file));
//   }

//   console.log(`🏁 Terminé (USE_MOCK=${USE_MOCK})`);
// }

// main();
