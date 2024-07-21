import {Avatar} from '@ui-kitten/components';
import React from 'react';
import {TouchableOpacity, Vibration, View} from 'react-native';
import AppText from '../app_text/app_text';
import AppPill, {PillStatus} from '../app_pill/app_pill';
import BallIcon from '../../../core/assets/ball2.svg';

type Props = {
  data: {
    teamName: string;
    status: string;
    address: string;
    time: string;
    date: string;
  };
};

const HomeMatchCard = ({data}: Props) => {
  const statusMap: Record<string, {pill: PillStatus; text: string}> = {
    pending: {
      pill: PillStatus.WARNING,
      text: 'Pendiente',
    },
    confirmed: {
      pill: PillStatus.SUCCESS,
      text: 'Finalizado',
    },
    canceled: {
      pill: PillStatus.ERROR,
      text: 'Cancelado',
    },
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: '#1C252E',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.05)',
        paddingVertical: 12,
        paddingHorizontal: 14,
        gap: 16,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1,
      }}>
      <View
        style={{
          paddingHorizontal: 4,
        }}>
        <Avatar height={56} width={56} ImageComponent={BallIcon} />
      </View>

      <View
        style={{
          flex: 1,
          gap: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <AppText bold>{data.teamName}</AppText>
          <AppPill
            status={statusMap[data.status].pill}
            text={statusMap[data.status].text}
          />
        </View>

        <View>
          <AppText size="sm">{data.address}</AppText>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <AppText size="sm">{data.time} hs</AppText>
          <AppText size="sm">{data.date}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeMatchCard;
