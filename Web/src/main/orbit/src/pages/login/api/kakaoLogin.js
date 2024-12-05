export const kakaoLogin = async (token) => {
    try {
        const response = await fetch('http://localhost:8080/auth/kakao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
        });

        if (!response.ok) {
            throw new Error('Kakao login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Kakao login error:', error);
        throw error;
    }
};
