import {Either, left, right} from '@sweet-monads/either';
import {MatchDatasource} from '../../../domain/datasource/match_datasource';
import {Match} from '../../../domain/entities/match';
import {Player} from '../../../domain/entities/player';
import {Failure, FailureFactory} from '../../../domain/entities/failure';

// creador de mocks

const createID = () => `${Math.floor(Math.random() * 1000) + 1}`;

const createPlayers = (count: number): Player[] =>
  Array.from({length: count}, (_, i) => ({
    id: createID(),
    name: `Player ${i}`,
    lastName: `Player ${i}`,
    email: `player-${i}@example.com`,
    position: 'Player',
    rating: Math.floor(Math.random() * 10) + 1,
  }));

const createMatches = (count: number): Match[] =>
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
    result: '0-0',
  }));

// implementacion de la interfaz - reemplazar por llamada a la api
export class MatchDatasourceImpl implements MatchDatasource<Match[], Match> {
  async getMatches(): Promise<Either<Failure, Match[]>> {
    const matches: Match[] = createMatches(10);
    try {
      return right(matches);
    } catch (error) {
      return left(
        FailureFactory.unexpected({message: 'Ocurrió un error inesperado'}),
      );
    }
  }

  async getMatch(id: string): Promise<Either<Failure, Match>> {
    const match: Match = createMatches(1)[0];

    try {
      return right(match);
    } catch (error) {
      return left(
        FailureFactory.unexpected({message: 'Ocurrió un error inesperado'}),
      );
    }
  }
}
