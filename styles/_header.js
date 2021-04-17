import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: "96px",
      [theme.breakpoints.up("md")]: {
        paddingLeft: "10rem !important"
      }
    }
  })
);

export default useStyles;
