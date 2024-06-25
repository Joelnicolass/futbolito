import React from 'react';
import {useRouter} from '../../hooks/useRouter';

export const MatchCardViewModel = () => {
  const {handleNavigate} = useRouter();

  return {
    handleNavigate,
  };
};
