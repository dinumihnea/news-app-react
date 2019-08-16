import React from 'react'
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import LangExpansionPanel from './LangExpansionPanel';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles(theme => ({
  popoverRoot: {
    padding: theme.spacing(1, 0)
  },
  button: {
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(0.5),
    color: theme.palette.text.secondary
  }
}));

export default function AppPopover(props) {

  const classes = useStyles();
  const { themeName, lang, text } = props.ui;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'app-popover' : undefined;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLanguageChange(lang) {
    props.changeAppLanguage(lang)
  }

  function handleThemeChange(theme) {
    const activeTheme = theme === 'dark' ? 'light' : 'dark';
    props.changeTheme(activeTheme)
  }

  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        aria-label="Show options"
        onClick={handleClick}
        edge="start"
        className={classes.button}
      >
        <AccountCircle fontSize={'large'} color={'inherit'} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div className={classes.popoverRoot}>
          <LangExpansionPanel selected={lang} handleLanguageChange={handleLanguageChange} />
          <Divider />
          <ListItem
            button
            onClick={() => handleThemeChange(themeName)}>
            <ListItemIcon>
              <Switch
                checked={themeName === 'dark'}
                color="primary"
                inputProps={{ 'aria-label': text.topBar.themeLabel }}
              />
            </ListItemIcon>
            <ListItemText primary={text.topBar.themeLabel} />
          </ListItem>
        </div>
      </Popover>
    </React.Fragment>
  );
}
