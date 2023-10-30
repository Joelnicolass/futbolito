import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from './src/core/library/theme.json';
import { MainNavigator } from './src/features/presentation/router/main_navigator';
<GestureHandlerRootView style={{
  flex: 1,
}}
>
  <ApplicationProvider
    {...eva}
    theme={{
      ...eva.light, ...theme,
    }}
  >
    <MainNavigator />
  </ApplicationProvider>
</GestureHandlerRootView>;
