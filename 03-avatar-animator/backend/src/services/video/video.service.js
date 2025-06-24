import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const streamPipeline = promisify(pipeline);

export async function generateVideo({ name, avatarId, voiceId }) {
  try {
    const key = process.env.JOGGAI_API_KEY;
    const script = 'Test de Video avec JoggAI';

    const body = {
      script,
      aspect_ratio: 1,         
      screen_style: 1,         
      avatar_id: avatarId,
      avatar_type: 0,
      voice_id: "en-US-ChristopherNeural",
      caption: false
    };

    const response = await fetch('https://api.jogg.ai/v1/create_video_from_talking_avatar', {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (data.code !== 0) {
      throw new Error(`JoggAI API error: ${data.msg}`);
    }

    return {
      success: true,
      project_id: data.data.project_id
    };
  } catch (error) {
    console.error('❌ Erreur JoggAI :', error.message);
    throw error;
  }
}


// export async function generateVideo({ name, avatarId }) {
//   try {
//     let script = 'Test de Video avec JoggAI';
//     const key = process.env.JOGGAI_API_KEY;
//     const body = {
//       script: script,
//       aspect_ratio: 1,
//       screen_style: 1,
//       avatar_id: avatarId,
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

//   } catch (error) {
//     console.error('❌ Erreur JoggAI :', error.message);
//   }
// }

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
  let videoFileName = `${name}.mp4`;
  let imageFileName = `${name}.png`;

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
