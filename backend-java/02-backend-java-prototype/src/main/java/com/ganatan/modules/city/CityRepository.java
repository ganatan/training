package com.ganatan.modules.city;

import java.util.List;
import java.util.Arrays;

public class CityRepository {

	public List<City> getItems() {
		return Arrays.asList(new City(1, "Mock Cincinnati"), new City(2, "London"), new City(3, "New York"),
				new City(4, "Knoxville"));
	}
}
