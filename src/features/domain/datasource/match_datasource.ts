import {Either} from '@sweet-monads/either';
import {Failure} from '../entities/failure';

export interface MatchDatasource<GetMatchesResponse, GetMatchResponse> {
  getMatches(): Promise<Either<Failure, GetMatchesResponse>>;
  getMatch(id: string): Promise<Either<Failure, GetMatchResponse>>;
}
