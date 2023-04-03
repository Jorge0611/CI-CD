import { PostCard, PostCardProps } from "@/components/post/PostCard";
import { PostEditor } from "@/components/post/PostEditor";
import { Space } from "@mantine/core";

const posts: PostCardProps[] = [
  {
    postId: "1",
    id: "1",
    profession: "Developer",
    username: "johndoe",
    name: "John Doe",
    avatar: "https://source.unsplash.com/random/100x100",
    location: "Location, US",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    image: "https://source.unsplash.com/random/800x500",
    likes: 7,
    comments: 8,
  },
  {
    postId: "1",
    id: "1",
    profession: "Developer",
    username: "johndoe",
    name: "John Doe",
    avatar: "https://source.unsplash.com/random/100x100",
    location: "Location, US",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    image: "https://source.unsplash.com/random/800x500",
    likes: 7,
    comments: 8,
  },
  {
    postId: "1",
    id: "1",
    profession: "Developer",
    username: "johndoe",
    name: "John Doe",
    avatar: "https://source.unsplash.com/random/100x100",
    location: "Location, US",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
    image: "https://source.unsplash.com/random/800x500",
    likes: 7,
    comments: 8,
  },
];

export function Home() {
  return (
    <>
      <PostEditor />
      <Space h="md" />
      {posts.map((post, i) => (
        <PostCard key={i} {...post} />
      ))}
    </>
  );
}
