import { Paper } from "@mui/material";
import { Provider } from "react-redux";
import AppBarPanel from "../Components/AppBarPanel";
import SnackBarComponent from "../Components/SnackBarComponent";
import { store } from "../Context/Store";
import "../styles/globals.css";
import classes from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Paper elevation={4} className={classes.container}>
        <AppBarPanel />
        <Component {...pageProps} />;
      </Paper>
      <SnackBarComponent />
    </Provider>
  );
}

export default MyApp;
