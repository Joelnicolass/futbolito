import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
    index: 0,
}
const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
        console.log(`page: ${action.payload} of 4`);
        console.log(action.payload);
        
        return {...state, index: action.payload };
    }
  },
});

export const { changePage } = onboardingSlice.actions;
export default onboardingSlice.reducer;