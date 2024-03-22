import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import menuSlice from '../features/menu/menuSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        menu: menuSlice,
    },
});

export default store;