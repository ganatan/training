# Principes

🐇 RabbitMQ → La boîte aux lettres
  Tu mets une lettre dans une boîte.
  Le facteur (consumer) vient, prend la lettre et elle disparaît.
  Si tu veux que deux personnes lisent la même lettre, il faut deux boîtes différentes avec une copie dans chaque.

🦄 Kafka → La bibliothèque
  Chaque événement est un livre ajouté sur une étagère.
  Plusieurs lecteurs (consumers) peuvent venir lire le même livre, chacun à son rythme.
  Le livre reste dans la bibliothèque un certain temps, même après lecture.

# Controle

  Zookeeper → écoute sur localhost:2181 (coordination du cluster Kafka).
  Kafka broker → écoute sur localhost:9092