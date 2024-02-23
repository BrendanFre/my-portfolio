import "./navBar.css";
const isHidden = document.querySelectorAll(".hidden");

export default (parent) => {
  const topBar = document.createElement("div");
  const nameSection = document.createElement("div");

  topBar.classList.add("topBar");
  nameSection.classList.add("nameSection");

  nameSection.innerText = "Brendan Freeman's Portfolio";
  topBar.appendChild(nameSection);
  createLinksBar(topBar);

  parent.appendChild(topBar);
};

function createLinksBar(parent) {
  const linkSection = document.createElement("ul");
  linkSection.classList.add("linkSection");
  getLinks(linkSection);
  parent.appendChild(linkSection);
}

function getLinks(parent) {
  const theLinks = [
    ["Home", "https://www.brendanfreemandev.com"],
    ["About", "https://www.brendanfreemandev.com/about"],
    ["Contact", "https://www.brendanfreemandev.com/contact"],
  ];
  let itemCounter = 0;
  const linkObjects = theLinks.map((link) => {
    itemCounter++;
    return `<li><a href="${link[1]}" class="linkItem${itemCounter}">${link[0]}</a></li>`;
  });
  parent.innerHTML = linkObjects.join("");
  console.log(linkObjects);
}
