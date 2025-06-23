import axios from 'axios';
import fs from 'fs';

export async function generateVideo({ script, avatarId, voiceId, outputPath }) {
  try {
    const key = process.env.JOGGAI_API_KEY;
    console.log('🔑 API Key:', key);

    const body = {
      script: script,
      aspect_ratio: 0,
      screen_style: 1,
      avatar_id: 1025,
      avatar_type: 0,
      voice_id: voiceId,
      caption: false
    };

    const options = {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    const response = await fetch('https://api.jogg.ai/v1/create_video_from_talking_avatar', options);
    const data = await response.json();
    console.log('✅ Réponse JoggAI :', data);

  } catch (error) {
    console.error('❌ Erreur JoggAI :', error.message);
  }
}

export async function checkVideo({ script, avatarId, voiceId, outputPath }) {
  try {
    const key = process.env.JOGGAI_API_KEY;
    console.log('🔑 API Key:', key);

    const body = {
      script: script,
      aspect_ratio: 0,
      screen_style: 1,
      avatar_id: 1025,
      avatar_type: 0,
      voice_id: voiceId,
      caption: false
    };

    const options = {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    const response = await fetch('https://api.jogg.ai/v1/create_video_from_talking_avatar', options);
    const data = await response.json();
    console.log('✅ Réponse JoggAI :', data);

  } catch (error) {
    console.error('❌ Erreur JoggAI :', error.message);
  }
}

