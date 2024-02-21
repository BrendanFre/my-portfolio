import createSection from "../createSection/createSection";
import AkarIconsHtmlFill from '~icons/akar-icons/html-fill';

export default(parent) =>{
  const titleString = 'The latest technologies...'
  const paragraphString = `...combined with accessible websites.\n
    <img src=${AkarIconsHtmlFill}`
  createSection(parent, titleString, paragraphString);
}