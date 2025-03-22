package com.ganatan.modules.person;

import java.util.List;
import java.util.Arrays;

public class PersonRepositoryMock {
    public List<Person> getItems() {
        return Arrays.asList(
            new Person(100, "Steven Spielberg", "Cincinnati")
        );
    }
}
