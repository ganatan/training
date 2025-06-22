import axios from 'axios';
import fs from 'fs';

async function generateVideo({ script, avatarId, voiceId, outputPath }) {
  try {

    let key = process.env.JOGGAI_API_KEY;
    console.log('00000000001:' + key);
    let body = {
      "script": "Test de Video avec JoggAI",
      "aspect_ratio": 0,
      "screen_style": 1,
      "avatar_id": 1025,
      "avatar_type": 0,
      "voice_id": "en-US-ChristopherNeural",
      "caption": false
    };


    const options = {
      method: 'POST',
      headers: { 'x-api-key': key },
      body: body,
    };


    const response = await fetch('https://api.jogg.ai/v1/create_video_from_talking_avatar', options);
    const data = await response.json();
    console.log('✅ Données avatars reçues :', data);

  } catch (error) {
    console.error('❌ Erreur lors de la récupération des avatars :', error.message);
  }
}


    // let body = {
    //   "script": "Test de Video avec JoggAI",
    //   "aspect_ratio": 0,
    //   "screen_style": 1,
    //   "avatar_id": 1025,
    //   "avatar_type": 0,
    //   "voice_id": "en-US-ChristopherNeural",
    //   "caption": false
    // };
    // const options = {
    //   method: 'POST',
    //   headers: { 'x-api-key': process.env.JOGGAI_API_KEY, 'Content-Type': 'application/json' },
    //   body: body,
    // };

    // const response = await fetch('https://api.jogg.ai/v1/create_video_from_talking_avatar', options);
    // const data = await response.json();
    // console.log('✅ Données avatars reçues :', data);

// async function generateVideo({ script, avatarId, voiceId, outputPath }) {
//   try {
//     const options = {
//       method: 'GET',
//       headers: { 'x-api-key': process.env.JOGGAI_API_KEY }
//     };

//     const response = await fetch('https://api.jogg.ai/v1/avatars?aspect_ratio=0&style=professional&gender=male&age=adult', options);
//     const data = await response.json();
//     console.log('✅ Données avatars reçues :', data);

//   } catch (error) {
//     console.error('❌ Erreur lors de la récupération des avatars :', error.message);
//   }
// }




// async function generateVideo({ script, avatarId, voiceId, outputPath }) {
//   try {
//     // const response = await fetch('https://api.ganatan.com/tutorials');
//     // const data = await response.json();

//     const options = { method: 'GET', headers: { 'x-api-key': process.env.JOGGAI_API_KEY } };

//     const response = fetch('https://api.jogg.ai/v1/avatars?aspect_ratio=0&style=professional&gender=male&age=adult', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));

//     const data = await response.json();
//     console.log('00000000001:' + data);


//   } catch (error) {
//     console.error('❌ Erreur lors de la récupération des tutoriels :', error.message);
//   }
// }

// async function generateVideo({ script, avatarId, voiceId, outputPath }) {
//   const data = {
//     script,
//     aspect_ratio: 0,
//     screen_style: 1,
//     avatar_id: avatarId,
//     avatar_type: 0,
//     voice_id: voiceId,
//     caption: false
//   };
//   console.log('00000000001:' + JSON.stringify(data));
//   const headers = {
//     'x-api-key': process.env.JOGGAI_API_KEY,
//     'Content-Type': 'application/json'
//   };

//   try {
//     // const createResponse = await axios.post(
//     //   'https://api.jogg.ai/v1/create_video_from_talking_avatar',
//     //   data,
//     //   { headers }
//     // );
//     // console.log('00000000002:' + createResponse);


//     const options = {
//       method: 'POST',
//       headers: { 'x-api-key': process.env.JOGGAI_API_KEY, 'Content-Type': 'application/json' },
//       body: data
//     };

//     fetch('https://api.jogg.ai/v1/create_video_from_url', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));


//     // const projectId = createResponse.data?.data?.project_id;
//     // if (!projectId) throw new Error('project_id manquant');

//     // await new Promise(resolve => setTimeout(resolve, 3000));

//     // const projectResponse = await axios.get(
//     //   `https://api.jogg.ai/v1/project?project_id=${projectId}`,
//     //   { headers }
//     // );
//     // console.log('00000000003:' + JSON.stringify(projectResponse));
//     // const videoUrl = projectResponse.data?.data?.video_url;
//     // if (!videoUrl) throw new Error('video_url introuvable');

//     // const videoStream = await axios.get(videoUrl, { responseType: 'stream' });
//     // const writer = fs.createWriteStream(outputPath);

//     // videoStream.data.pipe(writer);

//     // return new Promise((resolve, reject) => {
//     //   writer.on('finish', () => {
//     //     console.log('✅ Vidéo enregistrée :', outputPath);
//     //     resolve(outputPath);
//     //   });
//     //   writer.on('error', (err) => {
//     //     console.error('❌ Erreur d’écriture :', err.message);
//     //     reject(err);
//     //   });
//     // });

//     return new Promise((resolve, reject) => {
//       resolve(outputPath);
//     });


//   } catch (error) {
//     const status = error.response?.status;
//     console.error(`❌ Erreur JoggAI ${status || ''} : ${error.message}`);
//     throw error;
//   }
// }

export default generateVideo;


// import axios from 'axios';
// import fs from 'fs';

// async function generateVideo({ script, avatarId, voiceId, outputPath }) {
//   let avatarIdTmp = 1025;
//   const data = {
//     script: script,
//     aspect_ratio: 0,
//     screen_style: 1,
//     avatar_id: avatarIdTmp,
//     avatar_type: 0,
//     voice_id: voiceId,
//     caption: true,
//   };

//   const headers = {
//     'x-api-key': process.env.JOGGAI_API_KEY,
//     'Content-Type': 'application/json'
//   };
//   console.log('00000000001:');
//   try {
//     const response = await axios.post(
//       'https://api.jogg.ai/v1/create_video_from_talking_avatar',
//       data,
//       { headers }
//     );
//     console.log('00000000002:' + JSON.stringify(response));
//     const videoUrl = response.data?.url;
//     if (!videoUrl) throw new Error('URL vidéo non reçue');
//     console.log('00000000003:');
//     const videoResponse = await axios.get(videoUrl, { responseType: 'stream' });
//     const writer = fs.createWriteStream(outputPath);

//     videoResponse.data.pipe(writer);

//     return new Promise((resolve, reject) => {
//       writer.on('finish', () => {
//         console.log('✅ Vidéo enregistrée :', outputPath);
//         resolve(outputPath);
//       });
//       writer.on('error', (err) => {
//         console.error('❌ Erreur d’écriture :', err.message);
//         reject(err);
//       });
//     });

//   } catch (error) {
//     const status = error.response?.status;
//     if (status) {
//       console.error(`❌ Erreur JoggAI ${status}`);
//     } else {
//       console.error('❌ Erreur inconnue :', error.message);
//     }
//     throw error;
//   }
// }

// export default generateVideo;
