import {
  FlexAlignType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Avatar} from '@ui-kitten/components';
import AppText from '../app_text/app_text';
import AppRating from '../app_rating/app_rating';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  text?: string;
  src?: string;
  style?: StyleProp<ViewStyle>;
  size?: number;
  row?: boolean;
  bold?: boolean;
  align?: 'left' | 'right' | 'center';
  showRating?: boolean;
  bordered?: boolean;
  borderColors?: string[];
}

const AppAvatar = ({
  text,
  src,
  style,
  row = false,
  size = 60,
  bold = false,
  align = 'center',
  showRating = false,
  bordered = false,
  borderColors = ['white', 'white'],
}: Props) => {
  const flexDir = row ? 'row' : 'column';

  const alignMap = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
  };

  return (
    <View
      style={[
        {
          alignItems: alignMap[align] as FlexAlignType,
          flexDirection: flexDir,
        },
        styles.container,
        style,
      ]}>
      <LinearGradient
        colors={bordered ? borderColors : ['transparent', 'transparent']}
        style={[
          styles.avatarBackgroud,
          {
            padding: bordered ? 2 : 0,
          },
        ]}>
        <Avatar
          style={[{width: size, height: size}]}
          size="giant"
          src={src || 'https://i.pravatar.cc/300'}
        />
      </LinearGradient>
      <View
        style={[
          styles.containerText,
          {alignItems: alignMap[align] as FlexAlignType},
        ]}>
        <AppText bold={bold} size="sm">
          {text}
        </AppText>
        {showRating && <AppRating row rate={75} sizeIcon={20} sizeText="xs" />}
      </View>
    </View>
  );
};

export default AppAvatar;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: 'center',
  },
  containerText: {
    alignItems: 'flex-start',
    gap: 10,
  },
  avatarBackgroud: {
    borderRadius: 50,
    padding: 2,
  },
});
