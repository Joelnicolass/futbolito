import {Text} from '@ui-kitten/components';
import React from 'react';
import {TextProps} from 'react-native';
import {Size} from '../../../domain/entities/size';

type LinkProps = {
  link: true;
  onPress: () => void;
};

type NonLinkProps = {
  link?: false;
  onPress?: never;
};

type Props = (LinkProps | NonLinkProps) &
  TextProps & {
    children: React.ReactNode | React.ReactNode[] | string;
    bold?: boolean;
    size?: Size;
    color?: string;
    status?: string;
  };

const AppText = ({
  children,
  bold,
  size = 'md',
  color = 'white',
  link = false,
  status,
  onPress,
  ...props
}: Props) => {
  const sizeMap = {sm: 12, md: 14, lg: 16};

  return (
    <Text
    status={status}
      {...props}
      {...(link && {onPress})}
      style={[
        {
          fontFamily: 'Roboto',
          fontWeight: bold ? 'bold' : 'normal',
          fontSize: sizeMap[size],
        },
        !status && {
          color: link ? '#85B4FE' : color,
        },
        props.style,
      ]}>
      {children as unknown as any}
    </Text>
  );
};

export default AppText;
