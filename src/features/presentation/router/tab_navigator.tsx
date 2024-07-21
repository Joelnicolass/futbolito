import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {HomeScreen} from '../screens/home/home_screen';
import {ProfileScreen} from '../screens/profile/profile_screen';
import {NotificationScreen} from '../screens/notification/notification_screen';
import {MatchesScreen} from '../screens/matches/matches_screen';
import {useNavigationState} from '@react-navigation/native';
import {Platform, View} from 'react-native';
import AppText from '../components/app_text/app_text';
import {
  TabHomeIcon,
  TabSearchIcon,
  TabSettingsIcon,
  TabSoccerIcon,
} from '../components/tab_bottom_navigation_icon/tab_bottom_navigation_icon';
import {ImageProps} from 'react-native-svg';
import {RenderFCProp, RenderProp} from '@ui-kitten/components/devsupport';
import TabCenterButton from '../components/tab_center_button/tab_center_button';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}: any) => {
  const [selected, setSelected] = useState(0);

  return (
    <BottomNavigation
      style={{
        backgroundColor: '#1C252E',
        height: Platform.OS === 'ios' ? 85 : 75,
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        borderTopWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.05)',
      }}
      appearance="noIndicator"
      selectedIndex={state.index}
      onSelect={index => {
        setSelected(index);
        navigation.navigate(state.routeNames[index]);
      }}>
      <BottomNavigationTab
        icon={props => <TabHomeIcon selected={selected === 0} {...props} />}
      />
      <BottomNavigationTab
        icon={props => <TabSoccerIcon selected={selected === 1} {...props} />}
      />
      <BottomNavigationTab
        icon={TabCenterButton as RenderFCProp<Partial<ImageProps>>}
      />
      <BottomNavigationTab
        icon={props => <TabSearchIcon selected={selected === 3} {...props} />}
      />
      <BottomNavigationTab
        icon={props => <TabSettingsIcon selected={selected === 4} {...props} />}
      />
    </BottomNavigation>
  );
};

export const TabNavigator = () => {
  const routeState = useNavigationState(state => state);

  return (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen
        name="main"
        initialParams={{
          ...routeState.routes[0].params,
        }}
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Screen
        name="matches"
        options={{
          headerShown: false,
        }}
        component={MatchesScreen}
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
};
