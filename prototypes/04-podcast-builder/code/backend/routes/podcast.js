import express from 'express';
import { saveConversationToFile } from '../services/conversation.service.js';
import { saveMockConversationToFile } from '../services/conversation.service.mock.js';
import { generateAllAudioFromJson } from '../services/audio.service.js';

const router = express.Router();

router.get('/generate', async (req, res) => {
  const debat = req.query.topic || 'Dune de Denis Villeneuve : chef-d\'œuvre de science-fiction ou exercice de style surcoté ?';
  try {
    const { filename, conversation } = await saveConversationToFile(debat);
    res.json({ success: true, file: filename, conversation: conversation });
  } catch (error) {
    console.error('Erreur génération podcast:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/mock', async (req, res) => {
  const debat = req.query.topic || "Dune de Denis Villeneuve : chef-d'œuvre de science-fiction ou exercice de style surcoté ?";
  try {
    const { filename, conversation } = await saveMockConversationToFile(debat);
    res.json({ success: true, file: filename, conversation: conversation });
  } catch (error) {
    console.error('Erreur mock podcast:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/audio/:filename', async (req, res) => {
  try {
    const result = await generateAllAudioFromJson(req.params.filename);
    res.json({ success: true, ...result });
  } catch (err) {
    console.error('Erreur audio:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
