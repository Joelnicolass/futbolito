import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  formikContainer: {
    display: 'flex',
    marginTop: 16,
    gap: 16,
    width: '100%',
    height: height * 0.6,
    alignItems: 'center',
  },
  inputView: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 16,
    paddingLeft: 4,
    height: 'auto',
  },
  hiddenText: {
    fontSize: 0,
    height: 'auto',
  },
});
