import {Either} from '@sweet-monads/either';
import {MatchDatasource} from '../../domain/datasource/match_datasource';
import {Match} from '../../domain/entities/match';
import {MatchRepository} from '../../domain/repositories/match_repository';
import {Failure} from '../../domain/entities/failure';

export class MatchRepositoryImpl implements MatchRepository {
  constructor(private matchDataSource: MatchDatasource<Match[], Match>) {}

  async getMatches(): Promise<Either<Failure, Match[]>> {
    return await this.matchDataSource.getMatches();
  }

  async getMatch(id: string): Promise<Either<Failure, Match>> {
    return await this.matchDataSource.getMatch(id);
  }
}
