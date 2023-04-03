import { homeRoutes } from "@/pages/home/routes";
import { userRoutes } from "@/pages/user/routes";
import { PrivateLayout } from "@/layout/PrivateLayout";
import { UserLayout } from "@/layout/UserLayout";
import { Navigate, RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject[] = [
  {
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"home"} />,
      },
      {
        element: <UserLayout />,
        children: [
          {
            path: "home",
            children: homeRoutes,
          },
          {
            path: ":username",
            children: userRoutes,
          },
        ],
      },
    ],
  },
];
