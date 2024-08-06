import {FlexAlignType, View} from 'react-native';
import React from 'react';
import {Icon} from '@ui-kitten/components';
import AppText from '../app_text/app_text';
import {Size} from '../../../domain/entities/size';

interface Props {
  rate: number;
  color?: string;
  sizeIcon?: number;
  sizeText?: Size;
  align?: 'left' | 'right' | 'center';
  row?: boolean;
  gap?: number;
}

const AppRating = ({
  rate,
  sizeIcon = 30,
  color = 'white',
  sizeText = 'sm',
  align = 'center',
  row = false,
  gap = 2,
}: Props) => {
  const calculateRateFromOnehundred = (x: number) => (x * 10) / 100;

  const flexDir = row ? 'row' : 'column';

  const alignMap = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
  };

  return (
    <View
      style={{
        flexDirection: flexDir,
        alignItems: alignMap[align] as FlexAlignType,
        gap,
      }}>
      <Icon
        name="star"
        fill={color}
        style={{width: sizeIcon, height: sizeIcon}}
      />
      <AppText bold size={sizeText}>
        {calculateRateFromOnehundred(rate)}
      </AppText>
    </View>
  );
};

export default AppRating;
