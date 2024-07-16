import {Text} from '@ui-kitten/components';
import React from 'react';
import {TextProps} from 'react-native';
import {Size} from '../../../domain/entities/size';

interface Props extends TextProps {
  children: React.ReactNode | React.ReactNode[] | string;
  bold?: boolean;
  size?: Size;
  color?: string;
}

const AppText = ({
  children,
  bold,
  size = 'md',
  color = 'white',
  ...props
}: Props) => {
  const sizeMap = {sm: 12, md: 14, lg: 24};

  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: 'Roboto',
          fontWeight: bold ? 'bold' : 'normal',
          fontSize: sizeMap[size],
          color,
        },
      ]}>
      {children as unknown as any}
    </Text>
  );
};

export default AppText;
