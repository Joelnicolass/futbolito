import {IAuthRepository} from '../../domain/repositories/auth_repository';
import {AuthFirebaseDataSource} from '../datasources/firebase/auth_firebase_datasource';
import {UserCredential} from '@firebase/auth';

export class AuthRepository implements IAuthRepository {
  _firebaseDataSource: AuthFirebaseDataSource;

  constructor(remoteDataSource: AuthFirebaseDataSource) {
    this._firebaseDataSource = remoteDataSource;
  }

  login(username: string, password: string): Promise<UserCredential> {
    return this._firebaseDataSource.login(username, password);
  }

  isAuthenticated(): Promise<boolean> {
    return this._firebaseDataSource.isAuthenticated();
  }

  logout(): Promise<void> {
    return this._firebaseDataSource.logout();
  }
}
