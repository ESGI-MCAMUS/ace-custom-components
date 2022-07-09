export type Reports = Report[];

export interface Report {
  id: number;
  user_reporter: number;
  user_reported: number | null;
  message_reported: number | null;
  room_reported: number | null;
  subject:
    | "IDENTITY_THEFT"
    | "SPAM"
    | "HACKED_ACCOUNT"
    | "INAPROPIATE_CONTENT"
    | "OTHER";
  explanation: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
}

export interface ReportInsert {
  user_reporter: number;
  user_reported: number | null;
  message_reported: number | null;
  room_reported: number | null;
  subject:
    | "IDENTITY_THEFT"
    | "SPAM"
    | "HACKED_ACCOUNT"
    | "INAPROPIATE_CONTENT"
    | "OTHER";
  explanation: string;
}
