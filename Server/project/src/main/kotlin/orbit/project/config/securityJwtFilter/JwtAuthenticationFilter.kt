package orbit.project.config.securityJwtFilter

import org.springframework.security.core.Authentication
import org.springframework.security.web.server.authentication.ServerAuthenticationConverter
import org.springframework.web.server.ServerWebExchange
import reactor.core.publisher.Mono


class JwtAuthenticationFilter() : ServerAuthenticationConverter{

    override fun convert(exchange: ServerWebExchange?): Mono<Authentication> {
        TODO("Not yet implemented")
    }

}