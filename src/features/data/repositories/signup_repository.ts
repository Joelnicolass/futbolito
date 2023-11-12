import {ISignUpRepository} from '../../domain/repositories/signup_repository';
import {AuthFirebaseDataSource} from '../datasources/firebase/auth_firebase_datasource';
import {UserCredential} from '@firebase/auth';

export class SignUpRepository implements ISignUpRepository {
  _firebaseDataSource: AuthFirebaseDataSource;

  constructor(remoteDataSource: AuthFirebaseDataSource) {
    this._firebaseDataSource = remoteDataSource;
  }

  register(
    name: string,
    email: string,
    password: string,
  ): Promise<UserCredential> {
    return this._firebaseDataSource.register(name, email, password);
  }
}
