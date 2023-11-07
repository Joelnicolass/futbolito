import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#c8c8c8',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.25,
    borderRadius: 10,
  },
  logo: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.25,
    marginTop: 100,
  },
});
