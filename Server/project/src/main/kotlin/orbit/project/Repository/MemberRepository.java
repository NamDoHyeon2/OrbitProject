package orbit.project.Repository;

import orbit.project.member.dto.MemberDto;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;

public interface MemberRepository extends ReactiveCrudRepository<MemberDto, Long> {
}
