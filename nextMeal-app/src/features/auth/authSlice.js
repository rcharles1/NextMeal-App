import { createSlice } from '@reduxjs/toolkit';
import { clearWishlist } from '../wishlist/wishlistSlice'; 

export const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false, user: null, authToken: null },
    reducers: {
        signIn: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.authToken = action.payload.authToken
        },
        signUp: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.authToken = action.payload.authToken
        },
        signOut: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.authToken = null;
            localStorage.removeItem('user');
            dispatch(clearWishlist());
        }

    }
});

export const { signIn, signUp, signOut } = authSlice.actions;

export default authSlice.reducer;