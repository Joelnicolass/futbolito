import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import GestureProvider from './gesture_provider';

const RootProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <GestureProvider>
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>
          {children}
        </ApplicationProvider>
      </Provider>
    </GestureProvider>
  );
};

export default RootProvider;
