//import liraries
import {StackActions, useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
export const useRouter = () => {
  const navigation = useNavigation();
  const handleReplace = (route: string) => {
    navigation.dispatch(StackActions.replace(route));
  };
  const handleNavigate = (route: string, ) => {
    navigation.dispatch(StackActions.push(route));
  };
  const handleNavigateBack = () => {
    navigation.dispatch(StackActions.pop());
  };
  return {
    handleReplace,
    handleNavigate,
    handleNavigateBack,
  };
};

// define your styles
