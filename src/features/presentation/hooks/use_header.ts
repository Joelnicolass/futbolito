import {useCallback, useEffect} from 'react';
import {useAppDispatch} from './useRedux';
import {headerActions} from '../store/slice/header_slice';

interface Props {
  title?: string;
  subtitle?: string;
  onMount?: boolean;
}

export const useHeader = ({title, subtitle, onMount = false}: Props) => {
  const dispatch = useAppDispatch();

  const setTitle = useCallback(
    (value: string) => {
      dispatch(headerActions.setTitle(value));
    },
    [dispatch],
  );

  const setSubtitle = useCallback(
    (value: string) => {
      dispatch(headerActions.setSubtitle(value));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!onMount) return;
    title && setTitle(title);
    subtitle && setSubtitle(subtitle);
  }, [title, subtitle, onMount, setSubtitle, setTitle]);

  return {
    setTitle,
    setSubtitle,
  };
};
