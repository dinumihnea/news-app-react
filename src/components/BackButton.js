import React from 'react';
import clsx from 'clsx';
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  sliced: {
    marginLeft: 280
  }
}));

export default function BackButton(props) {
  const { slice } = props;
  const classes = useStyles();
  return (
    <Link className={clsx({ [classes.sliced]: slice })} component={RouterLink} to="/">
      <IconButton>
        <ArrowBackIcon />
      </IconButton>
    </Link>
  )
}
