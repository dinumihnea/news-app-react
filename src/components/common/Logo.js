import React from 'react'
import logo from '../../assets/logo.svg';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '& img': {
      width: 22,
      marginRight: theme.spacing(1)
    }
  },
  text: {
    ...theme.typography.h6,
    color: theme.palette.primary.main
  }
}));


export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link component={RouterLink} to="/">
        <img src={logo} alt="logo" />
        <span className={classes.text}>News app</span>
      </Link>
    </div>
  );
}


