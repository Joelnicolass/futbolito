import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerList: {padding: 20},
  list: {
    overflow: 'visible',
    marginBottom: Dimensions.get('window').height * 0.3,
  },
});
