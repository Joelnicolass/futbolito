
import React from 'react';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './loading_style';
import { loadingViewModel } from './loading_view_model';

export const LoadingScreen = () => {
  loadingViewModel();

  return (
    <LinearGradient
      colors={['#EC6F13', '#F90606', '#5005AD']}
      angle={133}
      useAngle
      locations={[-0.0144, 0.4349, 0.9364]}
      angleCenter={{
        x: 0.5, y: 0.5,
      }}
      style={styles.gradientContainer}
    >
      <View style={styles.loadingContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../../data/assets/timesense_logo.png')}
        />
      </View>
    </LinearGradient>
  );
};

