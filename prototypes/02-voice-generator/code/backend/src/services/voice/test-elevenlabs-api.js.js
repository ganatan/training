
import axios from 'axios';
import fs from 'fs';
import path from 'path';

async function testElevenLabsAPI(voiceId) {
  const fileName = 'test-tts-elevenlabs';
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
    console.error('❌ Échec du test TTS ElevenLabs :' + err.message);

    return {
      success: false,
      error: err.message,
    };
  }
}

async function generateVoice(text, voiceId, outputPath) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`;

  try {
    const response = await axios.post(
      url,
      {
        text,
        model_id: 'eleven_multilingual_v2',
      },
      {
        headers: {
          'xi-api-key': process.env.ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        responseType: 'stream',
      }
    );

    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log('✅ Audio enregistré :', outputPath);
        resolve(outputPath);
      });
      writer.on('error', (err) => {
        console.error('❌ Erreur lors de l’écriture du fichier :', err.message);
        reject(err);
      });
    });

  } catch (error) {
    const status = error.response?.status;
    const data = error.response?.data;

    if (status) {
      console.error(`❌ Erreur ElevenLabs ${status}`);
    } else {
      console.error('❌ Erreur inconnue :', error.message);
    }

    throw error;
  }
}

export default testElevenLabsAPI;
