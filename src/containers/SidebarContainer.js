import React from 'react'
import PersistentDrawer from '../components/PersistentDrawer';
import { connect } from 'react-redux';
import { toggleDrawerOpen } from '../store/ui/actions';
import { fetchTagsRequest } from '../store/tags/actions';

class SidebarContainer extends React.Component {

  render() {
    return (<PersistentDrawer {...this.props} />)
  }
}

const mapStateToProps = state => {
  return {
    text: state.ui.text.sidebar,
    open: state.ui.drawerOpen,
    tags: state.tags
  }
};

const mapDispatchToProps = {
  toggleDrawerOpen,
  fetchTagsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
