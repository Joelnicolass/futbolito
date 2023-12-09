import {Text} from '@ui-kitten/components';
import React from 'react';
import {TextProps} from 'react-native';
import {Size} from '../../../domain/entities/size';

interface Props extends TextProps {
  children: React.ReactNode | React.ReactNode[] | string;
  bold?: boolean;
  size?: Size;
}

const AppText = ({children, bold, size = 'md', ...props}: Props) => {
  const sizeMap = {xs: 13, sm: 16, md: 24, lg: 30, xl: 40};

  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontWeight: bold ? 'bold' : 'normal',
          fontSize: sizeMap[size],
        },
      ]}>
      {children as unknown as any}
    </Text>
  );
};

export default AppText;
