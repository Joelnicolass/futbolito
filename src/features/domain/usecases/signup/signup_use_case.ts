import {UserCredential} from '@firebase/auth';
import {AuthFirebaseDataSource} from '../../../data/datasources/firebase/auth_firebase_datasource';
import {ISignUpRepository} from '../../repositories/signup_repository';
import {SignUpRepository} from '../../../data/repositories/signup_repository';

export class SignUpUseCase {
  private readonly _signUpRepository: ISignUpRepository;

  constructor() {
    const signUpRepository = new SignUpRepository(new AuthFirebaseDataSource());
    this._signUpRepository = signUpRepository;
  }

  async register(
    name: string,
    email: string,
    password: string,
  ): Promise<UserCredential> {
    return this._signUpRepository.register(name, email, password);
  }
}
