import './createSection.css';

export default(parent, title, paragraph) => {
  const mainContainer = document.createElement('main');
  const mainText = document.createElement('h1');
  const heroParagraph = document.createElement('p');

  mainContainer.classList.add('mainContainer');
  mainText.innerHTML = title;
  heroParagraph.innerHTML = paragraph;
  mainContainer.appendChild(mainText);
  mainContainer.appendChild(heroParagraph);
  parent.appendChild(mainContainer);
}