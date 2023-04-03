import { Profile } from "@/pages/user/Profile";
import { UserPost } from "@/pages/user/UserPost";
import React from "react";
import { RouteObject } from "react-router-dom";

export const userRoutes: RouteObject[] = [
  {
    index: true,
    element: <Profile />,
  },
  {
    path: "post/:postId",
    element: <UserPost />,
  },
];
