/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
