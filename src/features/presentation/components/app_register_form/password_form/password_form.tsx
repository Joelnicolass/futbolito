import React from 'react';

import {Formik} from 'formik';
import {View} from 'react-native';
import {AppInput} from '../../app_input/app_input';
import {Spinner, Text} from '@ui-kitten/components';
import {putStatus} from '../../../../core/utils/put_status';
import {styles} from '../form_styles';
import {FormProps} from '../app_register_form_types';
import {
  AppRegisterFormViewModel,
  registerPasswordSchema,
} from '../app_register_form_view_model';
import {AppButton} from '../../app_button/app_button';
import { LoadingScreen } from '../../../screens/loading/loading_screen';
import AppText from '../../app_text/app_text';

export const PasswordForm = ({onSubmit}: FormProps) => {
  const {initialPasswordFormState} = AppRegisterFormViewModel();
  return (
    <Formik
      validateOnChange={true}
      validateOnBlur={true}
      validationSchema={registerPasswordSchema}
      initialValues={initialPasswordFormState}
      onSubmit={onSubmit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        isSubmitting,
        dirty,
      }) => (
         isSubmitting ? <Spinner/> :
        <View style={styles.formikContainer}>
            <AppText style={styles.title}>Crear una contraseña</AppText>
          <View style={styles.inputView}>
            <AppInput
              handleChange={handleChange('password')}
              handleBlur={handleBlur('password')}
              value={values.password}
              status={putStatus(errors.password, values.password)}
              placeholder={'Password'}
              password={false}
            />
            <AppText
              status={errors.password !== undefined ? 'danger' : 'basic'}
              style={
                errors.password !== undefined
                  ? styles.errorText
                  : styles.hiddenText
              }>
              {errors.password}
            </AppText>
            {  !errors.password && <AppText
          color='#85B4FE'
              style={styles.textInfo}>
              Use al menos 8 caracteres
            </AppText>}
          </View>
          <AppButton
            validateValue={!((!isValid && dirty) || !values.password)}
            outline={false}
            handlePress={handleSubmit}
            buttonText={'siguiente'}
          />
        </View>
      )}
    </Formik>
  );
};
