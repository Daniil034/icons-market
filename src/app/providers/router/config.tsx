import {RouteProps} from "react-router-dom";
import {PricingPage} from "pages/PricingPage/PricingPage";
import {ProfilePage} from "pages/ProfilePage/ProfilePage";
import {NotFoundPage} from "pages/NotFoundPage/NotFoundPage";

enum AppRoutes {
    PRICING = "pricing",
    PROFILE = 'profile',
    NOT_FOUND = 'not-found'
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.PRICING]: '/pricing',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.PRICING]: {
        path: RoutesPath.pricing,
        element: <PricingPage/>
    },
    [AppRoutes.PROFILE]: {
        path: RoutesPath.profile,
        element: <ProfilePage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPath["not-found"],
        element: <NotFoundPage/>
    }
}