import React from 'react';
import {styles} from './home_styles';
import {Layout, useTheme} from '@ui-kitten/components';

import {
  StackActions,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import AppText from '../../components/app_text/app_text';
import HomeCarousel from '../../components/home_carousel/home_carousel';
import HomeMatchList from '../../components/home_match_list/home_match_list';
import {ROUTES} from '../../router/routes';

export const HomeScreen = () => {
  const params = useNavigationState(state => state.routes[0].params) as {
    user: any;
  };
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView
      edges={['top']}
      style={[
        styles.scrollView,
        {backgroundColor: theme['background-basic-color-1']},
      ]}>
      <Layout
        style={{
          paddingHorizontal: 16,
          gap: 16,
          flex: 1,
        }}>
        <View style={{marginBottom: 8}}>
          <AppText size="lg">Eventos</AppText>
        </View>

        <HomeCarousel />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}>
          <AppText size="lg">Proximos partidos</AppText>
          <AppText
            size="lg"
            link
            onPress={() => {
              navigation.dispatch(StackActions.push(ROUTES.SELECT_POSITION));
            }}>
            Ver más
          </AppText>
        </View>

        <HomeMatchList />
      </Layout>
    </SafeAreaView>
  );
};
