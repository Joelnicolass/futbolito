import React from 'react';

import {Formik} from 'formik';
import {View} from 'react-native';
import {AppInput} from '../../app_input/app_input';
import {Text} from '@ui-kitten/components';
import {putStatus} from '../../../../core/utils/put_status';
import {styles} from '../form_styles';
import {FormProps} from '../app_register_form_types';
import {
  AppRegisterFormViewModel,
  registerNameSchema,
} from '../app_register_form_view_model';
import {AppButton} from '../../app_button/app_button';
import AppText from '../../app_text/app_text';

export const NameForm = ({onSubmit}: FormProps) => {
  const {initialNameFormState} = AppRegisterFormViewModel();
  return (
    <Formik
      validateOnMount={false}
      validateOnChange={false}
      validateOnBlur={true}
      validationSchema={registerNameSchema}
      initialValues={initialNameFormState}
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
        <View style={styles.formikContainer}>
          <AppText>¿Cuál es tu correo electrónico?</AppText>
          <View style={styles.inputView}>
            <AppInput
              handleChange={handleChange('name')}
              handleBlur={handleBlur('name')}
              value={values.name}
              status={putStatus(errors.name, values.name)}
              placeholder={'Name'}
              password={false}
            />
            <AppText
              status={errors.name !== undefined ? 'danger' : 'basic'}
              style={
                errors.name !== undefined ? styles.errorText : styles.hiddenText
              }>
              {errors.name}
            </AppText>
          </View>
          <AppButton
            validateValue={!((!isValid && dirty) || !values.name)}
            outline={false}
            handlePress={handleSubmit}
            buttonText={'siguiente'}
          />
        </View>
      )}
    </Formik>
  );
};
