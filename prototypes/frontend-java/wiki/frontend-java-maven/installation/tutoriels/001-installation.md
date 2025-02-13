- Creer un  frontend avec java


Create New / Project / Maven / Maven Project

Sélectionnez un archétype

Catalog : Maven Central
Filter : org.apache.maven
Group Id : org.apache.maven.archetypes
Artifact Id : maven.archetype-webapp
Indiquer 

Group Id : com.ganatan
Artifact Id : frontend-java-maven
Package : com.ganatan


Dans console Blocage à 33%
Repondre Y à la question

# Adapter pom.xml

avec

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<maven.compiler.source>21</maven.compiler.source>
		<maven.compiler.target>21</maven.compiler.target>
	</properties>

	<dependencies>
		<dependency>
			<groupId>jakarta.servlet</groupId>
			<artifactId>jakarta.servlet-api</artifactId>
			<version>6.0.0</version>
			<scope>provided</scope>
		</dependency>
	</dependencies>




<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.ganatan</groupId>
	<artifactId>frontend-java-maven</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>war</packaging>

	<name>frontend-java-maven Maven Webapp</name>
	<url>http://www.example.com</url>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<maven.compiler.source>21</maven.compiler.source>
		<maven.compiler.target>21</maven.compiler.target>
	</properties>

	<dependencies>
		<dependency>
			<groupId>jakarta.servlet</groupId>
			<artifactId>jakarta.servlet-api</artifactId>
			<version>6.0.0</version>
			<scope>provided</scope>
		</dependency>

		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.13.1</version>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<finalName>frontend-java-maven</finalName>
		<pluginManagement><!-- lock down plugins versions to avoid using Maven
			defaults (may be moved to parent pom) -->
			<plugins>
				<plugin>
					<artifactId>maven-clean-plugin</artifactId>
					<version>3.4.0</version>
				</plugin>
				<!-- see
				http://maven.apache.org/ref/current/maven-core/default-bindings.html#Plugin_bindings_for_war_packaging -->
				<plugin>
					<artifactId>maven-resources-plugin</artifactId>
					<version>3.3.1</version>
				</plugin>
				<plugin>
					<artifactId>maven-compiler-plugin</artifactId>
					<version>3.13.0</version>
				</plugin>
				<plugin>
					<artifactId>maven-surefire-plugin</artifactId>
					<version>3.3.0</version>
				</plugin>
				<plugin>
					<artifactId>maven-war-plugin</artifactId>
					<version>3.4.0</version>
				</plugin>
				<plugin>
					<artifactId>maven-install-plugin</artifactId>
					<version>3.1.2</version>
				</plugin>
				<plugin>
					<artifactId>maven-deploy-plugin</artifactId>
					<version>3.1.2</version>
				</plugin>
			</plugins>
		</pluginManagement>
	</build>
</project>

# Creer index.html

delete index.jsp
index.html dans webapp


Rajouter le server Tomcat
Changer les ports
  Tomcat      8081
  http        8082








# web.xml

    <?xml version="1.0" encoding="UTF-8"?>
    <web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns="https://jakarta.ee/xml/ns/jakartaee"
      xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
      id="WebApp_ID" version="6.0">
      <display-name>frontendjava</display-name>
      <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.jsp</welcome-file>
        <welcome-file>index.htm</welcome-file>
        <welcome-file>default.html</welcome-file>
        <welcome-file>default.jsp</welcome-file>
        <welcome-file>default.htm</welcome-file>
      </welcome-file-list>
      
    </web-app>
