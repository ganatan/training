package com.ganatan.modules;

import java.io.IOException;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/")
public class RootController extends HttpServlet {
    private final int port = 9900;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String baseUrl = "http://localhost:" + port;

        Map<String, Object> root = new HashMap<>();
        root.put("endpoints", List.of(
            Map.of("url", baseUrl + "/persons"),
            Map.of("url", baseUrl + "/cities")
        ));

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        new ObjectMapper().writeValue(response.getWriter(), root);
    }
}
