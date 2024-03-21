import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        signUp: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        signOut: (state) => {
            state.user = null;
        }
    }
});

export const { signIn, signUp, signOut } = authSlice.actions;

export default authSlice.reducer;