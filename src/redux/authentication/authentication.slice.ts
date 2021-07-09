import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialLoginState = {
    isLoading: false,
    isAuth: false,
    error: "",
};

const authenticationSlice = createSlice({
    name: "authenticationSlice",
    initialState: initialLoginState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state) => {
            state.isLoading = false;
            state.isAuth = true;
            state.error = "";
        },
        loginFail: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.isAuth = false;
            state.error = action.payload;
        },
    },
});

export const { loginPending, loginSuccess, loginFail } = authenticationSlice.actions;

export const selectLoginState = (state: RootState) => state.authenticationSlice;

export default authenticationSlice.reducer;
