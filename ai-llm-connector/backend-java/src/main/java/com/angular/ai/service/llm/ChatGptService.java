package com.angular.ai.service.llm;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ChatGptService {
    public String reply(String type, Map<String, Object> input) {
        // TODO: intégration avec OpenAI API (simulé ici)
        return "Réponse générée par ChatGptService";
    }
}
