import styles from './characterDetails.module.css';
import { createElement } from '../utils/elements';

export function createCharacterDetails({
  image,
  name,
  status,
  species,
  gender,
  origin,
  location,
}) {
  return createElement('article', {
    className: styles['main'],
    children: [
      createElement('img', { src: image }),
      createElement('h2', { innerText: name }),
      createElement('p', { innerText: status }),
      createElement('p', { innerText: species }),
      createElement('p', { innerText: gender }),
      createElement('p', { innerText: origin.name }),
      createElement('p', { innerText: location.name }),
    ],
  });
}
