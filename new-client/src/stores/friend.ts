import { create } from "zustand";

export type Friend = {
  id: string;
  username: string;
  name: string;
  avatar: string;
  profession: string;
};

type FriendListStore = {
  friendList: Friend[];
  setFriendList: (friendList: Friend[]) => void;
  addFriend: (friend: Friend) => void;
  removeFriend: (id: string) => void;
};

export const useFriendListStore = create<FriendListStore>((set) => ({
  friendList: [],
  setFriendList: (friendList) => set({ friendList }),
  addFriend: (friend) =>
    set((state) => ({
      friendList: state.friendList.some(
        (f) => f.id === friend.id && f.username === friend.username
      )
        ? state.friendList
        : [...state.friendList, friend],
    })),
  removeFriend: (id) =>
    set((state) => ({
      friendList: state.friendList.filter((friend) => friend.id !== id),
    })),
}));
