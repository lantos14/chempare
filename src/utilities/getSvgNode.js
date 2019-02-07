const getSvgNode = (svg) => {
  const parser = new DOMParser();
  return parser.parseFromString(svg, "text/html").body.firstChild.cloneNode(false);
}

export default getSvgNode;
