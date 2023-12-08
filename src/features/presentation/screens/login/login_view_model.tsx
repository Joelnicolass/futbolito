import {StackActions, useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {LoginUseCase} from '../../../domain/usecases/auth/login_use_case';
import {ROUTES} from '../../router/routes';
import { IsAuthenticatedUseCase } from '../../../domain/usecases/auth/is_authenticated_use_case';
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
  const loginUseCase = new LoginUseCase();
  const authenticatedUseCase = new IsAuthenticatedUseCase()
  const isAuth =  authenticatedUseCase.isAuthenticated();
  const navigation = useNavigation();
  // console.log("Esta auth?" + authenticatedUseCase.isAuthenticated());
  
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };

  const validateForm = async (userFormValues: FormState, {setErrors}: any) => {
    try {
      const {email, password} = userFormValues;
      const userCredential = await loginUseCase.login(email, password);

      navigation.dispatch(
        StackActions.replace(ROUTES.HOME,  userCredential.user),
      );
    } catch (error: any) {
      if (error.code === 'auth/invalid-login-credentials') {
        setErrors({password: 'Invalid email or password'});
      }
    }
  };
  return {
    onPressForgotPassword,
    navigation,
    loginValidationSchema,
    initialFormState,
    validateForm,
  };
};
