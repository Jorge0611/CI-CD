import { User } from "@/api/auth";
import { getUserProfile } from "@/api/user";
import { useQuery } from "@tanstack/react-query";

export function useUser(id?: string) {
  return useQuery<User>(["user", id], () => getUserProfile(id || ""));
}
