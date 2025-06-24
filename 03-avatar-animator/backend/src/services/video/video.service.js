import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const streamPipeline = promisify(pipeline);

function safeFilename(name, llm) {
  return `${name.toLowerCase().replace(/\s+/g, '-')}-${llm}`;
}

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

export async function getVideoFromProjectId(projectId, name, llm) {

  const outputDir = path.resolve('storage/videos');

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
    return { ready: false };
  }
  const videoRes = await fetch(project.video_url);
  const imageRes = await fetch(project.cover_url);

  if (!videoRes.ok || !imageRes.ok) {
    throw new Error('Erreur lors du téléchargement des fichiers');
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const fileName = safeFilename(name, llm);
  let videoFileName = `${fileName}.mp4`;
  let imageFileName = `${fileName}.png`;
  console.log('00000000001:' + videoFileName)
  console.log('00000000001:' + imageFileName)

  const videoTarget = path.join(outputDir, videoFileName);
  const imageTarget = path.join(outputDir, imageFileName);

  await streamPipeline(videoRes.body, fs.createWriteStream(videoTarget));
  await streamPipeline(imageRes.body, fs.createWriteStream(imageTarget));

  return {
    ready: true,
    fileName: name
  };
}


// export async function getVideoFromProjectId(projectId, outputPath, name) {
//   const key = process.env.JOGGAI_API_KEY;
//   const url = `https://api.jogg.ai/v1/project?project_id=${projectId}`;

//   const response = await fetch(url, {
//     headers: {
//       'accept': 'application/json',
//       'x-api-key': key
//     }
//   });

//   const data = await response.json();

//   if (data.code !== 0) {
//     throw new Error(`Erreur JoggAI : ${data.msg}`);
//   }

//   const project = data.data;

//   if (project.status_code !== 4 || !project.video_url) {
//     return { ready: false };
//   }

//   const videoRes = await fetch(project.video_url);
//   const imageRes = await fetch(project.cover_url);

//   if (!videoRes.ok || !imageRes.ok) {
//     throw new Error('Erreur lors du téléchargement des fichiers');
//   }

//   const videoTarget = outputPath;
//   const imageTarget = outputPath.replace(/\.mp4$/, '.png');
//   fs.mkdirSync(path.dirname(videoTarget), { recursive: true });

//   await streamPipeline(videoRes.body, fs.createWriteStream(videoTarget));
//   await streamPipeline(imageRes.body, fs.createWriteStream(imageTarget));

//   return {
//     ready: true,
//     fileName: path.basename(outputPath, '.mp4')
//   };
// }
