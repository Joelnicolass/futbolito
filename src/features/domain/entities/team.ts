import {Player} from './player';

export class Team {
  id: string;
  name: string;
  players: Player[];

  constructor(id: string, name: string, players: Player[]) {
    this.id = id;
    this.name = name;
    this.players = players;
  }
}
