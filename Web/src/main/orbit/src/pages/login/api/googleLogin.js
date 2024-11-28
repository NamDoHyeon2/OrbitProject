export const googleLogin = async (token) => {
    try {
        const response = await fetch('http://localhost:8080/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
        });

        if (!response.ok) {
            throw new Error('Google login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Google login error:', error);
        throw error;
    }
};
