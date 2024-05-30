import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [],
};

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    setAssets(state, action) {
      state.assets = action.payload;
    },
  },
});

export const { setAssets } = assetsSlice.actions;
export default assetsSlice.reducer;