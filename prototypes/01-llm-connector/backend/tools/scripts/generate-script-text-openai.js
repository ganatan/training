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
  return 'Ce bloc de code initialise une application Express, configure les middlewares CORS et JSON, monte des routes, et démarre un serveur sur un port donné.';
}

async function explainWithGPTBlock(code) {
  const prompt = `Explique de manière concise et pédagogique ce que fait ce bloc de code Node.js :\n\n${code}`;
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
  console.log(`🔍 Analyse du fichier : ${path.basename(filePath)}`);
  const content = fs.readFileSync(filePath, 'utf8');

  let codeBlock = '';
  const match = content.match(/```js\s*([\s\S]*?)\s*```/);
  if (match) {
    codeBlock = match[1].trim();
  } else {
    console.warn('⚠️ Aucun bloc ```js trouvé, prise du contenu brut');
    codeBlock = content.trim();
  }

  const explanation = USE_MOCK
    ? mockExplainBlock(codeBlock)
    : await explainWithGPTBlock(codeBlock);

  const outMarkdown = `# Explication du fichier ${path.basename(filePath)}\n\n` +
                      '```js\n' +
                      codeBlock + '\n' +
                      '```\n\n' +
                      explanation + '\n';

  const outFile = path.join(OUT_DIR, path.basename(filePath).replace('.md', '.md'));
  fs.writeFileSync(outFile, outMarkdown);
  console.log(`✅ Fichier généré : ${outFile}`);
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
  for (const file of files) {
    await processMarkdownFile(path.join(DOCS_DIR, file));
  }

  console.log(`🏁 Terminé (USE_MOCK=${USE_MOCK})`);
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
//   const match = content.match(/```js\\s*([\\s\\S]*?)\\s*```/);
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
