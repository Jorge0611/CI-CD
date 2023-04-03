import { LogIn } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import { RouteObject } from "react-router-dom";

export const authRoutes: RouteObject[] = [
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "register",
    element: <Register />,
  },
];
