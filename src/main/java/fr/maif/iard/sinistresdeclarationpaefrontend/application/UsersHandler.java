package fr.maif.iard.sinistresdeclarationpaefrontend.application;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.vavr.API;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import static java.nio.charset.StandardCharsets.UTF_8;

@Component
public class UsersHandler {

    @Autowired
    private ObjectMapper mapper;

    @Value("classpath:json/users.json")
    Resource users;


    public Mono<ServerResponse> getUsers(ServerRequest serverRequest) {
        String text = API.Try(() -> new String(users.getInputStream().readAllBytes(), UTF_8))
                .getOrElse("Erreur de chargement du fichier json/users.json");
        return ServerResponse.ok()
                .bodyValue(text);
    }
}
