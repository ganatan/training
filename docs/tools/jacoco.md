# Principes de fonctionnement

  JaCoCo (Java Code Coverage)

    Mesurer la couverture de tests (unitaires, intégration).
    Quand tu lances mvn test ou mvn verify, JaCoCo instrumente ton code.
    Il trace quelles classes, méthodes et lignes sont réellement exécutées par les tests.
    Il génère un rapport (HTML, XML, CSV).

    Types de couverture mesurés :
      Instruction coverage → quelles instructions ont été exécutées.
      Branch coverage → quelles branches (if/else, switch) ont été testées.
      Line coverage → quelles lignes ont été exécutées.
      Method/Class coverage → quelles méthodes/classes sont couvertes.

  Rapport généré :
    Après mvn clean verify :

    target/site/jacoco/index.html

# Integration dans pom.xml

  <plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.12</version>
    <executions>
      <execution>
        <goals>
          <goal>prepare-agent</goal>
        </goals>
      </execution>
      <execution>
        <id>report</id>
        <phase>verify</phase>
        <goals>
          <goal>report</goal>
        </goals>
      </execution>
    </executions>
  </plugin>
