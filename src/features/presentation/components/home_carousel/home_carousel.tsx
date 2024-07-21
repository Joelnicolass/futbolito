import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import HomeGradientCard from '../home_gradient_card/home_gradient_card';
import {BACKGROUND_GRADIENT} from '../../theme/theme';
import SportCourt from '../../../core/assets/sport_court.svg';
import Tournament from '../../../core/assets/tournament.svg';

const HomeCarousel = () => {
  const {container, contentContainer} = homeCarouselStyles;

  return (
    <ScrollView
      horizontal
      style={container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={contentContainer}>
      <HomeGradientCard
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

      <HomeGradientCard
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
  );
};

export default HomeCarousel;

export const homeCarouselStyles = StyleSheet.create({
  container: {
    flexShrink: 0,
  },
  contentContainer: {
    gap: 8,
  },
});
