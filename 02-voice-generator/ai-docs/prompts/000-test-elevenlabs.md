
# Test de fonctionnement de l'API elevenLabs via le backend
  http://localhost:3000/api/voice/health/tts

# Site Eleven

  site        https://elevenlabs.io/fr
  abonnement  https://elevenlabs.io/app/subscription?manage-subscription=true
  doc api     https://elevenlabs.io/docs/quickstart
  api         https://elevenlabs.io/app/settings/api-keys

# Liste des modeles

  - Commande à passer sous prompt windows

    curl "https://api.elevenlabs.io/v1/models" ^
      -H "Content-Type: application/json" ^
      -H "xi-api-key: $ELEVENLABS_API_KEY"


# Text to speech à partir d'un texte

  - Remplacer $ELEVENLABS_API_KEY par votre clé

    curl -X POST "https://api.elevenlabs.io/v1/text-to-speech/MF3mGyEYCl7XYWbV9V6O?output_format=mp3_44100_128" ^
    -H "Content-Type: application/json" ^
    -H "xi-api-key: $ELEVENLABS_API_KEY" ^
    -d "{ \"text\": \"Bienvenue dans notre podcast IA nous allons discuter et débattre.\", \"model_id\": \"eleven_multilingual_v2\" }" ^
    --output output02.mp3


 curl 'https://api.elevenlabs.io/v1/models' \
  -H 'Content-Type: application/json' \
  -H "xi-api-key: $ELEVENLABS_API_KEY"




