import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconElement,
} from '@ui-kitten/components';
import {HomeScreen} from '../screens/home/home_screen';
import {ProfileScreen} from '../screens/profile/profile_screen';
import {NotificationScreen} from '../screens/notification/notification_screen';
import {MatchScreen} from '../screens/match/match_screen';

const {Navigator, Screen} = createBottomTabNavigator();
const HomeIcon = (props): IconElement => (
  <Icon {...props} name="home-outline" />
);
const PersonIcon = (props): IconElement => (
  <Icon {...props} name="person-outline" />
);

const BellIcon = (props): IconElement => (
  <Icon {...props} name="bell-outline" />
);

const CalendarIcon = (props): IconElement => (
  <Icon {...props} name="calendar-outline" />
);
const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab icon={HomeIcon} />
    <BottomNavigationTab icon={CalendarIcon} />
    <BottomNavigationTab icon={BellIcon} />
    <BottomNavigationTab icon={PersonIcon} />
  </BottomNavigation>
);

export const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen
      name="main"
      options={{
        headerShown: false,
      }}
      component={HomeScreen}
    />
    <Screen
      name="match"
      options={{
        headerShown: false,
      }}
      component={MatchScreen}
    />
    <Screen
      name="notification"
      options={{
        headerShown: false,
      }}
      component={NotificationScreen}
    />
    <Screen
      name="profile"
      options={{
        headerShown: false,
      }}
      component={ProfileScreen}
    />
  </Navigator>
);
