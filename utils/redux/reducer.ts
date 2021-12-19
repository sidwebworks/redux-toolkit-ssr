import { createReducer } from "@reduxjs/toolkit";
import { INCREMENT, DECREMENT } from "./actions";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  count: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(INCREMENT, (state, action) => {
    state.count = state.count + action.payload;
  }),
    builder.addCase(DECREMENT, (state, action) => {
      state.count = state.count - action.payload;
    });
  builder.addCase(HYDRATE, (state, action: any) => {
    console.log("HYDRATE", action.payload);
    return {
      ...state,
      ...action.payload,
    };
  });
});

export default reducer;
