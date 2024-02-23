import "./createNavItem.css";

export default (parent, text, link) => {
  const navItem = document.createElement("a");
  navItem.classList.add("navItem");
  navItem.href = link;
  navItem.innerText = text;

  parent.appendChild(navItem);
};
