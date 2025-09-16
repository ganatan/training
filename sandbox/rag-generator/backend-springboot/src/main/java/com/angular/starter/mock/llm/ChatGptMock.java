package com.angular.starter.mock.llm;

import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ChatGptMock {

    public String reply(String type, Map<String, Object> input) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("00000000001:reply:" + input);

        String name = normalize((String) input.getOrDefault("name", "Inconnu"));
        String style = (String) input.getOrDefault("style", "neutral");
        String length = (String) input.getOrDefault("length", "medium");
        String llm = "chatgpt";

        String validType;
        switch (type.toLowerCase()) {
            case "biography":
            case "filmography":
            case "summary":
                validType = type.toLowerCase();
                break;
            default:
                validType = "contenu";
        }

        return String.format(
            "Java Mock Backend SpringBoot - Demande envoyée à %s pour une %s de \"%s\", avec un style \"%s\" et une longueur \"%s\".",
            llm, validType, name, style, length
        );
    }

    private String normalize(String value) {
        return value.replace("-", " ");
    }
}
