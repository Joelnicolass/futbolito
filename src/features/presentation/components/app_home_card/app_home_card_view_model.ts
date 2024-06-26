import React from 'react';
import {useRouter} from '../../hooks/useRouter';

export const HomeCardViewModel = () => {
  const {handleNavigate} = useRouter();

  return {
    handleNavigate,
  };
};
