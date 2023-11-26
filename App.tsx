/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FirebasePrueba} from './src/features/presentation/screens/firebase_demo';
import {HomeScreen} from './src/features/presentation/screens/home/home_screen';
import {LoadingScreen} from './src/features/presentation/screens/loading/loading_screen';
import {LoginScreen} from './src/features/presentation/screens/login/login_screen';
import {RegisterScreen} from './src/features/presentation/screens/register/register_screen';
import {OnboardingScreen} from './src/features/presentation/screens/onboarding/onboarding_screen';
import {Provider} from 'react-redux';
import {store} from './src/features/presentation/store/store';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="loading"
            options={{
              headerShown: false,
            }}
            component={LoadingScreen}
          />
          <Stack.Screen
            name="onboarding"
            options={{
              headerShown: false,
            }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="register"
            options={{
              headerShown: false,
            }}
            component={RegisterScreen}
          />
          <Stack.Screen
            name="login"
            options={{
              headerShown: false,
            }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="home"
            options={{
              headerShown: false,
            }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
