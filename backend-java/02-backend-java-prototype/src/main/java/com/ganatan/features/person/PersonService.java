package com.ganatan.features.person;

import java.util.List;
import java.util.Arrays;

public class PersonService {

    public List<Person> getAllPersons() {
        return Arrays.asList(
            new Person(1, "Steven Spielberg", "Cincinnati"),
            new Person(2, "Christopher Nolan", "London"),
            new Person(3, "Martin Scorsese", "New York"),
            new Person(4, "Quentin Tarantino", "Knoxville")
        );
    }
}
