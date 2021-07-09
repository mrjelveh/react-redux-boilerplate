import {configureStore} from '@reduxjs/toolkit';
import authenticationSlice from "./authentication/authentication.slice";
import {Middlewares} from "./middlewares/middlewares";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        authenticationSlice: authenticationSlice
    },
    middleware: Middlewares
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;