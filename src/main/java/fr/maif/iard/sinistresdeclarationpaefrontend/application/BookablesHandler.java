package fr.maif.iard.sinistresdeclarationpaefrontend.application;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.vavr.API;
import io.vavr.control.Try;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import static java.nio.charset.StandardCharsets.UTF_8;

@Component
public class BookablesHandler {

    @Autowired
    private ObjectMapper mapper;

    @Value("classpath:json/bookables.json")
    Resource bookables;


    public Mono<ServerResponse> getBookables(ServerRequest serverRequest) {
        String text = API.Try(() -> new String(bookables.getInputStream().readAllBytes(), UTF_8))
                .getOrElse("Erreur de chargement du fichier json/bookables.json");
        return ServerResponse.ok()
                .bodyValue(text);
    }
}
