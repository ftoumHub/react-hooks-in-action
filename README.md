# react-hooks-in-action

### Frontend

La version cible de node à utiliser est la version 16.

#### Build

Pour installer les dépendances du projet et construire la partie frontend, exécuter les commandes suivantes
à la racine du projet :
```sh
npm i
npm run build
```

Ceci permet de construire le frontend et de copier le résultat dans le dossier `./src/main/resources/static/assets`,
ce répertoire sera ensuite servi par le backend Spring Boot.


### Backend

La version cible de java à utiliser est la version 17.

#### Build

A la racine du projet, exécuter la commande :
```shell
mvn clean install
```

#### Run

Lancer le backend:
```shell
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

L'application est ensuite disponible à l'url http://localhost:8080

#### Lister certificats dans jvm

keytool -list -v -keystore /chemin/vers/jdk/lib/security/cacerts

Ex : keytool -list -v -keystore /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home/lib/security/cacerts
