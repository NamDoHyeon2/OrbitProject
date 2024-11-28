import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    signupSuccess: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
        signup(state, action) {
            state.signupSuccess = true; // 회원가입 성공 상태 추가
            state.user = action.payload; // 회원가입 시 사용자 데이터 저장
        },
    },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
