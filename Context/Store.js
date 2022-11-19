import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./DataSlice";
import { snackbarSlice } from "./SnackbarSlice";

export const store = configureStore({
  reducer: { data: dataSlice.reducer, snackbar: snackbarSlice.reducer },
});
