import React from 'react';
import {styles} from './match_styles';
import {MatchViewModel} from './match_view_model';
import {Layout} from '@ui-kitten/components';
import LoadingDataScreen from '../loading_data/loading_data';

export const MatchScreen = () => {
  const {matches, isLoading} = MatchViewModel();

  if (isLoading) return <LoadingDataScreen />;

  return <Layout style={styles.container}></Layout>;
};
