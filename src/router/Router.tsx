import { memo, type FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home">
          {homeRoutes.map((route) =>
            route.index ? (
              <Route
                key={route.path}
                index
                element=<HeaderLayout>{route.children}</HeaderLayout>
              />
            ) : (
              <Route
                key={route.path}
                path={route.path}
                element=<HeaderLayout>{route.children}</HeaderLayout>
              />
            )
          )}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
