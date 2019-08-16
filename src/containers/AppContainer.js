import React from 'react'
import App from '../components/App';
import { connect } from 'react-redux';
import { changeAppLanguage, toggleDrawerOpen } from '../store/ui/actions';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

class AppContainer extends React.Component {

  render() {
    return (
      <MuiThemeProvider theme={this.props.theme}>
        <CssBaseline />
        <App {...this.props} />
      </MuiThemeProvider>)
  }
}

const mapStateToProps = state => {
  return {
    drawerOpen: state.ui.drawerOpen,
    theme: state.ui.theme
  };
};

const mapDispatchToProps = {
  toggleDrawerOpen,
  changeAppLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
