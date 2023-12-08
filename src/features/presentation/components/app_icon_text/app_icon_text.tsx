import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@ui-kitten/components';
import AppText from '../app_text/app_text';

interface Props {
  icon: string;
  text: string;
  size?: number;
  bold?: boolean;
  row?: boolean;
  onPressed?: () => void;
}

const AppIconText = ({
  icon,
  text,
  onPressed,
  size = 20,
  bold = false,
  row = false,
}: Props) => {
  const handlePress = () => onPressed && onPressed();

  return (
    <View
      style={[styles.container, {flexDirection: row ? 'row' : 'column'}]}
      onTouchEnd={handlePress}>
      <Icon name={icon} fill="#fff" style={{width: size, height: size}} />
      <AppText bold={bold} size="sm">
        {text}
      </AppText>
    </View>
  );
};

export default AppIconText;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 5,
  },
});
