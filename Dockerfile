FROM nexus-fabfonc.maif.local:5000/commons/maif-docker-jre17
# add directly the jar
ARG JAR_FILE
RUN test -n "${JAR_FILE}"
ADD ${JAR_FILE} /app/app.jar
CMD ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/app.jar"]
