import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function MenuSelect(props) {
  const classes = useStyles();
  const { inputLabel, handleChange, values, selected } = props;
  return (
    <FormControl variant="outlined" className={classes.root}>
      <Select
        value={selected}
        onChange={(event) => {
          handleChange(event.target.value);
          console.log(event.target.value)
        }}
        input={<OutlinedInput margin={'dense'} name={inputLabel} id="outlined-age-simple" />}
      >
        {values.map(value => (
          <MenuItem
            key={value}
            value={value}
            button>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
