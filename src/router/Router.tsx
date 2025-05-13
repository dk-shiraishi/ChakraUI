import { memo, type FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route index element={<Login />}/>
            <Route path="/home">
                {homeRoutes.map((route) => 
                    route.index ? (
                    <Route key={route.path} index element={route.children} /> 
                    ) : (
                    <Route key={route.path} path={route.path} element={route.children} />
                    )
                )}
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
})