import React from 'react';
import {FlatList, View} from 'react-native';
import HomeMatchCard from '../home_match_card/home_match_card';

type Props = {};

const HomeMatchList = (props: Props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{height: 16}} />}
      data={Array.from({length: 20}).map((_, index) => ({
        teamName: 'Depor. Indpendiente',
        address: 'Sayos 123',
        date: '18/07/2024',
        time: '18:00',
        status:
          Math.random() > 0.3
            ? 'confirmed'
            : Math.random() > 0.6
            ? 'pending'
            : 'canceled',
      }))}
      renderItem={({item}) => <HomeMatchCard data={item} />}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={<View style={{height: 16}} />}
    />
  );
};

export default HomeMatchList;
