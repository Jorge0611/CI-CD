import { registerFn, RegisterFormValues } from "@/api/auth";
import {
  Anchor,
  Button,
  Center,
  Divider,
  FileInput,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Link, useNavigate } from "react-router-dom";

export function Register(props: PaperProps) {
  const navigate = useNavigate();
  const form = useForm<RegisterFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      location: "",
      picture: null,
      email: "",
      password: "",
    },
    validate: {
      firstName: (val) => (val.length <= 2 ? "Invalid name" : null),
      lastName: (val) => (val.length <= 2 ? "Invalid name" : null),
      location: (val) => (val.length <= 2 ? "Invalid location" : null),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  async function handleSubmit(values: RegisterFormValues) {
    const response = await registerFn(values);

    if (response) {
      notifications.show({
        title: "User created",
        message: "You can now login",
      });
      navigate("/auth/login");
    }
  }

  return (
    <Center>
      <Paper radius="md" p="xl" w={"60%"} withBorder {...props}>
        <Text size="lg" weight={500}>
          Welcome to Hook, please register to continue
        </Text>

        <Divider labelPosition="center" my="xl" />

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              required
              label="Fist Name"
              placeholder="John"
              value={form.values.firstName}
              onChange={(event) =>
                form.setFieldValue("firstName", event.currentTarget.value)
              }
              error={form.errors.firstName && "Invalid email"}
              radius="md"
            />

            <TextInput
              required
              label="Last Name"
              placeholder="Doe"
              value={form.values.lastName}
              onChange={(event) =>
                form.setFieldValue("lastName", event.currentTarget.value)
              }
              error={form.errors.lastName && "Invalid email"}
              radius="md"
            />

            <TextInput
              required
              label="Location"
              value={form.values.location}
              onChange={(event) =>
                form.setFieldValue("location", event.currentTarget.value)
              }
              error={form.errors.location && "Invalid email"}
              radius="md"
            />

            <FileInput
              label="Profile Picture"
              placeholder="Select file"
              value={form.values.picture}
              onChange={(event) => {
                if (event) {
                  form.setFieldValue("picture", event);
                }
              }}
              error={form.errors.picture && "Invalid email"}
              radius="md"
            />

            <TextInput
              required
              label="Email"
              autoComplete={"new-password"}
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
              to={"/auth/login"}
              type="button"
              color="dimmed"
              size="xs"
            >
              Already have an account? Log in
            </Anchor>
            <Button type="submit" radius="xl">
              Register
            </Button>
          </Group>
        </form>
      </Paper>
    </Center>
  );
}
