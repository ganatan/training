import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const streamPipeline = promisify(pipeline);

export async function generateVideo({ name, avatarId }) {
  try {
    const key = process.env.JOGGAI_API_KEY;
    const body = {
      script: script,
      aspect_ratio: 0,
      screen_style: 1,
      avatar_id: avatarId,
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

    console.log('00000000001:' + key);
    console.log('00000000002:' + JSON.stringify(body));
    const response = await fetch('https://api.jogg.ai/v1/create_video_from_talking_avatar', options);
    const data = await response.json();
    console.log('00000000003:' + JSON.stringify(data));
    // console.log('✅ Réponse JoggAI :', data);

  } catch (error) {
    console.error('❌ Erreur JoggAI :', error.message);
  }
}

export async function getVideoFromProjectId(projectId, outputPath) {
  const key = process.env.JOGGAI_API_KEY;

  const url = `https://api.jogg.ai/v1/project?project_id=${projectId}`;

  const response = await fetch(url, {
    headers: {
      'accept': 'application/json',
      'x-api-key': key
    }
  });

  const data = await response.json();

  if (data.code !== 0) {
    throw new Error(`Erreur JoggAI : ${data.msg}`);
  }

  const project = data.data;
  if (project.status_code !== 4 || !project.video_url) {
    throw new Error('Vidéo pas encore prête');
  }

  const videoUrl = project.video_url;
  const imageUrl = project.cover_url;

  const videoRes = await fetch(videoUrl);
  const imageRes = await fetch(imageUrl);

  if (!videoRes.ok || !imageRes.ok) {
    throw new Error('Erreur lors du téléchargement des fichiers');
  }

  const videoTarget = outputPath;
  const imageTarget = outputPath.replace(/\.mp4$/, '.png');

  fs.mkdirSync(path.dirname(videoTarget), { recursive: true });

  await streamPipeline(videoRes.body, fs.createWriteStream(videoTarget));
  await streamPipeline(imageRes.body, fs.createWriteStream(imageTarget));

  return path.basename(outputPath, '.mp4');
}


// export async function checkVideo({ script, voiceId, outputPath }) {
//   try {
//     const key = process.env.JOGGAI_API_KEY;
//     console.log('🔑 API Key:', key);

//     const body = {
//       script: script,
//       aspect_ratio: 0,
//       screen_style: 1,
//       avatar_id: 1025,
//       avatar_type: 0,
//       voice_id: voiceId,
//       caption: false
//     };

//     const options = {
//       method: 'POST',
//       headers: {
//         'x-api-key': key,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(body)
//     };

//     const response = await fetch('https://api.jogg.ai/v1/create_video_from_talking_avatar', options);
//     const data = await response.json();
//     console.log('✅ Réponse JoggAI :', data);

//   } catch (error) {
//     console.error('❌ Erreur JoggAI :', error.message);
//   }
// }

