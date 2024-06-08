import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

import authReducer from '../features/auth/authSlice';
import menuSlice from '../features/menu/menuSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';
import cartSlice from '../features/cart/cartSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuSlice,
    wishlist: wishlistReducer,
    cartSlice: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
        },
    }),
});

let persistor = persistStore(store);

export { store, persistor };