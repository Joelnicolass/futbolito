import {MatchRepository} from '../../domain/repositories/match_repository';
import {GetMatchUseCase} from '../../domain/usecases/match/get_match_use_case';
import {GetMatchesUseCase} from '../../domain/usecases/match/get_matches_use_case';
import {MatchDatasourceImpl} from '../datasources/remote/match_datasource_impl';
import {MatchRepositoryImpl} from '../repositories/match_repository_impl';

// capa de implementacion de casos de uso con inyeccion de dependencias
class MatchUseCasesImpl {
  constructor(private matchRepository: MatchRepository) {}

  get getMatch() {
    return new GetMatchUseCase(this.matchRepository);
  }

  get getMatches() {
    return new GetMatchesUseCase(this.matchRepository);
  }
}

export const matchUseCases = new MatchUseCasesImpl(
  new MatchRepositoryImpl(new MatchDatasourceImpl()),
);
