
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testElevenLabsAPI(voiceId) {


  // const outputDir = path.join(__dirname, '../audios')
  // if (!fs.existsSync(outputDir)) {
  //   fs.mkdirSync(outputDir, { recursive: true })
  // }

  // const filePath = path.join(outputDir, 'test.mp3');

  const fileName = 'test';
  const filePath = path.join(process.cwd(), 'storage', 'voices', `${fileName}.mp3`);
  const outputDir = path.dirname(filePath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }


  await generateSpeech('Test de la fonction', 1234567, filePath);
  return false;

  //   const url = 'https://api.elevenlabs.io/v1/text-to-speech/101A8UFM73tcrunWGirw?output_format=mp3_44100_128';
  //   console.log('00000000001')
  //   const response = await axios.post(
  //     url,
  //     {
  //       text: 'Test',
  //       model_id: 'eleven_multilingual_v2',
  //     },
  //     {
  //       headers: {
  //         'xi-api-key': process.env.ELEVENLABS_API_KEY,
  //         'Content-Type': 'application/json',
  //       },
  //       responseType: 'arraybuffer',
  //       timeout: 5000,
  //     },
  //   );

  //   if (response.status === 200 && response.data) {
  //     console.log('✅ ElevenLabs API accessible');

  //     return true;
  //   }

  //   console.log('❌ ElevenLabs API inaccessible');

  //   return false;

  // } catch (err) {
  //   console.error('❌ Erreur ElevenLabs API:', err.message);

  //   return false;
  // }
}



async function generateSpeech(text, voiceId, outputPath) {
  // let url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`;
  let url = 'https://api.elevenlabs.io/v1/text-to-speech/101A8UFM73tcrunWGirw?output_format=mp3_44100_128';
  console.log('00000000001:' + url);
  console.log('00000000002:' + text);
  console.log('00000000003:' + outputPath);
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
