//import liraries
import {StackActions, useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import { SignUpUseCase } from '../../../domain/usecases/signup/signup_use_case';

const signupValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is Required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),

  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  repassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const initialFormState = {name: '', email: '', repassword: '', password: ''};
// create a component
export const RegisterViewModel = () => {
  const signUpUseCase = new SignUpUseCase()
  const navigation = useNavigation();
  const onPressLogin = () => {
    // Do something about login operation
    navigation.dispatch(StackActions.replace('Home'));
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };

  const validateForm = async (userFormValues: FormState, {setErrors}: any) => {
    try {
      const {name, email, password} = userFormValues;
     
      const userCredential =  await signUpUseCase.register(name,email,password)
      
      console.log(userCredential);
      
      navigation.dispatch(
        StackActions.replace('Home', {state: userCredential.user}),
      );
    } catch (error: any) {
      if (error.code === 'auth/email-already-exists') {
        setErrors({password: 'Email already in use'});
      }
    }
  };
  return {
    validateForm,
    onPressForgotPassword,
    onPressLogin,
    navigation,
    initialFormState,
    signupValidationSchema,
  };
};
