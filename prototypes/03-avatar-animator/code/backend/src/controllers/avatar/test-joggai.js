import fs from 'fs';
import path from 'path';
import generateAvatar from './avatar.service.js';

async function testJoggAI(avatarId) {
  const fileName = 'test-joggai';
  const voicePath = path.join(process.cwd(), 'storage', 'voices', 'test-elevenlabs.mp3');
  const imagePath = path.join(process.cwd(), 'assets', 'portraits', 'avatar-chatgpt.jpg');
  const outputPath = path.join(process.cwd(), 'storage', 'videos', `${fileName}.mp4`);
  const outputDir = path.dirname(outputPath);

  try {
    if (!fs.existsSync(voicePath)) throw new Error('Fichier audio manquant');
    if (!fs.existsSync(imagePath)) throw new Error('Fichier portrait manquant');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    await generateAvatar({
      audioPath: voicePath,
      imagePath,
      avatarId,
      outputPath
    });

    console.log('✅ Test JoggAI réussi - vidéo créée :', outputPath);

    return {
      success: true,
      file: outputPath,
      avatarId,
    };

  } catch (err) {
    console.error('❌ Échec du test JoggAI :', err.message);

    return {
      success: false,
      error: err.message,
    };
  }
}

export default testJoggAI;
