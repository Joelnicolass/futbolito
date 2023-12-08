import {Either} from '@sweet-monads/either';
import {Match} from '../../entities/match';
import {MatchRepository} from '../../repositories/match_repository';
import {Failure} from '../../entities/failure';

export class GetMatchUseCase {
  constructor(private matchRepository: MatchRepository) {}

  async execute(id: string): Promise<Either<Failure, Match>> {
    return await this.matchRepository.getMatch(id);
  }
}
