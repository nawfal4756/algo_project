import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import classes from "../styles/ArrayDisplay.module.css";

export default function ArrayDisplay({ data }) {
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {data.map((item) => {
              return (
                <TableCell className={classes.cellBorder}>{item}</TableCell>
              );
            })}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
