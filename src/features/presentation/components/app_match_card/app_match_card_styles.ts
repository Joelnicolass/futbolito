import { Dimensions, StyleSheet } from "react-native";
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: '#e7a20c',
      justifyContent: 'space-around',
      backgroundColor: '#101010',
      padding: 20,
      height: height * 0.25,
      width: width * 0.9,
      borderRadius: 20,
    },
    cardContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: height * 0.01,
      height: height * 0.3,
      width: width ,
    }
  });
  