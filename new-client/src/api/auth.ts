import { fetcher } from "@/utils/fetcher";

export interface Login {
  jwtToken: string;
  user: User;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath: string;
  friends: any[];
  location: string;
  createdAt: Date;
  updatedAt: Date;
  v: number;
}

export async function login(email: string, password: string) {
  return await fetcher<Login>(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res);
}
