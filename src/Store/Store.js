import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Slice/Cart";
import ProductSlice from "../Slice/ProductSlice";
import LoginSlice from "../Slice/Login.slice";
import AddressSlice from "../Slice/Address.slice";
const store = configureStore({
  reducer: {
    productsfsf: ProductSlice,
    cart: CartSlice,
    user: LoginSlice,
    address:AddressSlice
  },
});
export default store;
