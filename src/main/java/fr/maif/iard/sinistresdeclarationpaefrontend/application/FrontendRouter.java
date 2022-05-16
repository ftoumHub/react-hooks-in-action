package fr.maif.iard.sinistresdeclarationpaefrontend.application;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicate;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class FrontendRouter {

    @Bean
    public RouterFunction<ServerResponse> route(final FrontendHandler sinistresDeclarationPaeFrontendHandler) {
        return RouterFunctions
                .route(RequestPredicateExtensions.getTextPlain("/"),
                        request -> sinistresDeclarationPaeFrontendHandler.init())
                .andRoute(RequestPredicateExtensions.getTextPlain("/bookings"),
                        request -> sinistresDeclarationPaeFrontendHandler.init())
                .andRoute(RequestPredicateExtensions.getTextPlain("/bookables"),
                        request -> sinistresDeclarationPaeFrontendHandler.init())
                .andRoute(RequestPredicateExtensions.getTextPlain("/users"),
                        request -> sinistresDeclarationPaeFrontendHandler.init());
    }

    private enum RequestPredicateExtensions {
        ;

        private static RequestPredicate getTextPlain(final String pattern) {
            return RequestPredicates.GET(pattern).and(RequestPredicates.accept(MediaType.TEXT_PLAIN));
        }
    }
}
