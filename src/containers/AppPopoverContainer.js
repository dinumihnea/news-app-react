import React from 'react';
import { changeAppLanguage, changeTheme } from '../store/ui/actions';
import { connect } from 'react-redux';
import AppPopover from '../components/AppPopover';

class AppPopoverContainer extends React.Component {

  render() {
    return (
      <AppPopover {...this.props} />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    ui: state.ui
  }
};

const mapDispatchToProps = {
  changeAppLanguage,
  changeTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(AppPopoverContainer)
