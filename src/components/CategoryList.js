import React from 'react'
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {},
  link: {
    position: 'relative',
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0, 0.5),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:before': {
      content: '""',
      width: 0,
      height: 2,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 2,
      display: 'block',
      margin: '0 auto',
      backgroundColor: theme.palette.primary.main,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.short
      })
    },
    '&:hover:before': {
      width: '100%'
    }
  },
  activeLink: {
    color: theme.palette.primary.main,
    cursor: 'default',
    '&:before': {
      content: 'none'
    }
  },
  itemText: {
    fontWeight: 700,
    textTransform: 'none'
  }
}));

export default function CategoryList(props) {
  const classes = useStyles();
  const { list } = props;
  const fixedItem = {
    key: null,
    text: props.lang === 'ro' ? 'Toate' : props.lang === 'ru' ? 'Все' : 'All'
  };

  function createItem(item, ignoreActiveStyle = false) {
    return <div
      key={item.key}
      className={classes.item}
      onClick={() => props.onSelect(item.key)}
    >
      <NavLink
        to={item.key != null ? `/feed/${item.key}` : '/'}
        className={classes.link}
        activeClassName={ignoreActiveStyle ? null : classes.activeLink}>
        <Typography
          className={classes.itemText}
          variant={'button'}
          color={'inherit'}
        >{item.title}</Typography>
      </NavLink>

    </div>;
  }

  return (
    <div className={classes.root}>
      {createItem(fixedItem, true)}
      {list.map(item => (
        createItem(item)
      ))}
    </div>
  )
}
