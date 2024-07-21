import {UserCredential} from '@firebase/auth';
import {AuthFirebaseDataSource} from '../../../data/datasources/firebase/auth_firebase_datasource';
import {AuthRepository} from '../../../data/repositories/auth_repository';
import {IAuthRepository} from '../../repositories/auth_repository';

export class LoginUseCase {
  private readonly _authRepository: IAuthRepository;

  constructor() {
    const authRepository = new AuthRepository(new AuthFirebaseDataSource());
    this._authRepository = authRepository;
  }

  login(email: string, password: string): Promise<UserCredential> {
    return this._authRepository.login(email, password);
  }
}
