//import liraries
import { StackActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import * as yup from 'yup';
import formik from 'formik';
const loginValidationSchema = yup.object().shape({
  email: yup
  .string()
  .email("Please enter valid email")
  .required('Email Address is Required'),
  password: yup
  .string()
  .min(8, ({ min }) => `Password must be at least ${min} characters`)
  .required('Password is required'),
})

const initialFormState = {email: '', password: ''};
// create a component
export const RegisterViewModel = () => {
  const navigation = useNavigation();
    const onPressLogin = () => {
        // Do something about login operation
        navigation.dispatch(StackActions.replace('Home'));
      };
      const onPressForgotPassword = () => {
        // Do something about forgot password operation
      };
      const onPressSignUp = () => {
        // Do something about signup operation
        navigation.dispatch(StackActions.replace('Login'));
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
        initialFormState
    };
};


