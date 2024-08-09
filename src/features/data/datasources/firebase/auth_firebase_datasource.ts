// import { doc, getDoc } from "firebase/firestore";
import {UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, send, sendEmailVerification} from '@firebase/auth';
import {auth} from '../../../core/firebase/initialization';
import {User} from '../../../domain/entities/user';
import {UserModel} from '../../models/user_model';
import {SecurityDao} from '../local/security_dao';
import { IAuthFirebaseDataSource } from '../../../domain/datasource/auth_firebase_datasource';
export class AuthFirebaseDataSource implements IAuthFirebaseDataSource {
  private readonly _securityDao: SecurityDao;

  constructor() {
    const securityDao = new SecurityDao();
    this._securityDao = securityDao;
  }
  verifyEmail() {
    try {
      if(!auth.currentUser){throw new Error("No hay usuario logueado")}

      return sendEmailVerification(auth.currentUser).then(() => {
        console.log('Email sent');
      });

      
    } catch (error) {
      
    }
  }
  async loginWithCredential(userCredential: UserCredential): Promise<UserCredential> {
    try {
      this._securityDao.setUserUid(userCredential.user?.uid);
      this._securityDao.setRefreshToken(userCredential.user?.refreshToken);
  
      await this.getUser();
  
      return userCredential;
    } catch (error) {
      console.log('Error al iniciar sesión con credenciales', error);
      throw new Error('Error al iniciar sesión con credenciales');
    }
   
  }


  register(name: string,email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password).then(
      async userCredential => {
        this._securityDao.setUserUid(userCredential.user?.uid);
        this._securityDao.setRefreshToken(userCredential.user?.refreshToken);

        await this.getUser();

        return userCredential;
      },
    );
  }
  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password).then(
      async userCredential => {
        this._securityDao.setUserUid(userCredential.user?.uid);
        this._securityDao.setRefreshToken(userCredential.user?.refreshToken);

        await this.getUser();

        return userCredential;
      },
    );
  }

  async isAuthenticated(): Promise<boolean> {
    const userUid = await this._securityDao.getUserUid();
    const refreshToken = await this._securityDao.getRefreshToken();
    console.log("userID: ",  userUid);
    console.log("refreshToken: ", refreshToken);
    // console.log("auth: ", userUid != null && refreshToken != null);
    return userUid != null && refreshToken != null;
  }

  async getUser(): Promise<User> {
    const userUid = await this._securityDao.getUserUid();

    if (userUid) {
      // TODO: MOVER AL BACK
      //   const docRef = doc(db, "mock_user", userUid);
      //   const docSnap = await getDoc(docRef);

      // TODO: Retorno del back json
      let json = {"name":"admin", "last_name": "user_prueba", "business_id":"1"};
      const user = UserModel.fromJson(json);

      this._securityDao.setUserBid(user.bussinesId);

      return user;
    }

    return Promise.reject('User not found');
  }

  logout(): Promise<void> {
    return new Promise((resolve, _reject) => {
      this._securityDao.clear();

      resolve();
    });
  }
}
