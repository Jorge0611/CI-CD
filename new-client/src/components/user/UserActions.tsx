import { useUser } from "@/hooks/useUser";
import { useAuthStore } from "@/stores/authStore";
import { Button, Menu } from "@mantine/core";
import {
  IconChevronDown,
  IconMessageCircle,
  IconPhoto,
  IconTrash,
} from "@tabler/icons-react";

export function UserActions() {
  const { removeToken } = useAuthStore();
  const { data: user } = useUser();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant={"outline"} rightIcon={<IconChevronDown />}>
          {user?.firstName + " " + user?.lastName || "User"}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          // disabled={logout.isLoading}
          icon={<IconTrash size={14} />}
          onClick={() => {
            removeToken();
          }}
        >
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
