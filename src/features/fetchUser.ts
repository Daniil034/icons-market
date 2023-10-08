import {createAsyncThunk} from "@reduxjs/toolkit";
import userData from '../shared/assets/user.json';
import {userActions} from "../entities/user/slice/userSlice";
import {User} from "../entities/user/types/User";

export const fetchUser = createAsyncThunk<User, void, { rejectValue: string }>(
    'user/fetch',
    async (_, thunkAPI) => {
        try {
            await new Promise(res => setTimeout(res, 2000));
            thunkAPI.dispatch(userActions.setUser(userData));
            return userData as User;
        } catch (e) {
            const error = e as Error;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)