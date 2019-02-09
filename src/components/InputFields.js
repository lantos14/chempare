import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

export default class InputFields extends React.Component {

  render() {
    const { SecondInputFieldadded,  addNewInputField, getCompoundAction} = this.props;
    
    return (
      <div className='input-area'>

          <input
            type='text'
            className='input-one'
            >
          </input>
          {
            SecondInputFieldadded &&
            <input
              type='text'
              className='input-two'
            >
            </input>
          }

          <div className='add-input-content'>
            <button
              className='add-input-btn'
              onClick={() => addNewInputField()}>
              {SecondInputFieldadded ? '-' : '+'}
            </button>
          </div>

          <button
            className='get-result-btn'
            onClick={() => getCompoundAction()}>
            Get Chemical Compound(s)
          </button>

        </div>
    )
  }
}

InputFields.propTypes = {
  SecondInputFieldadded: PropTypes.bool,
  addNewInputField: PropTypes.func,
  getCompoundAction: PropTypes.func,
};
