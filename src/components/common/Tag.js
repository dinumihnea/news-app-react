import { NavLink } from 'react-router-dom';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

export default function Tag(props) {
  const classes = useStyles();
  return (
    <Box
      mr={1}
      display={props.inline ? 'inline-block' : 'block'}>
      <NavLink
        to={props.to != null ? props.to : '/'}
        className={classes.link}>
        <Typography variant={props.variant ? props.variant :'body1'} color={'inherit'}>
          #{props.children}
        </Typography>
      </NavLink>
    </Box>
  )
}
