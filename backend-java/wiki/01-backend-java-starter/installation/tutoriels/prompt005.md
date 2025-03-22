
mvn -Dtest=PersonServletTest test

mvn -Dtest=CityServletTest test

mvn -Dtest=RootServletTest test


  mvn clean
  mvn compile
  mvn test
  
  mvn clean test jacoco:report

