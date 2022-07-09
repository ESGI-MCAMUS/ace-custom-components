import { User } from "./application";
import { Message } from "./messages";

export type Rooms = Room[];

export interface Room {
  id: number;
  name: string;
  creator: Partial<User>;
  messages: Partial<Message>[];
  createdAt: Date;
}

export interface RoomCreation {
  id: number;
  name: string;
  creator_id: number;
  updatedAt: Date;
  createdAt: Date;
}
