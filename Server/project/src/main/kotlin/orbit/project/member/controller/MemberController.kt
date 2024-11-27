package orbit.project.member.controller

import orbit.project.member.dto.MemberDto
import orbit.project.member.http.MemberRequest
import orbit.project.member.http.MemberResponse
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/member")
class MemberController {

    // 회원가입
    @PostMapping("/register")
    fun authRegister(@RequestBody memberRequest: MemberRequest): Mono<MemberResponse> {
        //ToDO 추후 회원가입 로직 제작 예정
        // 현재는 빈 Mono 객체 반환
        return Mono.empty()  // 빈 Mono 반환
    }


}