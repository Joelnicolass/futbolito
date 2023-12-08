import {useEffect, useState} from 'react';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Match} from '../../../domain/entities/match';
import {Alert} from 'react-native';

export const MatchViewModel = () => {
  const [isLoading, setIsLoading] = useState(false);
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
