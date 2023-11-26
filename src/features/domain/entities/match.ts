import {Team} from './team';

export class Match {
  id: string;
  name: string;
  homeTeam: Team;
  awayTeam: Team;
  dateTime: Date;
  location: string;
  status: string;

  constructor(
    id: string,
    name: string,
    homeTeam: Team,
    awayTeam: Team,
    dateTime: Date,
    location: string,
    status: string,
  ) {
    this.id = id;
    this.name = name;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.dateTime = dateTime;
    this.location = location;
    this.status = status;
  }
}
