import { Route, Routes } from "react-router-dom";
import { Public } from "./Public";
import { Private } from "./Private";
import { Common } from "./Common";
import { routes } from "./routes";

export const AppRoutes = () => {
  const isAuth = false;
  return (
    <Routes>

      {routes.common.map(({ path, component }) =>
        <Route key={path} path={path} element={<Common component={component} />} />)}

      {routes.public.map(({ path, component }) =>
        <Route key={path} path={path} element={<Public isAuth={isAuth} component={component} />} />)}

      {routes.private.map(({ path, component }) =>
        <Route key={path} path={path} element={<Private isAuth={isAuth} component={component} />} />)}

    </Routes>
  );
};
