import React from 'react';
import NewsCreateForm from '../components/NewsCreateForm';
import { connect } from 'react-redux';
import { createNewsRequest } from '../store/creation/actions';

class NewsCreateContainer extends React.Component {

  render() {
    return (
      <NewsCreateForm {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.feed.categories,
    creation: state.creation
  };
};

const mapDispatchToProps = {
  createNewsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsCreateContainer);
