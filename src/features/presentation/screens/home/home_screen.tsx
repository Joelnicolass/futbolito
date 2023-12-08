import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React from 'react';
import {styles} from './home_styles';
import {HomeViewModel} from './home_view_model';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Layout, Text, Icon, Spinner} from '@ui-kitten/components';

import Lottie from 'lottie-react-native';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRouter} from '../../hooks/useRouter';
const width = Dimensions.get('window').width * 0.7;
const height = Dimensions.get('window').height * 0.25;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export const HomeScreen = () => {
  const {handleLogout, isLoading, getMapResults, mapData} = HomeViewModel();
  // ejemplos de uso de los casos de uso con el patron clean architecture + capa de inyeccion de dependencias (DI)
  // matchUseCases.getMatch
  //   .execute('1')
  //   .then(res => console.log(JSON.stringify(res, null, 2)));

  // matchUseCases.getMatches
  //   .execute()
  //   .then(res => console.log(JSON.stringify(res, null, 2)));

  return isLoading ? (
    <Spinner size="large" />
  ) : (
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
      <TouchableOpacity onPress={() => getMapResults()}>
        <Text>Get Results</Text>
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        <MapView
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
        </MapView>
      </View>
    </Layout>
  );
};
