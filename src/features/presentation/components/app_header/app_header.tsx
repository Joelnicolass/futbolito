import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../app_text/app_text';
import AppAvatar from '../app_avatar/app_avatar';
import AppDivider from '../app_divider/app_divider';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSelector} from '../../hooks/useRedux';
import {gradient} from '../../theme/theme';

const AppHeader = () => {
  const insets = useSafeAreaInsets();
  const {title, subtitle, showAvatar} = useAppSelector(state => state.header);
  // TODO usar estado de user para el avatar y el nombre

  return (
    <LinearGradient colors={gradient} style={styles.container}>
      {showAvatar && (
        <>
          <View style={[styles.sectionTitle, {marginTop: insets.top}]}>
            <AppAvatar
              align="left"
              text="joelnicolass@gmail.com"
              size={80}
              row
              bold
              showRating
            />
          </View>
          <AppDivider />
        </>
      )}
      {!showAvatar && <View style={[{marginTop: insets.top}]} />}
      <AppText bold>{title}</AppText>
      <AppText size="sm">{subtitle}</AppText>
    </LinearGradient>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    backgroundColor: '#101010',
    borderBottomLeftRadius: 20,
    padding: 20,
    zIndex: 1,
    gap: 10,
  },
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
