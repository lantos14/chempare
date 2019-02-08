import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import getSvgNode from '../utilities/getSvgNode';

export default class Result extends React.Component {

  appendSvg = (imgSrc) => {
    if (imgSrc !== null) {
      let result = document.querySelector('.result');

      if (result.childElementCount < 2) {
        const svgNode = getSvgNode(imgSrc);
        console.log('result: ', result);
        result.appendChild(svgNode);
      }
    }
  }

  render() {
    const { compoundName, compoundImgSrc } = this.props;
    this.appendSvg(compoundImgSrc);

    return (
      <div className='result'>
        <p>{compoundName}</p>
      </div>
    )
  }
}

Result.propTypes = {
  compoundName: PropTypes.string,
  compoundImgSrc: PropTypes.string,
};

