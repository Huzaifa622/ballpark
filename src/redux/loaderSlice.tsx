import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoaderState {
  showIntro: boolean;
}

const initialState: LoaderState = {
  showIntro: true,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setShowIntro(state, action: PayloadAction<boolean>) {
      state.showIntro = action.payload;
    },
  },
});

export const { setShowIntro } = loaderSlice.actions;
export default loaderSlice.reducer;
