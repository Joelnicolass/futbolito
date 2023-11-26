import {StackActions, useNavigation} from '@react-navigation/native';
import { LogoutUseCase } from '../../../domain/usecases/auth/logout_use_case';
import { useRouter } from '../../hooks/useRouter';
import { ROUTES } from '../../router/routes';

export const HomeViewModel = () => {
  const navigation = useNavigation();
  const logoutUseCase = new LogoutUseCase();
  const {handleReplace} = useRouter();
  const handleTap = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };
  const handleLogout = () => {
    logoutUseCase.logout();
    handleReplace(ROUTES.LOGIN);
  };
  const handleAuth = () => {
    navigation.dispatch(StackActions.replace('Auth'));
  };
  return {
    handleTap,
    handleAuth,
    handleLogout,
  };
};
