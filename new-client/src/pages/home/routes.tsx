import { Home } from "@/pages/home/Home";
import { RouteObject } from "react-router-dom";

export const homeRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
];
