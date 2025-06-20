import fs from 'fs';
import path from 'path';

export default async function voiceMock(text, voiceId, outputPath, llm = 'chatgpt') {
  console.log(`🟡 [MOCK] Synthèse vocale simulée pour ${llm}`);

  const validLLMs = ['chatgpt', 'claude'];
  const selectedLLM = validLLMs.includes(llm) ? llm : 'chatgpt';

  // Fichier de base à copier en fonction du LLM
  const mockSourceFile = path.resolve(`src/mock/voice/ridley-scott-${selectedLLM}.mp3`);

  if (!fs.existsSync(mockSourceFile)) {
    throw new Error(`Fichier mock introuvable : ${mockSourceFile}`);
  }

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.copyFileSync(mockSourceFile, outputPath);

  return outputPath;
}


// export default async function voiceMock(text, voiceId, outputPath) {
//   console.log('🟡 [MOCK] Synthèse vocale simulée');
//   return outputPath || `/mock/voices/fake.mp3`;
// }