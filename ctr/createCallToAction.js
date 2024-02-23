import theVideo from "./background.mp4";
import "./createCallToAction.css";

export default (parent) => {
  const videoBg = document.createElement("video");
  const sourceBg = document.createElement("source");

  videoBg.classList.add("videoBg");
  videoBg.appendChild(sourceBg);
  videoBg.autoplay = true;
  videoBg.muted = true;
  videoBg.loop = true;
  sourceBg.type = "video/mp4";
  sourceBg.src = theVideo;

  parent.appendChild(videoBg);
};
