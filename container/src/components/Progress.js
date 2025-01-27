import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => {
  createStyles({
    bar: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  });
});

export const Progress = () => {
  const classes = useStyles();
  return (
    <div className={classes.progress}>
      <LinearProgress />
    </div>
  );
};
