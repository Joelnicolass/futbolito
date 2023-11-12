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

type Props = {};

export const RegisterScreen = (props: Props) => {
  const {
    loginForm,
    setLoginForm,
    onPressForgotPassword,
    onPressLogin,
    navigation,
    onPressSignUp,
    initialFormState
  } = RegisterViewModel();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Register Screen</Text>
      <Formik
        initialValues={initialFormState}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values,errors,
     isValid,}) => (
          <>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputText}
                placeholder="Name"
                placeholderTextColor="#003f5c"
                onChangeText={text => setLoginForm({email: text})}
              />
                     {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
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
                style={styles.inputText}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#003f5c"
                onChangeText={text => setLoginForm({password: text})}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#3AB4BA',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgotAndSignUpText: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    fontWeight: 'bold',
  },
});
