# Principes

🐇 RabbitMQ expliqué simplement
  Imagine une grande boîte aux lettres.
  Les producteurs glissent leurs messages dedans.
  Les consommateurs viennent les récupérer.
  La boîte aux lettres (RabbitMQ) garde tout bien rangé jusqu’à ce que quelqu’un passe.

  Pourquoi c’est utile ?
  Parce que dans une application, tous les services ne travaillent pas à la même vitesse.
    👉 Tu passes une commande en ligne → ton appli la dépose dans la boîte.
    👉 Le service qui envoie l’email de confirmation viendra la chercher quand il sera prêt.

Résultat :
  Les services n’attendent plus les uns sur les autres.
  Rien ne se perd.
  Le travail peut être partagé entre plusieurs « facteurs ».
  C’est ça, RabbitMQ : un facteur fiable qui distribue les messages sans jamais se tromper de boîte.

# Resume

  Élément	      Rôle	                                    Image simple

  Queue	        File d’attente où les messages attendent	    La boîte aux lettres
  Producer	    Envoie les messages dans la queue	            La personne qui poste la lettre
  Consumer	    Lit et traite les messages de la queue	      Le facteur qui distribue


  Cas	                                        Ce qui se passe
  
  Une queue, plusieurs consumers	            Le message est lu par un seul consumer, puis supprimé
  
  Plusieurs queues liées au même exchange	    Chaque queue reçoit une copie du message, donc plusieurs 
                                              consumers peuvent le lire  

# Lancement Serveur  
  Serveur RabbitMQ
    http://localhost:15672

    login         guest
    password      guest

# Integration SpringBoot

  Fichier 
  - application.properties

    spring.application.name=springboot-starter
    server.port=8080

    spring.rabbitmq.host=localhost
    spring.rabbitmq.port=5672
    spring.rabbitmq.username=guest
    spring.rabbitmq.password=guest

  - pom.xml
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-amqp</artifactId>
    </dependency>


# Test
  
  - Producer
    GET 
      http://localhost:8080/rabbit/send?msg=HelloWorld

    POST 
      http://localhost:8080/rabbit/sendEvent?event=USER_CREATED&userId=123&username=jdoe&email=jdoe@example.com

  - Consumer
    GET 
      http://localhost:8080/rabbit/receive
    
# Gestions des queues et messages dans RabbitMQ Interface

  - Suppression des Messages
    Queues and Streams
    Purge Messages

  - Suppression des Queues
    Queues and Streams
    Delete


