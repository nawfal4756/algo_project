import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import classes from "../styles/ArrayDisplay.module.css";

export default function ArrayDisplay({ data, parentIndex, method }) {
  const { i, j, array, highlight } = data;

  return (
    <div className={classes.arrayDisplayFormat}>
      {i != null ? <Typography>i = {i}</Typography> : null}
      {j ? <Typography>j = {j}</Typography> : null}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {array.map((item, index) => {
                let classesArray = [classes.cellBorder];
                if (method === "insertion") {
                  if (
                    highlight != -1 &&
                    highlight === index &&
                    parentIndex != 0
                  ) {
                    classesArray.push(classes.mark);
                  }
                } else if (method === "bubble") {
                  if (
                    highlight != -1 &&
                    (highlight === index || highlight + 1 === index)
                  ) {
                    classesArray.push(classes.mark);
                  }
                } else if (method === "quick") {
                  if (i === index || j == index) {
                    classesArray.push(classes.mark);
                  }
                }
                return (
                  <TableCell className={classesArray.join(" ")} key={index}>
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
