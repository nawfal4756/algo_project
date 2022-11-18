import { configureStore, createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export const getData = (state) => state.data;

export const store = configureStore({
  reducer: dataSlice.reducer,
});
