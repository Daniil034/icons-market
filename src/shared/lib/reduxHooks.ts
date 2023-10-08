import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {StateSchema} from "../../app/providers/store/types/StateSchema";
import {AppDispatch} from "../../app/providers/store/config/store";


export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;