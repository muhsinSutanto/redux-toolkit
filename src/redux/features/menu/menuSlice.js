import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenu = createAsyncThunk("menu/getMenu", async () => {
  try {
    const response = await axios.get("https://api.mudoapi.tech/menus");
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
});

const initialState = {
  menu: [],
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload.Data;
      })
      .addCase(getMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
