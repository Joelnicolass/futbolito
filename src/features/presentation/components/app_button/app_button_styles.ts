import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  textWhite:{
    color: 'white'
  },
  outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'white'
    },
    filled: {
      backgroundColor: '#09E360',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
    borderRadius: 4,
  },
  disabled: {
    opacity: 0.4,
  },
  enabled: {
    opacity: 1,
  },
  loginText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },  textLogin:{
    color: '#000',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
