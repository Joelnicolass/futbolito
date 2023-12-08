import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';
import LinearGradient from 'react-native-linear-gradient';
import {gradient} from '../../theme/globals';

const LoadingDataScreen = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          borderRadius: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 400,
        }}>
        <LinearGradient colors={gradient} style={styles.gradient}>
          <ActivityIndicator size="large" color="#fff" />
        </LinearGradient>
      </MotiView>
    </View>
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
