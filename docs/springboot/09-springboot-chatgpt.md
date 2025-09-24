# Appel d'API en javascript
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4-turbo',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('00000000001:' + JSON.stringify(response.data));
    return response.data.choices[0].message.content.trim();

# Type de Reponse de ChatGPT

{
    "id": "chatcmpl-CJJpGQJ5Bfsk4LkhxHuCk4TxEYoPJ",
    "object": "chat.completion",
    "created": 1758720478,
    "model": "gpt-4-turbo-2024-04-09",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Ridley Scott, né le 30 novembre 1937 à South Shields, Angleterre, est un réalisateur et producteur britannique célèbre pour des films comme \"Alien\", \"Blade Runner\" et \"Gladiator\".",
                "refusal": null,
                "annotations": []
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 43,
        "completion_tokens": 52,
        "total_tokens": 95,
        "prompt_tokens_details": {
            "cached_tokens": 0,
            "audio_tokens": 0
        },
        "completion_tokens_details": {
            "reasoning_tokens": 0,
            "audio_tokens": 0,
            "accepted_prediction_tokens": 0,
            "rejected_prediction_tokens": 0
        }
    },
    "service_tier": "default",
    "system_fingerprint": "fp_de235176ee"
}