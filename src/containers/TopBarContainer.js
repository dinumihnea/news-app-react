import React from 'react';
import TopBar from '../components/TopBar';
import { toggleDrawerOpen } from '../store/ui/actions';
import { connect } from 'react-redux';
import { fetchCategoriesRequest, fetchDataRequest, searchRequest } from '../store/feed/actions';


class TopBarContainer extends React.Component {


  render() {
    return (<TopBar {...this.props} />)
  }
}

const mapStateToProps = state => {
  return {
    ui: state.ui,
    categories: state.feed.categories,
    activeTag: state.feed.activeTag
  }
};

const mapDispatchToProps = {
  toggleDrawerOpen,
  fetchDataRequest,
  searchRequest,
  fetchCategoriesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBarContainer)
