import { AuthFirebaseDataSource } from "../../../data/datasources/firebase/auth_firebase_datasource";
import { AuthRepository } from "../../../data/repositories/auth_repository";
import { IAuthRepository } from "../../repositories/auth_repository";

export class LogoutUseCase {
  _authRepository: IAuthRepository;

  constructor() {
    this._authRepository = new AuthRepository(new AuthFirebaseDataSource());
  }

  async logout(): Promise<void> {
    return this._authRepository.logout();
  }
}
