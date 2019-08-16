import React from 'react'
import { connect } from 'react-redux';
import { fetchBookmarksRequest } from '../store/feed/actions';
import BookmarkItems from '../components/BookmarkItems';

class BookmarksContainer extends React.Component {

  render() {
    return (<BookmarkItems {...this.props} />);
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
};

const mapDispatchToProps = {
  fetchBookmarksRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksContainer);
