package com.angular.ai.controller;

import com.angular.ai.config.AiServicesConfig;
import com.angular.ai.service.llm.ChatGptService;
import com.angular.ai.service.llm.ClaudeService;
import com.angular.ai.mock.llm.ChatGptMock;
import com.angular.ai.mock.llm.ClaudeMock;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/llm")
public class LlmController {

	
	
    @Value("${use.mock:false}")
    private boolean useMock;

    private final ChatGptService chatGptService;
    private final ClaudeService claudeService;
    private final ChatGptMock chatGptMock;
    private final ClaudeMock claudeMock;

    public LlmController(ChatGptService chatGptService, ClaudeService claudeService,
                         ChatGptMock chatGptMock, ClaudeMock claudeMock) {
        this.chatGptService = chatGptService;
        this.claudeService = claudeService;
        this.chatGptMock = chatGptMock;
        this.claudeMock = claudeMock;
    }

    @PostMapping("/{type}/{llm}")
    public Map<String, Object> handleRequest(@PathVariable String type,
                                             @PathVariable String llm,
                                             @RequestBody Map<String, Object> input) {
    	System.out.println("00000000001:" + useMock);
        try {
            String result;
            switch (llm.toLowerCase()) {
                case "chatgpt":
                    result = useMock ? chatGptMock.reply(type, input) : chatGptService.reply(type, input);
                    break;
                case "claude":
                    result = useMock ? claudeMock.reply(type, input) : claudeService.reply(type, input);
                    break;
                default:
                    return Map.of("success", false, "data", "unknown-provider");
            }
            return Map.of("success", true, "data", result);
        } catch (Exception e) {
            return Map.of("success", false, "data", "internal-error");
        }
    }
}
