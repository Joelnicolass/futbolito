//import liraries
import { StackActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
const initialFormState = {email: '', password: ''};

// create a component
export const LoginViewModel = () => {
  const navigation = useNavigation();
    const onPressLogin = () => {
        // Do something about login operation
        StackActions.replace('home');
        console.log('ruteo?');
        navigation.dispatch(StackActions.replace('Home'));



      };
      const onPressForgotPassword = () => {
        // Do something about forgot password operation
      };
      const onPressSignUp = () => {
        // Do something about signup operation
      };
      const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
      });
    return {
        setLoginForm,
        loginForm,
        onPressSignUp,
        onPressForgotPassword,
        onPressLogin,
        navigation,
    };
};


