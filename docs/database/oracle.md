# Principes

  Instance → Database (CDB) → PDB → User/Schema → Table → Record

  PDB (Pluggable Database)
    Par défaut XEPDB1

# Installation
  Oracle Database XE (Express Edition)

  https://www.oracle.com/database/technologies/xe-downloads.html

  Fichier Zip
    OracleXE213_Win64.zip

    setup.exe
    
    Indiquer le repertoire d'installation
      D:\hal\product\21c

    La base sera dans :
      C:\app\danny\product\21c\dbhomeXE\
    Les utilitaires comme sqlplus.exe seront dans :
      C:\app\danny\product\21c\dbhomeXE\bin\      
    TNS Listener, les fichiers de config (tnsnames.ora, listener.ora)
      network/admin.   


  Téléchargez
    SQL Developer

    https://www.oracle.com/tools/downloads/sqldev-downloads.html
    Windows 64-bit with JDK 17 included   
    
    sqldeveloper-24.3.1.347.1826-x64.zip

      Dézippez le fichier
      Exécutez sqldeveloper.exe (dans le dossier sqldeveloper)

  Connexion : localhost:1521:XE avec system / votre_password   
  

# Test installation

  Méthode 1 : Vérifier dans le Gestionnaire des tâches
  Ctrl + Shift + Échap
    Onglet Détails → regarde si msiexec.exe tourne

  Méthode 2 : Regarder les services Windows
    Win + R → tape services.msc
    Regarde si ces services sont créés :
      OracleServiceXE
      OracleXETNSListener

  Méthode 3 : Tester SQL*Plus
    sqlplus system/Oracle123@localhost:1521/XE

  🧨 Si échec :
    Tu trouveras les logs dans :
    C:\Program Files\Oracle\Inventory\logs\         

# Explications Installation
  📦 Base de données conteneur (CDB)        →  localhost:1521
  📦 Base de données pluggable (PDB)        →  localhost:1521/XEPDB1
  🌐 Oracle EM Express (interface web)      →  https://localhost:5500/em    

  localhost:1521
  C'est la base racine (CDB = Container Database)
    Elle contient la structure globale (utilisateurs, configuration Oracle)
    Tu n'utilises presque jamais la CDB pour tes tables
  
  localhost:1521/XEPDB1
  EXPDB1 est une PDB (Pluggable Database)
    C’est dans EXPDB1 que tu vas :
    Créer tes tables (PERSON, FILM, etc.)
    Travailler avec JDBC, Spring Boot, etc.
    Oracle 21c XE n’a qu’une seule PDB par défaut : EXPDB1
    👉 C’est cette URL que tu dois utiliser dans Spring Boot :    

  https://localhost:5500/em
  Interface web de gestion Oracle (Oracle Enterprise Manager Express)
  Accès via navigateur
  Login : system ou sys as sysdba
    Permet de :
      Voir les sessions
      Parcourir les schémas
      Exécuter des requêtes SQL
      Gérer les performances

# Parametres connection
  
  Nom d'utilisateur	    Rôle	              Utilisation

  SYS	                  Super               admin DBA	Accès total (danger !)
                                            Propriétaire du cœur Oracle 
                                            Accès total. 
                                            À éviter sauf maintenance critique.

  SYSDBA	              Mode super-Dba      Sert pour gérer l’instance
                                            (démarrage, arrêt, backup).


  SYSTEM	              Admin “normal”      Utilisateur recommandé
                                            crée des users, tables, séquences,
                                            gère l’espace disque
                                            celui que tu dois utiliser.

  Nom de conteneur      XEPDB1

# Connection SQL
  
  Connection Interface graphique
    https://localhost:5500/em
    https://localhost:5500/em/shell

    User          SYSTEM
    Password      Trustno1
    Conteneur     XEPDB1

  Connection SQL
    sqlplus system/Oracle123@localhost:1521/XE     
      Commande pour avoir le nom de conteneur
    SELECT name, open_mode FROM v$pdbs;

# Creation Database

  sqlplus system/motdepasse@localhost:1521/XEPDB1

  - Verifier : PDB
  SHOW CON_NAME;
  
  - Changement de PDB
  ALTER SESSION SET CONTAINER = XEPDB1;

  - Creation du Schema / User avec password
  CREATE USER admin_user IDENTIFIED BY "Trustno1"
  DEFAULT TABLESPACE USERS
  TEMPORARY TABLESPACE TEMP
  QUOTA UNLIMITED ON USERS;

  - Attribution des droits
  GRANT CREATE SESSION, CREATE TABLE, CREATE SEQUENCE TO admin_user;
