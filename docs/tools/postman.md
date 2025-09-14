# Installation
  Installer l'agent
  
  Postman-Agent-win64-0.4.63-Setup.exe

# Execution de Postman
  https://web.postman.co/

# Methodes CRUD

  Méthode	   URL	                              Body (JSON)

  GET	       http://localhost:8080/persons
  GET	       http://localhost:8080/persons/1

  POST	     http://localhost:8080/persons	    { "name": "Ridley Scott" }
  PUT	       http://localhost:8080/persons/3	  { "name": "Steven Spielberg (updated)" }
  DELETE	   http://localhost:8080/persons/2

  # Parametres Postman
    POST
      Body / Raw / JSON