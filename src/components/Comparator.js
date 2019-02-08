import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

export default class Comparator extends React.Component {

  render() {
    const { comparison } = this.props;
    return (
      <div className='comparator'>
        <p className='equal-sign'> {comparison ? '=' : '≠'}</p>
      </div>
    )
  }
}

Comparator.propTypes = {
  comparison: PropTypes.bool,
};
