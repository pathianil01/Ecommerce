import { createSlice, CreateSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: [],
    login:false
  },
  reducers:{
    add:(state,action)=>{
    
      state.user.push({...action.payload})
    },
    setLogin:(state,action)=>{
      if(action.payload=='logOut')
      {
      state.login=false
      }
      else{
        state.login=!state.login
      }
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {});
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
export const {add,setLogin}=loginSlice.actions
export default loginSlice.reducer;

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return data.users;
});
