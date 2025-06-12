import fs from 'fs'
import path from 'path'
import PDFDocument from 'pdfkit'

// Répertoires
const DOCS_DIR = path.resolve('./ai-docs/scripts')
const OUT_DIR = path.resolve('./ai-docs/pdf/details')
const GLOBAL_OUT_FILE = path.resolve('./ai-docs/pdf/documentation-generale.pdf')

// Fonctions utilitaires
const safeText = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

// Création répertoire de sortie
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

// Lecture des fichiers .md
const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.md'))
if (files.length === 0) {
  console.log('⚠️ Aucun fichier .md trouvé.')
  process.exit(0)
}

// Génération PDF global
const globalDoc = new PDFDocument({ margin: 40 })
globalDoc.pipe(fs.createWriteStream(GLOBAL_OUT_FILE))
globalDoc.fontSize(20).fillColor('#333').text('Documentation technique', { align: 'center' }).moveDown()

// Traitement de chaque fichier
files.forEach((file) => {
  const inputPath = path.join(DOCS_DIR, file)
  const outputPath = path.join(OUT_DIR, file.replace('.md', '.pdf'))

  const raw = fs.readFileSync(inputPath, 'utf-8')
  const doc = new PDFDocument({ margin: 40 })
  doc.pipe(fs.createWriteStream(outputPath))

  const blocks = raw.split(/```js|```/)

  // Titre individuel
  const cleanTitle = file.replace('.md', '')
  const title = safeText(cleanTitle)

  // Ajout titre dans global + fichier individuel
  for (const targetDoc of [globalDoc, doc]) {
    targetDoc.addPage()
    targetDoc.fontSize(16).fillColor('#000').text(`Fichier : ${title}`, { align: 'left' }).moveDown()
  }

  // Parcours des blocs
  for (let i = 0; i < blocks.length; i++) {
    const isCode = i % 2 === 1
    const content = blocks[i].trim()
    if (!content) continue

    const plainText = safeText(content)

    for (const targetDoc of [globalDoc, doc]) {
      targetDoc
        .font(isCode ? 'Courier' : 'Helvetica')
        .fontSize(isCode ? 9 : 11)
        .fillColor('#000')
        .text(plainText, { lineGap: 4 })
        .moveDown()
    }
  }

  doc.end()
  console.log(`✅ PDF individuel : ${outputPath}`)
})

// Finalisation PDF global
globalDoc.end()
console.log(`📚 PDF global généré : ${GLOBAL_OUT_FILE}`)

