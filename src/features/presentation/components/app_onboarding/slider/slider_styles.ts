import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
viewContainer: {
    backgroundColor: '#AEFAA2',
    height: height * 0.9,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#3AB4BA',
    borderRadius: 25,
    height: 60,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgotAndSignUpText: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    height: 14,
  },
  hiddenText: {
    color: 'red',
    fontSize: 0,
    height: 14,
  },
  startButton: {
    backgroundColor: 'lightblue',
    width: width * 0.5,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    borderRadius: 8,
},
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
},
  buttonContainer: {
    width: width ,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
}
});
