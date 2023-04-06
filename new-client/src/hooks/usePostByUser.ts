import { getPostByUserId } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

export function usePostByUser(id: string) {
  return useQuery(["user-posts", id], () => getPostByUserId(id));
}
