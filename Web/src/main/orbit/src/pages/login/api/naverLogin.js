export const naverLogin = async (token) => {
    try {
        const response = await fetch('http://localhost:8080/auth/naver', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
        });

        if (!response.ok) {
            throw new Error('Naver login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Naver login error:', error);
        throw error;
    }
};
