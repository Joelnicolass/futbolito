import {default as React} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RegisterViewModel} from './register_view_model';
import {Formik} from 'formik';
import {styles} from './register_styles';
import {useRouter} from '../../hooks/useRouter';
import {ROUTES} from '../../router/routes';
import {Input, Button, Layout, Text} from '@ui-kitten/components';
import { putStatus } from '../../../core/utils/put_status';

export const RegisterScreen = () => {
  const {initialFormState, signupValidationSchema, validateForm} =
    RegisterViewModel();
  const {handleNavigate} = useRouter();
  return (
    <Layout style={styles.container} level="2">
      <Text style={styles.title} category="h1">
        Register Screen
      </Text>
      <View style={styles.bodyContainer}>
        <Formik
          validateOnMount={false}
          validationSchema={signupValidationSchema}
          initialValues={initialFormState}
          onSubmit={validateForm}>
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
              <View style={styles.inputView}>
                <Input
                  placeholder="Name"
                  value={values.name}
                  style={styles.inputText}
                  onBlur={handleBlur('name')}
                  onChangeText={handleChange('name')}
                  size="large"
                  status={putStatus(errors.name, values.name)}
                />
                <Text
                  status={errors.name !== undefined ? 'danger' : 'basic'}
                  style={
                    errors.name !== undefined
                      ? styles.errorText
                      : styles.hiddenText
                  }>
                  {errors.name}
                </Text>
              </View>
              <View style={styles.inputView}>
                <Input
                  style={styles.inputText}
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  size="large"
                  status={putStatus(errors.email, values.email)}
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
                  placeholder="Password"
                  style={styles.inputText}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  size="large"
                  status={putStatus(errors.password, values.password)}
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
              <View style={styles.inputView}>
                <Input
                  placeholder="Repeat password"
                  style={styles.inputText}
                  onChangeText={handleChange('repassword')}
                  onBlur={handleBlur('repassword')}
                  value={values.repassword}
                  secureTextEntry
                  size="large"
                  status={putStatus(
                    errors.password && errors.repassword,
                    values.repassword,
                  )}
                />
                <Text
                  status={
                    errors.repassword || errors.password ? 'danger' : 'basic'
                  }
                  style={
                    errors.repassword || errors.password
                      ? styles.errorText
                      : styles.hiddenText
                  }>
                  {errors.repassword}
                </Text>
              </View>

              <Button
                onPress={handleSubmit}
                style={styles.registerBtn}
                disabled={!isValid && dirty || (!values.name && !values.email && !values.password && !values.repassword)}>
                {(evaProps: any) => (
                  <Text {...evaProps} style={styles.registerText}>
                    Register
                  </Text>
                )}
              </Button>
            </View>
          )}
        </Formik>
        <TouchableOpacity
          onPress={() => handleNavigate(ROUTES.LOGIN)}
          >
          <Text style={styles.loginText} status="primary">Alredy have an account?</Text>
          <Text style={styles.loginText} status="primary">Login</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};
// <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
//   <Text style={styles.loginText}>Register</Text>
// </TouchableOpacity>
