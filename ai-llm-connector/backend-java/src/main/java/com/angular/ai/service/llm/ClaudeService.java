package com.angular.ai.service.llm;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ClaudeService {
    public String reply(String type, Map<String, Object> input) {
        return "Réponse générée par ClaudeService";
    }
}
