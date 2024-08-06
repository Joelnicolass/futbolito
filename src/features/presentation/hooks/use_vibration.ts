import {trigger} from 'react-native-haptic-feedback';

export const useVibration = () => {
  const DEFAULT_OPTIONS = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const vibrate = (
    type: 'impactLight' | 'impactMedium' | 'impactHeavy' = 'impactLight',
  ) => {
    trigger(type, DEFAULT_OPTIONS);
  };

  return {vibrate};
};
