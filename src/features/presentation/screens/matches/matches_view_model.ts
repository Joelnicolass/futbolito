import { useEffect, useState } from 'react';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Alert} from 'react-native';
import {useHeader} from '../../hooks/use_header';
import { Match } from '../../../domain/entities/match';
import { useRouter } from '../../hooks/useRouter';

export const MatchesViewModel = () => {
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
