import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../app_text/app_text';
import AppDivider from '../app_divider/app_divider';
import {Match} from '../../../domain/entities/match';
import AppIconText from '../app_icon_text/app_icon_text';
import AppAvatar from '../app_avatar/app_avatar';

interface Props {
  match: Match;
}

const AppMatchCard = ({match}: Props) => {
  const time = match.dateTime.toLocaleTimeString().slice(0, 5);

  return (
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
          style={{position: 'absolute', top: -50, left: -35}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
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
  );
};

export default AppMatchCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#e7a20c',
    justifyContent: 'space-around',
    backgroundColor: '#101010',
    padding: 20,
    marginVertical: Dimensions.get('window').height * 0.02,
    height: Dimensions.get('window').height * 0.25,
    borderRadius: 20,
  },
});
