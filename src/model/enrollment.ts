export type Enrollment = {
  user: UserRegister;
};

export interface UserRegister {
  firstname: string;
  lastname: string;
  birthdate: string;
  username: string;
  email: string;
  password: string;
  profile_picture: string | null;
  school_year: number;
  school_group: string;
}

export interface Login {
  login: string;
  password: string;
}

export interface ForgottenPassword {
  email: string;
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
