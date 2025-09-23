# Principes

🐇 RabbitMQ → La boîte aux lettres
  Tu mets une lettre dans une boîte.
  Le facteur (consumer) vient, prend la lettre et elle disparaît.
  Si tu veux que deux personnes lisent la même lettre, il faut deux boîtes différentes avec une copie dans chaque.

🦄 Kafka → La bibliothèque
  Chaque événement est un livre ajouté sur une étagère.
  Plusieurs lecteurs (consumers) peuvent venir lire le même livre, chacun à son rythme.
  Le livre reste dans la bibliothèque un certain temps, même après lecture.

# Origine

  Confluent                 créateurs de Kafka
  Confluent Platform (CP)   distribution Kafka

  Image     cp-kafka
            cp-Zookeeper

# Controle

  Port	  Service	      Utilité
  
  2181	  Zookeeper	    Coordination des brokers et métadonnées
  9092	  Kafka	        Échange de messages producteurs/consommateurs
  8085	  Kafka-UI	    Interface web de gestion et monitoring Kafka

# Test

  UI for Apachhe Kafka
  
  http://localhost:8085/  


# SpringBoot implementation

  - Pom.xml

  <dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
  </dependency>

  - application.properties

  spring.kafka.bootstrap-servers=localhost:9092
  spring.kafka.consumer.group-id=ganatan-group
  spring.kafka.consumer.auto-offset-reset=earliest
  spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
  spring.kafka.consumer.value-deserializer=org.apache.kafka.common.serialization.StringDeserializer
  spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
  spring.kafka.producer.value-serializer=org.apache.kafka.common.serialization.StringSerializer


# Test Controller
  curl -X POST "http://localhost:8080/kafka/send?message=HelloKafka"