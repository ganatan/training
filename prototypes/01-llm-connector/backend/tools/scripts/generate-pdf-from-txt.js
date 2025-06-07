import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import hljs from 'highlight.js';

const mdFile = path.resolve('./scripts/01 - app.js.md');
const outFile = path.resolve('./scripts/01 - app.js.pdf');

const raw = fs.readFileSync(mdFile, 'utf-8');

const doc = new PDFDocument({ margin: 40 });
doc.pipe(fs.createWriteStream(outFile));

doc.fontSize(20).fillColor('#333').text('Documentation technique', { align: 'center' });
doc.moveDown();

const blocks = raw.split(/```js|```/); 
for (let i = 0; i < blocks.length; i++) {
  const isCode = i % 2 === 1;
  const content = blocks[i].trim();

  if (isCode) {
    const highlighted = hljs.highlight(content, { language: 'javascript' }).value;
    const plain = highlighted.replace(/<[^>]+>/g, ''); 

    doc.font('Courier').fontSize(9).fillColor('black');
    doc.text(plain, { lineGap: 2 });
    doc.moveDown();
  } else {
    doc.font('Helvetica').fontSize(11).fillColor('#444');
    doc.text(content, { lineGap: 4 });
    doc.moveDown();
  }
}

doc.end();
console.log('✅ PDF généré :', outFile);

