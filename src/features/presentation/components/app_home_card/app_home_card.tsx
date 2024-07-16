import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  View,
} from 'react-native';
import React from 'react';
import AppText from '../app_text/app_text';
import AppDivider from '../app_divider/app_divider';
import AppIconText from '../app_icon_text/app_icon_text';
import AppAvatar from '../app_avatar/app_avatar';
import {gradient} from '../../theme/theme';
import {styles} from './app_home_card_styles';
import {ScrollView, TapGestureHandler} from 'react-native-gesture-handler';
import {HomeCardViewModel} from './app_home_card_view_model';
import {Match} from '../../../domain/entities/match';
import {Text} from '@ui-kitten/components';

interface Props {
  match: Match;
  backgroundImage: ImageSourcePropType;
}

const AppHomeCard = ({match, backgroundImage}: Props) => {
  const {handleNavigate} = HomeCardViewModel();
  const time = match.dateTime.toLocaleTimeString().slice(0, 5);

  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        blurRadius={15}
        borderRadius={14}
        source={backgroundImage}>
        <TapGestureHandler onActivated={() => handleNavigate('match')}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <AppText size="md" style={{color: '#F2F6FF'}}>
                {'Es hora de '}
              </AppText>
              <AppText
                bold
                size="lg"
                style={{
                  color: '#00E096',
                  textShadowColor: 'rgba(0, 224, 150, 0.5)',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowRadius: 10,
                }}>
                {'Jugar un partido'}
              </AppText>
            </View>
          </View>
        </TapGestureHandler>
      </ImageBackground>
    </View>
  );
};

export default AppHomeCard;
