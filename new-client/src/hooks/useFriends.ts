import { getUserFriends } from "@/api/user";
import { useQuery } from "@tanstack/react-query";

export function useFriends(id?: string) {
  return useQuery(["friends", id], () => getUserFriends(id || ""));
}
