import {StackActions, useNavigation} from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { GetMatchesUseCase } from '../../../domain/usecases/match/get_matches_use_case';
import { MatchRepositoryImpl } from '../../../data/repositories/match_repository_impl';
import { MatchDatasourceImpl } from '../../../data/datasources/remote/match_datasource_impl';
import { Match } from '../../../domain/entities/match';

export const MatchViewModel = () => {
  const navigation = useNavigation();
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getMatchesUseCase = new GetMatchesUseCase(new MatchRepositoryImpl(new MatchDatasourceImpl()));
  const handleTap = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };
  const handleAuth = () => {
    navigation.dispatch(StackActions.replace('Auth'));
  };

  useEffect(() => {
    const getMatches = async () => {
      setIsLoading(true);
      const existMatches = await getMatchesUseCase.execute();
      if(existMatches.length){
        setMatches(existMatches);
      }
      console.log(matches);
      setIsLoading(false);
    }
    getMatches();
  }, []);
  return {
    handleTap,
    handleAuth,
    matches,
    isLoading
  };
};
