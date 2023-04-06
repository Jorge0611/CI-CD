import { SearchInput } from "@/components/SearchInput";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserActions } from "@/components/user/UserActions";
import { Box, Group, Header, Title } from "@mantine/core";
import { Outlet } from "react-router-dom";

export function PrivateLayout() {
  return (
    <>
      <Header height={60} px="4rem">
        <Group position="apart" sx={{ height: "100%" }}>
          <Group spacing={"xl"}>
            <Title order={4}>Hook</Title>
            <SearchInput display={{ base: "none", md: "block" }} />
          </Group>
          <Group>
            <ThemeToggle />
            <UserActions />
          </Group>
        </Group>
      </Header>
      <Box mt={"md"} mih={"100vh"}>
        <Outlet />
      </Box>
    </>
  );
}
