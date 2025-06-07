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

function mockExplainMarkdown(line) {
  return `\`\`\`js\n${line.trim()}\n\`\`\`\n**Exemple pédagogique.**\nCeci est une explication simulée en markdown.`;
}

async function explainWithGPTMarkdown(line, index) {
  const prompt = `
Tu es un expert Node.js pédagogue. Explique la ligne suivante dans un style clair, fluide et humain, sans jargon inutile. 
Utilise le format markdown suivant :

\`\`\`js
<code ici>
\`\`\`

**<titre explicatif en gras>**  
<explication claire et concise>

Voici la ligne :
${line}
`;

  const payload = {
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.4
  };

  console.log(`🔄 Appel OpenAI API pour la ligne ${index + 1}...`);

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    console.error(`❌ Erreur OpenAI (ligne ${index + 1}):`, res.status, await res.text());
    return '[Erreur GPT]';
  }

  const data = await res.json();
  const result = data.choices[0].message.content.trim();

  console.log(`✅ Réponse reçue pour la ligne ${index + 1}`);
  return result;
}

async function processMarkdownFile(filePath) {
  const filename = path.basename(filePath);
  console.log(`📄 Traitement du fichier : ${filename}`);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const explanations = [];

  let count = 0;
  for (const [index, line] of lines.entries()) {
    if (line.trim().startsWith('```') || line.trim().startsWith('#') || line.trim() === '') continue;
    if (line.trim().startsWith('//')) continue;

    count++;
    console.log(`--- LIGNE ${count} ---`);
    console.log(`Code : ${line.trim()}`);

    const explanation = USE_MOCK
      ? mockExplainMarkdown(line)
      : await explainWithGPTMarkdown(line, index);

    explanations.push(explanation + '\n');
  }

  const outFile = path.join(OUT_DIR, filename.replace('.md', '.txt'));
  fs.writeFileSync(outFile, explanations.join('\n'));

  console.log(`✅ Fichier généré : ${outFile}`);
  console.log('------------------------------------------\n');
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    console.log(`📁 Création du dossier de sortie : ${OUT_DIR}`);
  }

  console.log(`📂 Lecture des fichiers depuis : ${DOCS_DIR}`);
  const files = fs.readdirSync(DOCS_DIR).filter(file => file.endsWith('.md'));
  console.log(`📝 ${files.length} fichier(s) à traiter (USE_MOCK=${USE_MOCK})\n`);

  for (const file of files) {
    const fullPath = path.join(DOCS_DIR, file);
    await processMarkdownFile(fullPath);
  }

  console.log('🏁 Génération terminée.');
  console.log(`📁 Résultats disponibles dans : ${OUT_DIR}`);
}

main();
