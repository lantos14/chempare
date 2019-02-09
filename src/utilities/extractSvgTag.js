const extractSvgTag = (xml) => {
  return xml.substring(xml.indexOf('<svg'));
}

export default extractSvgTag;