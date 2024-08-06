import { useEffect, useState } from 'react';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Alert} from 'react-native';
import {useHeader} from '../../hooks/use_header';
import { Match } from '../../../domain/entities/match';
import { useRoute } from '@react-navigation/native';

export const MatchViewModel = () => {
  useHeader({
    title: 'A jugar...',
    subtitle: 'Unite a un partido!',
  });
  const route = useRoute();
  const { id, type } = route.params || {};
  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 3000);
  }, []);

  return {
    isLoading,
    matches,
    id,
    type
  };
};
