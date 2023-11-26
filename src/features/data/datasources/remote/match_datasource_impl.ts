import {MatchDatasource} from '../../../domain/datasource/match_datasource';
import {Match} from '../../../domain/entities/match';

// creador de mocks

const createID = () => `${Math.floor(Math.random() * 1000) + 1}`;

const createPlayers = (count: number) =>
  Array.from({length: count}, (_, i) => ({
    id: createID(),
    name: `Player ${i}`,
    lastName: `Player ${i}`,
    email: `player-${i}@example.com`,
    position: 'Player',
    rating: Math.floor(Math.random() * 10) + 1,
  }));

const createMatches = (count: number) =>
  Array.from({length: count}, (_, i) => ({
    id: createID(),
    homeTeam: {
      id: createID(),
      name: 'Home Team',
      players: createPlayers(5),
    },
    awayTeam: {
      id: createID(),
      name: 'Away Team',
      players: createPlayers(5),
    },
    dateTime: new Date(),
    location: 'Location',
    name: 'Match',
    status: 'Scheduled',
  }));

// implementacion de la interfaz - reemplazar por llamada a la api
export class MatchDatasourceImpl implements MatchDatasource<Match[], Match> {
  getMatches(): Promise<Match[]> {
    const matches: Match[] = createMatches(10);

    return Promise.resolve(matches);
  }

  async getMatch(id: string): Promise<Match> {
    const match: Match = createMatches(1)[0];

    return Promise.resolve(match);
  }
}
