import { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { User } from "../../../domain/entities/user";

export abstract class IAuthFirebaseDataSource {
  abstract login(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential>;
  abstract isAuthenticated(): boolean;
  abstract getUser(): Promise<User>;
  abstract logout(): Promise<void>;
}
