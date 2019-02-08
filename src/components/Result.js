import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import CompoundCard from './CompoundCard';

export default class Result extends React.Component {

  render() {
    const { compoundList } = this.props;

    return (
      <div className='result'>
        {
          compoundList.map((compound, i) => {

            return <CompoundCard
              key={i}
              name={compound.compoundName}
              img={compound.rawImg}
            />
          })
        }
      </div>
    )
  }
}

Result.propTypes = {
  compoundList: PropTypes.array,
  comparison: PropTypes.string,
};

