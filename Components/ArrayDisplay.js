import {
  Divider,
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

export default function ArrayDisplay({ data, parentIndex }) {
  const { i, j, current, array, highlight } = data;

  return (
    <div className={classes.arrayDisplayFormat}>
      <Typography>i = {i}</Typography>
      <Typography>j = {j}</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {array.map((item, index) => {
                const classesArray = [classes.cellBorder];
                if (
                  highlight != -1 &&
                  highlight === index &&
                  parentIndex != 0
                ) {
                  classesArray.push(classes.highlight);
                }
                return (
                  <TableCell className={classesArray} key={index}>
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}