import {Dimensions, StyleSheet} from 'react-native';

export const appGradientCardStyles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 8,
    gap: 16,
    width: Dimensions.get('window').width / 1.3,
    maxWidth: 300,
  },
  card_image: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  button_create: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  dynamic: {
    height: Dimensions.get('window').height / 4,
  },
});
