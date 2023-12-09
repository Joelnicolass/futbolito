import { useEffect, useState } from 'react';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Alert} from 'react-native';
import {useHeader} from '../../hooks/use_header';
import { GetMatchesUseCase } from '../../../domain/usecases/match/get_matches_use_case';
import { MatchRepositoryImpl } from '../../../data/repositories/match_repository_impl';
import { MatchDatasourceImpl } from '../../../data/datasources/remote/match_datasource_impl';
import { Match } from '../../../domain/entities/match';

export const MatchViewModel = () => {
  useHeader({
    title: 'A jugar...',
    subtitle: 'Unite a un partido!',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState<Match[]>([]);

  const getMatches = async () => {
    console.log('getMatches');
    setIsLoading(true);

    (await matchUseCases.getMatches.execute()).fold(
      err => {
        Alert.alert('Error', err.message);
      },
      data => setMatches(data),
    );

    setIsLoading(false);
  };

  useEffect(() => {
    getMatches();
  }, []);

  return {
    isLoading,
    matches,
  };
};
