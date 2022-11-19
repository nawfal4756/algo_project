import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar, getSnackBarData } from "../Context/SnackbarSlice";

export default function SnackBarComponent() {
  const { open, message, severity } = useSelector(getSnackBarData);
  const dispatch = useDispatch();

  const HandleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={HandleClose}>
      <Alert severity={severity} onClose={HandleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
