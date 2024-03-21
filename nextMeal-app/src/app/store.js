import { configureStore } from '@reduxjs/toolkit';
import { signIn, signOut, signUp } from '../features/auth/authSlice';
import menuSlice from '../features/menu/menuSlice';

const store = configureStore({
    reducer: {
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
        menu: menuSlice,
    },
});

export default store;