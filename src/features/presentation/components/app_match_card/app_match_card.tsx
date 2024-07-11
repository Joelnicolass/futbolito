import {Dimensions, View} from 'react-native';
import React from 'react';
import AppText from '../app_text/app_text';
import AppDivider from '../app_divider/app_divider';
import {Match} from '../../../domain/entities/match';
import AppIconText from '../app_icon_text/app_icon_text';
import AppAvatar from '../app_avatar/app_avatar';
import {gradient} from '../../theme/theme';
import {styles} from './app_match_card_styles';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {MatchCardViewModel} from './app_match_card_view_model';

interface Props {
  match: Match;
}

const AppMatchCard = ({match}: Props) => {
  const {handleNavigate} = MatchCardViewModel();
  const time = match.dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.cardContainer}>
      <TapGestureHandler onActivated={() => handleNavigate('match')}>
        <View style={styles.container}>
          <View
            style={{
              position: 'relative',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 20,
            }}>
            <AppAvatar
              row
              bold
              size={50}
              style={{position: 'absolute', top: -50, left: -35, zIndex: 1}}
              bordered
              borderColors={gradient.reverse()}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AppText bold>{match.name}</AppText>
            </View>
            <AppIconText icon="clock-outline" text={time} />
            <AppIconText icon="pin-outline" text={match.location} />
          </View>

          <AppDivider />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                width: Dimensions.get('window').width * 0.25,
              }}>
              <AppText size="sm">{match.homeTeam.name}</AppText>
            </View>
            <AppText size="sm">vs</AppText>

            <View
              style={{
                width: Dimensions.get('window').width * 0.25,
              }}>
              <AppText size="sm">{match.awayTeam.name}</AppText>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <AppText size="sm">{match.result.homeTeam}</AppText>
            <AppText size="sm"> - </AppText>
            <AppText size="sm">{match.result.awayTeam}</AppText>
          </View>
        </View>
      </TapGestureHandler>
    </View>
  );
};

export default AppMatchCard;
