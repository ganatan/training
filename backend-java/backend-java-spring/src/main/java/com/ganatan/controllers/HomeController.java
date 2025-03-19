package com.ganatan.controllers;

import com.ganatan.models.Director;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/")
public class HomeController {
    @GetMapping
    public List<Director> getDirectors() {
        return List.of(
            new Director(1, "Christopher Nolan", "London"),
            new Director(2, "Quentin Tarantino", "Knoxville"),
            new Director(3, "Martin Scorsese", "New York"),
            new Director(4, "Steven Spielberg", "Cincinnati")
        );
    }
}
