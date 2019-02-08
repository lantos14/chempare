import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompound } from '../actions/actions';
import '../styles/styles.scss';
import Result from '../components/Result';
export class Main extends React.Component {

  getCompoundAction = () => {
    const input = document.querySelector('input').value.split(',');
    input.forEach(value => {
      return value.trim();
    });
    console.log('input: ', input);
    if (input.length > 2) {
      alert('We can compare only two compounds, so please... Only put 2 compound name into the field.');
    } else {
      this.props.action(input);
    }
  }

  render() {
    return (
      <div className='main'>
        <h1>ChemPare</h1>
        <div className='input-area'>
          <input type='text'></input>
          <button onClick={() => this.getCompoundAction()}>Get Chemical Compound(s)</button>
        </div>
        <Result compoundList={this.props.compoundList} comparison={this.props.comparison} error={this.props.error}/>
      </div>
    )
  }
}

Main.propTypes = {
  action: PropTypes.func.isRequired,
  compoundList: PropTypes.array,
  comparison: PropTypes.bool,
  error: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    compoundList: state.compoundData.compounds,
    comparison: state.compoundData.comparison,
    error: state.compoundData.error,
  };
}

const mapDispatchToProps = {
  action: getCompound,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
