import express from 'express';

import testJoggAI from '../services/video/test-joggai.js';

const router = express.Router();

router.get('/health/lva', async (req, res) => {
  const avatarId = process.env.JOGGAI__AVATAR_ID || '2222';
  const result = await testJoggAI(avatarId);
  res.json({ success: result });
});

export default router;
