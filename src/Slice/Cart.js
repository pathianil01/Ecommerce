import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
    myOrders:[],
    status: "IDLE",
  },
  reducers: {
    add: (state, action) => {
      let isExist = false;

      state.products.forEach((product) => {
        if (product.id == action.payload.id) {
          isExist = true;
          product.quantity += 1;
          return state;
        }
      });
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
        return state;
        // console.log("else",state.products.tittle)
      }
    },
    remove: (state, action) => {
      state.products = state.products.filter((p) => p.id != action.payload.id);
    },
    updateOrders:(state,action)=>{
    
      state.myOrders=action.payload;
      // return state

    },
    emptyCart:(state,action)=>{
      state.products=[]
      return state
    }
  },
});
export const { add, remove,updateOrders ,emptyCart} = CartSlice.actions;
export default CartSlice.reducer;
