import React from 'react';

import RootProvider from './src/features/presentation/providers/root_providers';
import {MainNavigator} from './src/features/presentation/router/main_navigator';
import {useNotifications} from './src/features/presentation/hooks/use_notifications';

function App(): JSX.Element {
  useNotifications();
  return (
    <RootProvider>
      <MainNavigator />
    </RootProvider>
  );
}

export default App;
