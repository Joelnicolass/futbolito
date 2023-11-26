import {default as React} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {LoginViewModel} from './login_view_model';
import {Formik} from 'formik';
import {styles} from './login_styles';
import {useRouter} from '../../hooks/useRouter';
import {ROUTES} from '../../router/routes';
import {Input, Button, Layout, Text} from '@ui-kitten/components';
import {putStatus} from '../../../core/utils/put_status';

export const LoginScreen = () => {
  const {
    onPressForgotPassword,
    initialFormState,
    loginValidationSchema,
    validateForm,
  } = LoginViewModel();
  const {handleNavigate} = useRouter();
  return (
    <Layout style={styles.container} level="2">
      <Text style={styles.title} category="h1">
        {' '}
        Login Screen
      </Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialFormState}
        onSubmit={validateForm}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          isSubmitting,
          dirty,
        }) =>
          isSubmitting ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <View style={styles.formikContainer}>
              <View style={styles.inputView}>
                <Input
                  style={styles.inputText}
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  status={putStatus(errors.email, values.email)}
                  size="large"
                />
                <Text
                  status={errors.email !== undefined ? 'danger' : 'basic'}
                  style={
                    errors.email !== undefined
                      ? styles.errorText
                      : styles.hiddenText
                  }>
                  {errors.email}
                </Text>
              </View>
              <View style={styles.inputView}>
                <Input
                  style={styles.inputText}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  status={putStatus(errors.password, values.password)}
                  size="large"
                  secureTextEntry
                />
                <Text
                  status={errors.password !== undefined ? 'danger' : 'basic'}
                  style={
                    errors.password !== undefined
                      ? styles.errorText
                      : styles.hiddenText
                  }>
                  {errors.password}
                </Text>
              </View>
              <View style={styles.loginBtnContainer}>
                <TouchableOpacity
                  onPress={onPressForgotPassword}
                  style={styles.forgotPasswordContainer}>
                  <Text style={styles.loginText} status="primary">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                <Button
                  onPress={handleSubmit}
                  style={styles.loginBtn}
                  disabled={
                    (!isValid && dirty) || (!values.email && !values.password)
                  }>
                  Login
                </Button>
                <TouchableOpacity
                  onPress={() => handleNavigate(ROUTES.REGISTER)}
                  style={styles.loginBtn}>
                  <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }
      </Formik>
    </Layout>
  );
};
