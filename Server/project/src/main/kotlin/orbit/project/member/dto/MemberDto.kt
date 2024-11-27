package orbit.project.member.dto

import java.time.LocalDateTime

data class MemberDto(
    val memberId: Long,
    val groupId: Long?,
    val roleId: Long?,
    val name: String,
    val email: String,
    val passwd: String,
    val authType: String,
    val lastLogin: LocalDateTime? = null,
) {

}