import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'house',
  initialState: { 
    numberHouse: 0 ,
    priceHouse:0,
    houseText:'',
    img1:'',
    img2:'',
    img3:'',
    img4:'',
    img5:'',
    img6:'',
  },
  reducers: {
    setHouse: (state,action) => {
      state.houseNumber = action.payload.houseNumber;
      state.price = action.payload.price;
      state.houseText = action.payload;        
      state.img1 = action.payload.img1;
      state.img2 = action.payload;
      state.img3 = action.payload;
      state.img4 = action.payload;
      state.img5 = action.payload;
      state.img6 = action.payload;
    }
  },
});

export const { setHouse } = counterSlice.actions;
export default counterSlice.reducer;