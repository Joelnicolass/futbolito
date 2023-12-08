import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const LoadingDataScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
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
