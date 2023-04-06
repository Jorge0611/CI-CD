import { LoginCredentials, loginFn } from "@/api/auth";
import { useAuthStore } from "@/stores/authStore";
import {
  Anchor,
  Button,
  Center,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";

export function LogIn(props: PaperProps) {
  const { setToken } = useAuthStore();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length < 6 ? "Password should include at least 6 characters" : null,
    },
  });

  async function handleLogin(values: LoginCredentials) {
    const user = await loginFn(values);
    if (user) {
      setToken(user.jwtToken);
    }
  }

  return (
    <Center>
      <Paper radius="md" p="xl" mx={"auto"} w={500} withBorder {...props}>
        <Text size="lg" weight={500}>
          Welcome to Mantine, login with
        </Text>

        <Divider labelPosition="center" my="xl" />

        <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component={Link}
              to={"/auth/register"}
              type="button"
              color="dimmed"
              size="xs"
            >
              "Don't have an account? Sign Up"
            </Anchor>
            <Button type="submit" radius="xl">
              Log In
            </Button>
          </Group>
        </form>
      </Paper>
    </Center>
  );
}
