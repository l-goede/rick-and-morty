import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { createCharacterElement } from './components/character';
import { getCharacters } from './utils/api';

const characterSection = createElement('section', {
  className: 'results',
});

const mainElement = createElement('main', {
  children: [
    createElement('header', {
      className: 'hero',

      children: [
        createElement('h1', {
          className: 'hero__title',
          innerText: 'Rick and Morty',
        }),
        createElement('input', {
          className: 'input',
          placeholder: 'Search character',
          autofocus: true,
          oninput: (event) => {
            removeAllChildren(characterSection);
            const search = event.target.value;
            getCharacters(search).then((characters) => {
              const characterElements = characters.map(createCharacterElement);
              characterSection.append(...characterElements);
            });
          },
        }),
      ],
    }),
    characterSection,
    createElement('footer', {
      className: 'footer',
      children: [
        createElement('small', {
          className: 'footer__trademark',
          children: [
            createElement('span', {
              innerText: 'Created by the most splendid Web Dev students ',
            }),
          ],
        }),
      ],
    }),
  ],
});

document.querySelector('#app').append(mainElement);
