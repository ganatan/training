package com.angular.ai.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


import com.angular.ai.config.AiServicesConfig; 

@RestController
public class RootController {

	@GetMapping("/")
	public Map<String, Object> getInfo() {
	    return Map.of(
	        "success", true,
	        "data", AiServicesConfig.getAllServices()
	    );
	}
	
}




//package com.angular.ai.controller;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.Map;
//
//
//@RestController
//public class RootController {
//
//    @GetMapping("/")
//  public Map<String, Object> getAppInfo() {
//
//    	System.out.println("00000000001");
//	  return Map.of(
//	      "success", true,
//	      "data", Map.of(
//	          "version", "1.0.0",
//	          "status", "ok",
//	          "app", "backend-java-springboot"
//	      )
//	  );
//	}
//}
