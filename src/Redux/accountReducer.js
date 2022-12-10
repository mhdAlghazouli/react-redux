import { createSlice } from "@reduxjs/toolkit";

//default state
const initialState = {
  balance: 0
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    actionIncrement: (state, action) => {state.balance += action.payload}
    ,
    actionDecrement : (state, action) => {state.balance -= action.payload}
    ,
    
  },
});

//Action creators are generated for each case reducer function
export const {actionIncrement, actionDecrement } = accountSlice.actions;

export default accountSlice.reducer;