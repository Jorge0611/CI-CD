import { useFriendListStore } from "@/stores/friend";
import {
  ActionIcon,
  Avatar,
  Card,
  Flex,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { IconUserMinus } from "@tabler/icons-react";

export function FriendListCard() {
  return (
    <Card withBorder>
      <Text fz={"md"} fw={700}>
        Friend List
      </Text>
      <Space h="md" />
      <FriendCard />
    </Card>
  );
}

const FriendCard = () => {
  const friendListStore = useFriendListStore();

  return (
    <Stack>
      {friendListStore.friendList.map((friend) => (
        <Flex direction={"row"} justify={"space-between"} align={"center"}>
          <Flex direction={"row"} align={"center"}>
            <Avatar src={friend.avatar} radius="xl" size={"lg"} />
            <Space w="md" />
            <Flex direction={"column"}>
              <Text fz={"sm"} fw={700}>
                {friend.name}
              </Text>
              <Text fz={"xs"}>{friend.profession}</Text>
            </Flex>
          </Flex>
          <ActionIcon
            onClick={() => friendListStore.removeFriend(friend.id)}
            color="blue"
            variant="light"
          >
            <IconUserMinus size="1.125rem" />
          </ActionIcon>
        </Flex>
      ))}
    </Stack>
  );
};
