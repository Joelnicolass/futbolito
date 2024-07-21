import React, {useRef} from 'react';
import {Animated, FlatList, Text, View} from 'react-native';
import AppText from '../../components/app_text/app_text';
import {styles} from './create_match_styles';
import {Button, Input, ProgressBar} from '@ui-kitten/components';

export const FootballField = () => {
  return (
    <View style={styles.mainSquareLine}>
      <View style={styles.topArea}></View>
      <View style={styles.middleLine}>
        <View style={styles.middleCircle}></View>
      </View>
      <View style={styles.bottomArea}></View>
    </View>
  );
};

const mock_items = [<FootballField />, <FootballField />];

export const CreateMatchScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  // ejemplos de uso de los casos de uso con el patron clean architecture + capa de inyeccion de dependencias (DI)
  /*   matchUseCases.getMatch
    .execute('1')
    .then(res => console.log(JSON.stringify(res, null, 2)));

  matchUseCases.getMatches
    .execute()
    .then(res => console.log(JSON.stringify(res, null, 2))); */
    const flatRef = useRef<FlatList>();
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleNext = () => {
    if (flatRef.current) {
      flatRef?.current?.scrollToIndex({
        animated: true,
        index: 2
    });
    }
  }
  return (
    <View style={styles.container}>
      <AppText size="md" bold>
        {'create match'}
      </AppText>
      <View>
        <View style={{position: 'absolute', width: 200, height: 500}}>

      <Input
                  style={styles.inputText}
                  placeholder="Email Address"
                  onChangeText={() =>{}}
                  onBlur={() =>{}}
                  value={"asd"}
                  keyboardType="email-address"
                  size="large"
                />
        </View>
      </View>
      
      <View style={styles.fieldContainer}>
        <FlatList
        ref={flatRef}
          data={mock_items}
          renderItem={({item}) => <View style={{display: 'flex', alignItems:'center', justifyContent:'space-around', padding:20}}>{item}</View>}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewabilityConfig}
        />

        <View style={styles.buttonContainer}>
          <Button style={styles.button} appearance="outline">
            <AppText>{'Add team 1'}</AppText>
          </Button>
          <Button style={styles.button2} appearance="outline">
            <AppText>{'Add team 2'}</AppText>
          </Button>
        </View>
        <ProgressBar
          style={styles.processBar}
          status="success"
          progress={0.33}
        />
      </View>
      <Button style={styles.button3} appearance="outline" onPress={() => handleNext()}>
        <AppText bold>{'Next step'}</AppText>
      </Button>
    </View>
  );
};
