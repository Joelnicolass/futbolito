import {default as React} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {RegisterViewModel} from './register_view_model';
import {Formik} from 'formik';
import {styles} from './register_styles';

export const RegisterScreen = () => {
  const {initialFormState, signupValidationSchema, validateForm} =
    RegisterViewModel();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Register Screen</Text>
      <Formik
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
        }) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                name="name"
                placeholder="Name"
                style={styles.inputText}
                value={values.name}
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
                secureTextEntry
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

            <Button
              onPress={handleSubmit}
              style={styles.loginBtn}
              title="Register"
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
      <TouchableOpacity>
        <Text style={styles.forgotAndSignUpText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
// <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
//   <Text style={styles.loginText}>Register</Text>
// </TouchableOpacity>
