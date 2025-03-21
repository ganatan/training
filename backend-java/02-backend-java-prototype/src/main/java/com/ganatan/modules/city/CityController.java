package com.ganatan.modules.city;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/cities")
public class CityController extends HttpServlet {

//    public CityController() {
//        super();
//    }

	private final CityService cityService;

	public CityController() {
		CityRepository repository = new CityRepository();
		this.cityService = new CityService(repository);
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

//    	List<City> items = cityService.getItems();

		List<Map<String, Object>> items = Arrays.asList(createMap(1, "Steven Spielberg", "Cincinnati"),
				createMap(2, "Christopher Nolan", "London"), createMap(3, "Martin Scorsese", "New York"),
				createMap(4, "Quentin Tarantino", "Knoxville"));

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");

		new ObjectMapper().writeValue(response.getWriter(), items);
	}

	private Map<String, Object> createMap(int id, String name, String city) {
		Map<String, Object> map = new HashMap<>();
		map.put("id", id);
		map.put("name", name);
		map.put("city", city);
		return map;
	}
}

//package com.ganatan.modules.city;
//
//import java.io.IOException;
//import java.util.List;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.annotation.WebServlet;
//import jakarta.servlet.http.HttpServlet;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.ganatan.modules.person.Person;
//import com.ganatan.modules.person.PersonRepository;
//import com.ganatan.modules.person.PersonService;
//
//import java.util.Arrays;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@WebServlet("/cities")
//public class CityController extends HttpServlet {
//
//	private final CityService cityService;
//
//	public CityController() {
//		CityRepository repository = new CityRepository();
//		this.cityService = new CityService(repository);
//	}
//
//	@Override
//	protected void doGet(HttpServletRequest request, HttpServletResponse response)
//			throws ServletException, IOException {
//		List<City> items = cityService.getItems();
//
//		response.setContentType("application/json");
//		response.setCharacterEncoding("UTF-8");
//		new ObjectMapper().writeValue(response.getWriter(), items);
//	}
//
//}
