import {StackActions, useNavigation} from '@react-navigation/native';

export const ProfileViewModel = () => {
  const navigation = useNavigation();
  const handleTap = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };
  const handleAuth = () => {
    navigation.dispatch(StackActions.replace('Auth'));
  };
  return {
    handleTap,
    handleAuth,
  };
};
