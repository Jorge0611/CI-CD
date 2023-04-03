import { Friend, useFriendListStore } from "@/stores/friend";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconHeart,
  IconMessage,
  IconShare,
  IconUserMinus,
  IconUserPlus,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

export interface PostCardProps extends Friend {
  postId: string;
  location: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
}

export function PostCard(props: PostCardProps) {
  const friendsStore = useFriendListStore();
  const isFriend = friendsStore.friendList.some(
    (friend) => friend.name === props.name
  );
  const navigate = useNavigate();

  return (
    <Card mb={"lg"} withBorder>
      <Stack>
        <Flex direction={"row"} justify={"space-between"} align={"center"}>
          <Flex direction={"row"} align={"center"}>
            <Avatar src={props.avatar} radius="xl" size={"lg"} />
            <Space w="md" />
            <Flex direction={"column"}>
              <Anchor
                component={Link}
                to={`/${props.username}`}
                fz={"sm"}
                fw={700}
              >
                {props.name}
              </Anchor>
              <Text fz={"xs"}>{props.location}</Text>
            </Flex>
          </Flex>
          <ActionIcon
            onClick={() => {
              if (isFriend) {
                friendsStore.removeFriend(props.id);
              } else {
                friendsStore.addFriend(props);
              }
            }}
            color="blue"
            variant="light"
          >
            {isFriend ? (
              <IconUserMinus size="1.125rem" />
            ) : (
              <IconUserPlus size="1.125rem" />
            )}
          </ActionIcon>
        </Flex>

        <Text
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/${props.username}/post/${props.postId}`)}
        >
          {props.description}
        </Text>

        <Image radius={"md"} src={props.image} />

        <Flex direction={"row"} justify={"space-between"} align={"center"}>
          <Group>
            <Button
              leftIcon={<IconHeart size="1.5rem" />}
              variant="subtle"
              color="dark"
            >
              {props.likes}
            </Button>
            <Button
              leftIcon={<IconMessage size="1.5rem" />}
              variant="subtle"
              color="dark"
            >
              {props.comments}
            </Button>
          </Group>

          <ActionIcon>
            <IconShare size="1.5rem" />
          </ActionIcon>
        </Flex>
      </Stack>
    </Card>
  );
}
