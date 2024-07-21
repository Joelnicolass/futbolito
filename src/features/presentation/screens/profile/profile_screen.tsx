import React from 'react';
import {ProfileViewModel} from './profile_view_model';
import {useRouter} from '../../hooks/useRouter';
import {matchUseCases} from '../../../data/usecases/match_use_cases_impl';
import {Icon, Layout, Text} from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import {TouchableOpacity} from 'react-native';
import {ROUTES} from '../../router/routes';
import {styles} from './profile_styles';
import {useNotifications} from '../../hooks/use_notifications';
export const ProfileScreen = () => {
  const {handleTap, handleAuth} = ProfileViewModel();
  const {handleNavigate} = useRouter();

  return (
    <Layout style={styles.container}>
      <Lottie
        source={require('../../../core/assets/anim.json')}
        autoPlay
        loop
        style={{width: 200, height: 200}}
      />

      <Icon name="tv" width={32} height={32} fill="#ffffff" />
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={() => handleNavigate(ROUTES.LOGIN)}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </Layout>
  );
};
