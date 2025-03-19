mon web.xml


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

    <!-- ✅ Configuration Java 21 -->
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <maven.compiler.release>21</maven.compiler.release>
    </properties>

    <dependencies>
        <!-- ✅ Jakarta EE 10 API -->
        <dependency>
            <groupId>jakarta.platform</groupId>
            <artifactId>jakarta.jakartaee-api</artifactId>
            <version>10.0.0</version>
            <scope>provided</scope>
        </dependency>

        <!-- ✅ JUnit pour les tests -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.1</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <finalName>frontend-java-maven</finalName>

        <plugins>
            <!-- ✅ Plugin Maven Compiler pour Java 21 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.13.0</version>
                <configuration>
                    <source>21</source>
                    <target>21</target>
                    <release>21</release>
                </configuration>
            </plugin>

            <!-- ✅ Plugin Maven War pour générer un .war -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.4.0</version>
            </plugin>

            <!-- ✅ Plugin Maven Surefire pour exécuter les tests -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.3.0</version>
            </plugin>
        </plugins>
    </build>

</project>

pour mon application frontend java  avec eclipse et maven

java 21
Tomcat 11

improve et check



mon web.xml


<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
         https://jakarta.ee/xml/ns/jakartaee/web-app_5_0.xsd"
         version="5.0">
         
    <display-name>java-example-starter</display-name>

    <!-- ✅ Déclaration de la servlet -->
    <servlet>
        <servlet-name>HomeServlet</servlet-name>
        <servlet-class>com.ganatan.apps.Home</servlet-class>
    </servlet>

    <!-- ✅ Mapping de la servlet -->
    <servlet-mapping>
        <servlet-name>HomeServlet</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

</web-app>

pour mon application frontend java  avec eclipse et maven

java 21
Tomcat 11

improve et check
