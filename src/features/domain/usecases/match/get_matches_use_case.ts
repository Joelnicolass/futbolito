import {Match} from '../../entities/match';
import {MatchRepository} from '../../repositories/match_repository';
import {Either} from '@sweet-monads/either';
import {Failure} from '../../entities/failure';

export class GetMatchesUseCase {
  constructor(private matchRepository: MatchRepository) {}

  async execute(): Promise<Either<Failure, Match[]>> {
    return await this.matchRepository.getMatches();
  }
}
