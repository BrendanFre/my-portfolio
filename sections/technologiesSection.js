import createSection from "../createSection/createSection";
import icons from "ion-icon-library";

export default (parent) => {
  const newIcon = document.createElement("i");
  newIcon.classList.add("ionJs");
  newIcon.classList.add("ionMd");
  console.log(typeof newIcon);
  const javaIcon = '<i class = "ionJs ionMd"></i>';
  const htmlIcon = '<i class = "ionHtml ionMd"></i>';
  const cssIcon = '<i class = "ionCss ionMd"></i>';
  const titleString = "The latest technologies...";
  const paragraphString = `...combined with accessible websites.<br>
  ${javaIcon} ${htmlIcon} ${cssIcon}`;
  createSection(parent, titleString, paragraphString);
  icons();
};
