import {Match} from '../../entities/match';
import {MatchRepository} from '../../repositories/match_repository';

export class GetMatchUseCase {
  constructor(private matchRepository: MatchRepository) {}

  async execute(id: string): Promise<Match> {
    return await this.matchRepository.getMatch(id);
  }
}
