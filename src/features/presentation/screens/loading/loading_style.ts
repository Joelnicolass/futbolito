import { Dimensions, StyleSheet } from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  gradientContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingContainer: {
    width: '100%',
   // backgroundColor: 'yellow',
    // height: (Dimensions.get('window').height * 0.5) + 100,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },

  logo: {
    width: width * 0.7,
    height: height * 0.25,
    marginTop: 100,
  },
});
