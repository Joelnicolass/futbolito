import { Dimensions, StyleSheet } from "react-native";
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#B3FFD6',
      justifyContent: 'space-around',
      padding: 20,
      height: height * 0.2,
      width: width * 0.85,
      borderRadius: 14,
      shadowRadius: 5,
      shadowColor: '#CCC',
    },
    cardContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: height * 0.01,
      height: "auto",
      maxHeight: height * 0.3,
      width: width,
    },
    imageBackground:{
      borderRadius: 20,
      width: width * 0.85,
    },
    textContainer: {
      display: 'flex',
      alignItems: 'center',
    }
  });
  