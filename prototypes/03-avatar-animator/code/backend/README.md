
https://elevenlabs.io/docs/quickstart

https://elevenlabs.io/app/settings/api-keys


curl 'https://api.elevenlabs.io/v1/models' \
  -H 'Content-Type: application/json' \
  -H 'xi-api-key: $ELEVENLABS_API_KEY'

curl 'https://api.elevenlabs.io/v1/models' \
  -H 'Content-Type: application/json' \
  -H 'xi-api-key: sk_be7c787eb9a1649ae20abff85a1a9e62f3784ff3c83d80f3'


curl 'https://api.elevenlabs.io/v1/models' ^
  -H 'Content-Type: application/json' ^
  -H 'xi-api-key: sk_be7c787eb9a1649ae20abff85a1a9e62f3784ff3c83d80f3'


curl -X POST "https://api.elevenlabs.io/v1/text-to-speech/101A8UFM73tcrunWGirw?output_format=mp3_44100_128" ^
 -H "Content-Type: application/json" ^
 -H "xi-api-key: sk_be7c787eb9a1649ae20abff85a1a9e62f3784ff3c83d80f3" ^
 -d "{ \"text\": \"Bienvenue dans notre podcast IA nous allons discuter et débattre.\", \"model_id\": \"eleven_multilingual_v2\" }" ^
 --output output02.mp3


 npm install @elevenlabs/elevenlabs-js