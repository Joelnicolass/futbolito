import {IconElement} from '@ui-kitten/components';
import React from 'react';
import {ImageStyle, Platform, StyleProp, Vibration} from 'react-native';
import AppText from '../app_text/app_text';
import SearchIcon from '../../../core/assets/search_icon.svg';
import SoccerIcon from '../../../core/assets/soccer_icon.svg';
import SettingsIcon from '../../../core/assets/settings_icon.svg';
import HomeIcon from '../../../core/assets/home_icon.svg';
import {MotiView} from 'moti';
import {trigger} from 'react-native-haptic-feedback';

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

interface TabIconProps {
  style?: StyleProp<ImageStyle>;
  selected: boolean;
}

interface BottomNavigationIconProps {
  title: string;
  style: StyleProp<ImageStyle>;
  selected: boolean;
  children: (props: StyleProp<ImageStyle>) => React.ReactElement;
}

interface StyleWithTintColor extends ImageStyle {
  tintColor?: string;
}

const BottomNavigationIcon = ({
  title,
  style,
  selected,
  children,
}: BottomNavigationIconProps): IconElement => {
  return (
    <MotiView
      onTouchStart={() => {
        trigger('impactLight', options);
      }}
      from={{
        scale: 1,
      }}
      animate={{
        scale: selected ? 1.1 : 1,
      }}
      transition={{
        type: 'timing',
        duration: 100,
      }}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children(style)}
      <AppText
        color={selected ? (style as StyleWithTintColor)?.tintColor : 'white'}
        size="sm">
        {title}
      </AppText>
    </MotiView>
  );
};

export const TabHomeIcon = ({style, selected}: TabIconProps): IconElement => (
  <BottomNavigationIcon title="Inicio" style={style} selected={selected}>
    {_style => (
      <HomeIcon
        style={{...(_style as StyleWithTintColor)}}
        fill={selected ? (_style as StyleWithTintColor).tintColor : 'white'}
      />
    )}
  </BottomNavigationIcon>
);

export const TabSoccerIcon = ({style, selected}: TabIconProps): IconElement => (
  <BottomNavigationIcon title="Partidos" style={style} selected={selected}>
    {_style => (
      <SoccerIcon
        style={{...(_style as StyleWithTintColor)}}
        fill={selected ? (_style as StyleWithTintColor).tintColor : 'white'}
      />
    )}
  </BottomNavigationIcon>
);

export const TabSearchIcon = ({style, selected}: TabIconProps): IconElement => (
  <BottomNavigationIcon title="Buscar" style={style} selected={selected}>
    {_style => (
      <SearchIcon
        style={{...(_style as StyleWithTintColor)}}
        fill={selected ? (_style as StyleWithTintColor).tintColor : 'white'}
      />
    )}
  </BottomNavigationIcon>
);

export const TabSettingsIcon = ({
  style,
  selected,
}: TabIconProps): IconElement => (
  <BottomNavigationIcon title="Ajustes" style={style} selected={selected}>
    {_style => (
      <SettingsIcon
        style={{...(_style as StyleWithTintColor)}}
        fill={selected ? (_style as StyleWithTintColor).tintColor : 'white'}
      />
    )}
  </BottomNavigationIcon>
);
