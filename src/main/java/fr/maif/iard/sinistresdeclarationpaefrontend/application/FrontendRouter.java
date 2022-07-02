package fr.maif.iard.sinistresdeclarationpaefrontend.application;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicate;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.http.MediaType.TEXT_PLAIN;

@Configuration
public class FrontendRouter {

    @Bean
    public RouterFunction<ServerResponse> route(final FrontendHandler sinistresDeclarationPaeFrontendHandler) {
        return RouterFunctions
                .route(RequestPredicates.GET("/").and(RequestPredicates.accept(TEXT_PLAIN)),
                        request -> sinistresDeclarationPaeFrontendHandler.init());
    }

}
