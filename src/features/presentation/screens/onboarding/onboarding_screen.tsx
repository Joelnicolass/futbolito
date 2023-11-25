import {default as React} from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoginViewModel, OnboardingViewModel} from './onboarding_view_model';
import {styles} from './onboarding_styles';
import Slider from '../../components/app_onboarding/slider/slider';
import { onboardingData } from '../../../core/utils/onboarding_data';

export const OnboardingScreen = () => {
  const { getItem} = OnboardingViewModel();
  return (
    <SafeAreaView>
      <Text style={styles.bottomText}>Hola</Text>
      <Slider data={onboardingData} currentItem={getItem} />
    </SafeAreaView>
  );
};
