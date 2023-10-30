/* eslint-disable react/no-unstable-nested-components */

import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faChartLine, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { LoginScreen } from '../screens/login/login_screen';
import { OnboardingScreen } from '../screens/onboarding/onboarding_screen';
// import { SettingsScreen } from './settings/settings_screen';
const Stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

// TODO: Fix any type
 
const BottomTabBar = ({ navigation, state }: any) => (
  <SafeAreaView>
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
      indicatorStyle={{
        backgroundColor: 'transparent',
      }}
    >
      <BottomNavigationTab icon={(

        <FontAwesomeIcon
          color={state.index === 0 ? '#26AEE8' : '#222222'}
          size={24}
          icon={faClock}
        />
      )}
      />
      <BottomNavigationTab icon={(
        <FontAwesomeIcon
          color={state.index === 1 ? '#26AEE8' : '#222222'}
          size={24}
          icon={faChartLine}
        />
      )}
      />
      <BottomNavigationTab icon={(
        <FontAwesomeIcon
          color={state.index === 2 ? '#26AEE8' : '#222222'}
          size={24}
          icon={faCog}
        />
      )}
      />
    </BottomNavigation>
  </SafeAreaView>
);

const TabNavigator = () => (
  <Navigator
    tabBar={(props: any) => <BottomTabBar {...props} />}
    screenOptions={{
      headerShown: false,
    }}
  >
    {/* <Screen name="Timer" component={TimerScreen} /> */}
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Configuration" component={SettingsScreen} />
  </Navigator>
);

export const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{
          headerShown: false,
        }}
      />
      */}
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      /> 
      <Stack.Screen
        name="Login"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
