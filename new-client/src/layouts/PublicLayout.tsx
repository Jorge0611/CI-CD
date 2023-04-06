import { ThemeToggle } from "@/components/ThemeToggle";
import { Box, Button, Group, Header, Space, Title } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <>
      <Box>
        <Header height={60} px="xl">
          <Group position="apart" sx={{ height: "100%" }}>
            <Title order={4}>Hook</Title>
            <Group>
              <ThemeToggle />
              <Button component={Link} to={"/auth/login"} variant="default">
                Log in
              </Button>
              <Button component={Link} to={"/auth/register"}>
                Sign up
              </Button>
            </Group>
          </Group>
        </Header>
      </Box>
      <Space h="xl" />
      <Box mih={"100vh"}>
        <Outlet />
      </Box>
    </>
  );
}
