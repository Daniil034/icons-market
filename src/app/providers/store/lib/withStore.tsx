import {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "../config/store";

export function withStore(children: ReactNode) {
    return function () {
        return (
            <Provider store={store}>
                {children}
            </Provider>
        )
    }
}