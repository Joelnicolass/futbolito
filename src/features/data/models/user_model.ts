import { User } from '../../domain/entities/user';

export class UserModel implements User {
  name: string;
  lastName: string;
  bussinesId: string;

  constructor(name: string, lastName: string, bussinesId: string) {
    this.name = name;
    this.lastName = lastName;
    this.bussinesId = bussinesId;
  }

  // TODO: ADD USER ADAPTER
  static fromJson(json: any): UserModel {
    return new UserModel(json.name, json.last_name, json.business_id);
  }

  toJson(): any {
    return {
      name: this.name,
      lastName: this.lastName,
      bussinesId: this.bussinesId,
    };
  }
}
