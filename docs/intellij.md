
# Installation
  
  https://www.jetbrains.com/idea/download/?section=windows

  ideaIU-2025.1.3.exe

  IntelliJ Ultimate Edition 🟢	✔️ support complet des serveurs (Tomcat, GlassFish...)
  IntelliJ Community Edition 🔴	❌ pas de support Tomcat, pas de "Run on Server"

  Il faut Activer ta licence IntelliJ Ultimate
    via
      Files / Settings / Plugins


# Utilisation de Intellij
  Ouvrir un projet
  Selection Maven Project

# Parametrage du JDK Configuré   
  - Test de java
  where java
      C:\Program Files\Common Files\Oracle\Java\javapath

  File > Project Structure (Ctrl+Alt+Maj+S)
    Onglet Project
      Dans Project SDK, clique Add SDK > JDK
      Sélectionne ton dossier JDK local :
        Ex sous Windows : C:\Program Files\Java\jdk-21
      Valide > Apply > OK

# Lancement run et Browser
  run / Edit Configurations
    Modify Options
      Add Before Launch Task
        Laucnh Web Browser
          URL : http://localhost:3003/

# Parametrage de Tomcat
  Run / Edit Configurations

# Parametre Microsoft
  Microsoft Defender
    Exclude Folders      

# Execution
  backend-java
    Type : WebApp Java EE/Jakarta EE (Servlets)
    main() : ❌ Pas de méthode main()
    Fonctionnement : WAR déployé sur un serveur externe (Tomcat, Jetty…)
    Lancement :
      Eclipse : Run on Server
      IntelliJ : Edit Configurations > Tomcat Server > Deployment WAR

  backend-spring
    Type : Spring MVC classique (sans Spring Boot)
    main() : ❌ Pas de méthode main()
    Fonctionnement : WAR avec DispatcherServlet, Spring XML ou JavaConfig, déployé sur Tomcat
    Lancement :
      Eclipse : Run on Server (via WTP)
      IntelliJ : Tomcat Server > Deployment WAR

  backend-springboot
    Type : Spring Boot application
    main() : ✅ Avec méthode main()
    Fonctionnement : Serveur intégré (Tomcat embarqué), lancé via SpringApplication.run(...)
    Lancement :
      Eclipse : clic droit sur Application.java → Run as > Java Application
      IntelliJ : clic droit → Run 'Application.main()'