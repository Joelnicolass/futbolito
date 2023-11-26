import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingScreen} from '../screens/onboarding/onboarding_screen';
import {LoadingScreen} from '../screens/loading/loading_screen';
import {RegisterScreen} from '../screens/register/register_screen';
import {LoginScreen} from '../screens/login/login_screen';
import {createStackNavigator} from '@react-navigation/stack';
import { ProtectedNavigator } from './protected_navigator';
import { IsAuthenticatedUseCase } from '../../domain/usecases/auth/is_authenticated_use_case';
const Stack = createStackNavigator();

export const MainNavigator = () => {
  const user = new IsAuthenticatedUseCase();
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="loading"
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
        component={LoadingScreen}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
        component={LoginScreen}
      />
      {user.isAuthenticated() && <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
        component={ProtectedNavigator}
      />}
    </Stack.Navigator>
  </NavigationContainer>
);
}