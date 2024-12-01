package orbit.project.member.controller

import orbit.project.member.http.MemberRequest
import orbit.project.member.http.MemberResponse
import orbit.project.member.service.MemberService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/members")
class MemberController(
    private val memberService : MemberService
) {

    // 회원가입
    @PostMapping("/register")
    fun authRegister(@RequestBody memberRequest: MemberRequest): Mono<MemberResponse> =
        memberService.saveMember(memberRequest)

//
//    // 회원가입
//    @PostMapping("/register")
//    fun authRegister(@RequestBody memberRequest: MemberRequest): Mono<MemberResponse> {
//        //- > 컨트롤러에서 처리 x
//        //이건 어디서 나온거지//?
//        val memberDto = MemberDto(
//            memberId = 0L, // 자동 생성되는 ID
//            groupId = null,
//            roleId = null,
//            name = "", // `MemberDto`에 이름이 있지만 `MemberRequest`에서 없음, 필요 시 수정
//            email = memberRequest.email,
//            id = memberRequest.id,
//            passwd = memberRequest.passwd,
//            authType = "USER", // 기본값 설정 -? 이거 말고 무슨 로그인인지 해야할듯
//            lastLogin = null
//        )
//
//        return memberRepository.save(memberDto)
//            .map { savedMember ->
//                MemberResponse(
//                    id = savedMember.id,
//                    passwd = savedMember.passwd,
//                    email = savedMember.email
//                )
//            }
//    }




}