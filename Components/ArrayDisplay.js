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
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {data.data.map((item, i) => {
              return (
                <TableCell className={classes.cellBorder} key={i}>
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
