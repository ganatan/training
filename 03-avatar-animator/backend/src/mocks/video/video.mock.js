import fs from 'fs';
import path from 'path';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function checkVideoMock(outputPath, llm = 'chatgpt') {
  await delay(1000);

  const selectedLLM = ['chatgpt', 'claude'].includes(llm) ? llm : 'chatgpt';

  const basePath = path.resolve('src/mocks/video');
  const baseName = `ridley-scott-${selectedLLM}`;

  const sourceMp4 = path.join(basePath, `${baseName}.mp4`);
  const sourcePng = path.join(basePath, `${baseName}.png`);

  if (!fs.existsSync(sourceMp4)) { throw new Error(`Fichier MP4 introuvable : ${sourceMp4}`); }
  if (!fs.existsSync(sourcePng)) { throw new Error(`Fichier PNG introuvable : ${sourcePng}`); }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  fs.copyFileSync(sourceMp4, outputPath);
  fs.copyFileSync(sourcePng, outputPath.replace(/\.mp4$/, '.png'));

  return outputPath;
}

export async function generateVideoMock(name, llm = 'chatgpt') {
  await delay(1000);

  const project_id = "mock-backend-project-id";
  return {
    success: true,
    project_id: project_id,
  };
}
