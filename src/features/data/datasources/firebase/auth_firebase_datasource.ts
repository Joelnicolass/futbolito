
// import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../../core/firebase/initialization";
import { User } from "../../../domain/entities/user";
import { UserModel } from "../../models/user_model";
import { SecurityDao } from "../local/security_dao";
import { IAuthFirebaseDataSource } from "./firebase_datasource";
import { FirebaseAuthTypes, signInWithEmailAndPassword } from "@react-native-firebase/auth";

export class AuthFirebaseDataSource implements IAuthFirebaseDataSource {
  private readonly _securityDao: SecurityDao;

  constructor() {
    const securityDao = new SecurityDao();
    this._securityDao = securityDao;
  }

  login(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
    return signInWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        this._securityDao.setUserUid(userCredential.user?.uid);
        this._securityDao.setRefreshToken(userCredential.user?.refreshToken);

        await this.getUser();

        return userCredential;
      }
    );
  }

  isAuthenticated(): boolean {
    const userUid = this._securityDao.getUserUid();
    const refreshToken = this._securityDao.getRefreshToken();

    return userUid != null && refreshToken != null;
  }

  async getUser(): Promise<User> {
    const userUid = await this._securityDao.getUserUid();

    if (userUid) {
        // TODO: MOVER AL BACK
    //   const docRef = doc(db, "mock_user", userUid);
    //   const docSnap = await getDoc(docRef);


    // TODO: Retorno del back json
        let json;
      const user = UserModel.fromJson(json);

      this._securityDao.setUserBid(user.bussinesId);

      return user;
    }

    return Promise.reject("User not found");
  }

  logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._securityDao.clear();

      resolve();
    });
  }
}
