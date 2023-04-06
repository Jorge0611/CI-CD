import { AuthWrapper } from "@/components/AuthWrapper";
import { PublicLayout } from "@/layouts/PublicLayout";
import { LogIn } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import { LandingPage } from "@/pages/misc/LandingPage";
import { RouteObject } from "react-router-dom";

export const publicRoutes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "auth",
        element: <AuthWrapper />,
        children: [
          {
            path: "login",
            element: <LogIn />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
    ],
  },
];
