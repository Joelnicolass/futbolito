import React from 'react';
import {styles} from './home_styles';
import {Layout, useTheme} from '@ui-kitten/components';

import {useNavigationState} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import AppText from '../../components/app_text/app_text';
import HomeCarousel from '../../components/home_carousel/home_carousel';
import HomeMatchList from '../../components/home_match_list/home_match_list';

export const HomeScreen = () => {
  const params = useNavigationState(state => state.routes[0].params) as {
    user: any;
  };
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.scrollView,
        {
          backgroundColor: theme['background-basic-color-1'],
        },
      ]}>
      <Layout
        style={{
          padding: 16,
          gap: 16,
        }}>
        <AppText size="lg">Eventos</AppText>

        <HomeCarousel />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <AppText size="lg">Proximos partidos</AppText>
          <AppText size="lg" link onPress={() => {}}>
            Ver más
          </AppText>
        </View>

        <HomeMatchList />
      </Layout>
    </SafeAreaView>
  );
};
