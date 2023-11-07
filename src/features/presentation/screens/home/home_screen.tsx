import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './home_styles';
import { HomeViewModel } from './home_view_model';

export const HomeScreen = () => {
    const {handleTap} = HomeViewModel();
    return (
        <View style={styles.homeContainer}>
          <View style={styles.container} />
          <Text>Home Screen</Text>
          <Button onPress={handleTap}  title="Go back"/>
        </View>
      );
};
