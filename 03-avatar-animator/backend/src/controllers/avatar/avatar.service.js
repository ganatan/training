import axios from 'axios';
import fs from 'fs';

async function generateAvatar({ audioPath, imagePath, avatarId, outputPath }) {
  const formData = new FormData();
  formData.append('voice', fs.createReadStream(audioPath));
  formData.append('image', fs.createReadStream(imagePath));
  formData.append('avatar', avatarId);

  const headers = {
    ...formData.getHeaders(),
    Authorization: `Bearer ${process.env.JOGGAI_API_KEY}`,
  };

  try {
    const response = await axios.post(
      'https://api.jogg.ai/v1/avatar/generate',
      formData,
      { headers, responseType: 'stream' }
    );

    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log('✅ Vidéo enregistrée :', outputPath);
        resolve(outputPath);
      });
      writer.on('error', (err) => {
        console.error('❌ Erreur lors de l’écriture de la vidéo :', err.message);
        reject(err);
      });
    });

  } catch (error) {
    const status = error.response?.status;
    if (status) {
      console.error(`❌ Erreur JoggAI ${status}`);
    } else {
      console.error('❌ Erreur inconnue :', error.message);
    }

    throw error;
  }
}

export default generateAvatar;
