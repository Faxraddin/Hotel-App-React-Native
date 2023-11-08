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
      state.numberHouse = action.payload.houseNumber;
      state.priceHouse = action.payload.price;
      state.houseText = action.payload.houseText;        
      state.img1 = action.payload.img1;
      state.img2 = action.payload.img2;
      state.img3 = action.payload.img3;
      state.img4 = action.payload.img4;
      state.img5 = action.payload.img5;
      state.img6 = action.payload.img6;
    }
  },
});

export const { setHouse } = counterSlice.actions;
export default counterSlice.reducer;