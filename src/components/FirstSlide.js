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
      Abdullah
    </section>
  );
};

export default FirstSlide;
