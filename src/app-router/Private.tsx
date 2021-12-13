import { FC, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { IRouteProps } from "./routes";

export const Private: FC<IRouteProps> = ({ component, isAuth }): React.ReactElement => (
  !isAuth
    ? <Navigate to="/login" />
    : <Suspense fallback={<>...</>}>
      {component}
    </Suspense>
);
