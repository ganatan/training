
mvn -Dtest=PersonControllerTest test
mvn -Dtest=CityControllerTest test


  mvn clean
  mvn compile
  mvn test
  
  mvn clean test jacoco:report
