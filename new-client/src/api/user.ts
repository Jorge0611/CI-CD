import { User } from "@/api/auth";
import { useAuthStore } from "@/stores/authStore";
import { fetcher } from "@/utils/fetcher";

export function getUserProfile(id: string): Promise<User> {
  return fetcher(id ? "/api/users/" + id : "/api/users/me");
}

export function getUserFriends(id?: string): Promise<User[]> {
  return fetcher(`/api/users/${id || "me"}/friends`);
}

export function addFriend(id: string, friendId: string): Promise<User> {
  return fetcher(`/api/users/${id}/${friendId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + useAuthStore.getState().token,
    },
  });
}
