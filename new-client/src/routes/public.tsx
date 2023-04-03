import { authRoutes } from "@/pages/auth/routes";
import { LandingPage } from "@/pages/landing/LandingPage";
import { PublicLayout } from "@/layout/PublicLayout";
import { RouteObject } from "react-router-dom";

export const publicRoutes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "auth",
        children: authRoutes,
      },
    ],
  },
];
