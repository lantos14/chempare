const getSvgTag = (xml) => {
  return xml.substring(xml.indexOf('<svg'));
}

export default getSvgTag;