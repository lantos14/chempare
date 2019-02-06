import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompound } from '../actions/actions';
import '../styles/styles.scss';

export class Main extends React.Component {

  reduceTest = () => {
    this.props.action('success');
  }

  render() {
    return (
      <div>
        <h1>ChemPare</h1>
        <input type='text'></input>
        <button onClick={() => this.reduceTest()}>Get Chemical Compound</button>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

Main.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    text: state.compoundData.text,
  };
}

const mapDispatchToProps = {
    action: getCompound,
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
