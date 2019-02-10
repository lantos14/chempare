import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompound } from '../actions/actions';
import '../styles/styles.scss';
import Result from '../components/Result';
import InputFields from '../components/InputFields';
import loadingGif from '../img/loading.gif';

export class Main extends React.Component {
  state = {
    SecondInputFieldadded: false,
  }

  componentDidMount() {
    document.querySelector('.input-area').addEventListener('keyup', (e) => {
      if (e.keyCode === 13 && e.target.localName === 'input') {
        this.getCompoundAction();
      }
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

  render() {
    const { loading, compoundList, comparison, error } = this.props;
    if (loading) {
      return (
        <div className='main'>
          <h1>ChemPare</h1>

          <InputFields
            SecondInputFieldadded={this.state.SecondInputFieldadded}
            addNewInputField={this.addNewInputField}
            getCompoundAction={this.getCompoundAction}
          />

          <div className='img-container'>
            <img src={loadingGif}></img>
          </div>
        </div>
      )
    } else {

      return (
        <div className='main'>
          <h1>ChemPare</h1>

          <InputFields
            SecondInputFieldadded={this.state.SecondInputFieldadded}
            addNewInputField={this.addNewInputField}
            getCompoundAction={this.getCompoundAction}
          />

          <Result
            compoundList={compoundList}
            comparison={comparison}
            error={error}
          />
          
        </div>
      )
    }
  }
}

Main.propTypes = {
  action: PropTypes.func.isRequired,
  compoundList: PropTypes.array,
  comparison: PropTypes.bool,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    compoundList: state.compoundData.compounds,
    comparison: state.compoundData.comparison,
    error: state.compoundData.error,
    loading: state.compoundData.loading,
  };
}

const mapDispatchToProps = {
  action: getCompound,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
