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

  
  Infos retournes

  Etape 1 en cours
  {
    "rid": "7fe36078261e3c81394609dfab5c483d",
    "code": 0,
    "msg": "success",
    "data": {
        "id": "1c0c92b6addd4171970a0ee48a104fe6",
        "title": "Ronald Studio 0624",
        "video_duration": 0,
        "video_url": "",
        "cover_url": "https://res.jogg.ai/joggUserData/project/1c0c92b6addd4171970a0ee48a104fe6/1750750281710-0aed08a62c4365d5dc36a8ad690ca97fad4d83fb-cover.png",
        "status_code": 3,
        "status_desc": "processing",
        "created_at": 1750750278
    }

  Etape 2 en cours
  {
      "rid": "d43b3a5999e31b7e7a62ee5ef84d411d",
      "code": 0,
      "msg": "success",
      "data": {
          "id": "fa6228c0f52c4f3986e88f7ffa5d2864",
          "title": "welcome to jogg.ai",
          "video_url": "https://res.jogg.ai/video.webm",
          "cover_url": "https://res.jogg.ai/cover.png",
          "video_duration": 6,
          "status_code": 4,
          "status_desc": "success",
          "created_at": 1732806631
      }
  }



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

