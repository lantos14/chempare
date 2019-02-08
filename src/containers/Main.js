import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompound } from '../actions/actions';
import '../styles/styles.scss';
import Result from '../components/Result';
export class Main extends React.Component {
  state = {
    SecondInputFieldadded: false,
  }

  componentDidMount() {
    document.querySelectorAll('input').forEach(inputField => {
      inputField.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.getCompoundAction();
        }
      })
    });
  }
  
  getCompoundAction = () => {
    const inputValues = [];
    document.querySelectorAll('input').forEach(inputField => {
      inputValues.push(inputField.value);
    });
    this.props.action(inputValues);
  }

  addNewInputField = () => {
    this.setState({
      SecondInputFieldadded: !this.state.SecondInputFieldadded,
    })
  };

  onEnterKeyPress = () => {
    console.log('enter');
  }

  render() {
    return (
      <div className='main'>
        <h1>ChemPare</h1>

        <div className='input-area'>

          <input
            type='text'
            className='input-one'
            >
          </input>
          {
            this.state.SecondInputFieldadded &&
            <input
              type='text'
              className='input-two'
            >
            </input>
          }

          <div className='add-input-content'>
            <button
              className='add-input-btn'
              onClick={() => this.addNewInputField()}>
              {this.state.SecondInputFieldadded ? '-' : '+'}
            </button>
          </div>

          <button
            className='get-result-btn'
            onClick={() => this.getCompoundAction()}>
            Get Chemical Compound(s)
          </button>

        </div>

        <Result
          compoundList={this.props.compoundList}
          comparison={this.props.comparison}
          error={this.props.error}
        />

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
