import { FC, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { IRouteProps } from "./routes";

export const Public: FC<IRouteProps> = ({ component, isAuth }): React.ReactElement => (
  isAuth
    ? <Navigate to="/profile" />
    : <Suspense fallback={<>...</>}>
      {component}
    </Suspense>
);


