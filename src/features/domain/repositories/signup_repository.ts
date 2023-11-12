import { UserCredential } from "@firebase/auth";

export abstract class ISignUpRepository {
  abstract register(name:string ,email: string, password: string): Promise<UserCredential>;
}
