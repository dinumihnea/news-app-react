import React from 'react'
import { createStyles, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => createStyles({
  root: {
    width: 260,
    margin: theme.spacing(0, 1, 0.5)
  },
  adornmentIcon: {
    color: theme.palette.text.secondary
  }
});

const WAIT_INTERVAL = 700;
const ENTER_KEY = 13;

class LazySearchField extends React.Component {

  state = {
    value: ''
  };

  timer = null;

  handleChange = e => {
    clearTimeout(this.timer);

    this.setState({ value: e.target.value });

    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL)
  };

  handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.triggerChange()
    }
  };

  triggerChange = () => {
    const { value } = this.state;
    this.props.onSearch(value)
  };

  render() {
    const {classes,placeholder} = this.props;
    return (
      <div className={classes.root}>
        <TextField
          margin={'dense'}
          variant={'outlined'}
          label={<Typography variant={'inherit'} color={'textSecondary'}>{placeholder}</Typography>}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
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
}

export default withStyles(styles)(LazySearchField);
