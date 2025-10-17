


# Installation java
  
  https://www.oracle.com/java/technologies/downloads/
  
  https://www.oracle.com/java/technologies/downloads/#java8-windows
  https://www.oracle.com/java/technologies/downloads/#java11-windows
  https://www.oracle.com/java/technologies/downloads/#java17-windows
  https://www.oracle.com/java/technologies/downloads/#jdk21-windows
  https://www.oracle.com/java/technologies/downloads/#jdk25-windows

  site        https://www.oracle.com/

  Telecharger
    jdk-25_windows-x64_bin.msi

  Répertoire d'installation par defaut
    C:\Program Files\Java\latest\jre-1.8\bin
  
  Installation personnalise    
    D:\hal\Java\jdk-25\

  Variables d'environnement
    JAVA_HOME         Pointeur vers le répertoire du JDK actif
    PATH              Permet d'exécuter java et javac depuis n'importe où    

  echo %JAVA_HOME%
  echo %PATH%

  !!!!!!! si pas de data
  c'est que la vairable n'existe pas


# Installation Java 8


  D:\hal\java\jdk-1.8
  D:\hal\java\jre1.8.0_451
  D:\hal\Java\jdk-25\

  Lancer la commande pour voir les repertoires
    java -version
    where java

    par defaut ce sera donc
      C:\Program Files (x86)\Common Files\Oracle\Java\java8path\java.exe


  JAVA_HOME = D:\hal\java\jdk-1.8
  # !!!!!!!   Attention le positionner en debut de liste
  PATH = D:\hal\java\jdk-1.8
