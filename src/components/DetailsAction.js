import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme=> ({
  item: {
    margin: theme.spacing(0, 0.5),
    '&:last-child': {
      marginRight: theme.spacing(1.5),
    }
  }
}));

export default function DetailsAction() {
  const classes = useStyles();
  return (
    <div>
      <IconButton
        className={classes.item}
        color="inherit"
        aria-label="Bookmark"
        edge="start">
        <BookmarkIcon />
      </IconButton>
      <IconButton
        className={classes.item}
        color="inherit"
        aria-label="Share"
        edge="start">
        <ShareIcon />
      </IconButton>
      <IconButton
        className={classes.item}
        color="inherit"
        aria-label="Options"
        edge="start">
        <MoreVertIcon />
      </IconButton>
    </div>
  )
}
