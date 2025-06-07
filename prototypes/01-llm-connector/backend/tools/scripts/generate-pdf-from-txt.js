import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../../scripts');
const OUTPUT_DIR = path.join(__dirname, '../../pdf');
const LOGO_PATH = path.join(__dirname, '../../assets/logo.png');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function addCoverPage(doc, title) {
  if (fs.existsSync(LOGO_PATH)) {
    doc.image(LOGO_PATH, { fit: [100, 100], align: 'center' });
    doc.moveDown(2);
  }

  doc.fontSize(26).fillColor('black').text(title, { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).fillColor('gray').text('Documentation générée automatiquement à partir de fichiers markdown', { align: 'center' });
  doc.addPage();
}

function addTableOfContents(doc, toc) {
  doc.fontSize(20).fillColor('black').text('Table des matières', { underline: true });
  doc.moveDown();
  toc.forEach((item, i) => {
    doc.fontSize(12).fillColor('black').text(`${i + 1}. ${item}`, { indent: 20 });
  });
  doc.addPage();
}

function highlightCode(doc, code) {
  const keywords = ['const', 'let', 'import', 'from', 'function', 'return', 'if', 'else', 'await'];
  const lines = code.split('\n');
  lines.forEach(line => {
    const words = line.split(' ');
    let formatted = '';
    words.forEach(word => {
      if (keywords.includes(word.trim())) {
        formatted += `${word} `;
      } else {
        formatted += `${word} `;
      }
    });
    doc.fontSize(10).fillColor('#333').text(formatted.trim(), { indent: 20 });
  });
  doc.moveDown();
}

function addFullCodeBlock(doc, content) {
  const blocks = content.match(/```js([\s\S]*?)```/g);
  if (blocks) {
    blocks.forEach(block => {
      const code = block.replace(/```js|```/g, '').trim();
      doc.fontSize(11).fillColor('#000080').text('Code complet :', { underline: true });
      doc.moveDown(0.5);
      highlightCode(doc, code);
    });
  }
}

function addMarkdownFormatted(doc, content) {
  const sections = content.split('```js').slice(1);
  sections.forEach(section => {
    const [code, rest] = section.split('```');
    doc.fontSize(11).fillColor('#000080').text('Ligne analysée :', { underline: true });
    highlightCode(doc, code.trim());

    const parts = rest.trim().split('\n');
    for (const line of parts) {
      if (line.startsWith('**') && line.endsWith('**')) {
        doc.fontSize(12).fillColor('black').text(line.replaceAll('**', '').trim(), { underline: true });
      } else {
        doc.fontSize(11).fillColor('#444').text(line.trim(), {
          width: 480,
          align: 'left',
          indent: 20
        });
      }
    }

    doc.moveDown();
  });
}

function addScriptContent(doc, filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const title = path.basename(filePath, '.txt');

  doc.addPage();
  doc.fontSize(16).fillColor('black').text(title, { underline: true });
  doc.moveDown();

  addFullCodeBlock(doc, content);
  doc.addPage();
  addMarkdownFormatted(doc, content);
}

function main() {
  const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.txt'));
  if (files.length === 0) {
    console.log('⚠️ Aucun fichier .txt trouvé dans le dossier scripts/');
    return;
  }

  const outputPath = path.join(OUTPUT_DIR, 'documentation.pdf');
  const doc = new PDFDocument({ margin: 40 });
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  addCoverPage(doc, 'Documentation Tutoriel Angular + IA');
  const toc = files.map(f => path.basename(f, '.txt'));
  addTableOfContents(doc, toc);

  for (const file of files) {
    const filePath = path.join(INPUT_DIR, file);
    addScriptContent(doc, filePath);
  }

  doc.end();
  console.log(`✅ PDF enrichi généré : ${outputPath}`);
}

main();



// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import PDFDocument from 'pdfkit';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const INPUT_DIR = path.join(__dirname, '../../scripts');
// const OUTPUT_DIR = path.join(__dirname, '../../pdf');

// if (!fs.existsSync(OUTPUT_DIR)) {
//   fs.mkdirSync(OUTPUT_DIR, { recursive: true });
// }

// function generatePDF(inputPath, outputPath) {
//   const content = fs.readFileSync(inputPath, 'utf8');
//   const doc = new PDFDocument({ margin: 40 });

//   const stream = fs.createWriteStream(outputPath);
//   doc.pipe(stream);

//   // Titre principal = nom du fichier
//   const title = path.basename(inputPath, '.txt');
//   doc.fontSize(18).fillColor('black').text(title, { underline: true });
//   doc.moveDown();

//   // Traitement ligne par ligne
//   content.split('\n').forEach(line => {
//     const isVoice = line.includes('<voice name="Senior">') || line.includes('<voice name="Junior">');
//     const speaker = line.includes('Senior') ? 'Senior' : (line.includes('Junior') ? 'Junior' : null);
//     const cleanedLine = line.replace(/<[^>]+>/g, '').trim();

//     if (cleanedLine === '') {
//       doc.moveDown(0.5);
//     } else if (isVoice && speaker === 'Senior') {
//       doc.fontSize(12).fillColor('black').text(`🧓 Senior : ${cleanedLine}`);
//     } else if (isVoice && speaker === 'Junior') {
//       doc.fontSize(12).fillColor('blue').text(`👦 Junior : ${cleanedLine}`);
//     } else {
//       doc.fontSize(10).fillColor('gray').text(cleanedLine);
//     }
//   });

//   doc.end();
//   console.log(`✅ PDF généré : ${outputPath}`);
// }

// function main() {
//   const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.txt'));
//   if (files.length === 0) {
//     console.log('⚠️ Aucun fichier .txt trouvé dans le dossier scripts/');
//     return;
//   }

//   files.forEach(file => {
//     const inputPath = path.join(INPUT_DIR, file);
//     const outputPath = path.join(OUTPUT_DIR, file.replace('.txt', '.pdf'));
//     generatePDF(inputPath, outputPath);
//   });

//   console.log(`🏁 ${files.length} fichier(s) PDF généré(s) dans ${OUTPUT_DIR}`);
// }

// main();
