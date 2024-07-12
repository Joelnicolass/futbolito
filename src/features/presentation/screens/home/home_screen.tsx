import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, { createRef, useId, useRef } from 'react';
import {styles} from './home_styles';
import {HomeViewModel} from './home_view_model';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Layout, Text, Icon, useTheme, Spinner} from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
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
import {Match} from '../../../domain/entities/match';
import AppHomeCard from '../../components/app_home_card/app_home_card';
import { ROUTES } from '../../router/routes';
import SlideItem from '../../components/app_onboarding/slide_item/slide_item';
import { useDispatch } from 'react-redux';
import {onboardingData} from '../../../core/utils/onboarding_data';
const {width, height} = Dimensions.get('window');

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
    players: [],
  },
  awayTeam: {
    id: '2',
    name: 'Pipis',
    players: [],
  },
  dateTime: new Date(),
  location: 'Bernica',
  status: 'waiting',
  result: {
    homeTeam: 0,
    awayTeam: 0,
  },
};
const mock_items = [item,{...item, id: 2},{...item, id: 3}]
export const HomeScreen = () => {
  const {handleLogout, isLoading, mapData} = HomeViewModel();
  const params = useNavigationState(state => state.routes[0].params) as {
    user: any;
  };
  const theme = useTheme();
  const {handleNavigate} = useRouter()
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  // ejemplos de uso de los casos de uso con el patron clean architecture + capa de inyeccion de dependencias (DI)
  /*   matchUseCases.getMatch
    .execute('1')
    .then(res => console.log(JSON.stringify(res, null, 2)));

  matchUseCases.getMatches
    .execute()
    .then(res => console.log(JSON.stringify(res, null, 2))); */
    const viewabilityConfig = useRef({
      itemVisiblePercentThreshold: 50,
    }).current;
  return (
    <SafeAreaView
      style={[
        styles.scrollView,
        {
          backgroundColor: theme['background-basic-color-4'],
        },
      ]}>
      <ScrollView
        style={[
          styles.scrollView,
          {
            backgroundColor: theme['background-basic-color-4'],
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

          <ScrollView ref={scrollViewRef}>
            <View style={styles.homeSection}>
              <View style={styles.textContainer}>
                <AppText size="lg" bold style={{color: '#598BFF',textShadowColor: 'rgba(255, 255, 255, 0.2)',
         textShadowOffset: {width: -1, height: 1},
         textShadowRadius: 10}}>
                  {'Planea un evento'}
                </AppText>
              </View>
              <View style= {{
    height: height * 0.3,
  }}>

              <FlatList
              
        data={mock_items}
        renderItem={({item}) => <Pressable
        key={item.id}
        onPress={() => {
          // const google = new GoogleServices();
          // google.loginWithGoogle();
          handleNavigate(ROUTES.CREATE_MATCH)
        }}>
        <AppHomeCard
          match={item}
          backgroudImage={require('../../../core/assets/soccer_stadium_bg.jpg')}
        />
      </Pressable>}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        viewabilityConfig={viewabilityConfig}
      />
              </View>
             
              <Pressable
                onPress={() => {
                  // const google = new GoogleServices();
                  // google.loginWithGoogle();
                }}>
                <AppHomeCard
                  match={item}
                  backgroudImage={require('../../../core/assets/soccer_stadium_bg.jpg')}
                />
              </Pressable>
            </View>
            <View style={styles.homeSection}>
              <View style={styles.textContainer}>
                <AppText size="lg" bold>
                  {'Eventos importantes'}
                </AppText>
              </View>
              <Pressable
                onPress={() => {
                  // const google = new GoogleServices();
                  // google.loginWithGoogle();
                }}>
                <AppHomeCard match={item} backgroudImage={require('../../../core/assets/soccer_stadium_bg.jpg')} />
              </Pressable>
            </View>
          </ScrollView>

          <Text>Hola, {params.user?.email}</Text>
          {/* <Icon name="tv" width={32} height={32} fill="#ffffff" /> */}
          <Text>Home Screen</Text>
          <TouchableOpacity onPress={() => handleLogout()}>
            <Text>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigate(ROUTES.ONBOARDING)}>
            <Text>onboarding</Text>
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
