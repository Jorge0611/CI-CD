import { Comment } from "@/components/post/Comment";
import { PostCard } from "@/components/post/PostCard";
import { FormValues, PostEditor } from "@/components/post/PostEditor";
import { usePosts } from "@/hooks/usePosts";
import { useUser } from "@/hooks/useUser";
import { Card, Stack, Title } from "@mantine/core";
import { useParams } from "react-router-dom";

const comments = [
  {
    postedAt: "10 minutes ago",
    body: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
    author: {
      name: "Jacob Warnhalter",
      image:
        "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
  },
  {
    postedAt: "10 minutes ago",
    body: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
    author: {
      name: "Jacob Warnhalter",
      image:
        "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
  },
  {
    postedAt: "10 minutes ago",
    body: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
    author: {
      name: "Jacob Warnhalter",
      image:
        "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
  },
];

export function Post() {
  const { data: user, isLoading: isUserLoading } = useUser();
  const params = useParams<{ postId: string }>();
  const { data, isLoading } = usePosts(params.postId);

  if (isLoading || isUserLoading) return <div>Loading...</div>;

  const post = Array.isArray(data) ? data[0] : data;

  if (!post) return <div>Post not found</div>;
  if (!user) return <div>no user</div>;

  function handleCommentSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Stack pos={"relative"}>
      <PostCard {...post} />

      <section title={"Comments"}>
        <Title fz={"xl"}>Comments</Title>
        <Stack>
          <PostEditor onSubmit={handleCommentSubmit} />

          {comments.map((comment) => (
            <Card>
              <Comment
                postedAt={comment.postedAt}
                body={comment.body}
                author={comment.author}
              />
            </Card>
          ))}
        </Stack>
      </section>
    </Stack>
  );
}
