import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React from 'react';
import {styles} from './home_styles';
import {HomeViewModel} from './home_view_model';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Layout, Text, Icon, useTheme, Spinner} from '@ui-kitten/components';

import Lottie from 'lottie-react-native';
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigationState} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRouter} from '../../hooks/useRouter';
import AppText from '../../components/app_text/app_text';
import {GoogleServices} from '../../../data/datasources/google/google';
import AppMatchCard from '../../components/app_match_card/app_match_card';
import { Match } from '../../../domain/entities/match';
import AppHomeCard from '../../components/app_home_card/app_home_card';
// const width = Dimensions.get('window').width * 0.7;
// const height = Dimensions.get('window').height * 0.25;
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.02;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const item: Match = {
  id: '1',
  name: 'Crear partido',
  homeTeam: {
    id: '3',
    name: 'Pepas',
    players: []
  },
  awayTeam:  {
    id: '2',
    name: 'Pipis',
    players: []
  },
  dateTime: new Date(),
  location: 'Bernica',
  status: 'waiting',
  result: {
    homeTeam: 0,
    awayTeam: 0
  }
}
export const HomeScreen = () => {
  const {handleLogout, isLoading, getMapResults, mapData} = HomeViewModel();
  const params = useNavigationState(state => state.routes[0].params) as {
    user: any;
  };
  const theme = useTheme();

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

          {/* <Pressable
            onPress={() => {
              const google = new GoogleServices();
              google.loginWithGoogle();
            }}>
            <AppText>GOOGLE</AppText>
          </Pressable> */}

<ScrollView>
<View>
            <AppText size='lg'>{'Planea un evento'}</AppText>
          <Pressable
            onPress={() => {
              const google = new GoogleServices();
              google.loginWithGoogle();
            }}>
            <AppHomeCard match={item} backgroudImage={require('../../../core/assets/soccer_stadium_bg.jpg')}/>
          </Pressable>
          </View>
          <View>
            <AppText size='lg'>{'Eventos importantes'}</AppText>
          <Pressable
            onPress={() => {
              const google = new GoogleServices();
              google.loginWithGoogle();
            }}>
            <AppHomeCard match={item} />
          </Pressable>
          </View>
</ScrollView>


          <Text>Hola, {params.user?.email}</Text>
          <Icon name="tv" width={32} height={32} fill="#ffffff" />
          <Text>Home Screen</Text>
          <TouchableOpacity onPress={() => handleLogout()}>
            <Text>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getMapResults()}>
            <Text>Get Results</Text>
          </TouchableOpacity>
          <View style={styles.mapContainer}>
            {/* <MapView
              initialRegion={{
                latitude: -34.5596842,
                longitude: -58.4621494,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              provider={PROVIDER_GOOGLE}
              style={styles.map}>
              {mapData.map(result => {
                console.log(result);

                return (
                  <Marker
                    onPress={() => console.log('tocado')}
                    coordinate={result}
                  />
                );
              })}
            </MapView> */}
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
