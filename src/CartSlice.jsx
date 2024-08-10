import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalItems:0,
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const {name} = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }

    
    },

    countTotalItems:(state, action)=>{
      let countTotal=0;
      state.items.map((plant)=>(
        countTotal+=(plant.quantity)
      ))
      state.totalItems=countTotal;
      console.log(countTotal);
      
    },
  },
});

export const { addItem, removeItem, updateQuantity ,countTotalItems} = CartSlice.actions;

export default CartSlice.reducer;
