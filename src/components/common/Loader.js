import React from 'react'
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  progress: {
    color: theme.palette.text.secondary
  }
}));


export default function Loader() {
  const classes = useStyles();

  return (
    <Box
      m={3}
      width={'100%'}
      height={'100%'}
      display={'flex'}
      justifyContent="center"
      alignItems="center">
      <CircularProgress className={classes.progress} />
    </Box>
  );
}

