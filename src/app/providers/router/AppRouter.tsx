import {Route, Routes} from "react-router-dom";
import {routesConfig} from "./config";

export function AppRouter() {
    return (
        <Routes>
            {Object.values(routesConfig).map(({element, path}) => (
                <Route
                    key={path}
                    element={element}
                    path={path}
                />
            ))}
        </Routes>
    );
};