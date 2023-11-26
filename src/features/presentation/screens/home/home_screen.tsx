import React from 'react';
import {styles} from './home_styles';
import {HomeViewModel} from './home_view_model';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Layout, Text, Icon, useTheme} from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import {TouchableOpacity} from 'react-native';
import {useRouter} from '../../hooks/useRouter';
import {
  RouteProp,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const navigate = useNavigation();
  const {handleLogout} = HomeViewModel();
  const state = useNavigationState(state => state);

  const theme = useTheme();
  const user = state;

  // ejemplos de uso de los casos de uso con el patron clean architecture + capa de inyeccion de dependencias (DI)
  /*   matchUseCases.getMatch
    .execute('1')
    .then(res => console.log(JSON.stringify(res, null, 2)));

  matchUseCases.getMatches
    .execute()
    .then(res => console.log(JSON.stringify(res, null, 2))); */

  return (
    <SafeAreaView
      style={[
        styles.scrollView,
        {
          backgroundColor: theme['background-basic-color-1'],
        },
      ]}>
      <ScrollView
        style={[
          styles.scrollView,
          {
            backgroundColor: theme['background-basic-color-1'],
          },
        ]}>
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
            <Text>Signup</Text>
          </TouchableOpacity>

          <Text>Datos del Usuario</Text>
          <Text>{JSON.stringify(user, null, 2)}</Text>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
