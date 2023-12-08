import {Text} from '@ui-kitten/components';
import React from 'react';
import {TextProps} from 'react-native';

interface Props extends TextProps {
  children: React.ReactNode | React.ReactNode[] | string;
  bold?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const AppText = ({children, bold, size = 'md', ...props}: Props) => {
  const sizeMap = {sm: 16, md: 24, lg: 30};

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
