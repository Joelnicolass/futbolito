import React from 'react';
import {styles} from './match_styles';
import {MatchViewModel} from './match_view_model';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Layout, Text, Button, Icon, Divider} from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import {Dimensions, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useRouter} from '../../hooks/useRouter';
import {ROUTES} from '../../router/routes';
import AppText from '../../components/app_text/app_text';
import AppDivider from '../../components/app_divider/app_divider';
import {FlatList} from 'react-native-gesture-handler';

export const MatchScreen = () => {
  const {handleTap, handleAuth} = MatchViewModel();
  const {handleNavigate} = useRouter();
  // ejemplos de uso de los casos de uso con el patron clean architecture + capa de inyeccion de dependencias (DI)
  matchUseCases.getMatch.execute('1').then(res =>
    res.fold(
      err => console.log(err),
      data => console.log(data),
    ),
  );

  matchUseCases.getMatches
    .execute()
    .then(res => console.log(JSON.stringify(res, null, 2)));

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#101010'}}>
      <Layout style={styles.container}>
        <View
          style={{
            height: Dimensions.get('window').height * 0.3,
            width: Dimensions.get('window').width,
            backgroundColor: '#101010',
            borderBottomLeftRadius: 20,
            padding: 20,
          }}>
          <AppText bold>Hola, Nico!</AppText>
          <AppDivider />

          <AppText size="sm">Unite a un equipo!</AppText>
        </View>
      </Layout>
    </SafeAreaView>
  );
};
