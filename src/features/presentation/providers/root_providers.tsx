import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider} from 'react-redux';
import {store} from '../store/store';

const RootProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        {children}
      </ApplicationProvider>
    </Provider>
  );
};

export default RootProvider;
