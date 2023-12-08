import {createSlice} from '@reduxjs/toolkit';

interface HeaderState {
  title: string;
  subtitle: string;
}

const initialState: HeaderState = {
  title: '',
  subtitle: '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setSubtitle: (state, action) => {
      state.subtitle = action.payload;
    },
  },
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
