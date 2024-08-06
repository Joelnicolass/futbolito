import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import RevealFullscreen from '../../animations/reveal_fullscreen/reveal_fullscreen';
import AppText from '../../components/app_text/app_text';

const LoadingDataScreen = ({text}: any) => {
  return (
    <RevealFullscreen>
      <ActivityIndicator size="large" color="#fff" />
      {text && <AppText>{text}</AppText>}
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
