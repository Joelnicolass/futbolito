import React from 'react';
import {styles} from './home_styles';
import {
  Layout,
  Text,
  Icon,
  useTheme,
  Spinner,
  Avatar,
} from '@ui-kitten/components';

import {useNavigationState} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHomeCard from '../../components/app_home_card/app_home_card';
import {BACKGROUND_GRADIENT} from '../../theme/theme';
import SportCourt from '../../../core/assets/sport_court.svg';
import Tournament from '../../../core/assets/tournament.svg';
import {FlatList, View} from 'react-native';
import AppText from '../../components/app_text/app_text';
import AppPill, {PillStatus} from '../../components/app_pill/app_pill';

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
        {/* 
            SEPARAR EN CAROUSEL HORIZONTAL
          */}
        <ScrollView
          horizontal
          style={{
            padding: 16,
          }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 16,
          }}>
          <AppHomeCard
            title="¡ CREÁ UN NUEVO PARTIDO !"
            subtitle="Invita a tus amigos y organiza un emocionante partido de fútbol."
            background={{
              gradient: BACKGROUND_GRADIENT.GREEN,
              Image: SportCourt,
              styles: {opacity: 0.1},
            }}
            button={{
              text: 'Crear ahora',
              onPress: () => {},
            }}
          />

          <AppHomeCard
            title="¡ CREÁ UN NUEVO TORNEO !"
            subtitle="Invita a tus amigos y organiza un emocionante torneo de fútbol."
            background={{
              gradient: BACKGROUND_GRADIENT.RED,
              Image: Tournament,
            }}
            button={{
              text: 'Crear ahora',
              onPress: () => {},
            }}
          />
        </ScrollView>

        {/* 
            // FLAT LIST DE ITEMS
          */}

        <FlatList
          style={{
            padding: 16,
            paddingTop: 0,
          }}
          ItemSeparatorComponent={() => <View style={{height: 16}} />}
          data={Array.from({length: 20}).map((_, index) => ({
            teamName: 'Depor. Indpendiente',
            address: 'Sayos 123',
            date: '18/07/2024',
            time: '18:00',
            status:
              Math.random() > 0.3
                ? 'confirmed'
                : Math.random() > 0.6
                ? 'pending'
                : 'canceled',
          }))}
          renderItem={({item}) => {
            const statusMap: Record<string, {pill: PillStatus; text: string}> =
              {
                pending: {
                  pill: PillStatus.WARNING,
                  text: 'Pendiente',
                },
                confirmed: {
                  pill: PillStatus.SUCCESS,
                  text: 'Finalizado',
                },
                canceled: {
                  pill: PillStatus.ERROR,
                  text: 'Cancelado',
                },
              };

            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: 12,
                  backgroundColor: '#1C252E',
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: 'white',
                  paddingVertical: 12,
                  paddingHorizontal: 14,
                  gap: 16,
                }}>
                <View>
                  <Avatar height={56} width={56} ImageComponent={SportCourt} />
                </View>

                <View
                  style={{
                    flex: 1,
                    gap: 4,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <AppText bold>{item.teamName}</AppText>
                    <AppPill
                      status={statusMap[item.status].pill}
                      text={statusMap[item.status].text}
                    />
                  </View>

                  <View>
                    <AppText size="sm">{item.address}</AppText>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <AppText size="sm">{item.time} hs</AppText>
                    <AppText size="sm">{item.date}</AppText>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
