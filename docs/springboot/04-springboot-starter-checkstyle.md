
# Generer un springboot-starter-checkstyle
  Ajout du plugin dans pom.xml

  <properties>
    <java.version>21</java.version>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <checkstyle.version>11.0.1</checkstyle.version>
    <maven.checkstyle.plugin.version>3.6.0</maven.checkstyle.plugin.version>
  </properties>

  <build>
    <plugins>
      <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-checkstyle-plugin</artifactId>
          <version>${maven.checkstyle.plugin.version}</version>
          <configuration>
              <configLocation>checkstyle.xml</configLocation>
              <consoleOutput>true</consoleOutput>
              <failsOnError>false</failsOnError>
          </configuration>
          <dependencies>
              <dependency>
                  <groupId>com.puppycrawl.tools</groupId>
                  <artifactId>checkstyle</artifactId>
                  <version>${checkstyle.version}</version>
              </dependency>
          </dependencies>
      </plugin>
    </plugins>
  </build>


# Test Maven

  mvn clean
  mvn test
  mvn package
  mvn spring-boot:run
  mvn clean verify
  
  mvn checkstyle:check                Vérifier uniquement Checkstyle
  mvn checkstyle:checkstyle           Vérifier + rapport HTML

  Rapport dans
    target/reports/checkstyle.html