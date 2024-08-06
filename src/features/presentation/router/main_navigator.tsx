import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingScreen} from '../screens/onboarding/onboarding_screen';
import {LoadingScreen} from '../screens/loading/loading_screen';
import {RegisterScreen} from '../screens/register/register_screen';
import {LoginScreen} from '../screens/login/login_screen';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './tab_navigator';
import {IsAuthenticatedUseCase} from '../../domain/usecases/auth/is_authenticated_use_case';
import {MatchScreen} from '../screens/match/match_screen';
import {CreateMatchScreen} from '../screens/create_match/create_match_screen';
import {Avatar, Button, Icon} from '@ui-kitten/components';
import GoogleIcon from '../../core/assets/Google.svg';
import {RootStackParamList} from './router_types';
import SelectPositionScreen from '../screens/select_position/select_position_screen';
// import { useAuth } from '../hooks/useAuth';
const Stack = createStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ['futbolito://', 'https://futbolito.com'],
  config: {
    screens: {
      home: {
        path: 'home',
        screens: {
          main: 'main',
          matches: 'matches',
          profile: 'profile',
          notification: 'notification',
        },
      },
      match: {
        path: 'match/:id/:type',
      },
      register: {
        path: 'register',
      },
      onboarding: {
        path: 'onboarding',
      },
      login: {
        path: 'login',
      },
      loading: {
        path: 'loading',
      },
      'create-match': {
        path: 'create-match',
      },
      'select-position': {
        path: 'select-position',
      },
    },
  },
};
export const MainNavigator = () => {
  // const {isAuth} = useAuth();
  return (
    <NavigationContainer linking={linking}>
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
            headerBackTitle: ' ',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#333333'},
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontSize: 14,
              fontWeight: 700,
            },
            title: 'Crear cuenta',
            headerShown: true,
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
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
          component={TabNavigator}
        />
        <Stack.Screen
          name="match"
          options={{
            headerShown: false,
          }}
          component={MatchScreen}
        />
        <Stack.Screen
          name="create-match"
          options={{
            headerShown: false,
          }}
          component={CreateMatchScreen}
        />
        <Stack.Screen
          name="select-position"
          component={SelectPositionScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
