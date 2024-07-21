import React from 'react';
import {Pressable, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../app_text/app_text';
import {appGradientCardStyles} from './home_gradient_card.styles';
import {AppHomeCardProps} from './types';

function HomeGradientCard({
  title,
  subtitle,
  button,
  background,
}: AppHomeCardProps) {
  const {container, button_create, card_image, dynamic} = appGradientCardStyles;

  return (
    <LinearGradient
      colors={background.gradient}
      useAngle
      angle={90}
      style={container}>
      {background.Image && (
        <background.Image
          style={[card_image, background.styles]}
          height={dynamic.height}
        />
      )}
      <View>
        <AppText bold>{title}</AppText>
      </View>

      <View>
        <AppText size="sm">{subtitle}</AppText>
      </View>

      <View>
        <Pressable style={button_create} onPress={button.onPress}>
          <AppText color="black">{button.text}</AppText>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

export default HomeGradientCard;
