import express from 'express';
import fs from 'fs';
import path from 'path';

import testElevenLabsAPI from '../services/voice/test-elevenlabs-api.js';
import generateVoice from '../services/voice/voice.service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name } = req.body;

  const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';

  const fileName = name;
  const filePath = path.join(process.cwd(), 'storage', 'voices', `${fileName}.mp3`);
  const outputDir = path.dirname(filePath);

  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    await generateVoice('Test de voix avec Eleven', voiceId, filePath);

    console.log('✅ Test TTS réussi - fichier créé :', filePath);

    return {
      success: true,
      file: filePath,
      voiceId,
    };

  } catch (err) {
    console.error('❌ Échec génération fichier :' + err.message);

    return {
      success: false,
      error: err.message,
    };
  }



  // try {

  //   const replyFn = getProvider(llm);
  //   const reply = await replyFn(req.body);

  //   if (!name || typeof reply !== 'string') {
  //     return res.json({ success: false, llm: llm, data: 'invalid-input' });
  //   }

  //   const fileName = safeFilename(name, llm);
  //   const voiceId = process.env.ELEVENLABS_VOICE_ID || 'default';
  //   const audioUrl = await generateSpeech(reply, voiceId, `${fileName}.mp3`);

  //   return res.json({ success: true, llm: llm, data: reply, audioUrl: audioUrl });

  // } catch (err) {
  //   const msg = err.message.toLowerCase();
  //   const unauthorized = msg.includes('unauthorized') || msg.includes('401');

  //   return res.json({ success: false, llm: llm, data: unauthorized ? 'unauthorized API KEY' : msg });
  // }
  return { aaaa: 1111 };
});

router.get('/health/tts', async (req, res) => {
  const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
  const result = await testElevenLabsAPI(voiceId);
  res.json({ success: result });
});

export default router;
