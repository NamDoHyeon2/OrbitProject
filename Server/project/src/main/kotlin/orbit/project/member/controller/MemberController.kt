package orbit.project.member.controller

import orbit.project.Repository.MemberRepository
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
class MemberController(
    private val memberRepository: MemberRepository // 생성자로 주입
) {

    // 회원가입
    @PostMapping("/register")
    fun authRegister(@RequestBody memberRequest: MemberRequest): Mono<MemberResponse> {
        val memberDto = MemberDto(
            memberId = 0L, // 자동 생성되는 ID
            groupId = null,
            roleId = null,
            name = "", // `MemberDto`에 이름이 있지만 `MemberRequest`에서 없음, 필요 시 수정
            email = memberRequest.email,
            id = memberRequest.id,
            passwd = memberRequest.passwd,
            authType = "USER", // 기본값 설정
            lastLogin = null
        )
        return memberRepository.save(memberDto)
            .map { savedMember ->
                MemberResponse(
                    id = savedMember.id,
                    passwd = savedMember.passwd,
                    email = savedMember.email
                )
            }
    }




}