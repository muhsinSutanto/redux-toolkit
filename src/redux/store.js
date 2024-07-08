import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterReducer";
import counterReducers from "./features/counter/counterSlice";
import menuReducers from "./features/menu/menuSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//persist cofig
const persistConfig = {
  key: "menu",
  storage,
};

// persitReducer
const menuReducer = persistReducer(persistConfig, menuReducers);

const store = configureStore({
  reducer: {
    counterReducer,
    counter: counterReducers,
    menuReducer,
  },
});

//persisStore
const persistor = persistStore(store);

export { store, persistor };
