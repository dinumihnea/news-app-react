import React from 'react'
import { connect } from 'react-redux';
import { fetchByTagRequest } from '../store/feed/actions';
import TagItems from '../components/TagItems';

class TagsContainer extends React.Component {

  render() {
    return (<TagItems {...this.props} />);
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
};

const mapDispatchToProps = {
  fetchByTagRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsContainer);
