import {ImageStyle, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {Avatar} from '@ui-kitten/components';
import AppText from '../app_text/app_text';

interface Props {
  text?: string;
  src?: string;
  style?: StyleProp<ViewStyle>;
  size?: number;
  row?: boolean;
  bold?: boolean;
}

const AppAvatar = ({
  text,
  src,
  style,
  row = false,
  size = 60,
  bold = false,
}: Props) => {
  return (
    <View
      style={[
        {
          alignItems: 'center',
          flexDirection: row ? 'row' : 'column',
          gap: 10,
        },
        style,
      ]}>
      <Avatar
        style={[{width: size, height: size}]}
        size="giant"
        src={src || 'https://i.pravatar.cc/300'}
      />

      <AppText bold={bold} size="sm">
        {text}
      </AppText>
    </View>
  );
};

export default AppAvatar;

const styles = StyleSheet.create({});
