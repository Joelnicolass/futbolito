import {User} from '../../../domain/entities/user';
import {UserCredential} from '@firebase/auth';

export abstract class IAuthFirebaseDataSource {
  abstract register(name:string,email: string, password: string): Promise<UserCredential>;
  abstract login(email: string, password: string): Promise<UserCredential>;
  abstract isAuthenticated(): boolean;
  abstract getUser(): Promise<User>;
  abstract logout(): Promise<void>;
}
