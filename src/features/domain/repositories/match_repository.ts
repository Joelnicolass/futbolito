import {Match} from '../entities/match';

export interface MatchRepository {
  getMatches(): Promise<Match[]>;
  getMatch(id: string): Promise<Match>;
}
