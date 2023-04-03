import { FriendListCard } from "@/components/user/FriendListCard";
import { UserInfoCard } from "@/components/user/UserInfoCard";
import { Grid } from "@mantine/core";
import { Outlet } from "react-router-dom";

export function UserLayout() {
  return (
    <Grid mx={"md"}>
      <Grid.Col xs={12} md={3}>
        <UserInfoCard />
      </Grid.Col>

      <Grid.Col xs={12} md={6}>
        <Outlet />
      </Grid.Col>

      <Grid.Col xs={12} md={3}>
        <FriendListCard />
      </Grid.Col>
    </Grid>
  );
}
