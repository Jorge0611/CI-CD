import { create } from "zustand";

export interface User {
  email: string;
  password: string;
}

type AuthStore = {
  user: User | null;
  setUser: (user: User) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  login: (email, password) => set({ user: { email, password } }),
  logout: () => set({ user: null }),
}));
