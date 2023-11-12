export abstract class User {
    name: string;
    lastName: string;
    bussinesId: string;
  
    constructor(id: string, name: string, lastName: string, bussinesId: string) {
      this.name = name;
      this.lastName = lastName;
      this.bussinesId = bussinesId;
    }
  }
  