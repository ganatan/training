import express from 'express';

const router = express.Router();

router.get('/health/lva', async (req, res) => {
  // const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
  // const result = await testElevenLabs(voiceId);
  let result = {aaa:111}
  res.json({ success: result });
});

export default router;
