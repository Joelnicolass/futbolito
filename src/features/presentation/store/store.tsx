import {configureStore} from '@reduxjs/toolkit';
import onboardingReducer from './slice/onboardingSlice';
import {headerSlice} from './slice/header_slice';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    header: headerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
