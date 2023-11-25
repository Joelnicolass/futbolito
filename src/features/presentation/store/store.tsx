import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './slice/onboardingSlice';
export const store = configureStore({
    reducer: {
        onboarding: onboardingReducer,
    },
});
