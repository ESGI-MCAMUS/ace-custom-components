export interface GenericApiReponse {
  title: string;
  message: string;
}

export type GenericApiReponseType = {
  title: string;
  message: string;
};

export interface App {
  user: User;
  loading: boolean;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  birthdate: Date;
  username: string;
  email: string;
  password: string;
  profile_picture: string | null;
  school_year: number;
  school_group: string;
  role: "ADMIN" | "USER";
  email_token: string | null;
  is_active: boolean;
  is_banned: boolean;
  token: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
