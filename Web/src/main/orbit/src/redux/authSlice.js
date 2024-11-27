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
            state.user = action.payload; // 사용자 정보 저장
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null; // 상태 초기화
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

