import {ImageProps, StyleProp, StyleSheet, View} from 'react-native';
import React from 'react';
import {Avatar} from '@ui-kitten/components';
import AppText from '../app_text/app_text';

interface Props {
  email?: string;
  src?: string;
  style?: StyleProp<ImageProps>;
}

const AppAvatar = ({email, src, style}: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
      }}>
      <Avatar
        style={style}
        size="giant"
        src={src || 'https://i.pravatar.cc/300'}
      />

      <AppText size="sm">{email}</AppText>
    </View>
  );
};

export default AppAvatar;

const styles = StyleSheet.create({});
