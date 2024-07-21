//import liraries
import {Formik} from 'formik';
import {Button, View} from 'react-native';
import {AppInput} from '../../app_input/app_input';
import {Text} from '@ui-kitten/components';
import {putStatus} from '../../../../core/utils/put_status';
import {styles} from '../form_styles';
import {FormProps} from '../app_register_form_types';
import {
  AppRegisterFormViewModel,
  registerEmailSchema,
} from '../app_register_form_view_model';
import React from 'react';
import {AppButton} from '../../app_button/app_button';
import AppText from '../../app_text/app_text';

export const EmailForm = ({onSubmit}: FormProps) => {
  const {initialEmailFormState} = AppRegisterFormViewModel();
  return (
    <Formik
      validateOnMount={false}
      validateOnChange={true}
      validateOnBlur={true}
      validationSchema={registerEmailSchema}
      initialValues={initialEmailFormState}
      onSubmit={onSubmit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        dirty,
      }) => (
        <>
        
          <AppText>¿Cuál es tu correo electrónico?</AppText>
        <View style={styles.formikContainer}>
          <View style={styles.inputView}>
            <AppInput
              handleChange={handleChange('email')}
              handleBlur={handleBlur('email')}
              value={values.email}
              status={putStatus(errors.email, values.email)}
              placeholder={'Email Address'}
              password={false}
            />
            <AppText
              status={errors.email !== undefined ? 'danger' : 'basic'}
              style={
                errors.email !== undefined
                  ? styles.errorText
                  : styles.hiddenText
              }>
              {errors.email}
            </AppText>
          </View>
          <AppButton
            validateValue={!((!isValid && dirty) || !values.email)}
            outline={false}
            handlePress={handleSubmit}
            buttonText={'siguiente'}
          />
        </View>
        </>
      )}
    </Formik>
  );
};
