import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.25,
    marginTop: 100,
  },
  mapContainer: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
    // ...StyleSheet.absoluteFillObject,
  },
  homeSection: {
    display: "flex",
    height: "auto",
    maxHeight: height * 0.3,
  },
  textContainer:{ 
    paddingHorizontal: 16,

  }
});
