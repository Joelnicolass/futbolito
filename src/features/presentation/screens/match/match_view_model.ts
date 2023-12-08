import {StackActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Match} from '../../../domain/entities/match';
import {Alert} from 'react-native';

export const MatchViewModel = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState<Match[]>([]);

  const getMatches = async () => {
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

  const handleTap = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };

  const handleAuth = () => {
    navigation.dispatch(StackActions.replace('Auth'));
  };

  return {
    isLoading,
    matches,
    handleTap,
    handleAuth,
  };
};
