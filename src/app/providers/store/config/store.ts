import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "../types/StateSchema";
import {userReducer} from "../../../../entities/user/slice/userSlice";

const combinedReducer: ReducersMapObject<StateSchema> = {
    user: userReducer
}

export const store = configureStore({
    reducer: combinedReducer
})

export type AppDispatch = typeof store.dispatch;
