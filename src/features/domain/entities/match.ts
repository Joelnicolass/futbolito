import {Team} from './team';

export type ResultMatch = `${number}-${number}`;
export class Match {
  id: string;
  name: string;
  homeTeam: Team;
  awayTeam: Team;
  dateTime: Date;
  location: string;
  status: string;
  result: ResultMatch;

  constructor(
    id: string,
    name: string,
    homeTeam: Team,
    awayTeam: Team,
    dateTime: Date,
    location: string,
    status: string,
    result: ResultMatch,
  ) {
    this.id = id;
    this.name = name;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.dateTime = dateTime;
    this.location = location;
    this.status = status;
    this.result = result;
  }
}
