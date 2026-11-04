import axios from "axios";
import type { LoginCredentials, LoginResponse } from "./auth.types";

export async function loginRequest(credentials: LoginCredentials) {
  const response = await axios.post<LoginResponse>(
    "https://dummyjson.com/auth/login",
    credentials,
  );

  return response.data;
}
