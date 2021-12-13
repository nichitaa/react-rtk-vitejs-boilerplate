import React, { lazy } from "react";

interface IRoute {
  path: string;
  component: React.ReactElement;
}

interface IRoutes {
  public: IRoute[],
  private: IRoute[],
  common: IRoute[]
}

export interface IRouteProps {
  component: React.ReactElement;
  isAuth: boolean;
}

// public 
const PublicPage = lazy(() => import("../pages/PublicPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

// private
const PrivatePage = lazy(() => import("../pages/PrivatePage"));
const LogoutPage = lazy(() => import("../pages/LogoutPage"));

// common
const AboutPage = lazy(() => import("../pages/AboutPage"));


export const routes: IRoutes = {
  public:
    [
      {
        path: "/",
        component: <PublicPage />
      },
      {
        path: "/login",
        component: <LoginPage />
      }
    ]
  ,
  private: [
    {
      path: "/private",
      component: <PrivatePage />
    },
    {
      path: "/logout",
      component: <LogoutPage />
    }
  ],
  common: [
    {
      path: "/about",
      component: <AboutPage />
    }
  ]
};