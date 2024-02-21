import createSection from "../createSection/createSection";
import icons from 'ion-icon-library';

export default(parent) =>{
  
  const titleString = 'The latest technologies...'
  const paragraphString = `...combined with accessible websites.\n
    <i class ="ionJs ionMd"></i>`
  createSection(parent, titleString, paragraphString);
  icons()
}