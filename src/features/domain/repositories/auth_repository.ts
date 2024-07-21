import { UserCredential } from "@firebase/auth";

export abstract class IAuthRepository {
  abstract login(email: string, password: string): Promise<UserCredential>;
  abstract logout(): Promise<void>;
  abstract isAuthenticated(): Promise<boolean>;
}
