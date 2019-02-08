import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import CompoundCard from './CompoundCard';

export default class Result extends React.Component {

  render() {
    const { compoundName, compoundImgSrc } = this.props;

    return (
      <div className='result'>
      {
        (compoundName && compoundImgSrc) &&
        <CompoundCard name={compoundName} img={compoundImgSrc} />
      }
      </div>
    )
  }
}

Result.propTypes = {
  compoundName: PropTypes.string,
  compoundImgSrc: PropTypes.string,
};

