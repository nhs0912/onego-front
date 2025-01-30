export interface User{
  id: string;
  email: string;
  name: string;
  password: string;
  roles: string[];
}

export type UserWithoutPassword = Omit<User, 'password'>;