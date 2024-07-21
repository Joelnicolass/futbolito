//import liraries
import {StackActions, useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {SignUpUseCase} from '../../../domain/usecases/signup/signup_use_case';
import {ROUTES} from '../../router/routes';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  RegisterForm,
  setEmail,
  setName,
  setPassword,
} from '../../store/slice/register_form_slice';

export const RegisterViewModel = () => {
  const signUpUseCase = new SignUpUseCase();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const formValues: RegisterForm = useSelector(state => state.registerForm);

  console.log(formValues);

  const [inputLevel, setInputLevel] = useState(0);
  const isActualValueCorrect = value => {
    if (inputLevel === 0) return value.name;
    if (inputLevel === 1) return value.email;
    if (inputLevel === 2) return value.password;
  };
  const handleNextInput = () => {
    setInputLevel(prev => prev + 1);
  };

  const onPressLogin = () => {
    // Do something about login operation
    navigation.dispatch(StackActions.replace('Home'));
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };

  const validateNameForm = async (
    userFormValues: FormState,
    {setErrors}: any,
  ) => {
    const {name} = userFormValues;
    dispatch(setName(name));
    setInputLevel(prev => prev + 1);
  };
  const validateEmailForm = async (
    userFormValues: FormState,
    {setErrors}: any,
  ) => {
    const {email} = userFormValues;
    dispatch(setEmail(email));
    setInputLevel(prev => prev + 1);
  };
  const validatePasswordForm = async (userFormValues: FormState, {setErrors}: any) => {
    try {
      const {password} = userFormValues;
      dispatch(setPassword(password));
      const {email, name} = formValues;
      const userCredential = await signUpUseCase.register(
        name,
        email,
        password,
      );

      console.log(userCredential);

      // navigation.dispatch(
      //   StackActions.replace(ROUTES.HOME, {state: userCredential.user}),
      // );
    } catch (error: any) {
      if (error.code === 'auth/email-already-exists') {
        setErrors({password: 'Email already in use'});
      }
    }
  };

  const registerUser = async () => {
    try {
      const {name, email, password} = formValues;
      const userCredential = await signUpUseCase.register(
        name,
        email,
        password,
      );

      console.log(userCredential);

      navigation.dispatch(
        StackActions.replace(ROUTES.HOME, {state: userCredential.user}),
      );
    } catch (error: any) {
      if (error.code === 'auth/email-already-exists') {
        setErrors({password: 'Email already in use'});
      }
    }
  };

  return {
    inputLevel,
    isActualValueCorrect,
    validateNameForm,
    validateEmailForm,
    validatePasswordForm,
    handleNextInput,
    onPressForgotPassword,
    onPressLogin,
    navigation,
    formValues,
  };
};
