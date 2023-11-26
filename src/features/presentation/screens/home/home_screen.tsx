import React from 'react';
import {styles} from './home_styles';
import {HomeViewModel} from './home_view_model';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Layout, Text, Icon} from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import { TouchableOpacity } from 'react-native';
import { useRouter } from '../../hooks/useRouter';

export const HomeScreen = () => {
  const {handleLogout} = HomeViewModel();
  // ejemplos de uso de los casos de uso con el patron clean architecture + capa de inyeccion de dependencias (DI)
  matchUseCases.getMatch
    .execute('1')
    .then(res => console.log(JSON.stringify(res, null, 2)));

  matchUseCases.getMatches
    .execute()
    .then(res => console.log(JSON.stringify(res, null, 2)));

  return (
    <Layout style={styles.container}>
      <Lottie
        source={require('../../../core/assets/anim.json')}
        autoPlay
        loop
        style={{width: 200, height: 200}}
      />

      <Icon name="tv" width={32} height={32} fill="#ffffff" />
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => handleLogout()}>
        <Text >Signup</Text>
      </TouchableOpacity>
    </Layout>
  );
};
