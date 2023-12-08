import React from 'react';

import 'react-native-reanimated';
import 'react-native-gesture-handler';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const GestureProvider = ({children}: Props) => {
  return <>{children}</>;
};

export default GestureProvider;
