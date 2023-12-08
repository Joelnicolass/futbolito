import React from 'react';
import {styles} from './match_styles';
import {MatchViewModel} from './match_view_model';
import {Avatar, Layout} from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from '../../components/app_text/app_text';
import AppDivider from '../../components/app_divider/app_divider';
import {FlatList} from 'react-native-gesture-handler';
import App from '../../../../../App';
import AppAvatar from '../../components/app_avatar/app_avatar';

export const MatchScreen = () => {
  const {matches, isLoading} = MatchViewModel();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          padding: 100,
          backgroundColor: '#101010',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <AppText bold>Hola, Nico!</AppText>
            <AppAvatar />
          </View>
          <AppDivider />

          <AppText size="sm">Unite a un equipo!</AppText>
        </View>

        <FlatList
          data={matches}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#101010',
                padding: 20,
                marginVertical: Dimensions.get('window').height * 0.01,
                height: Dimensions.get('window').height * 0.15,
                borderRadius: 20,
              }}>
              <AppText bold>{item.name}</AppText>
              <AppDivider />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: Dimensions.get('window').width * 0.25,
                  }}>
                  <AppText size="sm">{item.homeTeam.name}</AppText>
                </View>
                <AppText size="sm">vs</AppText>

                <View
                  style={{
                    width: Dimensions.get('window').width * 0.25,
                  }}>
                  <AppText size="sm">{item.awayTeam.name}</AppText>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <AppText size="sm">{item.result.homeTeam}</AppText>
                <AppText size="sm"> - </AppText>
                <AppText size="sm">{item.result.awayTeam}</AppText>
              </View>
            </View>
          )}
        />
      </Layout>
    </SafeAreaView>
  );
};
