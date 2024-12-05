import axios from 'axios';

// 일반 회원가입 API
export const signup = async (formData) => {
    const response = await axios.post('${API_BASE_URL}/signup', formData, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};

// Google 회원가입 API
export const googleSignup = async (googleToken) => {
    const response = await axios.post('${API_BASE_URL}/google-signup', { token: googleToken }, {
        headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
};

// Kakao 회원가입 API
export const kakaoSignup = () => {
    if (window.Kakao && window.Kakao.Auth) {
        window.Kakao.Auth.authorize({
            redirectUri: 'http://localhost:3000/oauth/callback/kakao',
        });
    } else {
        alert('카카오 SDK 로드 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        console.error('Kakao SDK is not loaded.');
    }
};

// NICE 본인인증 API
export const niceAuth = async (phoneNumber) => {
    const apiUrl = 'https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb'; // 나이스 본인 인증 API 엔드포인트
    try {
        const response = await axios.post(apiUrl, { phoneNumber }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_NICE_API_KEY', // 나이스에서 제공받은 API 키
            },
        });
        return response.data;
    } catch (error) {
        console.error('NICE 본인인증 중 오류:', error.response?.data || error.message);
        throw error;
    }
};

// Naver 로그인 처리는 SignupModel에서 직접 수행합니다.
