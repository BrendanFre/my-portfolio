import "./footerBar.css";

export default (parent) => {
  const footerBar = document.createElement("footer");
  const footerText = document.createElement("p");
  footerBar.classList.add("footerBar");
  footerText.classList.add("footerText");
  footerText.innerText = "Brendan Freeman © 2024";
  parent.appendChild(footerBar);
  footerBar.appendChild(footerText);
};
