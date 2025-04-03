//create store
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { persistReducer, persistStore } from 'redux-persist';

const createNoopStorage = () => {
    return {
        getItem(){
            return Promise.resolve(null);
        },
        setItem(value:unknown){
            return Promise.resolve(value);
        },
        removeItem(){
            return Promise.resolve();
        }
    }
}

//persist store keep state data in local storage

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

//create config object
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'], //list of reducers to persist
}

//create persisted reducer


//create root reducer
const rootReducer = combineReducers({
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
    }),
});

export const persistor = persistStore(store);
export type IRootState = ReturnType<typeof store.getState>;

