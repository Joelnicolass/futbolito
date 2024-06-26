import { useEffect, useState } from 'react';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Alert} from 'react-native';
import {useHeader} from '../../hooks/use_header';
import { Match } from '../../../domain/entities/match';

export const MatchViewModel = () => {
  useHeader({
    title: 'A jugar...',
    subtitle: 'Unite a un partido!',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState<Match[]>([]);

  return {
    isLoading,
    matches,
  };
};
