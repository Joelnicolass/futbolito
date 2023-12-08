import {Failure} from '../entities/failure';
import {Match} from '../entities/match';
import {Either} from '@sweet-monads/either';

export interface MatchRepository {
  getMatches(): Promise<Either<Failure, Match[]>>;
  getMatch(id: string): Promise<Either<Failure, Match>>;
}
