import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    socialMediaContainer:{
      display: 'flex',
      alignItems: 'center',

      gap: 8,
      width: '100%'
    },
    textLogin:{
      color: '#000',
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: '700',
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      justifyContent: 'space-around',
    },
    formikContainer: {
      display:'flex',
      width: '100%',
      height: height * 0.4,
      alignItems:'center',
      justifyContent: 'space-evenly',

    },
    bodyContainer: {
      display:'flex',
      width: '100%',
      alignItems:'center',
      justifyContent: 'center'
    },
    title: {
      color: '#09E360',
      fontWeight: '500',
      fontSize: 40,
    },
    subtitle: {
      color: '#FFFFFF',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 21,
      marginBottom: 0,
    },
    line: {
      width: 40,
      height: 1
      ,backgroundColor: '#FFFFFF'
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
      color: 'black',
    },
    loginBtnContainer:{
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    loginBtn: {
      backgroundColor: '#09E360',
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      width: '80%',
      borderRadius: 4,
    },
    loginText: {
      textAlign:'center',
      color: '#000',
      fontSize: 16,
    },
    redirectText: {
      width: '100%',
      textAlign:'right',
      color: '#85B4FE',
      fontSize: 14,
    },
    forgotPasswordContainer: {
      width: '80%',
      marginTop: -32
    },
    registerText: {
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },
    errorText: {
      textAlign: 'left',
      paddingLeft:4,
      fontSize: 16,
      height: 'auto',
    },
    hiddenText: {
      fontSize: 0,
      height: 'auto',
    },
    disabled: {
      opacity: 0.4,
    },
    enabled: {
      opacity: 1,
    },
    socialMediaButton: {
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor:'transparent',
      borderColor: '#FFFFFF',
      width: '80%',
      
      fontWeight: 700,
    }
  });