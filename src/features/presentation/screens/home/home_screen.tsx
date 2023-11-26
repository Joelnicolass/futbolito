import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './home_styles';
import {HomeViewModel} from './home_view_model';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';

export const HomeScreen = () => {
  const {handleTap, handleAuth} = HomeViewModel();

  matchUseCases.getMatch
    .execute('1')
    .then(res => console.log(JSON.stringify(res, null, 2)));

  return (
    <View style={styles.homeContainer}>
      <View style={styles.container} />
      <Text>Home Screen</Text>
      <Button onPress={handleTap} title="Go back" />
      <Button onPress={handleAuth} title="Go auth" />
    </View>
  );
};
