import {UserSchema, User} from "../types/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: UserSchema = {};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.auth = action.payload;
        }
    }
})

export const userActions = userSlice.actions

export const userReducer = userSlice.reducer