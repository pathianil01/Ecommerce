import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const ProductSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
    searchText:' ',
    status: "Loading......",
  },

  reducers:{
    setSearchText:(state,action)=>{
      // console.log('search')
      state.searchText=action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {});
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status='Fullfilled'
    });
  },
});
export default ProductSlice.reducer;
export const { setSearchText } = ProductSlice.actions;
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const Response = await fetch("https://dummyjson.com/products");
  const data = await Response.json();

  return data.products;
});
