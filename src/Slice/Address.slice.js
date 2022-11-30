import { createSlice } from "@reduxjs/toolkit";
 export const AddressSlice=createSlice(
    {
        name:'Address',
        initialState:{
            Address:[]
        },
        reducers:{
            adding:(state,action)=>{
                state.Address.push(action.payload)

            }
        }
    }
 )
 export const {adding}=AddressSlice.actions
 export default AddressSlice.reducer