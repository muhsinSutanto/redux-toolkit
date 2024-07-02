import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterReducer";
import counterReducers from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counterReducer,
    counter: counterReducers,
  },
});

export default store;
