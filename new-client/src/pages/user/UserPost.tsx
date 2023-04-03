import { Comment } from "@/components/post/Comment";
import { PostCard } from "@/components/post/PostCard";
import { PostEditor } from "@/components/post/PostEditor";
import { Card, Stack, Title } from "@mantine/core";

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

export function UserPost() {
  return (
    <Stack pos={"relative"}>
      <PostCard
        postId={1}
        location={"Washington DC"}
        description={"Hello Everybody"}
        image={"none"}
        likes={5}
        comments={6}
        id={"1"}
        username={"john_doe"}
        name={"John Doe"}
        avatar={"none"}
        profession={"developer"}
      />

      <section title={"Comments"}>
        <Title fz={"xl"}>Comments</Title>
        <Stack>
          <PostEditor />

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
