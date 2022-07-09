import { User } from "./application";

export interface Friendship {
  friends: Partial<User>[];
  requests: FriendRequest[];
}

export interface FriendshipDb {
  id: number;
  user_request: number;
  user_requested: number;
  is_accepted: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface FriendRequest {
  friendship: FriendshipDb;
  friend: Partial<User>;
}
