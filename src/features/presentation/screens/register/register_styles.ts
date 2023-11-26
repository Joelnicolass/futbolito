import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    formikContainer: {
      display:'flex',
      width: '100%',
      height: height * 0.6,
      alignItems:'center',
      justifyContent: 'space-around',

    },
    bodyContainer: {
      display:'flex',
      width: '100%',
      alignItems:'center',
      justifyContent: 'center'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 40,
      marginBottom: 32,
    },
    inputView: {
      width: '80%',
      height: 'auto',
      justifyContent: 'center',
    },
    inputText: {
      backgroundColor: '#C7D2FE',
      height: 'auto',
      width: '100%',
      marginBottom: 5,
      color: 'white',
    },
    registerBtn: {
      width: '70%',
      borderRadius: 25,
      marginTop: 40,
      marginBottom: 15,
    },
    loginText: {
      textAlign:'center',
      fontSize: 16,
    },
    registerText: {
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },
    errorText: {
      fontSize: 16,
      paddingLeft:4,
      height: 'auto',
    },
    hiddenText: {
      fontSize: 0,
      height: 'auto',
    },
  });