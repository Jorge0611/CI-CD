import { storage } from "@/utils/storage";
import { create } from "zustand";

interface AuthStore {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

function getInitialToken(): string | null {
  return storage.getToken() || null;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: getInitialToken(),
  setToken: (token) => {
    storage.setToken(token);
    set({ token });
  },
  removeToken: () => {
    storage.clearToken();
    set({ token: null });
  },
}));
