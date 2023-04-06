import { getUserFriends } from "@/api/user";
import { create } from "zustand";

export type FriendStorage = {
  userId: string;
  firstName: string;
  lastName: string;
  userPicturePath: string;
};

type FriendListStore = {
  friendList: FriendStorage[];
  setFriendList: (friendList: FriendStorage[]) => void;
  addFriend: (userId: string, friendId: string) => void;
  removeFriend: (id: string) => void;
};

function getInitialFriends() {
  return getUserFriends();
}

export const useFriendListStore = create<FriendListStore>((set) => ({
  friendList: [],
  setFriendList: (friendList) => set({ friendList }),
  addFriend: (userId: string, friendId: string) =>
    set((state) => ({
      // friendList: state.friendList.some((f) => f.userId === friend.userId)
      //   ? state.friendList
      //   : [...state.friendList, friend],
    })),
  removeFriend: (id) =>
    set((state) => ({
      friendList: state.friendList.filter((friend) => friend.userId !== id),
    })),
}));
