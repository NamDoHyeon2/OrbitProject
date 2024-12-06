import authApi from '../api/index';
import {kakaoSignup} from "@/pages/signup/api";

export const useAuthModel = () => {
    // 이메일/비밀번호 로그인
    const loginWithEmailPassword = async (email, password) => {
        try {
            const userData = await authApi.loginWithEmailPassword(email, password);
            console.log('Login Successful (Email/Password):', userData);
            alert('로그인 성공!');
        } catch (error) {
            console.error('Login Failed (Email/Password):', error.response?.data?.message || error.message);
            alert(error.response?.data?.message || '이메일/비밀번호 로그인에 실패했습니다.');
        }
    };

    // 구글 로그인
    const loginWithGoogle = async (token) => {
        try {
            const userData = await authApi.loginWithGoogle(token);
            console.log('Login Successful (Google):', userData);
            alert('구글 로그인 성공!');
        } catch (error) {
            console.error('Login Failed (Google):', error.response?.data?.message || error.message);
            alert(error.response?.data?.message || '구글 로그인에 실패했습니다.');
        }
    };

    // 카카오 로그인
    const loginWithKakao = async () => {
        kakaoSignup();
        try {
            if (!window.Kakao || !window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
            }

            window.Kakao.Auth.login({
                success: async (authObj) => {
                    console.log('Kakao Login Success:', authObj);
                    const userData = await authApi.loginWithKakao(authObj.access_token);
                    console.log('Server Response:', userData);
                    alert('카카오 로그인 성공!');
                },
                fail: (err) => {
                    console.error('Kakao Login Failed:', err);
                    alert('카카오 로그인에 실패했습니다.');
                },
            });
        } catch (error) {
            console.error('Login Failed (Kakao):', error.response?.data?.message || error.message);
            alert(error.response?.data?.message || '카카오 로그인에 실패했습니다.');
        }
    };

    return {
        loginWithEmailPassword,
        loginWithGoogle,
        loginWithKakao,
    };
};
