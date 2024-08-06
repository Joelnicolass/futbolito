import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(width * height) / 100;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.05) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale, screenSize};
