package com.ganatan.modules;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import com.ganatan.modules.RootController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.io.StringWriter;
import static org.junit.jupiter.api.Assertions.*;

public class RootControllerTest {

    @Test
    void shouldReturnRootEndpointsJson() throws Exception {
        RootController servlet = new RootController();
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class);
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
        StringWriter responseWriter = new StringWriter();

        Mockito.when(response.getWriter()).thenReturn(new PrintWriter(responseWriter));

        servlet.doGet(request, response);

        String json = responseWriter.toString();
        assertTrue(json.contains("\"url\":\"http://localhost:9900/persons\""));
        assertTrue(json.contains("\"url\":\"http://localhost:9900/cities\""));
    }
}
