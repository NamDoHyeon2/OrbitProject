package orbit.project.member.repository

import orbit.project.member.models.MemberEntity
import org.springframework.data.repository.reactive.ReactiveCrudRepository

interface MemberRepository : ReactiveCrudRepository<MemberEntity, Long> {
    
}