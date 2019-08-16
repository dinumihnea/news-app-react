import React, { Fragment } from 'react';
import clsx from 'clsx';
import { createStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import CategoryList from './CategoryList';
import SearchField from './common/SearchField';
import { Route, Switch as RouterSwitch } from 'react-router-dom';
import AppPopoverContainer from '../containers/AppPopoverContainer';
import BackButton from './BackButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DetailsAction from './DetailsAction';
import HideOnScroll from './common/HideOnScroll';
import Tag from './common/Tag';

const drawerWidth = 260;

const styles = theme => createStyles({
  appBar: {
    flexDirection: 'row',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  hide: {
    display: 'none'
  },
  fillWidth: {
    flexGrow: 1
  },
  alignRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto'
  }
});

class TopBar extends React.Component {

  handleDrawerOpen = () => {
    this.props.toggleDrawerOpen();
  };

  componentWillMount() {
    this.props.fetchCategoriesRequest(this.props.ui.lang)
  }

  generateTitle = (title) => {
    return <Box m={2} mr={1}><Typography variant={'h5'}>{title}</Typography></Box>
  };

  render() {
    const { drawerOpen, text, lang } = this.props.ui;
    const { classes, categories, activeTag, fetchDataRequest, searchRequest } = this.props;
    const categoryList = <CategoryList list={categories} onSelect={fetchDataRequest} lang={lang} />;
    const searchField = <SearchField onSearch={searchRequest} placeholder={text.topBar.searchPlaceholder} />;
    return (
      <HideOnScroll>
        <AppBar
          position="fixed"
          color={'default'}
          elevation={0}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: drawerOpen
          })}
        >
          <Toolbar className={classes.fillWidth}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, drawerOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            <RouterSwitch>
              <Route path={'/details/:id'} component={BackButton} />} />
              <Route path={'/feed'} render={() => categoryList} />
              <Route path={'/feed/:category'} render={() => categoryList} />
              <Route path={'/bookmarks'}
                     render={() => <Fragment><BackButton />{this.generateTitle(text.topBar.bookmarks)}</Fragment>} />
              <Route path={'/tags/:tag'}
                     render={() => <Fragment><BackButton />
                       {this.generateTitle(text.topBar.searchByTag)}
                       {activeTag && <Tag to={`/tags/${activeTag}`} variant={'h5'}>{activeTag}</Tag>}
                     </Fragment>} />
              <Route path={'/'} exact render={() => categoryList} />
            </RouterSwitch>

            <div className={classes.alignRight}>
              <RouterSwitch>
                <Route path={'/details/:id'} component={DetailsAction} />
              </RouterSwitch>
              <RouterSwitch>
                <Route path={'/'} exact render={() => searchField} />
                <Route path={'/feed'} render={() => searchField} />
                <Route path={'/feed/:category'} render={() => searchField} />
                <Route path={'/bookmarks'} render={() => null} />
                <Route path={'/tags/tag'} render={() => null} />
              </RouterSwitch>
              <AppPopoverContainer />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    );
  }
}

export default withStyles(styles)(TopBar)
