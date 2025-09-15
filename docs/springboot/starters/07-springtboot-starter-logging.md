# Rajout Logging


  Spring Boot utilise SLF4J (interface de logging)
  Et connecte SLF4J à Logback comme implémentation par défaut
  
  Exemple de code
    LoggerFactory.getLogger(...).

# Integrer le log

  package com.ganatan.starter.controllers;

  import org.slf4j.Logger;
  import org.slf4j.LoggerFactory;
  import org.springframework.web.bind.annotation.GetMapping;
  import org.springframework.web.bind.annotation.RestController;

  @RestController
  public class RootController {

    private static final Logger log = LoggerFactory.getLogger(RootController.class);

    @GetMapping("/")
    public String root() {
      System.out.println("00000000001");
      log.info("GET / - Spring Boot Starter is running!");
      return "Spring Boot Starter is running!";
    }
  }


  # Parametres les logs

    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    - dans application.properties

      logging.level.root=INFO
      logging.level.com.ganatan=DEBUG

      logging.pattern.console=%d{HH:mm:ss.SSS} %-5level %logger{36} - %msg%n

      logging.file.name=logs/app.log
      logging.file.max-size=10MB
      logging.file.max-history=7


    - Utiliser plutot le fichier de configuration
    
      rc/main/resources/logback-spring.xml

        <configuration>

          <property name="LOG_PATH" value="logs"/>
          <property name="LOG_FILE" value="${LOG_PATH}/app.log"/>

          <appender name="ROLLING" class="ch.qos.logback.core.rolling.RollingFileAppender">
            <file>${LOG_FILE}</file>
            <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
              <fileNamePattern>${LOG_PATH}/app.%d{yyyy-MM-dd_HH-mm}.log</fileNamePattern>
              <maxHistory>1440</maxHistory> <!-- 1 jour = 1440 minutes -->
            </rollingPolicy>
            <encoder>
              <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level %logger{36} - %msg%n</pattern>
            </encoder>
          </appender>

          <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
            <encoder>
              <pattern>%cyan(%d{HH:mm:ss.SSS}) %highlight(%-5level) %magenta([%thread]) %green(%logger{20}) - %msg%n</pattern>
            </encoder>
          </appender>

          <root level="INFO">
            <appender-ref ref="CONSOLE"/>
            <appender-ref ref="ROLLING"/>
          </root>

        </configuration>


# Sauvegarder les logs avec ELK

  Écrire directement dans Elasticsearch est rapide mais risqué
  surtout en prod, surtout à haut volume
  Logstash est fait pour absorber la charge, lisser les pics, et protéger Elasticsearch
  Spring Boot → Logstash et Node.js → Logstash est le meilleur compromis si tu veux un système robuste, unifié et scalable


  - Écriture directe dans Elasticsearch
    via un appender HTTP (HttpAppender) de Logback, rapide mais sans buffer ni résilience → à éviter en prod.

  - Écriture dans Logstash
    via un appender TCP (LogstashTcpSocketAppender), plus robuste, bufferisé, transformable → recommandé pour les environnements sérieux.