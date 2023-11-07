/* eslint-disable react-hooks/rules-of-hooks */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export const loadingViewModel = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const skipLoading = async () => {
      setTimeout(async () => {

        const skipOnboardingString = await AsyncStorage.getItem('skip_onboarding');
        const skipOnboarding = skipOnboardingString != null
          ? JSON.parse(skipOnboardingString)
          : false;

        if (skipOnboarding) {
          navigation.dispatch(StackActions.replace('Home'));
        } else {
          navigation.dispatch(StackActions.replace('Login'));
        }
      }, 1000);
    };

    skipLoading();
  }, [navigation]);

  return {
  };
};
