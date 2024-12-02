package orbit.project.member.service

import orbit.project.member.http.MemberRequest
import orbit.project.member.http.MemberResponse
import orbit.project.member.models.MemberEntity
import orbit.project.member.repository.MemberRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono
import java.lang.reflect.Member

@Service
class MemberService(
    private val memberRepository: MemberRepository,
    private val passwordEncoder : PasswordEncoder // PasswordEncoder 주입
) {
    //TODO 백엔드 저장 필독사항
    //save(): create와 update를 모두 포함
    //find(): read (단일 조회 또는 목록 조회)
    //update(): 엔티티 수정
    //delete(): 엔티티 삭제

    fun saveMember(memberRequest: MemberRequest): Mono<MemberResponse> {
        //TODO 구글,카카오,네이버 토큰 값 받아서 정보 가져오기!
        //잘못된거 있으면 피드백 해줘~~

        // 이메일 유효성 검사 boolean 형식
        // 만약 이메일 형식이 맞지 않을경우 에러 출력 else 문에는 뭐써야하지..?
        if (!isValidEmail(memberRequest.memberEmail)) {
            return Mono.error(IllegalArgumentException("유효하지 않은 이메일 형식입니다."))
        }

        // 비밀번호 유효성 검사 boolean 형식
        // 마찬가지로 여기 else 문에는 뭐써야하지..?
        if (!isValidPassword(memberRequest.memberPassword)) {
            return Mono.error(IllegalArgumentException("비밀번호는 8~20자이며, 숫자, 문자, 특수문자를 포함해야 합니다."))
        }

        // 아이디 중복 검사 후 저장 및 반환
        return memberRepository.existsByLoginId(memberRequest.memberLoginId)
            .flatMap { exists ->
                if (exists) {
                    Mono.error(IllegalArgumentException("이미 사용 중인 아이디입니다: ${memberRequest.memberLoginId}"))
                } else {
                    // 비밀번호 암호화
                    val encryptedPassword = passwordEncoder.encode(memberRequest.memberPassword)

                    // MemberRequest를 MemberEntity로 변환
                    val saveMember = MemberEntity.fromRequest(
                        memberRequest.copy(memberPassword = encryptedPassword) //암호화된 비밀번호로 저장
                    )

                    // 비동기 저장 작업 실행
                    memberRepository.save(saveMember)
                }
            }
            .flatMap { resultMemberEntity ->
                // 저장된 MemberEntity를 MemberResponse로 변환하여 반환
                MemberResponse.fromEntity(Mono.just(resultMemberEntity))
            }
    }

    // 이메일 유효성 검사 함수
    fun isValidEmail(email: String): Boolean {
        val emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$"
        return email.matches(Regex(emailRegex))
    }

    // 비밀번호 유효성 검사 함수
    fun isValidPassword(password: String): Boolean {
        val regex = "^(?=.*[!@#$%^&*()_+=-])(?=.*[A-Z]).{8,20}$"
        return password.matches(Regex(regex))
    }

}