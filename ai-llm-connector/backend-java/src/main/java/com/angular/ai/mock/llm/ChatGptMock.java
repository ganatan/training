package com.angular.ai.mock.llm;

import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ChatGptMock {
    public String reply(String type, Map<String, Object> input) {
        return "Mock ChatGpt pour type: " + type;
    }
}
