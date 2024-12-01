package orbit.project.member.service

import orbit.project.member.http.MemberRequest
import orbit.project.member.http.MemberResponse
import orbit.project.member.models.MemberEntity
import orbit.project.member.repository.MemberRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class MemberService(
    private val memberRepository: MemberRepository
) {
    //TODO 백엔드 저장 필독사항
    //save(): create와 update를 모두 포함
    //find(): read (단일 조회 또는 목록 조회)
    //update(): 엔티티 수정
    //delete(): 엔티티 삭제

    fun saveMember(memberRequest: MemberRequest): Mono<MemberResponse> {
        //TODO
        //이메일 유효성 검사
        //비밀번호 암호화 ( 내꺼 시큐리티 어노테이션 사용!!!!!!!! 모르면 카톡하기)
        //아이디 중복 검사!
        //비밀번호 유효성 검사 진행하기~ ( 코드 해석하고 코드 이쁘게 써주기~ )

        // MemberRequest를 MemberEntity로 변환
        val saveMember = MemberEntity.fromRequest(memberRequest)
        val resultMemberEntity = memberRepository.save(saveMember) //비동기적으로 저장

        // 저장된 MemberEntity를 MemberResponse로 변환하여 반환
        return MemberResponse.fromEntity(resultMemberEntity)

    }


}