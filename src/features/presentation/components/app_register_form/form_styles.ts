import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  formikContainer: {
    display: 'flex',
    gap: 16,
    width: '100%',
    height: height * 0.6,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
    textAlign: 'left',
  },
  textInfo: {
    marginTop: -4,
    fontSize: 14,
    paddingLeft: 16,
    fontWeight: '400',
    textAlign: 'left',
  },
  inputView: {
    display: 'flex',
    gap: 2,
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
  },
  errorText: {
    marginTop: 4,
    fontSize: 16,
    paddingLeft: 4,
    height: 'auto',
  },
  hiddenText: {
    fontSize: 0,
    height: 'auto',
  },
});
