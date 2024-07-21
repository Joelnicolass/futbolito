import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingScreen} from '../screens/onboarding/onboarding_screen';
import {LoadingScreen} from '../screens/loading/loading_screen';
import {RegisterScreen} from '../screens/register/register_screen';
import {LoginScreen} from '../screens/login/login_screen';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './tab_navigator';
import {IsAuthenticatedUseCase} from '../../domain/usecases/auth/is_authenticated_use_case';
import { MatchScreen } from '../screens/match/match_screen';
import { CreateMatchScreen } from '../screens/create_match/create_match_screen';
import { Button, Icon } from '@ui-kitten/components';
// import { useAuth } from '../hooks/useAuth';
const Stack = createStackNavigator();
const Arrow = <Icon name='arrow'/>

export const MainNavigator = () => {
  // const {isAuth} = useAuth();
  return (
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
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#333333', },
            headerTintColor:'#FFFFFF',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
