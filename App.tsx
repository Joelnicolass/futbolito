import React from 'react';

import RootProvider from './src/features/presentation/providers/root_providers';
import {MainNavigator} from './src/features/presentation/router/main_navigator';

function App(): JSX.Element {
  return (
    <RootProvider>
      <MainNavigator />
    </RootProvider>
  );
}

export default App;
