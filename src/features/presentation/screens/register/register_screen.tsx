import {default as React} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RegisterViewModel} from './register_view_model';
import {Formik} from 'formik';
import {styles} from './register_styles';
import {useRouter} from '../../hooks/useRouter';
import {ROUTES} from '../../router/routes';
import {Input, Button, Layout, Text} from '@ui-kitten/components';
import {putStatus} from '../../../core/utils/put_status';
import {AppInput} from '../../components/app_input/app_input';
import {AppButton} from '../../components/app_button/app_button';
import {EmailForm} from '../../components/app_register_form/email_form/email_form';
import {NameForm} from '../../components/app_register_form/name_form/name_form';
import {PasswordForm} from '../../components/app_register_form/password_form/password_form';
import {ValidateAccount} from '../../components/app_validate_account/app_validate_account';

export const RegisterScreen = () => {
  const {
    inputLevel,
    validateEmailForm,
    validateNameForm,
    validatePasswordForm,
    formValues,
  } = RegisterViewModel();
  const {handleNavigate} = useRouter();
  return (
    <Layout style={styles.container} level="1">
      <View style={styles.bodyContainer}>
        <View style={styles.formikContainer}>
          {inputLevel === 0 && <EmailForm onSubmit={validateEmailForm} />}
          {inputLevel === 1 && <NameForm onSubmit={validateNameForm} />}

          {inputLevel === 2 && (
            <PasswordForm onSubmit={validatePasswordForm} />
          )}

          {inputLevel === 3 && <ValidateAccount email={formValues.email} />}
        </View>
      </View>
    </Layout>
  );
};
