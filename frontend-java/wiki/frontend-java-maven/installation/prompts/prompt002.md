voila mon web.xml


<?xml version="1.0" encoding="UTF-8"?>

<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="https://jakarta.ee/xml/ns/jakartaee"
	xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
	id="WebApp_ID" version="6.0">

  <display-name>Archetype Created Web Application</display-name>
  
  
  	<servlet>
		<servlet-name>Home</servlet-name>
		<servlet-class>com.ganatan.apps.Home</servlet-class>
	</servlet>
	<servlet>
		<servlet-name>About</servlet-name>
		<servlet-class>com.ganatan.apps.About</servlet-class>
	</servlet>
	<servlet>
		<servlet-name>Contact</servlet-name>
		<servlet-class>com.ganatan.apps.Contact</servlet-class>
	</servlet>

	<servlet-mapping>
		<servlet-name>Home</servlet-name>
		<url-pattern>/</url-pattern>
	</servlet-mapping>
	<servlet-mapping>
		<servlet-name>About</servlet-name>
		<url-pattern>/about</url-pattern>
	</servlet-mapping>
	<servlet-mapping>
		<servlet-name>Contact</servlet-name>
		<url-pattern>/contact</url-pattern>
	</servlet-mapping>
	
  
</web-app>

