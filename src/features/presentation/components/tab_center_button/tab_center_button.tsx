import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, IconElement} from '@ui-kitten/components';

const TabCenterButton = (props: any): IconElement => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#1C252E',
          top: -40,
          borderRadius: 100,
          width: 90,
          height: 90,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.05)',
        }}
      />

      <View
        style={{
          position: 'absolute',
          backgroundColor: '#1C252E',
          width: 90,
          height: 68,
        }}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#09E360',
          marginBottom: 50,
        }}>
        <Icon
          {...props}
          name="plus"
          fill="white"
          style={{width: 30, height: 30}}
        />
      </View>
    </>
  );
};

export default TabCenterButton;
