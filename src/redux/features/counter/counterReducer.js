import { increment, decrement } from "./counterAction";
import { createReducer } from "@reduxjs/toolkit";

const state = {
  value: 0,
};

const counterReducer = createReducer(state, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(decrement, (state, action) => {
      state.value--;
    });
});

export default counterReducer;
