import React from 'react';
import {styles} from './home_styles';
import {Layout, Text, Icon, useTheme, Spinner} from '@ui-kitten/components';

import {useNavigationState} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppText from '../../components/app_text/app_text';
import {View} from 'moti';
import {ImageComponent, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardImage from '../../../core/assets/card_image.svg';

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
      <ScrollView
        style={[
          styles.scrollView,
          {
            backgroundColor: theme['background-basic-color-1'],
          },
        ]}>
        {/* CARD */}
        <LinearGradient
          colors={['#0E9E4C', '#05381B']}
          useAngle
          angle={90}
          style={{
            alignItems: 'flex-start',
            backgroundColor: 'red',
            width: '80%',
            padding: 24,
            borderRadius: 8,
            gap: 16,
          }}>
          <CardImage
            height={200}
            style={{
              position: 'absolute',
              right: 0,
              opacity: 0.3,
              top: 0,
            }}
          />
          <View>
            <AppText>¡ CREÁ UN NUEVO PARTIDO !</AppText>
          </View>

          <View>
            <AppText size="sm">
              Invita a tus amigos y organiza un emocionante partido de fútbol.
            </AppText>
          </View>

          <View>
            <Pressable
              style={{
                backgroundColor: 'white',
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 4,
              }}>
              <AppText color="black">Crear ahora</AppText>
            </Pressable>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};
