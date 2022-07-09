export interface Message {
  id: number;
  sender_id: number;
  receiver_id: number | null;
  message: string;
  room: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
