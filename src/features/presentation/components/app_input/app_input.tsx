
import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import {styles} from './app_input_styles';
import { Icon, Input } from '@ui-kitten/components';
import { TapGestureHandler } from 'react-native-gesture-handler';

// create a component
export const AppInput = ({
    handleChange,
    handleBlur,
    value,
    status,
    placeholder,
    password,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      if(password) setIsVisible(true)
    
      
    }, [password])
    
  return (
    <View style={styles.container}>
        <Input
        
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={'#04344D'}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
        keyboardType={password ? 'default' : 'email-address'}
        status={status}
        size="large"
        textStyle={{color: '#04344D'}}
        secureTextEntry={isVisible}
      />
      {
        password &&
      <TapGestureHandler onActivated={() => setIsVisible((prev) => !prev)} >
      <View style={styles.icon}>
      <Icon name='eye' />
      </View>
      </TapGestureHandler>
      }
    </View>
  );
};
