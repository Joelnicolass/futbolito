import {configureStore} from '@reduxjs/toolkit';
import onboardingReducer from './slice/onboardingSlice';
import {headerSlice} from './slice/header_slice';
import registerFormReducer  from './slice/register_form_slice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    header: headerSlice.reducer,
    registerForm: registerFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
