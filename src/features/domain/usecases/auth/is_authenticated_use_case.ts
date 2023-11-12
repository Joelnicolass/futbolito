import { AuthFirebaseDataSource } from "../../../data/datasources/firebase/auth_firebase_datasource";
import { AuthRepository } from "../../../data/repositories/auth_repository";
import { IAuthRepository } from "../../repositories/auth_repository";

export class IsAuthenticatedUseCase {
  private readonly _authRepository: IAuthRepository;

  constructor() {
    const authRepository = new AuthRepository(new AuthFirebaseDataSource());
    this._authRepository = authRepository;
  }

  isAuthenticated(): boolean {
    return this._authRepository.isAuthenticated();
  }
}
