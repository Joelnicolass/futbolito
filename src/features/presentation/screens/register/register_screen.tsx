import {default as React} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RegisterViewModel} from './register_view_model';
import {Formik} from 'formik';
import {styles} from './register_styles';

type Props = {};

export const RegisterScreen = (props: Props) => {
  const {
    loginForm,
    setLoginForm,
    onPressForgotPassword,
    onPressLogin,
    navigation,
    onPressSignUp,
    initialFormState,
    loginValidationSchema,
  } = RegisterViewModel();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Register Screen</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialFormState}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Name"
                placeholderTextColor="#003f5c"
                onChangeText={text => setLoginForm({email: text})}
              />
              <Text
                style={
                  errors.email != undefined
                    ? styles.errorText
                    : styles.hiddenText
                }>
                {errors.email}
              </Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                name="email"
                style={styles.inputText}
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.inputText}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                name="repassword"
                placeholder="Repeat password"
                style={styles.inputText}
                onChangeText={handleChange('repassword')}
                onBlur={handleBlur('repassword')}
                value={values.repassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
              <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.forgotAndSignUpText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
