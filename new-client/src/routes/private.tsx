import { PrivateLayout } from "@/layouts/PrivateLayout";
import { UserLayout } from "@/layouts/UserLayout";
import { Home } from "@/pages/user/Home";
import { Profile } from "@/pages/user/Profile";
import { Post } from "@/pages/user/Post";
import { RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject[] = [
  {
    element: <PrivateLayout />,
    children: [
      {
        element: <UserLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "post",
            children: [
              {
                index: true,
                element: <Home />,
              },
              {
                path: ":postId",
                element: <Post />,
              },
            ],
          },
          {
            path: "user",
            children: [
              {
                path: ":userId",
                element: <Profile />,
              },
            ],
          },
        ],
      },
    ],
  },
];
