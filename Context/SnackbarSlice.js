import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    open: false,
    message: "",
    severity: "",
  },
  reducers: {
    openSnackbar(state, action) {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.open = true;
    },
  },
});

export const { openSnackbar } = snackbarSlice.actions;
export const getSnackBarData = (state) => {
  {
    state.open, state.message, state.severity;
  }
};
