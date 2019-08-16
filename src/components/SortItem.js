import React from 'react'
import clsx from 'clsx';
import { Button, makeStyles } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 2),
    textTransform: 'none'
  },
  icon: {
    padding: theme.spacing(0.125),
    marginRight: theme.spacing(0.5),
    color: theme.palette.primary.main
  },
  asc: {
    transform: 'rotate(180deg)'
  },
  desc: {
    transform: 'rotate(0deg)'
  },
  hidden: {
    display: 'none'
  }
}));


export default function Sort(props) {
  const classes = useStyles();
  const { text, order } = props;
  const iconClass = order && order === 'asc' ? classes.asc : classes.desc;
  return (
    <Button
      className={classes.root}
      color={order ? 'primary' : 'default'}
    >
      <FilterListIcon
        className={clsx(classes.icon, !order && classes.hidden, iconClass)}
        fontSize={'small'} />
      {text}
    </Button>
  )
}
