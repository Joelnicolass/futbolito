import {useEffect, useState} from 'react';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Match} from '../../../domain/entities/match';
import {Alert} from 'react-native';
import {useAppDispatch} from '../../hooks/useRedux';
import {headerActions} from '../../store/slice/header_slice';

export const MatchViewModel = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('MatchViewModel');
    dispatch(headerActions.setTitle('Hola!'));
    dispatch(headerActions.setSubtitle('Unite a un partido!'));
  }, [dispatch]);

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
