package com.angular.ai.mock.llm;

import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ClaudeMock {
    public String reply(String type, Map<String, Object> input) {
        return "Mock Claude pour type: " + type;
    }
}
