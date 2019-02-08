import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';

export default class CompoundCard extends React.Component {

  render() {
    const { name, img } = this.props;

    return (
      <div className={`card card-${name}`}>
        <p>{name}</p>
        <img src={img}/>
      </div>
    )
  }
}

CompoundCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

