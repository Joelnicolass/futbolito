import {Match, ResultMatch} from '../../domain/entities/match';
import {Team} from '../../domain/entities/team';
import { MatchAdapter } from '../adapters/match_adapter';
export class MatchModel implements Match {
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
    this.dateTime = new Date(dateTime);
    this.location = location;
    this.status = status;
    this.result = result;
  }

  // TODO: ADD MATCH ADAPTER
  static fromJson(json: any): MatchModel {
    return new MatchModel(
      json[MatchAdapter.id],
      json[MatchAdapter.name],
      json[MatchAdapter.homeTeam],
      json[MatchAdapter.awayTeam],
      json[MatchAdapter.dateTime],
      json[MatchAdapter.location],
      json[MatchAdapter.status],
      json[MatchAdapter.result],
      );
  }

  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      homeTeam: this.homeTeam,
      awayTeam:  this.awayTeam,
      dateTime: this.dateTime,
      location: this.location,
      status: this.status,
      result: this.result,
    };
  }
}
