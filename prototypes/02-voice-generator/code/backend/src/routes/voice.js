import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs';

import testElevenLabsAPI from '../services/voice/testElevenLabsAPI.js';


// import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';
// import { Readable } from 'stream';

const router = express.Router();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const audioDirectory = path.resolve(__dirname, '../../public/audios');

// router.get('/:llm/:filename', (req, res) => {
//   const { filename } = req.params;
//   const filePath = path.join(audioDirectory, filename);

//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({ error: 'Audio file not found' });
//   }

//   res.setHeader('Content-Type', 'audio/mpeg');

//   return res.sendFile(filePath);
// });

// const voiceId = process.env.ELEVENLABS_VOICE_ID || 'default';
// console.log('00000000001:' + voiceId);
// const result = await testElevenLabsAPI(voiceId);

router.get('/health/tts', async (req, res) => {
  const voiceId = process.env.ELEVENLABS_VOICE_ID || 'default';
  const result = await testElevenLabsAPI(voiceId);
  res.json({ success: result });
  //  res.json({ success: 1111 });
});


router.get('/', async (req, res) => {
  // const voiceId = process.env.ELEVENLABS_VOICE_ID || 'default';
  // const result = await testElevenLabsAPI(voiceId);
  // res.json({ success: result });
  res.json({ success: 2222 });

});




// router.get('/health/tts', async (req, res) => {
//   try {

//     console.log('00000000001:' + process.env.ELEVENLABS_API_KEY);
//     const elevenlabs = new ElevenLabsClient({
//       apiKey: process.env.ELEVENLABS_API_KEY,
//     });

//     const voiceId = 'JBFqnCBsd6RMkjVDRZzb';
//     const text = 'This is a test';

//     const audioStream = await elevenlabs.textToSpeech.stream(voiceId, {
//       text,
//       modelId: 'eleven_multilingual_v2',
//     });

//     await stream(Readable.from(audioStream));

//     for await (const chunk of audioStream) {
//       console.log('🟢 audio chunk:', chunk);
//     }

//     res.json({ success: true, voiceId, text });

//   } catch (err) {
//     console.error('❌ TTS health check error:', err.message);
//     res.status(500).json({
//       success: false,
//       error: 'TTS check failed',
//       detail: err.message,
//     });
//   }
// });


// router.get('/health/tts', async (req, res) => {
//   try {

//     console.log('00000000001:' + process.env.ELEVENLABS_API_KEY);
//     const elevenlabs = new ElevenLabsClient({
//       apiKey: process.env.ELEVENLABS_API_KEY,
//     });

//     const voiceId = 'JBFqnCBsd6RMkjVDRZzb';
//     const text = 'This is a test';

//     const audioStream = await elevenlabs.textToSpeech.stream(voiceId, {
//       text,
//       modelId: 'eleven_multilingual_v2',
//     });

//     await stream(Readable.from(audioStream));

//     for await (const chunk of audioStream) {
//       console.log('🟢 audio chunk:', chunk);
//     }

//     res.json({ success: true, voiceId, text });

//   } catch (err) {
//     console.error('❌ TTS health check error:', err.message);
//     res.status(500).json({
//       success: false,
//       error: 'TTS check failed',
//       detail: err.message,
//     });
//   }
// });

// router.get('/health/tts', async (req, res) => {
//   let result = { aaaa: 1111 }
//   const elevenlabs = new ElevenLabsClient({
//     apiKey: 'YOUR_API_KEY',
//   });

//   const audioStream = await elevenlabs.textToSpeech.stream('JBFqnCBsd6RMkjVDRZzb', {
//     text: 'This is a test',
//     modelId: 'eleven_multilingual_v2',
//   });
//   await stream(Readable.from(audioStream));
//   for await (const chunk of audioStream) {
//     console.log(chunk);
//   }

//   res.json({ success: result });
// });

export default router;
