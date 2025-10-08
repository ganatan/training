# backend-springboot

Java 21 web application packaged as a **JAR executable**, using **Spring Boot + Spring MVC**, with embedded **Tomcat**, Checkstyle, unit tests, and Maven build.

---

## 📊 Updates (Dependency Updates)

Check outdated dependencies and plugins:

```bash
mvn versions:display-dependency-updates
mvn versions:display-plugin-updates
```

---

## 🔧 Lint (Static Analysis)

Run Checkstyle to enforce code style rules:

```bash
mvn checkstyle:check
```

⛔️ Build fails if code does not comply with `checkstyle.xml`.

---

## 🧪 Unit Tests

Run tests and generate JaCoCo coverage report:

```bash
mvn clean test
mvn jacoco:report
```

Coverage report generated at:

```
target/site/jacoco/index.html
```

---

## 🏗️ Build (JAR)

Compile, test, and package as a **JAR executable** with embedded **Tomcat**:

```bash
mvn clean install
```

Generates:

```
target/backend-springboot-1.0.0.jar
```

---

## 🚀 Deployment (Standalone)

Run directly (Tomcat embedded):

```bash
java -jar target/backend-springboot-1.0.0.jar
```

Application accessible at :

```
http://localhost:8080/
```

Example endpoints:

- [http://localhost:8080/](http://localhost:8080/)
- [http://localhost:8080/api/persons](http://localhost:8080/api/persons)

---

## 📦 Useful Maven Commands

```bash
mvn clean
mvn compile
mvn verify
mvn package

mvn test
mvn install
mvn checkstyle:check
mvn dependency:tree
mvn clean test
mvn jacoco:report
```

---

## ✅ Production Summary

```bash
mvn clean install
java -jar target/backend-springboot-1.0.0.jar
```

Application available at :

```
http://localhost:8080/
```

---

📦 Plus besoin de Tomcat externe : **tout est intégré dans le JAR**.

