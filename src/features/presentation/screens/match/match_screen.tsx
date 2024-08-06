import React from 'react';
import {styles} from './match_styles';
import {MatchViewModel} from './match_view_model';
import {Layout} from '@ui-kitten/components';
import LoadingDataScreen from '../loading_data/loading_data';
import AppText from '../../components/app_text/app_text';
import { View } from 'react-native';

export const MatchScreen = () => {
  const {matches, isLoading, id, type} = MatchViewModel();

  if (isLoading) return <LoadingDataScreen text='Buscando partida...'/>;
  //TODO: Cargar esta pantalla de carga de manera dinamica, con la información que provenga
  // del dynamic rooting.
  // parametros:
  // id: representa el id del match a buscar.
  // 
  return <Layout style={styles.container}>
     <View >
      <AppText>Room Screen</AppText>
      <AppText>Room ID: {id}</AppText>
      <AppText>Room Type: {type}</AppText>
    </View>
  </Layout>;
};
