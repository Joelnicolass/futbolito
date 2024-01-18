import React from 'react';
import {styles} from './match_styles';
import {MatchViewModel} from './match_view_model';
import {Layout, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import LoadingDataScreen from '../loading_data/loading_data';
import AppMatchCard from '../../components/app_match_card/app_match_card';
import AppHeader from '../../components/app_header/app_header';

export const MatchScreen = () => {
  const {matches, isLoading} = MatchViewModel();

  if (isLoading) return <LoadingDataScreen />;

  return (
    <Layout style={styles.container}>
      <AppHeader />
      <View style={styles.containerList}>
        <FlatList
          style={styles.list}
          data={matches}
          keyExtractor={item => item.id}
          // renderItem={({item}) => <Text>{item.id}</Text>}
          renderItem={({item}) => <AppMatchCard match={item} />}
          onEndReachedThreshold={4}
          refreshing={!isLoading}
          showsVerticalScrollIndicator={false}
          onRefresh={() => console.log("refreshing...")}
        />
      </View>
    </Layout>
  );
};
