
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
      "script": "Hi, welcome to JoggAI and create longer videos with Talking Avatars in minutes!",
      "aspect_ratio": 0,
      "screen_style": 1,
      "avatar_id": 1025,
      "avatar_type": 0,
      "voice_id": "en-US-ChristopherNeural",
      "caption": true   
  }'

  # Recuperer les infos project

curl --location --request GET 'https://api.jogg.ai/v1/project?project_id=xxxx_id' \
--header 'x-api-key: <your-api-key>' \


