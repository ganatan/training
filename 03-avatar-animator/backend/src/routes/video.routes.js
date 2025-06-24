import express from 'express';
import dotenv from 'dotenv';

import testJoggAI from '../services/video/test-joggai.js';

import { generateVideo } from '../services/video/video.service.js';
import { getVideoFromProjectId } from '../services/video/video.service.js';

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

  const avatarId = process.env.JOGGAI_AVATAR_ID || '961';
  const voiceId = process.env.JOGGAI_VOICE_ID || 'en-US-ChristopherNeural';

  try {
    let result;

    if (useMock) {
      result = await generateVideoMock(name, llm);
      console.log('🟡 AVATAR MOCK -', result.project_id);
    } else {
      console.log('00000000001:' + name)
      console.log('00000000001:' + avatarId)
      console.log('00000000001:' + voiceId)
      result = await generateVideo({ name, avatarId, voiceId });
      console.log('✅ AVATAR réel -', result.project_id);
    }

    return res.json({
      success: true,
      project_id: result.project_id
    });

  } catch (err) {
    console.error('❌ Erreur génération AVATAR :', err.message);
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

// router.post('/generate/:llm', async (req, res) => {
//   const { llm } = req.params;
//   const { name } = req.body;

//   const avatarId = process.env.JOGGAI_AVATAR_ID || '1025';

//   try {
//     let result;

//     if (useMock) {
//       result = await generateVideoMock(name, llm);
//       console.log('🟡 AVATAR MOCK -', result.project_id);
//     } else {
//       result = await generateVideo(name, avatarId);
//       console.log('✅ AVATAR réel -', result.project_id);
//     }

//     const projectId = result.project_id;

//     return res.json({
//       success: true,
//       project_id: projectId,
//     });

//   } catch (err) {
//     console.error('❌ Erreur génération AVATAR :', err.message);

//     return res.status(500).json({
//       success: false,
//       error: err.message,
//     });
//   }
// });

router.post('/check', async (req, res) => {
  const { llm, project_id, name } = req.body;
  let fileName = safeFilename(name, llm);
  if (!llm || !project_id) {
    return res.status(400).json({ success: false, error: 'Paramètres manquants' });
  }

  try {
    if (useMock) {
      fileName = await checkVideoMock(llm);
      console.log('🟡 AVATAR MOCK -' + fileName);
    } else {
      const result = await getVideoFromProjectId(project_id, fileName, llm);

      if (!result.ready) {
        return res.json({
          success: true,
          url: '',
          poster: '',
          ready: false
        });
      }

      fileName = result.fileName;
      console.log('✅ AVATAR réel -');
    }

    const publicVideo = `/storage/videos/${fileName}.mp4`;
    const publicImage = `/storage/videos/${fileName}.png`;

    const fullUrlVideo = `${req.protocol}://${req.get('host')}${publicVideo}`;
    const fullUrlPoster = `${req.protocol}://${req.get('host')}${publicImage}`;

    return res.json({
      success: true,
      url: fullUrlVideo,
      poster: fullUrlPoster,
      ready: true
    });

  } catch (err) {
    console.error('❌ Erreur vérification vidéo :', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});

router.get('/health/lva', async (req, res) => {
  const avatarId = process.env.JOGGAI__AVATAR_ID || '1025';
  const result = await testJoggAI(avatarId);
  res.json({ success: result });
});

export default router;
