import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../app_text/app_text';
import AppAvatar from '../app_avatar/app_avatar';
import AppDivider from '../app_divider/app_divider';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSelector} from '../../hooks/useRedux';
import {gradient} from '../../theme/globals';

const AppHeader = () => {
  const insets = useSafeAreaInsets();
  const {title, subtitle} = useAppSelector(state => state.header);
  // TODO usar estado de user para el avatar y el nombre

  return (
    <LinearGradient colors={gradient} style={styles.container}>
      <View style={[styles.sectionTitle, {marginTop: insets.top}]}>
        <AppText bold>{title}</AppText>
        <AppAvatar />
      </View>
      <AppDivider />

      <AppText size="sm">{subtitle}</AppText>
    </LinearGradient>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width,
    backgroundColor: '#101010',
    borderBottomLeftRadius: 20,
    padding: 20,
    zIndex: 1,
  },
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
