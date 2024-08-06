import {default as React} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {LoginViewModel} from './login_view_model';
import {Formik} from 'formik';
import {styles} from './login_styles';
import {useRouter} from '../../hooks/useRouter';
import {ROUTES} from '../../router/routes';
import {Button, Layout, Text, Avatar} from '@ui-kitten/components';
import {putStatus} from '../../../core/utils/put_status';
import {AppInput} from '../../components/app_input/app_input';
import AppText from '../../components/app_text/app_text';
import { GoogleServices } from '../../../data/datasources/google/google';
import GoogleIcon from '../../../core/assets/Google.svg';
import FacebookIcon from '../../../core/assets/Facebook.svg';
export const LoginScreen = () => {
  const {
    onPressForgotPassword,
    initialFormState,
    loginValidationSchema,
    validateForm,
  } = LoginViewModel();
  const {handleNavigate} = useRouter();
  return (
    <Layout style={styles.container} level='1'>
      <View style={styles.titleContainer}>
        <Text style={styles.title} category="h1">
          FUTBOLITO.
        </Text>
        <Text style={styles.subtitle}>
          La plataforma de torneos y partidos mas grande
        </Text>
        <View
          style={{
            display: 'flex',
            width: '95%',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View style={styles.line} />
          <Text style={styles.subtitle}>
            iniciar sesión con tu correo electronico
          </Text>
          <View style={styles.line} />
        </View>
      </View>
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
                <AppInput
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  value={values.email}
                  status={putStatus(errors.email, values.email)}
                  placeholder={'Email Address'}
                  password={false}
                />
                <AppText
                size='sm'
                  status={errors.email !== undefined ? 'danger' : 'basic'}
                  style={
                    errors.email !== undefined
                      ? styles.errorText
                      : styles.hiddenText
                  }>
                  {errors.email}
                </AppText>
              </View>
              <View style={styles.inputView}>
                <AppInput
                  handleChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                  value={values.password}
                  status={putStatus(errors.password, values.password)}
                  placeholder={'Password'}
                  password={true}
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
                <TouchableOpacity
                  onPress={onPressForgotPassword}
                  style={styles.forgotPasswordContainer}>
                  <Text style={styles.redirectText} status="primary">
                    Olvidé mi contraseña
                  </Text>
                </TouchableOpacity>
              <View style={styles.loginBtnContainer}>
                <Button
                  onPress={handleSubmit}
                  disabled={(!isValid && dirty) || (!values.email && !values.password)}
                  style={(!isValid && dirty) || (!values.email && !values.password) ? [styles.loginBtn, styles.disabled] : [styles.loginBtn, styles.enabled]}
                >
             {evaProps => <Text {...evaProps} style={styles.textLogin}>Iniciar sesion</Text>}
                </Button>
                <View style={styles.registerContainer}>
                  <Text style={styles.subtitle}>
                    ¿Aún no tienes una cuenta?
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleNavigate(ROUTES.REGISTER)}>
                    <Text style={styles.redirectText}>Únete ahora</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        }
      </Formik>
      <View style={styles.socialMediaContainer}>

      <Button
        onPress={() =>  {
          const google = new GoogleServices();
              google.loginWithGoogle();
        }}
        style={styles.socialMediaButton}
        accessoryLeft={<Avatar height={20} width={20} ImageComponent={GoogleIcon} />}
        >
        Iniciar sesion con Google
      </Button>
      <Button
        onPress={() => console.log('Probando facebook')}
        style={styles.socialMediaButton}
        accessoryLeft={<Avatar height={20} width={20} ImageComponent={FacebookIcon} />}
        
        >
        Iniciar sesion con Faceebook
      </Button>
      </View>
    </Layout>
  );
};
