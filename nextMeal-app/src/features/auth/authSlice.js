import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
    },
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