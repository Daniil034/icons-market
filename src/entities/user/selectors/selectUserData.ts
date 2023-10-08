import {StateSchema} from "app/providers/store";

export const selectUserData = (state: StateSchema) => state.user.auth;