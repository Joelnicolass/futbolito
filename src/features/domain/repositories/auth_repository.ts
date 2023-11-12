import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export abstract class IAuthRepository {
  abstract login(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential>;
  abstract logout(): Promise<void>;
  abstract isAuthenticated(): boolean;
}
