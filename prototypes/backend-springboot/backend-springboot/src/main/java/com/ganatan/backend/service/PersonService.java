package com.ganatan.backend.service;

import com.ganatan.backend.model.Person;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PersonService {
	public List<Person> getPersons() {
		return List.of(new Person(1, "Steven Spielberg", "Cincinnati"), new Person(2, "Martin Scorsese", "New York"),
				new Person(3, "Quentin Tarantino", "Knoxville"), new Person(4, "Christopher Nolan", "London"),
				new Person(5, "James Cameron", "Kapuskasing"), new Person(6, "Francis Ford Coppola", "Detroit"),
				new Person(7, "Ridley Scott", "South Shields"), new Person(8, "David Fincher", "Denver"),
				new Person(9, "Tim Burton", "Burbank"), new Person(10, "Wes Anderson", "Houston"),
				new Person(11, "Stanley Kubrick", "New York"), new Person(12, "Alfred Hitchcock", "London"));
	}
}
