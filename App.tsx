/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirebasePrueba } from './src/features/presentation/screens/firebase_demo';
import { HomeScreen } from './src/features/presentation/screens/home/home_screen';
import { LoadingScreen } from './src/features/presentation/screens/loading/loading_screen';
import { LoginScreen } from './src/features/presentation/screens/login/login_screen';
import { RegisterScreen } from './src/features/presentation/screens/register/register_screen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          options={{
            headerShown: false,
          }}
          component={LoadingScreen}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />

        <Stack.Screen
          name="Auth"
          options={{
            headerShown: false,
          }}
          component={FirebasePrueba}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
