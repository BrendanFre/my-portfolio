import "./style.css";
import navBar from "./navBar/navBar";
import heroSection from "./sections/heroSection";
import technologiesSection from "./sections/technologiesSection";
import footerBar from "./footerBar/footerBar";
import createCallToAction from "./ctr/createCallToAction";

const app = document.querySelector("#app");

navBar(app);
createCallToAction(app);
heroSection(app);
technologiesSection(app);
footerBar(app);
