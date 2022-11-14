import {
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useState } from "react";

import classes from "../styles/Home.module.css";

export default function Home() {
  const [method, setMethod] = useState("insertion");
  const [file, setFile] = useState("");

  const HandleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const HandleSubmit = () => {
    console.log(file);
    console.log(method);
  };

  return (
    <div>
      <Paper elevation={4} className={classes.container}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography variant="h1">Algorithms Solver</Typography>
            <Typography variant="h5">Input File Selection</Typography>
          </Grid>
          <Grid xs={6}>
            {file == "" ? (
              <Typography variant="h5">Select Input File</Typography>
            ) : (
              <Typography variant="h5">Selected File : {file.name}</Typography>
            )}
          </Grid>
          <Grid xs={6}>
            <Button variant="contained" component="label">
              Choose Your File
              <input
                type="file"
                hidden
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
      </Paper>
    </div>
  );
}
