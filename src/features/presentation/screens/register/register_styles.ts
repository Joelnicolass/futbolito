import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginTop: 16,
      fontSize: 22,
    },
    formikContainer: {
      textAlign: 'left',
      display:'flex',
      marginTop: 16,
      gap: 16,
      width: '90%',
      height: height * 0.6,

    },
  
  
    redirectText: {
      textAlign:'left',
      color: '#85B4FE',
      fontSize: 14,
    },
    bodyContainer: {
      display:'flex',
      width: '100%',
      alignItems:'center',
      justifyContent: 'center'
    },
    inputView: {
      width: '90%',
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