import { likePost, Post } from "@/api/post";
import { addFriend } from "@/api/user";
import { useFriends } from "@/hooks/useFriends";
import { useUser } from "@/hooks/useUser";
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
  IconHeartFilled,
  IconMessage,
  IconShare,
  IconUserMinus,
  IconUserPlus,
} from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

export function PostCard(props: Post) {
  const { data: user, isLoading: isUserLoading } = useUser();
  const { data: friends, isLoading: isFriendLoading } = useFriends();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const likes = {
    count: Object.entries(props.likes).length,
    isLiked: Object.keys(props.likes).includes(user?._id || ""),
  };

  function handleLike() {
    likePost(props._id, user?._id || "").then(async () => {
      await queryClient.invalidateQueries({ queryKey: ["posts"] });
    });
  }

  function handleFriend(friendId: string) {
    addFriend(user?._id || "", friendId).then(async () => {
      await queryClient.invalidateQueries({ queryKey: ["friends"] });
    });
  }

  if (isUserLoading || isFriendLoading) {
    return <div>Loading...</div>;
  }

  const isFriend = friends?.some((friend) => friend._id === props.userId);

  return (
    <Card mb={"lg"} withBorder>
      <Stack>
        <Flex direction={"row"} justify={"space-between"} align={"center"}>
          <Flex direction={"row"} align={"center"}>
            <Avatar
              src={"/api/assets/" + props.userPicturePath}
              radius="xl"
              size={"lg"}
            />
            <Space w="md" />
            <Flex direction={"column"}>
              <Anchor
                component={Link}
                to={`/user/${props.userId}`}
                fz={"sm"}
                fw={700}
              >
                {props.firstName} {props.lastName}
              </Anchor>
              <Text fz={"xs"}>{props.location}</Text>
            </Flex>
          </Flex>
          <ActionIcon
            onClick={() => handleFriend(props.userId)}
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
          onClick={() => navigate(`/post/${props._id}`)}
        >
          {props.description}
        </Text>

        {props.picturePath ? (
          <Image radius={"md"} src={"/api/assets/" + props.picturePath} />
        ) : null}

        <Flex direction={"row"} justify={"space-between"} align={"center"}>
          <Group>
            <Button
              leftIcon={
                likes.isLiked ? (
                  <IconHeartFilled size="1.5rem" />
                ) : (
                  <IconHeart size="1.5rem" />
                )
              }
              onClick={handleLike}
              variant="subtle"
              color="dark"
            >
              {likes.count}
            </Button>
            <Button
              leftIcon={<IconMessage size="1.5rem" />}
              variant="subtle"
              color="dark"
            >
              {/*{props.comments}*/}
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
