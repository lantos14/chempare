import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import CompoundCard from './CompoundCard';
import Comparator from './Comparator';

export default class Result extends React.Component {

  render() {
    const { compoundList, comparison, error } = this.props;

    return (
      <div className='result'>
        {
          !error && compoundList.map((compound, i) => {

            return <CompoundCard
              key={i}
              name={compound.compoundName}
              img={compound.rawImg}
            />
          })

        }
        {
          (compoundList.length === 2 && !error) && <Comparator comparison={comparison}/>
        }

        {
          error && <p>Something went wrong. Maybe the compound(s) you have typed not exist?</p>
        }
      </div>
    )
  }
}

Result.propTypes = {
  compoundList: PropTypes.array,
  comparison: PropTypes.bool,
  error: PropTypes.bool,
};

