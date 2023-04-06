import { addFriend } from "@/api/user";
import { useFriends } from "@/hooks/useFriends";
import { useUser } from "@/hooks/useUser";
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
import { useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();
  const { data: user, isLoading: isUserLoading } = useUser();
  const { data: friends, isLoading: isFriendsLoading } = useFriends();

  if (isUserLoading || isFriendsLoading) {
    return <div>Loading...</div>;
  }

  if (!user) return <div>no user</div>;
  if (!friends) return <div>no friends</div>;

  function handleFriend(friendId: string) {
    addFriend(user?._id || "", friendId).then(async () => {
      await queryClient.invalidateQueries({ queryKey: ["friends"] });
    });
  }

  return (
    <Stack>
      {friends.map((friend) => (
        <Flex
          key={friend._id}
          direction={"row"}
          justify={"space-between"}
          align={"center"}
        >
          <Flex direction={"row"} align={"center"}>
            <Avatar
              src={"/api/assets/" + friend.picturePath}
              radius="xl"
              size={"lg"}
            />
            <Space w="md" />
            <Flex direction={"column"}>
              <Text fz={"sm"} fw={700}>
                {friend.firstName + " " + friend.lastName}
              </Text>
              <Text fz={"xs"}>Worker</Text>
            </Flex>
          </Flex>
          <ActionIcon
            onClick={() => handleFriend(friend._id)}
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
