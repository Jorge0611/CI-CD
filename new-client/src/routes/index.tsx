import { privateRoutes } from "@/routes/private";
import { publicRoutes } from "@/routes/public";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

export function AppRoutes() {
  const isAuth = false;

  const commonRoutes: RouteObject[] = [
    {
      path: "*",
      element: <>Not Found</>,
    },
  ];

  const routes = isAuth ? privateRoutes : publicRoutes;
  const router = createBrowserRouter([...routes, ...commonRoutes]);
  return <RouterProvider router={router} />;
}
