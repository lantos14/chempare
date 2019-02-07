import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import getSvgNode from '../utilities/getSvgNode';

export default class Result extends React.Component {

  render() {
    const { compoundName, compoundImgSrc } = this.props;
    let svgNode = null;
    if (compoundImgSrc !== null) {
      svgNode = getSvgNode(compoundImgSrc);
      console.log('svgNode: ', typeof svgNode);

    }
    return (
      <div className='result'>
        <p>{compoundName}</p>

        <div>
          {svgNode}
        </div>
      </div>
    )
  }
}

Result.propTypes = {
  compoundName: PropTypes.string,
  compoundImgSrc: PropTypes.string,
};

