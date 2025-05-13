import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
    {
        path: "/",
        index: true,
        children: <Home />
    },
    {
        path: "user_management",
        index: false,
        children: <UserManagement />
    },
    {
        path: "setting",
        index: false,
        children: <Setting />
    },
    {
        path: "*",
        index: false,
        children: <Page404 />
    },
]