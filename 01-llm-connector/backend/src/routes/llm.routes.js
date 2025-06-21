import express from 'express';
import dotenv from 'dotenv';

import chatgptMock from '../mock/llm/chatgpt.mock.js';
import claudeMock from '../mock/llm/claude.mock.js';
import chatgptService from '../services/llm/chatgpt.service.js';
import claudeService from '../services/llm/claude.service.js';

dotenv.config();

const router = express.Router();
const useMock = process.env.USE_MOCK === 'true';

function isUnauthorizedError(message) {
  return message.includes('unauthorized') || message.includes('401');
}

function getProvider(llm) {
  const providers = {
    chatgpt: {
      mock: chatgptMock,
      real: chatgptService,
    },
    claude: {
      mock: claudeMock,
      real: claudeService,
    },
  };

  return providers[llm] || null;
}

async function callLLM(type, llm, data) {
  try {
    const provider = getProvider(llm);
    if (!provider) {
      return { error: 'unknown-provider' };
    }

    const handlerFunction = useMock ? provider.mock : provider.real;
    const result = await handlerFunction(type, data);

    return { data: result };

  } catch (err) {
    console.error('❌ callLLM error:', err);

    return { error: 'internal-error' };
  }
}

router.post('/:type/:llm', async (req, res) => {
  const { type, llm } = req.params;
  const input = req.body;

  try {
    const { data, error } = await callLLM(type, llm, input);

    if (error) {
      return res.status(400).json({ success: false, llm: llm, data: error });
    }

    return res.json({ success: true, llm: llm, data: data });

  } catch (err) {

    console.error('❌ Erreur serveur :', err.message);
    const msg = err.message?.toLowerCase() || '';
    const errorText = isUnauthorizedError(msg) ? 'unauthorized API KEY' : 'internal-error';

    return res.status(500).json({ success: false, llm: llm, data: errorText });
  }
});

export default router;
