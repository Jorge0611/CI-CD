import { useAuthStore } from "@/stores/authStore";
import { fetcher } from "@/utils/fetcher";
import { parseJSONToFormData } from "@/utils/parseJSONToFormData";

export interface Post {
  comments?: Comments;
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  likes: Likes;
}

export interface Comments {
  types: any[];
  default: any[];
}

export interface Likes {}

export function getPost(id: string): Promise<Post[] | undefined> {
  return fetcher("/api/post/" + id);
}

export interface CreatePostData {
  userId: string;
  description: string;
  picture: File | null;
}

export function createPost(data: CreatePostData): Promise<Post[]> {
  return fetcher("/api/posts", {
    method: "POST",
    body: parseJSONToFormData(data),
  });
}

export function getPostByUserId(id: string): Promise<Post[] | undefined> {
  return fetcher(`/api/post/${id}/posts`);
}

export function likePost(
  id: string,
  userId: string
): Promise<Post | undefined> {
  return fetcher(`/api/post/${id}/like`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + useAuthStore.getState().token,
    },
    body: JSON.stringify({ userId }),
  });
}
