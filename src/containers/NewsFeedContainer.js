import React from 'react'
import NewsFeed from '../components/NewsFeed';
import { connect } from 'react-redux';
import { fetchDataRequest } from '../store/feed/actions';

class NewsFeedContainer extends React.Component {

  render() {
    return (<NewsFeed {...this.props} />);
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
};

const mapDispatchToProps = {
  fetchDataRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer);
