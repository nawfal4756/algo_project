import {
  Backdrop,
  Button,
  CircularProgress,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../Context/DataSlice";
import { openSnackbar } from "../Context/SnackbarSlice";
import CircularProgressWithLabel from "../Components/CircularProgressWithLabel";

export default function MainForm() {
  const [method, setMethod] = useState("insertion");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();

  const HandleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const HandleSubmit = async () => {
    setLoading(true);
    setProgress(0);
    const form = new FormData();
    form.append("file", file);
    form.append("method", method);
    const config = {
      onUploadProgress: (progressEvent) => {
        const percentage = (progressEvent.loaded * 100) / progressEvent.total;
        setProgress(+percentage.toFixed(2));
      },
    };
    try {
      const response = await axios.post("/api", form, config);
      dispatch(setData(response.data.array));
      if (response.status === 200 && response.data.message === "Successful") {
        router.push(`/${method}`);
      }
    } catch (err) {
      if (err.response.status === 500) {
        dispatch(
          openSnackbar({ message: "Server Error Occured", severity: "error" })
        );
      } else {
        dispatch(
          openSnackbar({
            message: err.response.data.message,
            severity: "error",
          })
        );
      }
    }
    setLoading(false);
  };
  return (
    <div>
      <Backdrop open={loading}>
        {progress === 100 ? (
          <CircularProgress />
        ) : (
          <CircularProgressWithLabel value={progress} />
        )}
      </Backdrop>
      <Grid container spacing={2}>
        <Grid xs={12}>
          {/* <Typography variant="h1">Algorithms Solver</Typography> */}
          <Typography variant="h5">Input File Selection</Typography>
        </Grid>
        <Grid xs={6}>
          {file.name ? (
            <Typography variant="h5">Selected File : {file.name}</Typography>
          ) : (
            <Typography variant="h5">Select Input File</Typography>
          )}
        </Grid>
        <Grid xs={6}>
          <Button variant="contained" component="label">
            Choose Your File
            <input
              type="file"
              hidden
              accept=".txt"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Button>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h5">Method</Typography>
          <RadioGroup
            aria-labelledby="method"
            value={method}
            onChange={HandleMethodChange}
          >
            <FormControlLabel
              value="insertion"
              control={<Radio />}
              label="Insertion Sort"
            />
            <FormControlLabel
              value="bubble"
              control={<Radio />}
              label="Bubble Sort"
            />
            <FormControlLabel
              value="merge"
              control={<Radio />}
              label="Merge Sort"
            />
            <FormControlLabel
              value="heap"
              control={<Radio />}
              label="Heap Sort"
            />
            <FormControlLabel
              value="quick"
              control={<Radio />}
              label="Quick Sort"
            />
            <FormControlLabel
              value="radix"
              control={<Radio />}
              label="Radix Sort"
            />
            <FormControlLabel
              value="bucket"
              control={<Radio />}
              label="Bucket Sort"
            />
            <FormControlLabel
              value="counting"
              control={<Radio />}
              label="Counting Sort"
            />
          </RadioGroup>
          <Grid xs={12}>
            <Button variant="outlined" onClick={HandleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
