import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterReducer";
import counterReducers from "./features/counter/counterSlice";
import menuReducer from "./features/menu/menuSlice";

const store = configureStore({
  reducer: {
    counterReducer,
    counter: counterReducers,
    menuReducer,
  },
});

export default store;
