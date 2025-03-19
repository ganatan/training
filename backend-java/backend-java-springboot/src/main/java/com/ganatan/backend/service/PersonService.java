package com.ganatan.backend.service;

import com.ganatan.backend.model.Person;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PersonService {
	// @formatter:off
    private final List<Person> items = List.of(
        new Person(1, "Steven Spielberg", "Cincinnati"),
        new Person(2, "Martin Scorsese", "New York"),
        new Person(3, "Quentin Tarantino", "Knoxville"),
        new Person(4, "Christopher Nolan", "London"),
        new Person(5, "Francis Ford Coppola", "Detroit"),
        new Person(6, "James Cameron", "Kapuskasing"),
        new Person(7, "David Fincher", "Denver"),
        new Person(8, "Tim Burton", "Burbank"),
        new Person(9, "Clint Eastwood", "San Francisco"),
        new Person(10, "Wes Anderson", "Houston"),
        new Person(11, "Spike Lee", "Atlanta"),
        new Person(12, "George Lucas", "Modesto")
    );
    // @formatter:on

	public List<Person> getPersons() {
		return items;
	}
}
