package com.ganatan.modules.profession;

import java.io.IOException;
import java.util.List;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.fasterxml.jackson.databind.ObjectMapper;


import com.ganatan.config.AppConfig;

@WebServlet("/professions")
public class ProfessionController extends HttpServlet {

    private final ProfessionService service;

    public ProfessionController() {
        ProfessionRepository repository = new ProfessionRepository(AppConfig.useDatabase());
        this.service= new ProfessionService(repository);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	List<Profession> items = service.getItems();

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        new ObjectMapper().writeValue(response.getWriter(), items);
    }
}
