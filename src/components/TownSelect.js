import { Fragment, useState } from "react";
import StatesAndTowns from "../../public/StatesAndTowns";

import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const BigSelect = withStyles(theme => ({
  input: {
    borderRadius: "12px",
    border: "0.5px solid #6EB245",
    padding: "20px 24px 19px 24px",
    background: "#F9FFF5",
    color: "#776E70",
    fontSize: "16px",
    fontWeight: "600"
  }
}))(InputBase);

const useStyles = makeStyles(theme =>
  createStyles({
    bigInputLabel: {
      fontWeight: "600",
      fontSize: "21px",
      lineHeight: "31.07px",
      color: "#776E70",
      marginTop: "8px"
    },
    btn: {
      textTransform: "none",
      color: "#fff",
      borderRadius: "12px",
      padding: "17px 85px"
    },
    selectItem: {
      marginBottom: theme.spacing(3),
      width: "100%"
    }
  })
);

export default function Distributors() {
  const classes = useStyles();
  const [state, setState] = useState("State");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [town, setTown] = useState("Town");

  const handleClick = e => {
    e.target.value ? setState(e.target.value) : null;
    let a = e.target.value ? e.target.value.split(" ") : null;
    a ? setCurrentIndex(parseInt(a[a.length - 1])) : null;
    setTown("Town");
  };
  return (
    <Fragment>
      <CssBaseline />
      <Grid container justify="space-between">
        <Grid xs={12} md={4} item>
          <FormControl className={classes.selectItem} variant="filled">
            <Select onClick={handleClick} labelId="select-state-label" id="select-state" label="select-state" value={state} input={<BigSelect />}>
              <MenuItem value="State">State</MenuItem>
              <Divider />
              {StatesAndTowns.map((item, i) => (
                <MenuItem key={item.state.name} value={`${item.state.name} ${i}`}>
                  {item.state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} md={4} item>
          <FormControl className={classes.selectItem} variant="filled">
            <Select onClick={e => setTown(e.target.value)} labelId="select-town-label" id="select-town" label="select-town" value={town} input={<BigSelect />}>
              <MenuItem value="Town">Town</MenuItem>
              <Divider />
              {StatesAndTowns[currentIndex].state.locals.map(item => (
                <MenuItem key={item.name + item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} md={3} item>
          <Button disableElevation className={classes.btn} variant="contained" color="secondary">
            Search
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}
