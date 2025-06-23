# Test de fonctionnement de l'API elevenLabs via le backend
  http://localhost:3000/api/voice/health/tts

# Test de fonctionnement de l'API joggAI via le backend
  http://localhost:3000/api/video/health/lva

# Test de fonctionnement de l'API fichiers
  http://localhost:3000/storage/voices/ridley-scott-chatgpt.mp3
  
  http://localhost:3000/storage/videos/ridley-scott-chatgpt.mp4
  http://localhost:3000/storage/videos/ridley-scott-chatgpt.png

# Test de fonctionnement de l'API JoggAI
  http://localhost:3000/api/video/chatgpt
  http://localhost:3000/api/video/claude

# Site JoggAI

  site        https://www.jogg.ai/
  abonnement  https://app.jogg.ai/billing/subscriptions
  api         https://docs.jogg.ai/api-reference/QuickStart/GettingStarted

# Test


  # Liste des avatars disponibles

  https://docs.jogg.ai/api-reference/Avatar/GetAvatarList

  curl --request GET ^
    --url https://api.jogg.ai/v1/avatars?aspect_ratio=0&style=professional&gender=male&age=adult ^
    --header 'accept: application/json' ^
    --header 'x-api-key: <api-key>'

  # Liste des avatars persos avec photo

  https://docs.jogg.ai/api-reference/Avatar/GetPhotoAvatar
  
  curl --request GET ^
    --url https://api.jogg.ai/v1/avatars/photo_avatars ^
    --header 'accept: application/json' ^
    --header 'x-api-key: <api-key>'

  # Liste des voix

  curl --request GET \
    --url https://api.jogg.ai/v1/voices ^
    --header 'accept: application/json' ^
    --header 'x-api-key: <api-key>'

  # Creer une video

  curl --location --request POST 'https://api.jogg.ai/v1/create_video_from_talking_avatar' ^
  --header 'x-api-key: <your-api-key>' ^
  --header 'Content-Type: application/json' ^
  --data-raw '{
      "script": "Test de Video avec JoggAI",
      "aspect_ratio": 0,
      "screen_style": 1,
      "avatar_id": 1025,
      "avatar_type": 0,
      "voice_id": "en-US-ChristopherNeural",
      "caption": false   
  }'

  Response
  {
      "rid": "369b8b3fadc7762500e42a4c1fca1088",
      "code": 0,
      "msg": "success",
      "data": {
          "project_id": "xxxx"
      }
  }

  # Recuperer les infos project

curl --location --request GET 'https://api.jogg.ai/v1/project?project_id=d65c2a57c0e543179ee3ccdf7aceaf2f' \
--header 'x-api-key: <your-api-key>' \

# Code javascript

  const options = {
    method: 'POST',
    headers: {'x-api-key': '<api-key>', 'Content-Type': 'application/json'},
    body: '{"product_id":"NTIzMzc0NjI5","aspect_ratio":0,"video_length":"15","language":"english","avatar_id":1,"avatar_type":0,"voice_id":"en-US-ChristopherNeural","music_id":13,"script_style":"Storytime","visual_style":"Simple Product Switch","template_id":123,"template_type":"public","override_script":"","caption":true}'
  };

  fetch('https://api.jogg.ai/v1/create_video_from_url', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

