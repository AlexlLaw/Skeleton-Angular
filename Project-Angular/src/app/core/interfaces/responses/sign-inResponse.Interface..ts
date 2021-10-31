export interface SignInResponse {
  user: UserResponse;
  token: string;
}

export interface UserResponse {
  id: number;
  username: string;
  password?: string;
  role: string;

}
