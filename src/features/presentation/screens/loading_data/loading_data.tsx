import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';

const LoadingDataScreen = () => {
  return (
    <View style={styles.container}>
      <MotiView>
        <ActivityIndicator size="large" color="#fff" />
      </MotiView>
    </View>
  );
};

export default LoadingDataScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: '#101010',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
