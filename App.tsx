import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootProvider from './src/features/presentation/providers/root_providers';
import {MainNavigator} from './src/features/presentation/router/main_navigator';
import {auth} from './src/features/core/firebase/initialization';

const Stack = createNativeStackNavigator();

auth;

function App(): JSX.Element {
  return (
    <RootProvider>
      <MainNavigator />
    </RootProvider>
  );
}

export default App;
