import React from 'react';
import clsx from 'clsx';
import { createStyles, withStyles } from '@material-ui/core';
import TopBarContainer from '../containers/TopBarContainer';
import SidebarContainer from '../containers/SidebarContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import BookmarksContainer from '../containers/BookmarksContainer';
import DetailsContainer from '../containers/DetailsContainer';
import TagsContainer from '../containers/TagsContainer';
import NewsCreateContainer from '../containers/NewsCreateContainer';

const drawerWidth = 260;

const styles = theme => createStyles({
  root: {
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class App extends React.Component {

  render() {
    const { classes, drawerOpen } = this.props;
    return (
      <div className={classes.root}>
        <BrowserRouter>
          <TopBarContainer />
          <SidebarContainer />
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: drawerOpen
            })}
          >
            <div className={classes.contentHeader} />
            <Switch>
              <Route path="/" exact component={NewsFeedContainer} />
              <Route path="/feed" exact component={NewsFeedContainer} />
              <Route path="/feed/:category" component={NewsFeedContainer} />
              <Route path="/details/:id/:slug" component={DetailsContainer} />
              <Route path="/details/:id" component={DetailsContainer} />
              <Route path="/bookmarks" component={BookmarksContainer} />
              <Route path="/tags/:tag" component={TagsContainer} />
              <Route path="/create" component={NewsCreateContainer} />
              {/*add 404 page <Route component={NoMatch} />*/}
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}


export default withStyles(styles)(App);
