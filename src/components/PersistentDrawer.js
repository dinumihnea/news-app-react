import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlashIcon from '@material-ui/icons/FlashOn';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Chip from '@material-ui/core/Chip';
import Logo from './common/Logo';
import { NavLink } from 'react-router-dom';
import Tag from './common/Tag';
import withStyles from '@material-ui/core/styles/withStyles';
import { createStyles } from '@material-ui/core';


const drawerWidth = 260;

const styles = theme => createStyles({
  root: {
    display: 'flex'
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100px',
    alignItems: 'center',
    padding: theme.spacing(3, 1)
  },
  closeDrawerButton: {
    position: 'absolute',
    top: theme.spacing(0.5),
    right: theme.spacing(0.5)
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  tagListItem: {
    color: theme.palette.primary.main,
    padding: theme.spacing(0.5, 1, 0.5, 4)
  }
});

let iconsMap = new Map();
iconsMap.set('feed', <FlashIcon />);
// iconsMap.set('trending', <TrendingUpIcon />);
iconsMap.set('bookmarks', <TurnedInIcon />);

class PersistentDrawer extends React.Component {

  componentWillMount() {
    this.props.fetchTagsRequest()
  }

  handleDrawerClose = () => {
    this.props.toggleDrawerOpen()
  };

  render() {
    const { classes, text, open, tags } = this.props;
    console.log(tags);
    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          elevation={8}
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <div className={classes.logoContainer}>
              <Logo />
              <Chip
                size={'small'}
                color={'default'}
                label={'19 234 729'} />
            </div>
            <IconButton
              size={'small'}
              className={classes.closeDrawerButton}
              onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {text.mainItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id != null ? `/${item.id}` : '/'}
                className={classes.link}>
                <ListItem button>
                  <ListItemIcon>{iconsMap.get(item.id)}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  {item.id === 'bookmarks' &&
                  <ListItemSecondaryAction>
                    <Chip
                      size={'small'}
                      color={'default'}
                      label={234} />
                  </ListItemSecondaryAction>}
                </ListItem>
              </NavLink>
            ))}
          </List>
          <Divider />
          <List dense>
            <ListSubheader component="div" id="nested-list-subheader">
              {text.popularTags}
            </ListSubheader>
            {tags.popular.map((tag) => (
              <div
                key={tag._id}
                className={classes.tagListItem}>
                <Tag
                  to={tag.key != null ? `/tags/${tag.key}` : '/'}>
                  {tag.key}
                </Tag>
              </div>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(PersistentDrawer)
