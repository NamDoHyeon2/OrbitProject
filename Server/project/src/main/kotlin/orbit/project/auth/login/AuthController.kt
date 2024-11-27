package orbit.project.auth.login

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/api/auth")
class AuthController {

    //로그인 컨트롤러
    @PostMapping("/login")
    fun authLogin(){

    }

    //회원가입
    @PostMapping("/register")
    fun authRegister(){

    }

}