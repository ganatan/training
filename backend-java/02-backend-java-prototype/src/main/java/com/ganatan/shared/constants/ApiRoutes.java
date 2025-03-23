package com.ganatan.shared.constants;

import java.util.List;
import java.util.Map;

public class ApiRoutes {

    public static final Map<String, RouteDefinition> ROUTES = Map.of(
        "persons", new RouteDefinition("/persons", List.of("GET", "POST", "PUT", "DELETE")),
        "cities", new RouteDefinition("/cities", List.of("GET", "POST", "PUT", "DELETE"))
    );

    public record RouteDefinition(String path, List<String> methods) {}
}
