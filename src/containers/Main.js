import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompound } from '../actions/actions';
import '../styles/styles.scss';
import Result from '../components/Result';
export class Main extends React.Component {

  getCompoundAction = () => {
    const input = document.querySelector('input').value;
    document.querySelector('.result-one').innerHTML = '';
    this.props.action(input);
  }

  render() {
    return (
      <div className='main'>
        <h1>ChemPare</h1>
        <input type='text'></input>
        <button onClick={() => this.getCompoundAction()}>Get Chemical Compound</button>
        <Result compoundName={this.props.name} compoundImgSrc={this.props.img} />
      </div>
    )
  }
}

Main.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string,
  img: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    name: state.compoundData.name,
    img: state.compoundData.img,
  };
}

const mapDispatchToProps = {
  action: getCompound,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
