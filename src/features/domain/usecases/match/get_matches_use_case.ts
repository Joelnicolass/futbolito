import {Match} from '../../entities/match';
import {MatchRepository} from '../../repositories/match_repository';

export class GetMatchesUseCase {
  constructor(private matchRepository: MatchRepository) {}

  async execute(): Promise<Match[]> {
    return await this.matchRepository.getMatches();
  }
}
