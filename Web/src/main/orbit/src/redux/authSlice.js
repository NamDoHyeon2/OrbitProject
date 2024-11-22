import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload; // 로그인 시 사용자 데이터를 저장
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null; // 로그아웃 시 사용자 데이터를 초기화
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
