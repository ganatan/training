import express from 'express';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

import testJoggAI from '../services/video/test-joggai.js';

import { checkVideo, generateVideo } from '../services/video/video.service.js';
import { checkVideoMock, generateVideoMock } from '../mocks/video/video.mock.js';

dotenv.config();

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';

function safeFilename(name, llm) {
  return `${name.toLowerCase().replace(/\s+/g, '-')}-${llm}`;
}

router.post('/generate/:llm', async (req, res) => {
  const { llm } = req.params;
  const { name } = req.body;

  const avatarId = process.env.JOGGAI_AVATAR_ID || '1025';

  try {
    let result;

    if (useMock) {
      result = await generateVideoMock(name, llm);
      console.log('🟡 AVATAR MOCK -', result.project_id);
    } else {
      result = await generateVideo(name, avatarId, llm);
      console.log('✅ AVATAR réel -', result.project_id);
    }

    const projectId = result.project_id;

    return res.json({
      success: true,
      project_id: projectId,
    });

  } catch (err) {
    console.error('❌ Erreur génération AVATAR :', err.message);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

router.post('/check', async (req, res) => {
  const { llm, project_id } = req.body;

  if (!llm || !project_id) {
    return res.status(400).json({ success: false, error: 'Paramètres manquants' });
  }

  try {
    let fileName = '';
    if (useMock) {
      fileName = await checkVideoMock(llm);
      console.log('🟡 AVATAR MOCK -');
    } else {
      fileName = await checkVideo(project_id, avatarId, videoPath);
      console.log('✅ AVATAR réel -');
    }
    const videoPath = path.join(process.cwd(), 'storage', 'videos', `${fileName}.mp4`);
    const outputDir = path.dirname(videoPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const publicPathVideo = `/storage/videos/${fileName}.mp4`;
    const publicPathPoster = `/storage/videos/${fileName}.png`;
    const fullUrlVideo = `${req.protocol}://${req.get('host')}${publicPathVideo}`;
    const fullUrlPoster = `${req.protocol}://${req.get('host')}${publicPathPoster}`;

    return res.json({
      success: true,
      url: fullUrlVideo,
      poster: fullUrlPoster,
      ready: true,
    });

  } catch (err) {
    console.error('❌ Erreur vérification vidéo :', err.message);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});


// router.get('/:id', async (req, res) => {
//   const { llm } = req.params;
//   const { name } = req.body;

//   const avatarId = process.env.JOGGAI_AVATAR_ID || '1025';
//   const fileName = safeFilename(name, llm);

//   const videoPath = path.join(process.cwd(), 'storage', 'videos', `${fileName}.mp4`);
//   const audioPath = path.join(process.cwd(), 'storage', 'voices', `${fileName}.mp3`);
//   try {
//     if (!fs.existsSync(audioPath)) {
//       return res.status(404).json({ success: false, error: 'Fichier audio introuvable' });
//     }

//     const outputDir = path.dirname(videoPath);
//     if (!fs.existsSync(outputDir)) {
//       fs.mkdirSync(outputDir, { recursive: true });
//     }

//     if (useMock) {
//       await checkVideoMock(videoPath);
//       console.log('🟡 AVATAR MOCK -', videoPath);
//     } else {
//       await checkVideo(text, avatarId, videoPath);
//       console.log('✅ AVATAR réel -', audioPath);
//     }

//     const publicPathVideo = `/storage/videos/${fileName}.mp4`;
//     const publicPathPoster = `/storage/videos/${fileName}.png`;
//     const fullUrlVideo = `${req.protocol}://${req.get('host')}${publicPathVideo}`;
//     const fullUrlPoster = `${req.protocol}://${req.get('host')}${publicPathPoster}`;

//     const dataVideo = {
//       url: fullUrlVideo,
//       poster: fullUrlPoster,
//     };

//     return res.json({
//       success: true,
//       data: dataVideo,
//       mock: useMock,
//     });

//   } catch (err) {
//     console.error('❌ Erreur génération AVATAR :', err.message);

//     return res.status(500).json({
//       success: false,
//       error: err.message,
//     });
//   }
// });

router.get('/health/lva', async (req, res) => {
  const avatarId = process.env.JOGGAI__AVATAR_ID || '1025';
  const result = await testJoggAI(avatarId);
  res.json({ success: result });
});

export default router;
