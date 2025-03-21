package com.ganatan.modules.person;

import java.util.List;
import java.util.Arrays;

public class PersonRepository {

    public List<Person> getAll() {
        return Arrays.asList(
            new Person(1, "Steven Spielberg", "Cincinnati"),
            new Person(2, "Christopher Nolan", "London"),
            new Person(3, "Martin Scorsese", "New York"),
            new Person(4, "Quentin Tarantino", "Knoxville")
        );
    }
}
