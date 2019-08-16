import React from 'react'
import { connect } from 'react-redux';
import NewsDetails from '../components/NewsDetails';
import { detailsFetchRequest } from '../store/details/actions';

class DetailsContainer extends React.Component {

  render() {
    return (<NewsDetails {...this.props} />);
  }
}

const mapStateToProps = (state) => {
  return {
    details: state.details
  }
};

const mapDispatchToProps = {
  detailsFetchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
