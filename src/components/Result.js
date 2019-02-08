import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import getSvgNode from '../utilities/getSvgNode';

export default class Result extends React.Component {

  appendSvg = (imgSrc) => {
    if (imgSrc !== null) {
      let resultOne = document.querySelector('.result-one');

      if (resultOne.childElementCount < 2) {
        const svgNode = getSvgNode(imgSrc);
        console.log('resultOne: ', resultOne);
        resultOne.appendChild(svgNode);
      }
    }
  }

  render() {
    const { compoundName, compoundImgSrc } = this.props;
    this.appendSvg(compoundImgSrc);

    return (
      <div className='result-one'>
        <p>{compoundName}</p>
      </div>
    )
  }
}

Result.propTypes = {
  compoundName: PropTypes.string,
  compoundImgSrc: PropTypes.string,
};

