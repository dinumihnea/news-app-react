import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import { appLanguages } from '../utils/util';

// TODO export to app constants
// const languages = [
//   {
//     key: 'en',
//     name: 'English'
//   }, {
//     key: 'ro',
//     name: 'Română'
//   }, {
//     key: 'ru',
//     name: 'Русский'
//   }];


const useStyles = makeStyles(theme => ({
  panel: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  panelSummary: {
    minWidth: 160,
    maxWidth: 160
  },
  panelDetails: {
    padding: theme.spacing(1, 0)
  },
  list: {
    width: '100%'
  }
}));

export default function LangExpansionPanel(props) {
  const classes = useStyles();
  const appLanguagesKeys = [...appLanguages.keys()];
  const { selected, handleLanguageChange } = props;

  function handleListItemClick(lang) {
    handleLanguageChange(lang)
  }

  return (
    <ExpansionPanel className={classes.panel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={classes.panelSummary}>
          <Typography variant={'body1'}>Language: <b>{appLanguages.get(selected)}</b></Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <List
          className={classes.list} component="div" aria-label="Language">
          {appLanguagesKeys.map((key) => (
            <ListItem
              key={key}
              button
              selected={key === selected}
              onClick={() => handleListItemClick(key)}
            >
              <ListItemText primary={appLanguages.get(key)} />
            </ListItem>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
