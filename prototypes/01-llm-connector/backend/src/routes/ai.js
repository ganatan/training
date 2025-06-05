import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import * as chatgptMock from '../mock/llm/chatgpt.mock.js';
import * as claudeMock from '../mock/llm/claude.mock.js';

import * as chatgptReal from '../services/llm/chatgpt.service.js';
import * as claudeReal from '../services/llm/claude.service.js';

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';

const providers = {
  chatgpt: {
    mock: chatgptMock.reply,
    real: chatgptReal.reply,
  },
  claude: {
    mock: claudeMock.reply,
    real: claudeReal.reply,
  },
};

router.post('/:type/:llm', async (req, res) => {
  const { type, llm } = req.params;
  const input = req.body;
  const provider = providers[llm];

  if (!provider) {
    return res.json({ success: false, llm: llm, data: 'unknown-provider' });
  }

  try {
    const reply = useMock
      ? await provider.mock(type, input)
      : await provider.real(type, input);

    return res.json({
      success: true,
      llm: llm,
      data: reply || '',
    });

  } catch (err) {
    const message = err.message.toLowerCase();
    const isUnauthorized = message.includes('unauthorized') || message.includes('401');

    return res.json({
      success: false,
      llm: llm,
      data: isUnauthorized ? 'unauthorized API KEY' : 'error',
    });
  }
});

export default router;
