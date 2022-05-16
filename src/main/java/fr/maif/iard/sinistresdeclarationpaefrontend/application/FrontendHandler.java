package fr.maif.iard.sinistresdeclarationpaefrontend.application;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.maif.iard.sinistresdeclarationpaefrontend.infrastructure.FrontendConfiguration;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.Map;

import static java.util.Map.entry;
import static org.springframework.http.MediaType.TEXT_HTML;

@Component
public class FrontendHandler {

    private final FrontendConfiguration paeFrontendConfiguration;
    private final ObjectMapper objectMapper;

    public FrontendHandler(FrontendConfiguration paeFrontendConfiguration,
                           ObjectMapper objectMapper) {
        this.paeFrontendConfiguration = paeFrontendConfiguration;
        this.objectMapper = objectMapper;
    }

    @NonNull
    public Mono<ServerResponse> init() {
        return Mono.fromCallable(() -> Map.ofEntries(entry("appTitle", paeFrontendConfiguration.getTitle())))
                .flatMap(params -> ServerResponse.ok().contentType(TEXT_HTML).render("signin", params));
    }
}
