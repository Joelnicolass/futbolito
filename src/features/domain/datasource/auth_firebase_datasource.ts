import {UserCredential} from '@firebase/auth';
import { User } from '../entities/user';

export abstract class IAuthFirebaseDataSource {
  abstract register(name:string,email: string, password: string): Promise<UserCredential>;
  abstract login(email: string, password: string): Promise<UserCredential>;
  abstract loginWithCredential(userCredential: UserCredential): Promise<UserCredential>;
  abstract verifyEmail(): Promise<void>;
  abstract isAuthenticated(): Promise<boolean>;
  abstract getUser(): Promise<User>;
  abstract logout(): Promise<void>;
}
