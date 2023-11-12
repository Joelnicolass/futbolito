import {default as React} from 'react';
import {ActivityIndicator, Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LoginViewModel} from './login_view_model';
import {Formik} from 'formik';
import {styles} from './login_styles';

type Props = {};

export const LoginScreen = (props: Props) => {
  const {
    setLoginForm,
    onPressForgotPassword,
    onPressLogin,
    onPressSignUp,
    initialFormState,
    loginValidationSchema,
    validateForm,
  } = LoginViewModel();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Screen</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialFormState}
        onSubmit={validateForm}
        >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          isSubmitting,
        }) => (
          isSubmitting ? <ActivityIndicator size={'large'}/> :
          <>

            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                name="email"
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
                            <Text
                style={errors.email != undefined ? styles.errorText : styles.hiddenText}>
                {errors.email}
              </Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                name="password"
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              <Text
                style={errors.password != undefined ? styles.errorText : styles.hiddenText}>
                {errors.password}
              </Text>
            </View>
            <TouchableOpacity onPress={onPressForgotPassword}>
              <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button
              onPress={handleSubmit}
              style={styles.loginBtn}
              title="LOGIN"
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};
