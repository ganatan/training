import express from 'express';

import testElevenLabsAPI from '../services/voice/testElevenLabsAPI.js';

const router = express.Router();

router.get('/health/tts', async (req, res) => {
  const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
  const result = await testElevenLabsAPI(voiceId);
  res.json({ success: result });
});

export default router;
