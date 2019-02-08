const getSvgNode = (svg) => {
  let div = document.createElement('div');
  div.classList.add('svg-container');
  div.innerHTML = svg.trim();
  return div;
}

export default getSvgNode;
