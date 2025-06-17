
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

async function testElevenLabsAPI(voiceId) {

  const fileName = 'test';
  const filePath = path.join(process.cwd(), 'storage', 'voices', `${fileName}.mp3`);
  const outputDir = path.dirname(filePath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let text = 'Test de voix avec Eleven';
  // let voiceId = '101A8UFM73tcrunWGirw';
  console.log('00000000001:' + voiceId)
  await generateSpeech(text, voiceId, filePath);
  // await generateSpeech(text, '101A8UFM73tcrunWGirw', filePath);

  return false;
}


async function generateSpeech(text, voiceId, outputPath) {
  let url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`;
  const response = await axios.post(
    url,
    {
      text,
      model_id: 'eleven_multilingual_v2'
    },
    {
      headers: {
        'xi-api-key': process.env.ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      },
      responseType: 'stream'
    }
  )
  console.log('00000000004:' + outputPath);
  const writer = fs.createWriteStream(outputPath)
  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', () => resolve(outputPath))
    writer.on('error', reject)
  })
}

export default testElevenLabsAPI;
