import { privateRoutes } from "@/routes/private";
import { publicRoutes } from "@/routes/public";
import { useAuthStore } from "@/stores/authStore";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

export function AppRoutes() {
  const { token } = useAuthStore();

  const routes = token ? privateRoutes : publicRoutes;

  const router = createBrowserRouter([
    ...routes,
    { path: "*", element: <Navigate to={"/"} /> },
  ]);

  return <RouterProvider router={router} />;
}
