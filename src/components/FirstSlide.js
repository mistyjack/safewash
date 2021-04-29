import { createStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => createStyles({}));

const FirstSlide = () => {
  const classes = useStyles();

  return (
    <section>
      <CssBaseline />
      <Typography variant="h1" gutterBottom>
        A Liquid Laundry Detergent Specifically Formulated for
      </Typography>
      <Typography variant="h1" gutterBottom>
        Babies and Children Clothings
      </Typography>
      <Button className="btn" variant="contained" color="secondary" disableElevation>
        Find Distributors Around You?
      </Button>
    </section>
  );
};

export default FirstSlide;
