import { getPost } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

export function usePosts(id?: string) {
  return useQuery(["posts", id], () => getPost(id || ""));
}
