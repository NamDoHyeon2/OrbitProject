package orbit.project.member.dto

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table
import java.time.LocalDateTime

@Table("member") // 실제 DB 테이블 이름
data class MemberDto(
    @Id
    val memberId: Long, // PK로 설정
    val groupId: Long?,
    val roleId: Long?,
    val name: String,
    val email: String,
    val id: String,
    val passwd: String,
    val authType: String,
    val lastLogin: LocalDateTime? = null,
){

}