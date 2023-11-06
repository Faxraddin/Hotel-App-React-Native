import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'house',
  initialState: { numberHouse: 0 },
  reducers: {
    setHouse: (state,action) => {
        state.numberHouse = action.payload
    }
  },
});

export const { setHouse } = counterSlice.actions;
export default counterSlice.reducer;