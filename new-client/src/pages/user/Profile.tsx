import { PostCard } from "@/components/post/PostCard";
import { ProfileInfoCard } from "@/components/user/ProfileInfoCard";
import { useFriends } from "@/hooks/useFriends";
import { usePostByUser } from "@/hooks/usePostByUser";
import { useUser } from "@/hooks/useUser";
import { Divider, Stack } from "@mantine/core";
import { useParams } from "react-router-dom";

export function Profile() {
  const { userId } = useParams<{ userId: string }>();
  const { data: user, isLoading: isLoadingUsers } = useUser(userId);
  const { data: friends, isLoading: isLoadingFriends } = useFriends(userId);

  const { data: posts, isLoading: isLoadingPosts } = usePostByUser(
    userId || ""
  );

  if (isLoadingUsers || isLoadingPosts || isLoadingFriends)
    return <div>Loading...</div>;

  if (!user) return <div>User not found</div>;

  return (
    <Stack>
      <ProfileInfoCard {...user} />

      <Divider my="xs" />
      {posts?.map((post, i) => (
        <PostCard key={i} {...post} />
      ))}
    </Stack>
  );
}
