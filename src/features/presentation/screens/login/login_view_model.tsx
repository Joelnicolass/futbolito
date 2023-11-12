//import liraries
import {StackActions, useNavigation} from '@react-navigation/native';
import formik from 'formik';
import {useState} from 'react';
import * as yup from 'yup';

interface FormState {
  email: string;
  password: string;
}

const initialFormState = {email: '', password: ''};

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
// create a component
export const LoginViewModel = () => {
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
    navigation.dispatch(StackActions.replace('Register'));
  };
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const validateForm = (values: FormState) => {
    setTimeout(() => console.log(values), 3000);
  };
  return {
    setLoginForm,
    loginForm,
    onPressSignUp,
    onPressForgotPassword,
    onPressLogin,
    navigation,
    loginValidationSchema,
    initialFormState,
    validateForm,
  };
};
