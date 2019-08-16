import React from 'react'
import { makeStyles, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: 260,
    margin: theme.spacing(0, 1, 0.5)
  },
  adornmentIcon: {
    color: theme.palette.text.secondary
  }
}));

export default function SearchField(props) {
  const classes = useStyles();
  const {placeholder} = props;
  return (
    <div className={classes.root}>
      <TextField
        margin={'dense'}
        variant={'outlined'}
        label={<Typography variant={'inherit'} color={'textSecondary'}>{placeholder}</Typography>}
        onChange={event => props.onSearch(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={classes.adornmentIcon} />
            </InputAdornment>
          )
        }} />
    </div>
  )
}
