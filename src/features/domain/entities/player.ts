export class Player {
  id: string;
  name: string;
  lastName: string;
  email: string;
  rating: number;
  position: string;

  constructor(
    id: string,
    name: string,
    lastName: string,
    email: string,
    rating: number,
    position: string,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.rating = rating;
    this.position = position;
  }
}
