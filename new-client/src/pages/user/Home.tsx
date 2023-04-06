import { createPost } from "@/api/post";
import { PostCard } from "@/components/post/PostCard";
import { FormValues, PostEditor } from "@/components/post/PostEditor";
import { usePosts } from "@/hooks/usePosts";
import { useUser } from "@/hooks/useUser";
import { Space } from "@mantine/core";
import { useQueryClient } from "@tanstack/react-query";

export function Home() {
  const queryClient = useQueryClient();
  const { data: user, isLoading: isUserLoading } = useUser();
  const { data: posts, isLoading } = usePosts();

  if (isUserLoading || isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) return <div>no user</div>;

  function handlePostSubmit(values: FormValues) {
    createPost({ ...values, userId: user!._id }).then(async () => {
      await queryClient.invalidateQueries({ queryKey: ["posts"] });
    });
  }

  return (
    <>
      <PostEditor onSubmit={handlePostSubmit} />
      <Space h="md" />
      {posts?.map((post, i) => (
        <PostCard key={i} {...post} />
      ))}
    </>
  );
}
