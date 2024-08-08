import React from 'react';
import {View} from 'react-native';
import AppText from '../app_text/app_text';

export enum PillStatus {
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

type Props = {
  status: (typeof PillStatus)[keyof typeof PillStatus];
  text: string;
};

const AppPill = ({status, text}: Props) => {
  const backgroundColorMap = {
    [PillStatus.SUCCESS]: '#1C3F36',
    [PillStatus.WARNING]: '#403A27',
    [PillStatus.DANGER]: '#402D2F',
  };

  const textColorMap = {
    [PillStatus.SUCCESS]: '#5AED8B',
    [PillStatus.WARNING]: '#FFD652',
    [PillStatus.DANGER]: '#FF5E6C',
  };

  return (
    <View
      style={{
        borderRadius: 100,
        backgroundColor: backgroundColorMap[status],
      }}>
      <AppText
      status={status}
        bold
        size="sm"
        style={{
          paddingVertical: 2,
          paddingHorizontal: 8,
        }}>
        {text}
      </AppText>
    </View>
  );
};

export default AppPill;
