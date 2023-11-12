import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4FD3DA',
      alignItems: 'center',
      justifyContent: 'center',
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
      height: 50,
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
  });
  