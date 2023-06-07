import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    upDate: (state, action) => {
      console.log(state);
      console.log(action);
      state.value = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { upDate } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
