import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import RevealFullscreen from '../../animations/reveal_fullscreen/reveal_fullscreen';

const LoadingDataScreen = () => {
  return (
    <RevealFullscreen>
      <ActivityIndicator size="large" color="#fff" />
    </RevealFullscreen>
  );
};

export default LoadingDataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 1000,
    height: 1000,
    borderRadius: Dimensions.get('window').width / 0.1,
  },
});
