import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import DialogBox from "./DialogBox";

export default function AppBarPanel() {
  const [dialog, setDialog] = useState(false);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
            Algorithm Solver
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => setDialog(true)}
          >
            About Developer
          </Button>
          <DialogBox open={dialog} onClose={setDialog} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
