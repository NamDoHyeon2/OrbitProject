package orbit.project.utils

import java.time.LocalDateTime

data class TimestampDto(
    val createdAt : LocalDateTime,
    val updatedAt : LocalDateTime = LocalDateTime.now() //호출시에 항상 업데이트 시간을 최신으로!
) {


}