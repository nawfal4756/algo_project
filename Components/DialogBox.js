import { GitHub, LinkedIn } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import classes from "../styles/DialogBox.module.css";

export default function DialogBox(props) {
  const { open, onClose } = props;

  const HandleClose = () => {
    onClose(false);
  };

  return (
    <Dialog open={open} onClose={HandleClose}>
      <DialogTitle>About Developers</DialogTitle>
      <List>
        <ListItem>
          <Grid container>
            <Grid xs={12}>
              <Typography>Muhammad Nawfal Mehboob</Typography>
            </Grid>
            <Grid xs={12}>
              <Button href="mailto:k201692@nu.edu.pk">
                <Typography variant="button">Email Me!</Typography>
              </Button>
            </Grid>
            <Grid xs={12}>
              <IconButton href="https://github.com/nawfal4756">
                <GitHub className={classes.icon} />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/nawfal4756/">
                <LinkedIn className={classes.icon} />
              </IconButton>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <Grid container>
            <Grid xs={12}>
              <Typography>Fiza</Typography>
            </Grid>
            <Grid xs={12}>
              <Button href="mailto:k200396@nu.edu.pk">
                <Typography variant="button">Email Me!</Typography>
              </Button>
            </Grid>
            <Grid xs={12}>
              <IconButton href="https://github.com/fiza-arbani">
                <GitHub className={classes.icon} />
              </IconButton>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
      </List>
    </Dialog>
  );
}
