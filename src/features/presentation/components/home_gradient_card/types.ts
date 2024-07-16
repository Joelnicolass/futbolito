import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type AppHomeCardProps = {
  title: string;
  subtitle: string;
  background: {
    gradient: string[];
    Image?: React.FC<SvgProps>;
    styles?: StyleProp<ViewStyle>;
  };
  button: {
    text: string;
    onPress: () => void;
  };
};
