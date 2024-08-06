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
import {MatchesScreen} from '../screens/matches/matches_screen';
import {useNavigationState} from '@react-navigation/native';
import {Platform, View} from 'react-native';
import AppText from '../components/app_text/app_text';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomNavigationIcon = (props: any): IconElement => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Icon {...props} />
    <AppText size="sm" style={{color: '#F2F6FF'}}>
      {props.title}
    </AppText>
  </View>
);

const HomeIcon = (props: any): IconElement => <BottomNavigationIcon title="Inicio" {...props} name="home" />

const PersonIcon = (props: any): IconElement => (
  <BottomNavigationIcon title="Config" {...props} name="settings-outline" />
);

const BellIcon = (props: any): IconElement => <BottomNavigationIcon title="Buscar" {...props} name="search" />;

const MatchesIcon = (props: any): IconElement => (
  <BottomNavigationIcon title="Partidos" {...props} name="calendar" />
);

const CenterIcon = (props: any): IconElement => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#1C252E',
          top: -40,
          borderRadius: 100,
          width: 90,
          height: 90,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.05)',
        }}
      />

      <View
        style={{
          position: 'absolute',
          backgroundColor: '#1C252E',
          width: 90,
          height: 68,
        }}
      />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#09E360',
          marginBottom: 50,
        }}>
        <Icon
          {...props}
          name="plus"
          fill="#F2F6FF"
          style={{width: 30, height: 30}}
        />
      </View>
    </>
  );
};

const BottomTabBar = ({navigation, state}: any) => {
  return (
    <BottomNavigation
      style={{
        backgroundColor: '#1C252E',
        height: Platform.OS === 'ios' ? 75 : 65,
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        borderTopWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.05)',
      }}
      appearance="noIndicator"
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon} />
      <BottomNavigationTab icon={MatchesIcon} />
      <BottomNavigationTab icon={CenterIcon} />
      <BottomNavigationTab icon={BellIcon} />
      <BottomNavigationTab icon={PersonIcon} />
    </BottomNavigation>
  );
};

export const TabNavigator = () => {
  const routeState = useNavigationState(state => state);
// TODO: Cambiar ruta de notifications por ruta de search
// ruta de notifications migrar al icono en el header
  return (
    <Navigator tabBar={props => <BottomTabBar {...props} />} initialRouteName="main">
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
