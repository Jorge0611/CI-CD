import { fetcher } from "@/utils/fetcher";
import { parseJSONToFormData } from "@/utils/parseJSONToFormData";

export type UserValues = {
  firstName: string;
  lastName: string;
  email: string;
  picturePath?: string;
  friends: any[];
  location: string;
  createdAt: Date;
  updatedAt?: Date;
};

export interface User extends UserValues {
  _id: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  jwtToken: string;
}

export function loginFn(credentials: LoginCredentials): Promise<LoginResponse> {
  return fetcher("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picture: File | null;
  location: string;
}

export function registerFn(user: RegisterFormValues): Promise<User | unknown> {
  return fetcher("/api/auth/register", {
    method: "POST",
    body: parseJSONToFormData(user),
  });
}
