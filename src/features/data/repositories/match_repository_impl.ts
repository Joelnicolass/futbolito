import {MatchDatasource} from '../../domain/datasource/match_datasource';
import {Match} from '../../domain/entities/match';
import {MatchRepository} from '../../domain/repositories/match_repository';

export class MatchRepositoryImpl implements MatchRepository {
  constructor(private matchDataSource: MatchDatasource<Match[], Match>) {}

  async getMatches(): Promise<Match[]> {
    return await this.matchDataSource.getMatches();
  }

  async getMatch(id: string): Promise<Match> {
    return await this.matchDataSource.getMatch(id);
  }
}
